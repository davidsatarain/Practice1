package Actions;

import java.io.IOException;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import util.Base;

public class MyStore extends Base{
	
	private String item;
	private String reference;
	
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
	
	public void searchBar(String item) {
		driver.findElement(By.xpath("//input[@id='search_query_top']")).sendKeys(item);
	}
	
	public void searchButton() {
		driver.findElement(By.xpath("//button[@name='submit_search']")).click();
	}
	
	public void addItems(String product) throws InterruptedException {
		Thread.sleep(3000);
		List<WebElement> products = driver.findElements(By.cssSelector("a.product-name"));
		
		for (int i=0;i<products.size();i++) {
			
			String[] name = products.get(i).getText().split("-");
			String formattedName = name[0].trim();
			System.out.println(formattedName);
			
			if (formattedName.contains(product)) {
			
				driver.findElements(By.xpath("//a[@class='product-name']")).get(i).click();
				this.item = product; 
				break;
			}
		}
		Thread.sleep(2000);
		
	}
	
	public void selectingDetails(DataTable data3) throws InterruptedException {
		
		List<List<String>>	obj=data3.raw();
		
		driver.findElement(By.xpath("//input[@id='quantity_wanted']")).clear();
        driver.findElement(By.xpath("//input[@id='quantity_wanted']")).sendKeys(obj.get(0).get(0));
        
        Select size = new Select(driver.findElement(By.id("group_1")));
        size.selectByVisibleText(obj.get(0).get(1));
        Thread.sleep(2000);
        
        driver.findElement(By.xpath("//li[a/@name='"+obj.get(0).get(2)+"']")).click();
        
	}
	
	public void addToCartButton() {
		driver.findElement(By.xpath("//span[contains(text(),'Add to cart')]")).click();
	}
	
	public void continueShopping() throws InterruptedException {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//span[@title='Continue shopping']")).click();
		Thread.sleep(2000);
	}
	
	public void findByCategory(String category) throws InterruptedException {
		Thread.sleep(3000);
		
		List<WebElement> categories = driver.findElements(By.cssSelector("a.sf-with-ul"));
		WebDriverWait wait = new WebDriverWait(driver,2);
		
		for (int i=0;i<categories.size();i++) {
			
			hoverOverElement(categories.get(i));

			if(driver.findElement(By.xpath("//*[@title='"+category+"']")).isDisplayed()) {
				wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@title='"+category+"']"))).click();
				break;
			}

					
				
		}	
		Thread.sleep(3000);
	}
	
	public void allSpecialsButton(String smallButton) throws InterruptedException {
		Thread.sleep(3000);
		List<WebElement> buttons = driver.findElements(By.xpath("//a[@class='btn btn-default button button-small']")); 
		
		for (int i=0;i<buttons.size();i++) {
			
			String[] name = buttons.get(i).getText().split("-");
			String formattedName = name[0].trim();
			
			if (formattedName.contains(smallButton)) {
				driver.findElements(By.xpath("//a[@class='btn btn-default button button-small']")).get(i).click();
				break;
			}
		}
		
	}
	
	public void verifyingCart() throws InterruptedException {
		hoverOverElement(driver.findElement(By.xpath("//a[@title='View my shopping cart']")));
		
		Thread.sleep(1000);
		
		List<WebElement> cartProducts = driver.findElements(By.cssSelector("a.cart_block_product_name"));
		
		Assert.assertTrue(cartProducts.size()>0);
	}
	
	public void checkingOut() {
		driver.findElement(By.xpath("//a[@id='button_order_cart']")).click();
	}
	
	public void proceedToCheckOut() throws InterruptedException {
		Thread.sleep(1000);
		driver.findElement(By.cssSelector("a.button.btn.btn-default.standard-checkout.button-medium")).click();
	}
	
	public void orderComment(String comment) throws InterruptedException {
		Thread.sleep(1000);
		driver.findElement(By.cssSelector("textarea.form-control")).sendKeys(comment);
		
	}
	
	public void proceedsToShippingOptions() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//button[@name='processAddress']")).click();
		
	}
	
	
	public void termsCheckBox() throws InterruptedException {
		Thread.sleep(1000);
		driver.findElement(By.id("cgv")).click();

	}	
	
	public void proceedsToPayment() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//button[@name='processCarrier']")).click();
		
	}
	
	public void payMethod(String pay) throws InterruptedException {
		Thread.sleep(2000);	
		driver.findElement(By.xpath("//a[@class='"+pay+"']")).click();
	}
	
	public void confirmOrder() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//button[@class='button btn btn-default button-medium']")).click();

	}
	
	public void backToOrders() throws InterruptedException, IOException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[@class='button-exclusive btn btn-default']")).click();
	}
	
	public void checkingOrder() throws InterruptedException {
		Thread.sleep(2000);
				
		List<WebElement> rows = driver.findElements(By.xpath("//tr"));
		
		for(int i=0;i<rows.size();i++) {
			
			if(i==1) {
				
				List<WebElement> columns = rows.get(i).findElements(By.xpath("//td"));
				
				for(int j=0;j<columns.size();j++) {
					if(j==6) {
						columns.get(j).findElement(By.cssSelector("a.btn.btn-default.button.button-small")).click();
					}
				}

			}
		}
			
		
	}
	
	public void downloadingPDF() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[contains(text(),'Download your invoice as a PDF file.')]")).click();
	}
	
	public void readTerms() throws InterruptedException {
		Thread.sleep(1000);
		driver.findElement(By.cssSelector("a.iframe")).click();
		Thread.sleep(2000);
		driver.findElement(By.tagName("body")).sendKeys(Keys.END);
		Thread.sleep(1000);
		driver.findElement(By.xpath("//a[@title='Close']")).click();
		Thread.sleep(1000);
	}
	
	public void finishing() throws InterruptedException {
		Thread.sleep(2000);
		
		List<WebElement> buttons = driver.findElements(By.xpath("//a[@href='http://automationpractice.com/index.php?controller=my-account']"));
		
		for(int i=0;i<buttons.size();i++) {
			
			String[] name = buttons.get(i).getText().split("-");
			String formattedName = name[0].trim();
			
			if(formattedName.contains("Back to your account.")) {
				driver.findElements(By.xpath("//a[@href='http://automationpractice.com/index.php?controller=my-account']")).get(i).click();
				break;
			}
			
		}
		
	}
	
	public void signOut() throws InterruptedException {
		driver.findElement(By.cssSelector("a.logout")).click();
		Thread.sleep(2000);
	}
	
	public void closingWindow() {
		driver.close();
	}
	
	
}
	
	

