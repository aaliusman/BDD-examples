Feature: Test Tagged Hooks

@First
Scenario: this is the first test
	Given this is the first step
	When this is the second step
	Then this is the third step
	
@Second
Scenario: this is the second test
	Given this is the first step
	When this is the second step
	Then this is the third step
	
@Thrid
Scenario: this is the third test
	Given this is the first step
	When this is the second step
	Then this is the third step