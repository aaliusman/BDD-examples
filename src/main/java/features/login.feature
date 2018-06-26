Feature: Free Crm Login Action

#wihtout examples keyword
#Scenario: Successful login with valid credentials to Free Crm

#Given User is already on login page
#When title of login page is Free Crm
#And user enters "bravo1516" and "abcd1234"
#Then user is on home page
#Then close the browser

#With examples keyword
Scenario Outline: Free CRM Login Test Scenario

Given User is already on login page
When title of login page is Free Crm
And user enters "<username>" and "<password>"
Then user is on home page
Then close the browser

Examples:
	| username  | password |
	| bravo1516 | abcd1234 |
	| aali	    | abde1234 |
	| Johnson12 | jasljd45 |
