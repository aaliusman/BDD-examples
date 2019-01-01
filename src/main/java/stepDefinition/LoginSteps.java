package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSteps {
	
	WebDriver driver; 
	
	@Given("^User is already on login page$")
	public void user_is_already_on_login_page(){
		
		System.setProperty("webdriver.gecko.driver", "/Users/bravo1516/Web-Automation-Framework/WebAuto-Framework/Generic/browser-driver/geckodriver");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("https://www.freecrm.com");
	} 
	
	@When("^title of login page is Free Crm$")
	public void title_of_login_page_is_Free_Crm()  {
		String title= driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
	}
	
	@Then("^user is on home page$")
	public void user_is_on_home_page() {
		String title1 = driver.getTitle();
		System.out.println("Home Pagetitle: "+title1);
		Assert.assertEquals("CRMPRO", title1);
	}
	 //Reg Exp:
	 //1. \"([^\"]*)\"
	 //2. \"(.*)\"
	@And("^user enters \"(.*)\" and \"(.*)\"$")
	public void enterCredentials(String username, String password) throws InterruptedException {
		
		driver.findElement(By.name("username")).sendKeys(username);
		Thread.sleep(2000);
		driver.findElement(By.name("password")).sendKeys(password, Keys.ENTER);
		Thread.sleep(6000);
	}
	
	@And("^user mouse hover to contacts page$")
	public void mouseHoverToContacts() {
		driver.switchTo().frame("mainpanel");
		Actions ac = new Actions(driver);
		ac.moveToElement(driver.findElement(By.xpath("//ul[@class='mlddm']/li[4]"))).build().perform();
		driver.findElement(By.xpath("//a[@title='New Contact']")).click();
	}
	
	@Then("^user enters contacts info \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contacts_info_and_and(String firstname, String lastname, String position) throws InterruptedException {
			driver.findElement(By.id("first_name")).sendKeys(firstname);
			driver.findElement(By.id("surname")).sendKeys(lastname); 
			Thread.sleep(2345);
			driver.findElement(By.id("company_position")).sendKeys(position);
			driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
		}
	
	
	@Then("^close the browser$")
	public void closeBrowser() {
		driver.close();
	}
	
}
