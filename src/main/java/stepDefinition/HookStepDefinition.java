//package stepDefinition;
//
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//public class HookStepDefinition {
//
//	@Before
//	public void setUP() {
//		System.out.println("Luanc FF");
//		System.out.println("Enter URL for free CRM APP");
//	}
//
//	@After
//	public void tearDown() {
//		System.out.println("close the browser");
//	}
//
//	@Given("^user is on deal pag$")
//	public void user_is_on_deal_pag() {
//		System.out.println("user in on deal page");
//
//	}
//
//	@When("^user fills the deal forms$")
//	public void user_fills_the_deal_forms() {
//		System.out.println("user fills the deal forms");
//
//	}
//
//	@Then("^deal is created$")
//	public void deal_is_created() {
//		System.out.println("deal is created");
//
//	}
//	
//	@Given("^user is on contact page$")
//	public void user_is_on_contact_page()  {
//		System.out.println("user in on contact page");
//	}
//
//	@When("^user fills the contact forms$")
//	public void user_fills_the_contact_forms() {
//		System.out.println("user fills contact form page");
//	}
//
//	@Then("^contact is created$")
//	public void contact_is_created() {
//		System.out.println("contact is created");
//	}
//	
//	@Given("^user on mail page$")
//	public void user_on_mail_page()  {
//		System.out.println("on mail page");
//	}
//
//	@When("^user fills teh mail page form$")
//	public void user_fills_teh_mail_page_form() {
//		System.out.println("fills mail page");
//	}
//
//	@Then("^mail is created$")
//	public void mail_is_created() {
//		System.out.println("mail page created");
//	}
//}
