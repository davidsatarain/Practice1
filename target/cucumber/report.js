$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Account Login",
  "description": "",
  "id": "account-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validating the browser and the home page",
  "description": "",
  "id": "account-login;validating-the-browser-and-the-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Check if the user is on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.validate_the_browser()"
});
formatter.result({
  "duration": 2197865700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "duration": 19754397200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.check_home_page()"
});
formatter.result({
  "duration": 6855600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login into the existing account",
  "description": "",
  "id": "account-login;login-into-the-existing-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User click on the sign button",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Authentication page is populated",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter the email already created with \"testing@simulation.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter the password with \"DS123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on the Sing in button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "MY ACCOUNT page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.user_click_on_sign_button()"
});
formatter.result({
  "duration": 9276215800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.authentication_page()"
});
formatter.result({
  "duration": 9233800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing@simulation.com",
      "offset": 43
    }
  ],
  "location": "stepDefination.user_enter_the_email_already_created(String)"
});
formatter.result({
  "duration": 105156900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DS123",
      "offset": 30
    }
  ],
  "location": "stepDefination.user_enter_the_password_already_setted(String)"
});
formatter.result({
  "duration": 82660300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_sing_in_button()"
});
formatter.result({
  "duration": 12413963100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.my_account_page_is_populated()"
});
formatter.result({
  "duration": 8949200,
  "status": "passed"
});
});