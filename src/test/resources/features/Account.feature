Feature: Account Creating
	
	@AccountTest
	Scenario: Validating the browser and the home page
	Given Validate the browser
	When Browser is triggered
	Then Check if the user is on the home page
	
	@AccountTest
  Scenario: Creating an account
    Given User click on the sign button 
    	And Authentication page is populated
     When User enter the email with "testing@simulation.com"
      And User click on the Create an account button
     Then The CREATE AN ACCOUNT page is populated
      
   @AccountTest
   Scenario: Filling the info
    Given The User is on the CREATE AN ACCOUNT page
     When User choose the title "Mr"
     	And User enter the following details of personal information
     	| David | Satarain | DS123 | 22 | 06 | 1997 |
     	And User select the newsletter checkbox
     	And User select the special offers checkbox
     	And User enter the following details of the address
     	| IBM | Johnson 888 | St Joseph | Los Angeles | California | 90020 | United States | Green House | 6677575764 | 6677988776 | Home |
     	And User click on the Register button
     Then MY ACCOUNT page is populated
    

    