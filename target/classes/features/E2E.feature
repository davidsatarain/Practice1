Feature: End-to-end test
	
	@E2ETest
	Scenario: Validating the browser and the home page
	Given Validate the browser
	 When Home page is triggered
	 Then Check if the user is on the home page
	 
	 
	@E2ETest
  Scenario: Creating an account
    Given User click on the sign button 
    	And Authentication page is populated
     When User enter the email with "endtoend6@testing.com"
      And User click on the Create an account button
     Then The CREATE AN ACCOUNT page is populated
     
     
  @E2ETest
   Scenario: Filling the info
    Given The User is on the CREATE AN ACCOUNT page
     When User choose the title "Mr"
     	And User enter the following details of personal information
     	| Jesus | Satarain | DS123 | 22 | 6 | 1997 |
     	And User select the newsletter checkbox
     	And User select the special offers checkbox
     	And User enter the following details of the address
     	| IBM | Johnson 888 | St Joseph | Los Angeles | California | 70030 | United States | Green House | 6677575764 | 6677988776 | Home |
     	And User click on the Register button
     Then MY ACCOUNT page is populated
      And User click on the sign out button   
	
	@E2ETest
  Scenario: Login into the existing account
    Given User click on the sign button 
    	And Authentication page is populated
     When User enter the email already created with "endtoend6@testing.com"
      And User enter the password with "DS123"
      And User click on the Sign in button
     Then MY ACCOUNT page is populated
     
  @E2ETest
  Scenario: The user search for items from the search bar
    Given Home page is triggered 
     When User search for some "T-shirt"
      And User click on the search button
      And User select the "Faded Short" option
      And User selects the following details for the item
      | 2 | M | Blue |
      And User add the products to the cart
      And User click on the Continue shopping button
     Then The user is ready to continue

		@E2ETest
  Scenario: The user search for items from the category tabs
    Given Home page is triggered 
     When User click on the "Blouses" category
      And User select the "Blouse" option
      And User selects the following details for the item
      | 3 | L | Black |
      And User add the products to the cart
      And User click on the Continue shopping button
      And User click on the "Evening Dresses" category
      And User click on the "All specials" small button
      And User select the "Printed Chiffon Dress" option
      And User selects the following details for the item
      | 1 | S | Green |
      And User add the products to the cart
      And User click on the Continue shopping button
     Then The user is ready to continue
     
     @E2ETest
  Scenario: The user is ready to pay
  	Given The user has products in the Cart
  	 When User click on the Check out button
  	  And User proceeds to checkout
  	  And User writes "Be careful with the clothes"
  	  And User proceeds to Shipping options
  	  And User reads the terms
  	  And User select the Terms of service checkbox
  	  And User proceeds to the payment
  	  And User selects the "bankwire" payment option
  	  And User confirms the order
  	  And User goes to the orders page
  	  And User checks and confirms the details of the order
  	  And User downloads the invoice as PDF
  	 Then The order has been completed successfully
  	 
    @E2ETest
  Scenario: Sign off from the existing session 
    Given MY ACCOUNT page is populated 
     When User click on the sign out button
     Then The session has been closed sucessfully
      And The browser closes
  	 
  	 
  	  
     
     
     
     
     
     
    
     
     
      
   
    

    