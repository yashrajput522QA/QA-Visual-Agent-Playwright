# Agentic Visual QA Framework

This is an Agentic Visual QA framework built entirely on the **Playwright Test Runner** and powered by the **Gemini 3.5 Flash** vision model.

It takes a baseline image (the "source of truth", e.g., a design file or previous known-good screenshot) and a target URL. Playwright automatically handles launching a browser in the background, navigating to the URL, and capturing the current state. It then uses the Multimodal capabilities of Gemini to identify any semantic visual regressions or layout issues.

If regressions are found, the Playwright test explicitly fails, and the test failure report contains a beautifully formatted list of all mismatches detected by the AI!

## Prerequisites

1. **Node.js** (v18+ recommended)
2. **Gemini API Key**: You must have a Gemini API key from [Google AI Studio](https://aistudio.google.com/). 

## Setup

1. Install dependencies:
   ```bash
   npm install
   npx playwright install chromium
   ```

2. Add your API Key:
   - Create or open the `.env` file in the root directory.
   - Add your API key: `GEMINI_API_KEY=your_api_key_here`

## How to Run

Because this tool is built as a Playwright test using the `{ page }` fixture, **you must run it using the `npx playwright test` command**. Running it as a standard Node script (e.g., `ts-node`) will not work.

You can customize the test by passing environment variables before the command. If you don't provide any, it defaults to using `baseline.png` and `https://bayone.com/`.

### Running with defaults:
```bash
npx playwright test visual-qa-agent.ts
```

### Running with a custom image and URL (Recommended):

**In PowerShell (Windows):**
```powershell
$env:SOURCE_IMAGE_PATH="ss-gen-dummy.png"; $env:TARGET_URL="https://example.com"; npx playwright test visual-qa-agent.ts
```

**In bash / macOS / Linux:**
```bash
SOURCE_IMAGE_PATH="ss-gen-dummy.png" TARGET_URL="https://example.com" npx playwright test visual-qa-agent.ts
```

*(Tip: By default, Playwright runs in the background. If you want to physically see the browser open and perform the navigation, add `--headed` to the end of your command!)*

## What happens during execution:

1. **Playwright** automatically opens an isolated browser environment, navigates to the URL, sets the viewport, and saves a full-page screenshot as `current_state.png`.
2. **Gemini 3.5 Flash** receives both the source image and the newly captured `current_state.png`.
3. The AI acts as a Senior QA Engineer, analyzing the images for structural differences, missing elements, or layout mismatches.
4. The script parses the AI's response.
5. If the AI detects a regression (`match: false`), the script intentionally throws a **Custom Error**.
6. The Playwright test fails, and the terminal displays a clean, readable report of exactly what failed, including the severity and a list of specific element mismatches!

## API Quotas & Troubleshooting

- **[429 Too Many Requests] Error**: If you attempt to upgrade the code to use a "Pro" model (like `gemini-3.1-pro-preview` or `gemini-3.5-pro`) and receive a 429 quota error, this means your API key is currently on the **Free Tier**. Pro models typically require an active billing account.
- **Why Gemini 3.5 Flash?**: This project defaults to `gemini-3.5-flash` because it is blazingly fast, highly accurate for visual analysis, and fully accessible within the standard Google Generative AI Free Tier quota.
- **Missing API Key**: If the script crashes immediately, ensure your `.env` file is located in the root directory and contains `GEMINI_API_KEY=your_key_here`.