Feature: Deal data creation

Scenario: Free CRM to create new contacts scenario

Given User is already on login page
When title of login page is Free Crm
And user enters username and password
| bravo1516 | abcd1234 |
Then user is on home page
And user move to new deal page
Then user enters deal details
| test deal | 1000 | 50 | 10 |
Then close the browser