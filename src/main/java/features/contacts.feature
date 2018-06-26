Feature: Free CRM Create Contacts

Scenario Outline: Free CRM to create new contacts scenario

Given User is already on login page
When title of login page is Free Crm
And user enters "<username>" and "<password>"
Then user is on home page
And user mouse hover to contacts page
Then user enters contacts info "<firstname>" and "<lastname>" and "<jobtitle>"
Then close the browser

Examples:
	| username  | password | firstname | lastname | jobtitle      |
	| bravo1516 | abcd1234 | Rafael    | Nadal  	 | Sportsman     |
	| bravo1516 | abcd1234 | Muhammad  | Usman    | Test Engineer |
	| bravo1516 | abcd1234 | John      | Travolta | Actor 		 |
