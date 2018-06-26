Feature: Free CRM application test with Hooks

Scenario: free CRM create deal test
Given user is on deal pag
When user fills the deal forms
Then deal is created

Scenario: free CRM create contact test
Given user is on contact page
When user fills the contact forms
Then contact is created

Scenario Outline: Free crm create mail test
Given user on mail page
When user fills teh mail page form
Then mail is created
Examples:
	|mail1|
	|mail2|
	
