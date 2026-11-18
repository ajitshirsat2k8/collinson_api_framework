@weather-failure
Feature: Weather service failure handling

  Scenario: Weather provider unavailable
    Given Open-Meteo service returns server error
    When I request activity rankings for "London"
    Then the response status should be 503
    And error message should be "Weather service unavailable"

  Scenario: Weather provider timeout
    Given Open-Meteo service times out
    When I request activity rankings for "London"
    Then the response status should be 504
    And error message should be "Weather service timeout"