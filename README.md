# Activity Ranking API — Specification-First Test Automation

![Node](https://img.shields.io/badge/node-22-green)
![TypeScript](https://img.shields.io/badge/typescript-5-blue)
![Cucumber](https://img.shields.io/badge/cucumber-BDD-brightgreen)
![Status](https://github.com/ajitshirsat2k8/collinson_api_framework/actions/workflows/ci.yml/badge.svg)

## Overview

This repository contains a specification-first, BDD automated test framework for validating the **Activity Ranking API**. The API accepts a city or location query and returns weather-based activity recommendations backed by a 7-day forecast.

The framework is built around:
- **Behavior-Driven Development (BDD)** with Gherkin specifications
- **Runtime Contract Validation** using Zod schemas
- **Deterministic Mock-Driven Testing** via Nock
- **Automated HTML & Allure Reporting**
- **CI/CD Readiness** with GitHub Actions

---

## Technology Stack

| Tool | Purpose |
| :--- | :--- |
| **TypeScript** | Strongly-typed test implementation |
| **Cucumber.js** | BDD test runner & Gherkin execution |
| **Axios** | HTTP client for API requests |
| **Zod** | Runtime request/response contract validation |
| **Nock** | HTTP interception & deterministic mocking |
| **Chai** | Expressive test assertions |
| **Cucumber HTML Reporter** | Standalone HTML execution reports |
| **Allure** | Detailed test analytics & payload attachments |
| **GitHub Actions** | Continuous Integration pipeline |

---

## Project Structure

```text
├── .github/workflows/      # CI/CD pipeline definitions
├── features/               # Gherkin .feature files & step definitions
│   └── step-definitions/
├── reports/                # Generated Cucumber JSON & HTML reports
├── src/
│   ├── assertions/         # Reusable business & HTTP assertions
│   ├── clients/            # Axios API client wrappers
│   ├── config/             # Environment & framework configuration
│   ├── mocks/              # Nock interceptors, fixtures & mock context
│   ├── schemas/            # Zod validation schemas & unit specs
│   ├── support/            # Cucumber hooks, world setup & logger
│   ├── types/              # TypeScript interfaces & types
│   └── utils/              # Schema validator, Allure & response helpers
├── cucumber.js             # Cucumber runner configuration
├── package.json            # Dependencies & NPM scripts
├── report-generator.ts     # HTML report builder script
└── tsconfig.json           # TypeScript compiler configuration
```

---

## API Contract & Assumptions

### Endpoint
`POST /api/activity-rankings`

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

### Supported Domain Values
- **Activities:** `Skiing`, `Surfing`, `Outdoor Sightseeing`, `Indoor Sightseeing`
- **Suitability Levels:** `High`, `Medium`, `Low`

---

## Test Coverage

The test suite currently executes **19 scenarios (69 steps)** covering:

- **Happy Path:** Valid city lookup, 7-day forecast verification, and strict Zod contract compliance.
- **Partial Location Matching:** Query resolution (e.g., `Lon` → `London`, `Par` → `Paris`, `New` → `New York`).
- **Input Validation:** Empty strings, missing fields, single-character inputs, inputs exceeding 100 characters, invalid special characters, and unknown cities (`404`).
- **Weather Provider Resilience:** Graceful error handling for upstream timeouts (`504`) and server errors (`503`).
- **Business Rules:** Weather-driven suitability ranking logic (snow → Skiing, waves → Surfing, clear → Outdoor Sightseeing, heavy rain → Indoor Sightseeing), reasoning presence, and descending suitability sort order.

---

## Getting Started

### Prerequisites
- **Node.js** v20 or higher
- **Java JDK 17+** *(required only if generating Allure reports locally)*

### Installation

```bash
git clone [https://github.com/ajitshirsat2k8/collinson_api_framework.git](https://github.com/ajitshirsat2k8/collinson_api_framework.git)
cd collinson_api_framework
npm install
```

---

## Useful NPM Scripts

| Script | Description |
| :--- | :--- |
| `npm test` | Runs all Cucumber BDD scenarios |
| `npm run test:report` | Cleans reports, runs tests, and generates the HTML report |
| `npm run report` | Generates the HTML report from existing JSON results |
| `npm run test:allure` | Runs tests for Allure result collection |
| `npm run allure:generate` | Builds the static Allure report site |
| `npm run allure:open` | Launches the Allure report in your default browser |
| `npm run lint` | Runs `tsc --noEmit` to verify TypeScript types |
| `npm run clean` | Deletes `reports/`, `allure-results/`, and `allure-report/` |
| `npm run ci` | Executes `lint` followed by `test:report` |