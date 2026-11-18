module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    require: [
      "features/step-definitions/**/*.ts",
      "src/support/**/*.ts"
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: [
      "progress",
      "json:reports/cucumber-report.json",
      "allure-cucumberjs/reporter"
    ]
  }
};
