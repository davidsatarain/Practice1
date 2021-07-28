Feature: Shopping Login
	
	@ShoppingTest
	Scenario: Validating the browser and the home page
	Given Validate the browser
	 When Home page is triggered
	 Then Check if the user is on the home page
	
	@ShoppingTest
  Scenario: Login into the existing account
    Given User click on the sign button 
    	And Authentication page is populated
     When User enter the email already created with "testing@simulation.com"
      And User enter the password with "DS123"
      And User click on the Sign in button
     Then MY ACCOUNT page is populated
     
  @ShoppingTest
  Scenario: The user search for items from the search bar
    Given Home page is triggered 
     When User search for some "T-shirt"
      And User click on the search button
      And User select the "Faded Short" option
      And User selects the following details for the item
      | 2 | M | Blue |
      And User add the products to the cart
      And User click on the Continue shopping button
     Then The item is on the shopping cart

		@ShoppingTest
  Scenario: The user search for items from the category tabs
    Given Home page is triggered 
     When User click on the "Blouses" category
      And User select the "Blouse" option
      And User selects the following details for the item
      | 3 | L | Black |
      And User add the products to the cart
      And User click on the Continue shopping button
      And User click on the "EVENING DRESSES" category
      And User select the "Printed Dress" option
      And User add the products to the cart
      And User click on the Continue shopping button
      And User click on the All specials button
      And User select the "Printed Chiffon Dress" option
      And User selects the following details for the item
      | 1 | S | Yellow |
      And User add the products to the cart
      And User click on the Continue shopping button
     Then The item is on the shopping cart
     
     @ShoppingTest
  Scenario: The user is ready to pay
  	Given The user has products in the Cart
  	 When User click on the Check out button
  	  And User proceeds to checkout
  	  And User writes "Be careful with the clothes"
  	  And User proceeds to Shipping options
  	  And User select the Terms of service checkbox
  	  And User proceeds to the payment
  	  And User selects the "bankwire" option
  	  And User confirms the order
  	  And User goes to the orders page
  	  And User checks the details of the order
  	  And User downloads the invoice as PDF
  	 Then The order has been completed successfully
  	 
  	 
  	  
     
     
     
     
     
     
    
     
     
      
   
    

    