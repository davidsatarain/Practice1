Feature: Account Logout
	
	@LogoutTest
	Scenario: Validating the browser and the home page
	Given Validate the browser
	 When Home page is triggered
	 Then Check if the user is on the home page
	
	@LogoutTest
  Scenario: Login into the existing account
    Given User click on the sign button 
    	And Authentication page is populated
     When User enter the email already created with "testing@simulation.com"
      And User enter the password with "DS123"
      And User click on the Sign in button
     Then MY ACCOUNT page is populated
     
  @LogoutTest
  Scenario: Sign off from the existing session 
    Given MY ACCOUNT page is populated 
     When User click on the sign out button
     Then The session has been closed sucessfully
      And The browser closes
      
   
    

    