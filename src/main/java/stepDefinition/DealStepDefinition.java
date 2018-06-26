//package stepDefinition;
//
//import java.util.List;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.Keys;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.And;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class DealStepDefinition {
//	
//WebDriver driver; 
//	
//	@Given("^User is already on login page$")
//	public void userIsOnLoginPage(){
//		
//		System.setProperty("webdriver.gecko.driver", "/Users/bravo1516/eclipse-workspace/SeleniumProject1/drivers/geckodriver");
//		driver = new FirefoxDriver();
//		driver.manage().window().maximize();
//		driver.get("https://www.freecrm.com");
//	}
//	
//	@When("^title of login page is Free Crm$")
//	public void title_of_login_page_is_Free_Crm()  {
//		String title= driver.getTitle();
//		System.out.println(title);
//		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
//	}
//	
//	@And("^user enters username and password$")
//	public void enterCredentials(DataTable credentials) throws InterruptedException {
//		List<List<String>> data = credentials.raw();
//		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
//		Thread.sleep(2000);
//		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1), Keys.ENTER);
//		Thread.sleep(6000);
//	}
//	
//	@Then("^user is on home page$")
//	public void user_is_on_home_page() {
//		String title1 = driver.getTitle();
//		System.out.println("Home Pagetitle: "+title1);
//		Assert.assertEquals("CRMPRO", title1);
//	}
//	
//	@And("^user move to new deal page$")
//	public void mouseHoverToContacts() throws InterruptedException {
//		driver.switchTo().frame("mainpanel");
//		Actions ac = new Actions(driver);
//		Thread.sleep(2321);
//		ac.moveToElement(driver.findElement(By.xpath("//div[@id='navmenu']/ul/li[5]/a"))).build().perform();
//		Thread.sleep(2000);
//		driver.findElement(By.xpath("//a[contains(text(), 'New Deal')]")).click();
//	}
//	
//	@Then("user enters deal details$")
//	public void user_enters_dealInfo(DataTable dealData) throws InterruptedException {
//			List<List<String>> dealValues = dealData.raw();
//			driver.findElement(By.id("title")).sendKeys(dealValues.get(0).get(0));
//			driver.findElement(By.id("amount")).sendKeys(dealValues.get(0).get(1)); 
//			Thread.sleep(2345);
//			driver.findElement(By.id("probability")).sendKeys(dealValues.get(0).get(2));
//			driver.findElement(By.id("commission")).sendKeys(dealValues.get(0).get(3));
//			driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
//		}
//	
//	@Then("^close the browser$")
//	public void closeBrowser() {
//		driver.close();
//	}
//
//}
