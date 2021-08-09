$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E2E.feature");
formatter.feature({
  "line": 1,
  "name": "End-to-end test",
  "description": "",
  "id": "end-to-end-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validating the browser and the home page",
  "description": "",
  "id": "end-to-end-test;validating-the-browser-and-the-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@E2ETest"
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
  "name": "Home page is triggered",
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
  "duration": 5131610200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "duration": 3079189500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.check_home_page()"
});
formatter.result({
  "duration": 13228100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Creating an account",
  "description": "",
  "id": "end-to-end-test;creating-an-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@E2ETest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User click on the sign button",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Authentication page is populated",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter the email with \"david97@testing.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on the Create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The CREATE AN ACCOUNT page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.user_click_on_sign_button()"
});
formatter.result({
  "duration": 1554427200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.authentication_page()"
});
formatter.result({
  "duration": 33753200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "david97@testing.com",
      "offset": 27
    }
  ],
  "location": "stepDefination.puttingEmail(String)"
});
formatter.result({
  "duration": 2465154900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.clickCreate()"
});
formatter.result({
  "duration": 213200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.create_account_page()"
});
formatter.result({
  "duration": 10023341900,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat Actions.MyStore.verifyingCreateAnAccount(MyStore.java:78)\r\n\tat stepDefinations.stepDefination.create_account_page(stepDefination.java:69)\r\n\tat ✽.Then The CREATE AN ACCOUNT page is populated(E2E.feature:16)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 20,
  "name": "Filling the info",
  "description": "",
  "id": "end-to-end-test;filling-the-info",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@E2ETest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "The User is on the CREATE AN ACCOUNT page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User choose the title \"Mr\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enter the following details of personal information",
  "rows": [
    {
      "cells": [
        "Jesus",
        "Satarain",
        "DS123",
        "22",
        "6",
        "1997"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User select the newsletter checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User select the special offers checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User enter the following details of the address",
  "rows": [
    {
      "cells": [
        "IBM",
        "Johnson 888",
        "St Joseph",
        "Los Angeles",
        "California",
        "70030",
        "United States",
        "Green House",
        "6677575764",
        "6677988776",
        "Home"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "MY ACCOUNT page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User click on the sign out button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.the_create_an_account_page_is_populated()"
});
formatter.result({
  "duration": 207500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 23
    }
  ],
  "location": "stepDefination.user_choose_the_title(String)"
});
formatter.result({
  "duration": 3096236100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[input/@id\u003d\u0027id_gender1\u0027]\"}\n  (Session info: headless chrome\u003d92.0.4515.131)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-750JOEPR\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.131, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\102331~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:57545}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 93b21e72ce7cd4b6540fbe43672e6b77\n*** Element info: {Using\u003dxpath, value\u003d//span[input/@id\u003d\u0027id_gender1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Actions.MyStore.selectTitle(MyStore.java:66)\r\n\tat stepDefinations.stepDefination.user_choose_the_title(stepDefination.java:80)\r\n\tat ✽.When User choose the title \"Mr\"(E2E.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefination.user_enter_the_following_details_of_personal_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.user_select_the_newsletter_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.user_select_the_special_offers_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.user_enter_the_following_details_of_the_adress(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.my_account_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_sign_out_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "Login into the existing account",
  "description": "",
  "id": "end-to-end-test;login-into-the-existing-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@E2ETest"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User click on the sign button",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Authentication page is populated",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enter the email already created with \"david97@testing.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User enter the password with \"DS123\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on the Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "MY ACCOUNT page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.user_click_on_sign_button()"
});
formatter.result({
  "duration": 3364599100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.authentication_page()"
});
formatter.result({
  "duration": 12185100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "david97@testing.com",
      "offset": 43
    }
  ],
  "location": "stepDefination.user_enter_the_email_already_created(String)"
});
formatter.result({
  "duration": 3243038000,
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
  "duration": 215842200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_sing_in_button()"
});
formatter.result({
  "duration": 3407719100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.my_account_page_is_populated()"
});
formatter.result({
  "duration": 13786500,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "The user search for items from the search bar",
  "description": "",
  "id": "end-to-end-test;the-user-search-for-items-from-the-search-bar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@E2ETest"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "Home page is triggered",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "User search for some \"T-shirt\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User select the \"Faded Short\" option",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User selects the following details for the item",
  "rows": [
    {
      "cells": [
        "2",
        "M",
        "Blue"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User add the products to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User click on the Continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "The user is ready to continue",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "duration": 2174045000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T-shirt",
      "offset": 22
    }
  ],
  "location": "stepDefination.user_search_for_some_something(String)"
});
formatter.result({
  "duration": 269724300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_search_button()"
});
formatter.result({
  "duration": 1334474500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Faded Short",
      "offset": 17
    }
  ],
  "location": "stepDefination.user_select_the_something_option(String)"
});
