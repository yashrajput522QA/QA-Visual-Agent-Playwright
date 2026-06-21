# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual-qa-agent.ts >> Visual QA comparison
- Location: visual-qa-agent.ts:22:5

# Error details

```
Error: Visual Regressions Detected!
Severity: Medium

Mismatches:
- [Header Navigation Menu]: The 'HOME' and 'SERVICES' navigation links are present in the Current State (Image 2) but are missing in the Design/Source of Truth (Image 1).

Overall Assessment: The hero section visually matches well in terms of layout, typography, imagery, and brand elements. However, there is a mismatch in the primary navigation header, where 'HOME' and 'SERVICES' links are added in the current implementation but are not present in the design baseline.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - navigation [ref=e8]:
          - link "BayOne" [ref=e11] [cursor=pointer]:
            - /url: https://bayone.com/
            - img "BayOne" [ref=e12]
          - list [ref=e15]:
            - listitem [ref=e16]:
              - link "HOME" [ref=e17] [cursor=pointer]:
                - /url: https://bayone.com/
            - listitem [ref=e18]:
              - link " SERVICES" [ref=e19] [cursor=pointer]:
                - /url: https://bayone.com/services/
            - listitem [ref=e20]:
              - link " INDUSTRIES" [ref=e21] [cursor=pointer]:
                - /url: https://bayone.com/industries/
            - listitem [ref=e22]:
              - link " INSIGHTS" [ref=e23] [cursor=pointer]:
                - /url: https://bayone.com/resources/
            - listitem [ref=e24]:
              - link " CAREERS" [ref=e25] [cursor=pointer]:
                - /url: https://bayone.com/job-seekers/
            - listitem [ref=e26]:
              - link " ABOUT" [ref=e27] [cursor=pointer]:
                - /url: https://bayone.com/about-us/
            - listitem [ref=e28]:
              - link "CONTACT" [ref=e29] [cursor=pointer]:
                - /url: https://bayone.com/contact/
          - generic [ref=e32] [cursor=pointer]:
            - generic [ref=e33]: 
            - generic [ref=e34]: 
        - generic [ref=e37]:
          - link "#TheFutureWorksHere " [ref=e40] [cursor=pointer]:
            - /url: ""
            - text: "#TheFutureWorksHere"
            - generic [ref=e41]: 
          - generic [ref=e43]:
            - generic [ref=e45]: FOLLOW US
            - generic [ref=e46]:
              - link "" [ref=e47] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UC3bKKnZxyFOYoq-jYQlzKzA
                - generic [ref=e48]: 
              - link "" [ref=e49] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/2689946/admin/
                - generic [ref=e50]: 
              - link "" [ref=e51] [cursor=pointer]:
                - /url: https://www.instagram.com/bayone_solutions/
                - generic [ref=e52]: 
    - main [ref=e58]:
      - article:
        - generic [ref=e59]:
          - generic [ref=e65]:
            - generic [ref=e67]:
              - heading "The future works here, at BayOne" [level=1] [ref=e74]:
                - text: The future works
                - text: here, at BayOne
              - paragraph [ref=e79]:
                - generic [ref=e80]: We solve business problems, bridge talent gaps, and drive innovation for customers
            - link [ref=e87] [cursor=pointer]:
              - /url: "#"
              - img [ref=e90]
          - generic [ref=e139]:
            - generic [ref=e141]:
              - heading "Latest Events" [level=2] [ref=e149]
              - link "MORE EVENTS " [ref=e154] [cursor=pointer]:
                - /url: https://bayone.com/resources-types/webinars/
                - text: MORE EVENTS
                - generic [ref=e155]: 
            - generic [ref=e163]:
              - generic [ref=e164]:
                - generic:
                  - generic [ref=e168]:
                    - link [ref=e169] [cursor=pointer]:
                      - /url: https://bayone.com/resources-posts/case-study-renewals-data-analytics-optimization/
                      - img [ref=e170]
                    - link [ref=e173] [cursor=pointer]:
                      - /url: https://bayone.com/resources-posts/case-study-renewals-data-analytics-optimization/
                      - heading [level=6] [ref=e174]:
                        - strong [ref=e175]: "Case Study: Renewals Data Analytics Optimization for Revenue Leakage Prevention and Sales Excellence"
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - link:
                            - /url: https://bayone.com/resources-posts/case-study-data-engineering-ml-operations-modernization/
                            - img
                          - generic:
                            - generic:
                              - link:
                                - /url: https://bayone.com/resources-posts/case-study-data-engineering-ml-operations-modernization/
                                - heading [level=6]:
                                  - strong: "Case Study: Data Engineering & ML Operations Modernization for a Fortune 500 Retail Enterprise"
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - link:
                            - /url: https://bayone.com/resources-posts/case-study-contingent-workforce-transformation-enabling-operational-excellence/
                            - img
                          - generic:
                            - generic:
                              - link:
                                - /url: https://bayone.com/resources-posts/case-study-contingent-workforce-transformation-enabling-operational-excellence/
                                - heading [level=6]:
                                  - strong: "Case Study: Contingent Workforce Transformation Enabling Operational Excellence"
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - link:
                            - /url: https://bayone.com/resources-posts/case-study-retail-loyalty-system-modernization/
                            - img
                          - generic:
                            - generic:
                              - link:
                                - /url: https://bayone.com/resources-posts/case-study-retail-loyalty-system-modernization/
                                - heading [level=6]:
                                  - strong: "Case Study: Retail Loyalty System Modernization"
                  - generic [ref=e179]:
                    - link [ref=e180] [cursor=pointer]:
                      - /url: https://bayone.com/resources-posts/case-study-designing-content-that-drive-engagement/
                      - img [ref=e181]
                    - link [ref=e184] [cursor=pointer]:
                      - /url: https://bayone.com/resources-posts/case-study-designing-content-that-drive-engagement/
                      - heading [level=6] [ref=e185]:
                        - strong [ref=e186]: "Case Study: Research Dashboard Development: Visualizing Quantitative Research Insights to Enable Data-Driven Decision Making"
                  - generic [ref=e190]:
                    - 'link "Case Study: Designing Content to Drive Engagement and Deliver a Seamless Service Experience: UX Writing" [ref=e191] [cursor=pointer]':
                      - /url: https://bayone.com/resources-posts/case-study-designing-content-to-drive-engagement/
                      - 'img "Case Study: Designing Content to Drive Engagement and Deliver a Seamless Service Experience: UX Writing" [ref=e192]'
                    - 'link "Case Study: Designing Content to Drive Engagement and Deliver a Seamless Service Experience: UX Writing" [ref=e195] [cursor=pointer]':
                      - /url: https://bayone.com/resources-posts/case-study-designing-content-to-drive-engagement/
                      - 'heading "Case Study: Designing Content to Drive Engagement and Deliver a Seamless Service Experience: UX Writing" [level=6] [ref=e196]':
                        - strong [ref=e197]: "Case Study: Designing Content to Drive Engagement and Deliver a Seamless Service Experience: UX Writing"
              - button "Previous" [ref=e198] [cursor=pointer]:
                - img [ref=e199]
              - button "Next" [ref=e201] [cursor=pointer]:
                - img [ref=e202]
              - list [ref=e204]:
                - listitem "Page dot 1" [ref=e205] [cursor=pointer]
                - listitem "Page dot 2" [ref=e206] [cursor=pointer]
                - listitem "Page dot 3" [ref=e207] [cursor=pointer]
                - listitem "Page dot 4" [ref=e208] [cursor=pointer]
                - listitem "Page dot 5" [ref=e209] [cursor=pointer]
                - listitem "Page dot 6" [ref=e210] [cursor=pointer]
          - heading "Guest Speakers" [level=2] [ref=e220]
          - generic [ref=e224]:
            - generic [ref=e226]:
              - img "..." [ref=e232] [cursor=pointer]
              - img "..." [ref=e239] [cursor=pointer]
              - generic [ref=e245] [cursor=pointer]:
                - img "..." [ref=e246]
                - generic [ref=e247]:
                  - heading "Ashish Jain" [level=6] [ref=e248]
                  - heading "Chief Product Officer" [level=4] [ref=e249]
              - generic [ref=e254] [cursor=pointer]:
                - img "..." [ref=e255]
                - generic [ref=e256]:
                  - heading "Nidhi Wadmark" [level=6] [ref=e257]
                  - heading "Product Leader" [level=4] [ref=e258]
            - generic [ref=e260]:
              - img "..." [ref=e266] [cursor=pointer]
              - img "..." [ref=e273] [cursor=pointer]
              - generic [ref=e279] [cursor=pointer]:
                - img "..." [ref=e280]
                - generic [ref=e281]:
                  - heading "Ritu Narayan" [level=6] [ref=e282]
                  - heading "CEO & Founder" [level=4] [ref=e283]
              - generic [ref=e288] [cursor=pointer]:
                - img "..." [ref=e289]
                - generic [ref=e290]:
                  - heading "Amol Dharmadhikari" [level=6] [ref=e291]
                  - heading "WW Content Operations Leader - Prime Video" [level=4] [ref=e292]
            - generic [ref=e294]:
              - generic [ref=e299] [cursor=pointer]:
                - img "..." [ref=e300]
                - generic [ref=e301]:
                  - heading "Fernando Hernandez" [level=6] [ref=e302]
                  - heading "Director of Supplier Diversity & Sustainability" [level=4] [ref=e303]
              - generic [ref=e308] [cursor=pointer]:
                - img "..." [ref=e309]
                - generic [ref=e310]:
                  - heading "Varsha Kanwar" [level=6] [ref=e311]
                  - heading "Chief of Staff, CX Engineering & Product Incubation" [level=4] [ref=e312]
              - generic [ref=e317] [cursor=pointer]:
                - img "..." [ref=e318]
                - generic [ref=e319]:
                  - heading "Henry Childs II" [level=6] [ref=e320]
                  - heading "Member of the Board of Advisors" [level=4] [ref=e321]
              - generic [ref=e326] [cursor=pointer]:
                - img "..." [ref=e327]
                - generic [ref=e328]:
                  - heading "Jeanine Johnson" [level=6] [ref=e329]
                  - heading "VP, Head of Product Security" [level=4] [ref=e330]
          - generic [ref=e338]:
            - heading "Our Customers" [level=2] [ref=e344]
            - generic [ref=e349]:
              - generic [ref=e350]:
                - group "1 / 17" [ref=e351]:
                  - img "Walmart logo with spark symbol" [ref=e355]
                - group "2 / 17" [ref=e356]:
                  - img "A black and white image of the word plunk" [ref=e360]
                - group "3 / 17" [ref=e361]:
                  - img "Black eBay logo on white background" [ref=e365]
                - group "4 / 17" [ref=e366]:
                  - img "Black Zoom wordmark centered on white background" [ref=e370]
                - group "5 / 17" [ref=e371]:
                  - img "Rivian logo with diamond emblem" [ref=e375]
                - group "6 / 17" [ref=e376]:
                  - img "A black and white logo of the word enented." [ref=e380]
                - group "7 / 17" [ref=e381]:
                  - img "A black and white logo of expedia." [ref=e385]
                - group "8 / 17" [ref=e386]:
                  - img "Macy's logo featuring a black star" [ref=e390]
                - group "9 / 17" [ref=e391]:
                  - img "Sephora beauty retailer black uppercase logo" [ref=e395]
                - group "10 / 17" [ref=e396]:
                  - img "Cisco logo with stylized bridge bars" [ref=e400]
                - group "11 / 17" [ref=e401]:
                  - img "Coupang black wordmark logo" [ref=e405]
                - group "12 / 17" [ref=e406]:
                  - img "Albertsons black and white grocery logo" [ref=e410]
                - group "13 / 17" [ref=e411]:
                  - img "A black and white logo of the company utanix." [ref=e415]
                - group "14 / 17" [ref=e416]:
                  - img "Shipt logo with shopping bag icon" [ref=e420]
                - group "15 / 17" [ref=e421]:
                  - img "Black-and-white Clorox wordmark inside diamond" [ref=e425]
                - group "16 / 17" [ref=e426]:
                  - img "Levi's black batwing logo on white background" [ref=e430]
                - group "17 / 17" [ref=e431]:
                  - img "A black and white image of the word discovery." [ref=e435]
              - generic [ref=e436]:
                - button "Go to slide 1" [ref=e437] [cursor=pointer]
                - button "Go to slide 2" [ref=e438] [cursor=pointer]
                - button "Go to slide 3" [ref=e439] [cursor=pointer]
              - button "Previous slide" [ref=e440] [cursor=pointer]:
                - generic [ref=e441]: 
              - button "Next slide" [ref=e442] [cursor=pointer]:
                - generic [ref=e443]: 
          - generic [ref=e447]:
            - generic [ref=e449]:
              - heading "Latest Videos" [level=2] [ref=e457]
              - link "VIEW ALL VIDEOS" [ref=e463] [cursor=pointer]:
                - /url: https://bayone.com/resources-types/videos/
            - generic [ref=e471]:
              - generic [ref=e472]:
                - generic:
                  - generic [ref=e476]:
                    - link "Compete like a Startup" [ref=e477] [cursor=pointer]:
                      - /url: https://bayone.com/resources-posts/compete-like-a-startup/
                      - img "Compete like a Startup" [ref=e478]
                    - link "Compete like a Startup" [ref=e481] [cursor=pointer]:
                      - /url: https://bayone.com/resources-posts/compete-like-a-startup/
                      - heading "Compete like a Startup" [level=6] [ref=e482]:
                        - strong [ref=e483]: Compete like a Startup
                  - generic [ref=e487]:
                    - link [ref=e488] [cursor=pointer]:
                      - /url: https://bayone.com/resources-posts/the-state-of-black-tech-funding-henry-childs-ii-tracy-gray-2/
                      - img [ref=e489]
                    - link [ref=e492] [cursor=pointer]:
                      - /url: https://bayone.com/resources-posts/the-state-of-black-tech-funding-henry-childs-ii-tracy-gray-2/
                      - heading [level=6] [ref=e493]:
                        - strong [ref=e494]: "The State of Black Tech: Funding – Henry Childs II & Tracy Gray"
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - link:
                            - /url: https://bayone.com/resources-posts/building-your-product-management-career-2-2/
                            - img
                          - generic:
                            - generic:
                              - link:
                                - /url: https://bayone.com/resources-posts/building-your-product-management-career-2-2/
                                - heading [level=6]:
                                  - strong: Building Your Product Management Career
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - link:
                            - /url: https://bayone.com/resources-posts/rebuild-your-work-life-with-amol-dharmadhikari-2/
                            - img
                          - generic:
                            - generic:
                              - link:
                                - /url: https://bayone.com/resources-posts/rebuild-your-work-life-with-amol-dharmadhikari-2/
                                - heading [level=6]:
                                  - strong: ReBuild your Work-life with Amol Dharmadhikari
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - link:
                            - /url: https://bayone.com/resources-posts/reinventing-for-2021-2/
                            - img
                          - generic:
                            - generic:
                              - link:
                                - /url: https://bayone.com/resources-posts/reinventing-for-2021-2/
                                - heading [level=6]:
                                  - strong: Reinventing for 2021
                  - generic [ref=e498]:
                    - link [ref=e499] [cursor=pointer]:
                      - /url: https://bayone.com/resources-posts/the-future-of-product-management-2/
                      - img [ref=e500]
                    - link [ref=e503] [cursor=pointer]:
                      - /url: https://bayone.com/resources-posts/the-future-of-product-management-2/
                      - heading [level=6] [ref=e504]:
                        - strong [ref=e505]: The Future of Product Management
              - button "Previous" [ref=e506] [cursor=pointer]:
                - img [ref=e507]
              - button "Next" [ref=e509] [cursor=pointer]:
                - img [ref=e510]
              - list [ref=e512]:
                - listitem "Page dot 1" [ref=e513] [cursor=pointer]
                - listitem "Page dot 2" [ref=e514] [cursor=pointer]
                - listitem "Page dot 3" [ref=e515] [cursor=pointer]
                - listitem "Page dot 4" [ref=e516] [cursor=pointer]
                - listitem "Page dot 5" [ref=e517] [cursor=pointer]
                - listitem "Page dot 6" [ref=e518] [cursor=pointer]
    - contentinfo [ref=e530]:
      - generic [ref=e534]:
        - generic [ref=e536]:
          - generic [ref=e538]:
            - link "Essentials Logo" [ref=e542] [cursor=pointer]:
              - /url: https://bayone.com/
              - img "Essentials Logo" [ref=e543]
            - img "#thefutureworkshere" [ref=e548]
            - generic [ref=e555]:
              - link "" [ref=e556] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/bayone-solutions/
                - generic [ref=e557]: 
              - link "" [ref=e558] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UC3bKKnZxyFOYoq-jYQlzKzA
                - generic [ref=e559]: 
              - link "" [ref=e560] [cursor=pointer]:
                - /url: https://twitter.com/bayonesolutions
                - generic [ref=e561]: 
              - link "" [ref=e562] [cursor=pointer]:
                - /url: https://www.instagram.com/bayone_solutions/
                - generic [ref=e563]: 
              - link "" [ref=e564] [cursor=pointer]:
                - /url: https://www.facebook.com/BayOneSolutions/
                - generic [ref=e565]: 
          - generic [ref=e567]:
            - link "HOME" [ref=e570] [cursor=pointer]:
              - /url: https://bayone.com/
            - link "CLIENTS" [ref=e573] [cursor=pointer]:
              - /url: https://bayone.com/clients/
            - link "ENTERPRISE" [ref=e576] [cursor=pointer]:
              - /url: https://bayone.com/clients/enterprise/
            - link "SMS OPT-OUT" [ref=e579] [cursor=pointer]:
              - /url: https://bayone.com/contact/bayone-sms-unsubscribe/
            - link "JOB SEEKERS" [ref=e582] [cursor=pointer]:
              - /url: https://bayone.com/job-seekers/
            - link "PRIVACY POLICY" [ref=e585] [cursor=pointer]:
              - /url: https://bayone.com/privacy-policy-2/
          - generic [ref=e587]:
            - link "SOLUTIONS" [ref=e590] [cursor=pointer]:
              - /url: https://bayone.com/solutions/
            - link "DIVERSITY" [ref=e593] [cursor=pointer]:
              - /url: https://bayone.com/diversity/
            - link "ABOUT US" [ref=e596] [cursor=pointer]:
              - /url: https://bayone.com/about-us/
            - link "RESOURCES" [ref=e599] [cursor=pointer]:
              - /url: https://bayone.com/resources/
            - link "CONTACT US" [ref=e602] [cursor=pointer]:
              - /url: https://bayone.com/contact/
            - link "TERMS & CONDITION" [ref=e605] [cursor=pointer]:
              - /url: https://bayone.com/terms-amp-conditions/
          - generic [ref=e610]:
            - img "..." [ref=e611]
            - link "Visit our blog " [ref=e612] [cursor=pointer]:
              - /url: https://bayone.com/blog/
              - generic [ref=e614]:
                - heading "Visit our blog" [level=5] [ref=e615]
                - heading "" [level=5] [ref=e616]
        - paragraph [ref=e625]:
          - generic [ref=e626]:
            - strong [ref=e627]: BayOne Solutions
            - text: All rights reserved
  - text:  
  - link "" [ref=e628] [cursor=pointer]:
    - /url: "#"
    - generic [ref=e629]: 
  - generic:
    - img
  - generic [ref=e630]: desktop
```

# Test source

```ts
  17  |       mimeType
  18  |     },
  19  |   };
  20  | }
  21  | 
  22  | test('Visual QA comparison', async ({ page }) => {
  23  |   // We use environment variables to pass arguments into a Playwright test.
  24  |   // If none are provided, we fall back to defaults.
  25  |   const sourceImagePath = process.env.SOURCE_IMAGE_PATH || path.join(__dirname, 'baseline.png');
  26  |   const targetUrl = process.env.TARGET_URL || 'https://bayone.com/';
  27  | 
  28  |   console.log(`Starting Visual QA Agent...`);
  29  |   console.log(`Source of Truth: ${sourceImagePath}`);
  30  |   console.log(`Target URL: ${targetUrl}`);
  31  | 
  32  |   if (!fs.existsSync(sourceImagePath)) {
  33  |     throw new Error(`Error: Source image not found at ${sourceImagePath}`);
  34  |   }
  35  | 
  36  |   // 1. Capture the "Current" State using the auto-provided Playwright "page" fixture!
  37  |   console.log(`\n[1/3] Navigating and capturing the current state...`);
  38  |   await page.setViewportSize({ width: 1280, height: 800 });
  39  |   await page.goto(targetUrl, { waitUntil: 'load' });
  40  | 
  41  |   const currentImagePath = path.join(__dirname, 'current_state.png');
  42  |   await page.screenshot({ path: currentImagePath, fullPage: true });
  43  |   console.log(`Saved current state screenshot to: ${currentImagePath}`);
  44  | 
  45  |   // 2. Initialize Gemini API
  46  |   console.log(`\n[2/3] Initializing Gemini Vision API...`);
  47  |   const apiKey = process.env.GEMINI_API_KEY;
  48  |   if (!apiKey) {
  49  |     throw new Error('Error: GEMINI_API_KEY is not set in the environment variables.');
  50  |   }
  51  | 
  52  |   const genAI = new GoogleGenerativeAI(apiKey);
  53  |   // Using gemini-3.5-flash as configured
  54  |   const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });
  55  | 
  56  |   // 3. Perform AI Semantic Diffing
  57  |   console.log(`\n[3/3] Analyzing images with Gemini...`);
  58  | 
  59  |   const sourceImagePart = fileToGenerativePart(sourceImagePath, "image/png");
  60  |   const currentImagePart = fileToGenerativePart(currentImagePath, "image/png");
  61  | 
  62  |   const prompt = `
  63  |     You are an expert Senior QA Engineer specializing in Visual QA and UI design.
  64  |     I am providing you with two images:
  65  |     1. The first image is the "Source of Truth" (Design/Baseline).
  66  |     2. The second image is the "Current State" (Staging/Production).
  67  | 
  68  |     Your task is to carefully compare the two images and identify any visual regressions, layout issues, missing elements, or color mismatches.
  69  |     Ignore minor timestamp differences or small dynamic content changes (like ad banners).
  70  |     Focus on semantic and structural differences that impact the User Experience.
  71  | 
  72  |     Please output a structured JSON response in the following format:
  73  |     {
  74  |       "match": boolean, // true if they semantically match perfectly, false if there are regressions
  75  |       "severity": "High" | "Medium" | "Low" | "None",
  76  |       "mismatches": [
  77  |         {
  78  |           "element": "Describe the element (e.g. 'Submit Button')",
  79  |           "issue": "Describe the issue (e.g. 'Missing on the current state' or 'Wrong background color')"
  80  |         }
  81  |       ],
  82  |       "overallAssessment": "A brief summary of your findings."
  83  |     }
  84  |   `;
  85  | 
  86  |   const result = await model.generateContent([
  87  |     prompt,
  88  |     sourceImagePart,
  89  |     currentImagePart
  90  |   ]);
  91  | 
  92  |   const response = await result.response;
  93  |   if (!response) {
  94  |     throw new Error("Error: No response from Gemini API.");
  95  |   }
  96  |   const text = response.text();
  97  | 
  98  |   console.log(`\n=== QA Agent Analysis Report ===\n`);
  99  | 
  100 |   // Extract JSON if it's wrapped in markdown code blocks
  101 |   let jsonOutput = text;
  102 |   if (text.includes("```json")) {
  103 |     const match = text.match(/```json([\s\S]*?)```/);
  104 |     if (match) {
  105 |       jsonOutput = match[1].trim();
  106 |     }
  107 |   }
  108 | 
  109 |   console.log(jsonOutput);
  110 |   console.log(`\n================================`);
  111 | 
  112 |   // Force test failure if images don't match, and inject the AI report into the failure message
  113 |   const analysis = JSON.parse(jsonOutput);
  114 |   
  115 |   if (analysis.match === false) {
  116 |     const formattedMismatches = analysis.mismatches.map((m: any) => `- [${m.element}]: ${m.issue}`).join('\n');
> 117 |     throw new Error(
      |           ^ Error: Visual Regressions Detected!
  118 |       `Visual Regressions Detected!\n` +
  119 |       `Severity: ${analysis.severity}\n\n` +
  120 |       `Mismatches:\n${formattedMismatches}\n\n` +
  121 |       `Overall Assessment: ${analysis.overallAssessment}`
  122 |     );
  123 |   }
  124 | });
  125 | 
```