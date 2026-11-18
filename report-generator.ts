import reporter from "cucumber-html-reporter";

const options = {

  theme: "bootstrap" as const,

  jsonFile:
    "./reports/cucumber-report.json",

  output:
    "./reports/cucumber-report.html",

  reportSuiteAsScenarios: true,

  launchReport: false,

  metadata: {
    "Project":
      "Collinson Activity Ranking API",

    "Release":
      "1.0.0",

    "Execution Environment":
      "Local",

    "Framework":
      "Cucumber + TypeScript",

    "API Testing":
      "Axios",

    "Schema Validation":
      "Zod"
  }
};

reporter.generate(options);

console.log(
  "HTML Report Generated"
);