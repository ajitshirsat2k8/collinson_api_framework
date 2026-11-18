@business-rules
Feature: Activity ranking logic

  Scenario: Skiing should rank highly in snow conditions
    Given weather forecast is suitable for skiing
    When activity rankings are requested
    Then "Skiing" suitability should be "High"

  Scenario: Surfing should rank highly in surf conditions
    Given weather forecast is suitable for surfing
    When activity rankings are requested
    Then "Surfing" suitability should be "High"

  Scenario: Outdoor sightseeing should rank highly in pleasant weather
    Given weather forecast is suitable for outdoor sightseeing
    When activity rankings are requested
    Then "Outdoor Sightseeing" suitability should be "High"

  Scenario: Indoor sightseeing should rank higher during heavy rain
    Given weather forecast contains heavy rainfall
    When activity rankings are requested
    Then "Indoor Sightseeing" suitability should be "High"

  Scenario: Every ranking should contain reasoning text
    When I request activity rankings for "London"
    Then all rankings should contain reasoning
    And reasoning should not be empty
  
  Scenario: Rankings should be ordered by highest suitability
    When I request activity rankings for "London"
    Then rankings should be sorted by suitability score descending