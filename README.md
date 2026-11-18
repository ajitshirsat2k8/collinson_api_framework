<<<<<<< HEAD
## Activity Ranking API Contract

Endpoint:

POST /api/activity-rankings

Request:

{
  "location": "London"
}

Response:

{
  "city": "London",
  "forecastDays": 7,
  "rankings": [
    {
      "date": "2026-11-18",
      "activityName": "Surfing",
      "suitability": "High",
      "reasoning": "Strong wave conditions."
    }
  ]
}



# Activity Ranking API Test Automation

![Node](https://img.shields.io/badge/node-20-green)

![TypeScript](https://img.shields.io/badge/typescript-5-blue)

![Cucumber](https://img.shields.io/badge/cucumber-BDD-brightgreen)

![Status](https://github.com/<USER>/<REPO>/actions/workflows/ci.yml/badge.svg)


# Activity Ranking API - Specification First Test Automation

## Overview

This repository contains a specification-first automated test framework for validating the Activity Ranking API.

The API accepts a location and returns weather-based activity recommendations using a 7-day weather forecast.

The solution follows:

- BDD
- Contract Testing
- Schema Validation
- Mock-Driven Testing
- CI/CD Best Practices

---

## Technology Stack

| Tool | Purpose |
|--------|---------|
| TypeScript | Language |
| Cucumber | BDD |
| Axios | API Communication |
| Zod | Contract Validation |
| Nock | Weather API Mocking |
| Chai | Assertions |
| GitHub Actions | CI/CD |
| Cucumber Reporter | HTML Reporting |

---

## Project Structure

```text
src/
features/
reports/
.github/
```

---

## Assumptions

### API Endpoint

POST

/api/activity-rankings

### Request

```json
{
  "location": "London"
}
```

### Response

```json
{
  "city": "London",
  "forecastDays": 7,
  "rankings": [
    {
      "date": "2026-11-18",
      "activityName": "Surfing",
      "suitability": "High",
      "reasoning": "Strong wave conditions."
    }
  ]
}
```

---

## Supported Activities

- Skiing
- Surfing
- Outdoor Sightseeing
- Indoor Sightseeing

---

## Supported Suitability Levels

- High
- Medium
- Low

---

## Test Coverage

### Happy Path

✓ Valid Request

✓ Response Contract

✓ Seven Day Forecast

### Partial Match

✓ Lon → London

✓ Par → Paris

### Validation

✓ Empty Location

✓ Missing Location

✓ Invalid Characters

✓ Long Input

✓ Unknown City

### Weather Failures

✓ Open-Meteo Timeout

✓ Open-Meteo 500

### Business Rules

✓ Skiing Ranking

✓ Surfing Ranking

✓ Outdoor Sightseeing Ranking

✓ Indoor Sightseeing Ranking

✓ Ranking Order

---

## Installation

```bash
npm install
```

---

## Execute Tests

```bash
npm test
```

---

## Generate Report

```bash
npm run test:report
```

---

## Run CI Locally

```bash
npm run ci
```

---

## Design Decisions

### Why BDD?

Feature files serve as executable requirements.

### Why Zod?

Runtime contract validation prevents schema drift.

### Why Nock?

Tests remain deterministic and independent of external services.

### Why Specification-First?

The contract is validated before backend implementation exists.

---

## Future Enhancements

- Pact Contract Testing
- Docker Support
- Parallel Execution
- Allure Reporting
- Performance Testing



# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd activity-ranking-api-tests
```

Install dependencies:

```bash
npm install
```

---

# Running Tests

## Execute Complete Test Suite

```bash
npm test
```

Expected Output:

```text
19 scenarios (19 passed)
69 steps (69 passed)
```

---

## Execute Tests Using Cucumber CLI

```bash
npx cucumber-js
```

---

# TypeScript Validation

Validate TypeScript compilation without generating files:

```bash
npx tsc --noEmit
```

---

# HTML Reporting

## Run Test Suite

```bash
npm test
```

## Generate HTML Report

```bash
npm run report
```

or

```bash
node generate-report.js
```

## Open HTML Report

```bash
start reports/cucumber-report.html
```

HTML report location:

```text
reports/cucumber-report.html
```

---

# Allure Reporting

## Execute Tests with Allure

```bash
npm run test:allure
```

Current Script:

```json
"test:allure": "rimraf reports allure-results allure-report && cucumber-js"
```

This generates:

```text
allure-results/
```

---

## Generate Allure Report

```bash
npx allure generate allure-results --clean
```

This generates:

```text
allure-report/
```

---

## Open Allure Report

```bash
npx allure open allure-report
```

If browser does not launch automatically:

```bash
http://127.0.0.1:<port>
```

Copy the URL into Chrome or Edge.

---

## Serve Allure Report

Alternative command:

```bash
npx allure serve allure-results
```

This will:

```text
Generate Report
Start Local Server
Open Browser
```

---

# Clean Reports

Delete previous reports:

```bash
rimraf reports allure-results allure-report
```

---

# Verify Installed Versions

## Cucumber Version

```bash
npm list @cucumber/cucumber
```

## Allure Cucumber Version

```bash
npm list allure-cucumberjs
```

## Allure Runtime Version

```bash
npm list allure-js-commons
```

---

# Recommended Execution Flow

## Normal Execution

```bash
npm install
npm test
```

---

## Generate HTML Report

```bash
npm test
npm run report
```

---

## Generate Allure Report

```bash
npm run test:allure
npx allure generate allure-results --clean
npx allure open allure-report
```

---

# Useful NPM Scripts

```bash
npm install

npm test

npm run test:allure

npm run report

npm run lint

npm run clean
```

---

# CI/CD Execution

Example Pipeline Command:

```bash
npm ci
npm test
```

Or with Allure:

```bash
npm ci
npm run test:allure
npx allure generate allure-results --clean
```
=======
# collinson_test
>>>>>>> 4aa643be8b3ad04b500ed66c3d7113b29dd72bfb
