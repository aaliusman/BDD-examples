@FunctionalTest
Feature: Free CRM application testing
@SmokeTest @RegressionTest
Scenario: Login wiht correct username and password
Given This a valid test case
@SmokeTest
Scenario: Login with incorrect username and password
Given this is a invalid login test
@RegressionTest
Scenario: Create a contact
Given this is a contact test case
@SmokeTest @End2End
Scenario: Create a deal
Given this is a deal test case
@SmokeTest
Scenario: Create a task
Given this is task test case
@RegressionTest
Scenario: verify left paenl links
Given clicking on left panel links
@SmokeTest
Scenario: verify right panel link
Given clicking on right panel links
@RegressionTest @End2End
Scenario: search a call
Given search call test
 @End2End
Scenario: search an email
Given search an email test
