package stepDefinations;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	@Before("@MobileTest")
	public void beforevalidation() {
		
		System.out.println("before mobile hook");
		
	}
	
	@After("@MobileTest")
	public void Aftervalidation() {
		
		System.out.println("After Mobile hook");
		
	}
	
	@Before("@WebTest")
	public void beforeWebvalidation() {
		
		System.out.println("before web hook");
		
	}
	
	@After("@WebTest")
	public void AfterWebvalidation() {
		
		System.out.println("After web hook");
		
	}

}
