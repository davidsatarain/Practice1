package Actions;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import util.Base;

public class MyStore extends Base{
	
	public void launchBrowser() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\102331781\\Documents\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	public void openURL() {
		driver.get("http://automationpractice.com/");
	}
	
	public void verifyingURL() {
		Assert.assertTrue(driver.getCurrentUrl().contains("http://automationpractice.com/index.php"));
	}
	
	public void creatingAccount() throws InterruptedException {
		
		driver.findElement(By.cssSelector("a.login")).click();
		
	}
	
	public void verifyingAuthentication() {
		Assert.assertTrue(driver.getCurrentUrl().contains("http://automationpractice.com/index.php?controller=authentication&back=my-account"));
	
	}
	
	public void puttingEmail(String email) {
		driver.findElement(By.xpath("//input[@id='email_create']")).sendKeys(email);
		driver.findElement(By.xpath("//span[i/@class='icon-user left']")).click();
		
	}
	
	public void selectTitle(String title) throws InterruptedException {
		switch(title.toLowerCase()) {
		
			case "mr":
				Thread.sleep(3000);
				driver.findElement(By.xpath("//span[input/@id='id_gender1']")).click();
		
			case "mrs":
				Thread.sleep(3000);
				driver.findElement(By.xpath("//span[input/@id='id_gender2']")).click();
			
		}
	}
	
	public void verifyingCreateAnAccount() throws InterruptedException {
		Thread.sleep(3000);
		Assert.assertTrue(driver.getCurrentUrl().contains("http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation"));
	}
	
	public void verifyingMyAccount() {
		Assert.assertTrue(driver.getCurrentUrl().contains("http://automationpractice.com/index.php?controller=my-account"));
	}
	
	public void fillingInfo(DataTable data) throws InterruptedException {
		
		List<List<String>>	obj=data.raw();
        driver.findElement(By.xpath("//input[@id='customer_firstname']")).sendKeys(obj.get(0).get(0));
        driver.findElement(By.xpath("//input[@id='customer_lastname']")).sendKeys(obj.get(0).get(1));
        driver.findElement(By.xpath("//input[@id='passwd']")).sendKeys(obj.get(0).get(2));
        
        Select day = new Select(driver.findElement(By.id("days")));
        day.selectByValue(obj.get(0).get(3));
        Thread.sleep(2000);
        Select month = new Select(driver.findElement(By.id("months")));
        month.selectByValue(obj.get(0).get(4));
        Thread.sleep(2000);
        Select year = new Select(driver.findElement(By.id("years")));
        year.selectByValue(obj.get(0).get(5));
        Thread.sleep(2000);      
        
	}
	
	public void newsletter() {
		driver.findElement(By.xpath("//input[@id='newsletter']")).click();
	}
	
	public void specialOffers() {
		driver.findElement(By.xpath("//input[@id='optin']")).click();
	}
	
	public void fillingAddress(DataTable data2) throws InterruptedException {
		
		List<List<String>>	obj=data2.raw();
        driver.findElement(By.xpath("//input[@id='company']")).sendKeys(obj.get(0).get(0));
        driver.findElement(By.xpath("//input[@id='address1']")).sendKeys(obj.get(0).get(1));
        driver.findElement(By.xpath("//input[@id='address2']")).sendKeys(obj.get(0).get(2));
        driver.findElement(By.xpath("//input[@id='city']")).sendKeys(obj.get(0).get(3));
        
        Select state = new Select(driver.findElement(By.id("id_state")));
        state.selectByVisibleText(obj.get(0).get(4));
        Thread.sleep(2000);
        
        driver.findElement(By.xpath("//input[@id='postcode']")).sendKeys(obj.get(0).get(5));
        
        Select country = new Select(driver.findElement(By.id("id_country")));
        country.selectByVisibleText(obj.get(0).get(6));
        Thread.sleep(2000);
        
        driver.findElement(By.xpath("//textarea[@id='other']")).sendKeys(obj.get(0).get(7));
        driver.findElement(By.xpath("//input[@id='phone']")).sendKeys(obj.get(0).get(8));
        driver.findElement(By.xpath("//input[@id='phone_mobile']")).sendKeys(obj.get(0).get(9));
        driver.findElement(By.xpath("//input[@id='alias']")).clear();
        driver.findElement(By.xpath("//input[@id='alias']")).sendKeys(obj.get(0).get(10));
	}
	
	public void register() {
		driver.findElement(By.xpath("//button[@id='submitAccount']")).click();
	}
	
	public void emailLogin(String email) {
		driver.findElement(By.xpath("//input[@id='email']")).sendKeys(email);
		
	}
	
	public void passwordLogin(String password) {
		driver.findElement(By.xpath("//input[@id='passwd']")).sendKeys(password);
		
	}
	
	public void Login() {
		driver.findElement(By.xpath("//button[@id='SubmitLogin']")).click();
		
	}
	
	
	
}
