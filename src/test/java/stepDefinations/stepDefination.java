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
    
    @When("^User search for some \"([^\"]*)\"$")
    public void user_search_for_some_something(String item) throws Throwable {
        my_store.searchBar(item);
        System.out.println("Item entered in the search bar");

    }

    @Then("^The user is ready to continue$")
    public void the_item_is_on_the_shopping_cart() throws Throwable {
        System.out.println("The user continues with the shopping");
    }

    @And("^User click on the search button$")
    public void user_click_on_the_search_button() throws Throwable {
        my_store.searchButton();
        System.out.println("Search button clicked");
    }

    @And("^User select the \"([^\"]*)\" option$")
    public void user_select_the_something_option(String product) throws Throwable {
        my_store.addItems(product);
        System.out.println("The product was selected");
    }

    @And("^User selects the following details for the item$")
    public void user_selects_the_following_details_for_the_item(DataTable data3) throws Throwable {
        my_store.selectingDetails(data3);
        System.out.println("The user selected the details of the product");
    }

    @And("^User add the products to the cart$")
    public void user_add_the_products_to_the_cart() throws Throwable {
        my_store.addToCartButton();
        System.out.println("The user added the item to the Cart");
    }

    @And("^User click on the Continue shopping button$")
    public void user_click_on_the_continue_shopping_button() throws Throwable {
        my_store.continueShopping();
        System.out.println("The item was added to the shopping cart successfully");
    }
    
    @When("^User click on the \"([^\"]*)\" category$")
    public void user_click_on_the_something_category(String category) throws Throwable {
        my_store.findByCategory(category);
        System.out.println("The user clicked on the " + category + " category");
    }
    
    @And("^User click on the \"([^\"]*)\" small button$")
    public void user_click_on_the_something_small_button(String smallButton) throws Throwable {
    	Thread.sleep(1000);
    	my_store.allSpecialsButton(smallButton);
        System.out.println("The user clicked on the All specials button");
    }
    
    @Given("^The user has products in the Cart$")
    public void the_user_has_products_in_the_cart() throws Throwable {
        my_store.verifyingCart();
        System.out.println("The shopping cart has products");
    }

    @When("^User click on the Check out button$")
    public void user_click_on_the_check_out_button() throws Throwable {
       my_store.checkingOut();
       System.out.println("The user clicked on the Cart check out button");
    }

    @Then("^The order has been completed successfully$")
    public void the_order_has_been_completed_successfully() throws Throwable {
        my_store.finishing();
        System.out.println("The shopping process has been completed sucessfully");
    }

    @And("^User proceeds to checkout$")
    public void user_proceeds_to_checkout() throws Throwable {
        my_store.proceedToCheckOut();
        System.out.println("The user clicked on the Proceed to checkout button");
    }

    @And("^User writes \"([^\"]*)\"$")
    public void user_writes_something(String comment) throws Throwable {
       my_store.orderComment(comment);
       System.out.println("The user has commented on the order");
    }

    @And("^User proceeds to Shipping options$")
    public void user_proceeds_to_shipping_options() throws Throwable {
        my_store.proceedsToShippingOptions();
        System.out.println("The user proceeds to shipping options");
    }

    @And("^User select the Terms of service checkbox$")
    public void user_select_the_terms_of_service_checkbox() throws Throwable {
        my_store.termsCheckBox();
        System.out.println("The user agrees the therms of service.");
    }

    @And("^User proceeds to the payment$")
    public void user_proceeds_to_the_payment() throws Throwable {
        my_store.proceedsToPayment();
        System.out.println("The user proceeds to payment options");
    }

    @And("^User selects the \"([^\"]*)\" payment option$")
    public void user_selects_the_payment_option(String payMethod) throws Throwable {
        my_store.payMethod(payMethod);
        System.out.println("The user has selected the pay method");
    }

    @And("^User confirms the order$")
    public void user_confirms_the_order() throws Throwable {
        my_store.confirmOrder();
        System.out.println("The user clicked on the I confirm my order button");
    }

    @And("^User goes to the orders page$")
    public void user_goes_to_the_orders_page() throws Throwable {
        my_store.backToOrders();
        System.out.println("The user goes back to the orders");
    }

    @And("^User checks and confirms the details of the order$")
    public void user_checks_the_details_of_the_order() throws Throwable {
        my_store.checkingOrder();
        System.out.println("The user has confirmed and checked the details of the order");
    }

    @And("^User downloads the invoice as PDF$")
    public void user_downloads_the_invoice_as_pdf() throws Throwable {
        my_store.downloadingPDF();
        System.out.println("The invoice has been downloaded as PDF sucessfully");
    }
    
    @And("^User reads the terms$")
    public void user_reads_the_terms() throws Throwable {
        my_store.readTerms();
        System.out.println("The user has read the terms of the service.");
    }
    
    @When("^User click on the sign out button$")
    public void user_click_on_the_sign_out_button() throws Throwable {
        my_store.signOut();
        System.out.println("The user clicked on the Sign out button");

    }

    @Then("^The session has been closed sucessfully$")
    public void the_session_has_been_closed_sucessfully() throws Throwable {
        my_store.verifyingAuthentication();
        System.out.println("The user has logged out sucessfully");

    }

    @And("^The browser closes$")
    public void the_browser_closes() throws Throwable {
        my_store.closingWindow();
        System.out.println("The user has finished and the browser is closed.");

    }


}