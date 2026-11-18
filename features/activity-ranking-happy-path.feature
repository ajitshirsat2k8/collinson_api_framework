@happy-path
Feature: Activity Ranking API

  As a client application

  I want activity recommendations

  So that I can choose suitable activities based on weather conditions

  Background:
    Given Open-Meteo weather service is available

  Scenario: Get activity rankings for a valid city

    When I request activity rankings for "London"

    Then the response status should be 200

    And the response should contain the city "London"

    And the response should contain 7 forecast days

    And each ranking should contain
      | field         |
      | date          |
      | activityName  |
      | suitability   |
      | reasoning     |

    And the response contract should be valid



  Scenario: Rankings should contain supported activities

    When I request activity rankings for "London"

    Then the response status should be 200

    And ranking activities should be one of
      | activity |
      | Skiing |
      | Surfing |
      | Outdoor Sightseeing |
      | Indoor Sightseeing |