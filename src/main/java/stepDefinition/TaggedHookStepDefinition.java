//package stepDefinition;
//
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//public class TaggedHookStepDefinition {
//	
//	// Global hooks
//	@Before() 
//	public void SetUP() {
//		System.out.println("Global Launch browser");
//		System.out.println("Global Enter URL for free CRM APP");
//	}
//	
//	@After()
//	public void tearDown() {
//		System.out.println(" Global Close the browser");
//	}
//	// local - only for first scenario
//	@Before("@First") 
//	public void beforeFirst() {
//		System.out.println("before only the first scenario");
//	}
//	
//	@After("@First")
//	public void afterFirst() {
//		System.out.println("after only the first scenario");
//	}
//	// local - only for second scenario
//	@Before("@Second") 
//	public void beforeSecond() {
//		System.out.println("before only the second scenario");
//	}
//	
//	@After("@Second")
//	public void secondFirst() {
//		System.out.println("after only the second scenario");
//	}
//	// local - only for third scenario
//	@Before("@Third") 
//	public void beforeThird() {
//		System.out.println("before only the third scenario");
//	}
//	
//	@After("@Third")
//	public void afterThird() {
//		System.out.println("after only the third scenario");
//	}
//	
//	@Given("^this is the first step$")
//	public void this_is_the_first_step()  {
//		
//	}
//	   
//	@When("^this is the second step$")
//	public void this_is_the_second_step() {
//	    
//	}
//
//	@Then("^this is the third step$")
//	public void this_is_the_rd_step() {
//	   
//	}
//
//}
