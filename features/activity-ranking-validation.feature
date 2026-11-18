@validation
Feature: Request validation

  Scenario: Reject empty location
    When I request activity rankings for ""
    Then the response status should be 400
    And error message should be "location is required"

  Scenario: Reject missing location
    When I submit a request without location
    Then the response status should be 400
    And error message should be "location is required"

  Scenario: Reject one character location
    When I request activity rankings for "L"
    Then the response status should be 400
    And error message should be "location must contain at least 2 characters"

  Scenario: Reject overly long location
    When I request activity rankings containing more than 100 characters
    Then the response status should be 400
    And error message should be "location exceeds maximum length"

  Scenario: Unknown city
    When I request activity rankings for "MoonCity"
    Then the response status should be 404
    And error message should be "Location not found"

  Scenario: Invalid characters in city input
    When I request activity rankings for "@@@###"
    Then the response status should be 400
    And error message should be "Invalid location"