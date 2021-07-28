package stepDefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;


import org.junit.runner.RunWith;

import Actions.MyStore;

@RunWith(Cucumber.class)
public class stepDefination {
	
	MyStore my_store = new MyStore();
	
    
    @Given("^Validate the browser$")
    public void validate_the_browser() throws Throwable {
    	my_store.launchBrowser();
    	System.out.println("Browser openning and maximized");
    }
    
    @When("^Home page is triggered$")
    public void browser_is_triggered() throws Throwable {
    	my_store.openURL();
    	System.out.println("Browser and page triggered");
    }

    @Then("^Check if the user is on the home page$")
    public void check_home_page() throws Throwable {
    	my_store.verifyingURL();
    	System.out.println("User is on the home page");
    }
    
    @Given("^User click on the sign button$")
    public void user_click_on_sign_button() throws Throwable {
    //code to navigate to URL
    	my_store.creatingAccount();
    	System.out.println("Button clicked");
    	
    }
    
    @And("^Authentication page is populated$")
    public void authentication_page() throws Throwable {
        my_store.verifyingAuthentication();
    	System.out.println("Authentication page");
    }
    
    @When("^User enter the email with \"([^\"]*)\"$")
    public void puttingEmail(String arg) throws Throwable {
    	my_store.puttingEmail(arg);
    	System.out.println("Email entered");
    }
    

   @And("^User click on the Create an account button$")
    public void clickCreate() throws Throwable {
        //home page validation
    	System.out.println("Create button clicked"); 

    } 
    
    @Then("^The CREATE AN ACCOUNT page is populated$")
    public void create_account_page() throws Throwable {
    	my_store.verifyingCreateAnAccount();
    	System.out.println("User is on the CREATE AN ACCOUNT page");
    }

    @Given("^The User is on the CREATE AN ACCOUNT page$")
    public void the_create_an_account_page_is_populated() throws Throwable {
    	System.out.println("User is ready to create an account");
    }
    
    @When("^User choose the title \"([^\"]*)\"$")
    public void user_choose_the_title(String title) throws Throwable {
        my_store.selectTitle(title);
        System.out.println("Title Selected");
    }

    @Then("^MY ACCOUNT page is populated$")
    public void my_account_page_is_populated() throws Throwable {
        my_store.verifyingMyAccount();
        System.out.println("The user logged in successfully");
    }

    @And("^User enter the following details of personal information$")
    public void user_enter_the_following_details_of_personal_information(DataTable data) throws Throwable {
    	my_store.fillingInfo(data);
    	System.out.println("Personal Info entered");
    	
    }

    @And("^User select the newsletter checkbox$")
    public void user_select_the_newsletter_checkbox() throws Throwable {
        my_store.newsletter();
        System.out.println("Signed up for newsletter");
    }

    @And("^User select the special offers checkbox$")
    public void user_select_the_special_offers_checkbox() throws Throwable {
        my_store.specialOffers();
        System.out.println("Registered for special offers");
    }

    @And("^User enter the following details of the address$")
    public void user_enter_the_following_details_of_the_adress(DataTable data2) throws Throwable {
        my_store.fillingAddress(data2);
        System.out.println("Address Info entered");
    }

    @And("^User click on the Register button$")
    public void user_click_on_the_register_button() throws Throwable {
        my_store.register();
        System.out.println("The user's account has been successfully registered");
    }
    
    @When("^User enter the email already created with \"([^\"]*)\"$")
    public void user_enter_the_email_already_created(String email) throws Throwable {
    	my_store.emailLogin(email);
        System.out.println("Email entered");
    }

    @And("^User enter the password with \"([^\"]*)\"$")
    public void user_enter_the_password_already_setted(String password) throws Throwable {
       my_store.passwordLogin(password);
       System.out.println("Password entered");
    }

    @And("^User click on the Sign in button$")
    public void user_click_on_the_sing_in_button() throws Throwable {
    	my_store.Login();
        System.out.println("Sing in button pressed");
    }
    
    


}