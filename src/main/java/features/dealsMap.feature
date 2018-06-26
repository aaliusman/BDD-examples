Feature: Deal data creation

Scenario: Free CRM to create new contacts scenario

Given User is already on login page
When title of login page is Free Crm
And user enters username and password
| username  | password |
| bravo1516 | abcd1234 |
Then user is on home page
And user move to new deal page
Then user enters deal details
| title      | amount | probability | commission |
| test deal1 | 1000   | 50			| 65		    |
| test deal2 | 2000   | 34 			| 12        |
| test deal3 | 1300   | 75 			| 18        |
Then close the browser