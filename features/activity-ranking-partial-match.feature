@partial-match
Feature: Partial location matching
  As a consumer
  I want partial city names supported
  So that I do not need to type full city names

  Background:
    Given Open-Meteo weather service is available

  Scenario Outline: Accept partial location search
    When I request activity rankings for "<searchText>"
    Then the response status should be 200
    And matching city should be "<expectedCity>"
    And the response contract should be valid
    Examples:
      | searchText | expectedCity |
      | Lon        | London       |
      | Par        | Paris        |
      | New        | New York     |