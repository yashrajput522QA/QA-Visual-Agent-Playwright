import { test, expect } from '@playwright/test';
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables (e.g. GEMINI_API_KEY)
dotenv.config();

/**
 * Helper to convert a local file to the format expected by the Gemini API.
 */
function fileToGenerativePart(filePath: string, mimeType: string) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(filePath)).toString("base64"),
      mimeType
    },
  };
}

test('Visual QA comparison', async ({ page }) => {
  // We use environment variables to pass arguments into a Playwright test.
  // If none are provided, we fall back to defaults.
  const sourceImagePath = process.env.SOURCE_IMAGE_PATH || path.join(__dirname, 'baseline.png');
  const targetUrl = process.env.TARGET_URL || 'https://bayone.com/';

  console.log(`Starting Visual QA Agent...`);
  console.log(`Source of Truth: ${sourceImagePath}`);
  console.log(`Target URL: ${targetUrl}`);

  if (!fs.existsSync(sourceImagePath)) {
    throw new Error(`Error: Source image not found at ${sourceImagePath}`);
  }

  // 1. Capture the "Current" State using the auto-provided Playwright "page" fixture!
  console.log(`\n[1/3] Navigating and capturing the current state...`);
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(targetUrl, { waitUntil: 'load' });

  const currentImagePath = path.join(__dirname, 'current_state.png');
  await page.screenshot({ path: currentImagePath, fullPage: true });
  console.log(`Saved current state screenshot to: ${currentImagePath}`);

  // 2. Initialize Gemini API
  console.log(`\n[2/3] Initializing Gemini Vision API...`);
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('Error: GEMINI_API_KEY is not set in the environment variables.');
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  // Using gemini-3.5-flash as configured
  const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

  // 3. Perform AI Semantic Diffing
  console.log(`\n[3/3] Analyzing images with Gemini...`);

  const sourceImagePart = fileToGenerativePart(sourceImagePath, "image/png");
  const currentImagePart = fileToGenerativePart(currentImagePath, "image/png");

  const prompt = `
    You are an expert Senior QA Engineer specializing in Visual QA and UI design.
    I am providing you with two images:
    1. The first image is the "Source of Truth" (Design/Baseline).
    2. The second image is the "Current State" (Staging/Production).

    Your task is to carefully compare the two images and identify any visual regressions, layout issues, missing elements, or color mismatches.
    Ignore minor timestamp differences or small dynamic content changes (like ad banners).
    Focus on semantic and structural differences that impact the User Experience.

    Please output a structured JSON response in the following format:
    {
      "match": boolean, // true if they semantically match perfectly, false if there are regressions
      "severity": "High" | "Medium" | "Low" | "None",
      "mismatches": [
        {
          "element": "Describe the element (e.g. 'Submit Button')",
          "issue": "Describe the issue (e.g. 'Missing on the current state' or 'Wrong background color')"
        }
      ],
      "overallAssessment": "A brief summary of your findings."
    }
  `;

  const result = await model.generateContent([
    prompt,
    sourceImagePart,
    currentImagePart
  ]);

  const response = await result.response;
  if (!response) {
    throw new Error("Error: No response from Gemini API.");
  }
  const text = response.text();

  console.log(`\n=== QA Agent Analysis Report ===\n`);

  // Extract JSON if it's wrapped in markdown code blocks
  let jsonOutput = text;
  if (text.includes("```json")) {
    const match = text.match(/```json([\s\S]*?)```/);
    if (match) {
      jsonOutput = match[1].trim();
    }
  }

  console.log(jsonOutput);
  console.log(`\n================================`);

  // Force test failure if images don't match, and inject the AI report into the failure message
  const analysis = JSON.parse(jsonOutput);
  
  if (analysis.match === false) {
    const formattedMismatches = analysis.mismatches.map((m: any) => `- [${m.element}]: ${m.issue}`).join('\n');
    throw new Error(
      `Visual Regressions Detected!\n` +
      `Severity: ${analysis.severity}\n\n` +
      `Mismatches:\n${formattedMismatches}\n\n` +
      `Overall Assessment: ${analysis.overallAssessment}`
    );
  }
});
