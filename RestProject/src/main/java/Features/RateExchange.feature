Feature: Exchange Rate
   
   
   Scenario: verify response for Latest Foreign Exchnage rates
  
    Given Customer have API for foreign Exchange rates
    When Customer hit API
    Then status code come as 200
    And body contain base is
  