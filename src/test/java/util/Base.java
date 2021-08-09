package util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class Base {
	
	public static WebDriver driver;
	
	public void hoverOverElement(WebElement locator) {
		Actions actions = new Actions(driver);
		actions.moveToElement(locator).perform();
	}
		
	}

