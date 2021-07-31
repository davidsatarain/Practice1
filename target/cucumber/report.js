$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Shopping.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping Login",
  "description": "",
  "id": "shopping-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validating the browser and the home page",
  "description": "",
  "id": "shopping-login;validating-the-browser-and-the-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@ShoppingTest"
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
  "duration": 2190871000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "duration": 5820206200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.check_home_page()"
});
formatter.result({
  "duration": 7472400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login into the existing account",
  "description": "",
  "id": "shopping-login;login-into-the-existing-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@ShoppingTest"
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
  "name": "User click on the Sign in button",
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
  "duration": 1695287300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.authentication_page()"
});
formatter.result({
  "duration": 8514100,
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
  "duration": 108782800,
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
  "duration": 100726700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_sing_in_button()"
});
formatter.result({
  "duration": 1801655900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.my_account_page_is_populated()"
});
formatter.result({
  "duration": 4056000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "The user search for items from the search bar",
  "description": "",
  "id": "shopping-login;the-user-search-for-items-from-the-search-bar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@ShoppingTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Home page is triggered",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User search for some \"T-shirt\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select the \"Faded Short\" option",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User selects the following details for the item",
  "rows": [
    {
      "cells": [
        "2",
        "M",
        "Blue"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User add the products to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on the Continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "The user is ready to continue",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "duration": 1751317000,
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
  "duration": 82740100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_search_button()"
});
formatter.result({
  "duration": 1837364000,
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
formatter.result({
  "duration": 6522087000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_selects_the_following_details_for_the_item(DataTable)"
});
formatter.result({
  "duration": 2382520900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_add_the_products_to_the_cart()"
});
formatter.result({
  "duration": 49609400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_continue_shopping_button()"
});
formatter.result({
  "duration": 7090377900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_item_is_on_the_shopping_cart()"
});
formatter.result({
  "duration": 47800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "The user search for items from the category tabs",
  "description": "",
  "id": "shopping-login;the-user-search-for-items-from-the-category-tabs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@ShoppingTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Home page is triggered",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User click on the \"Blouses\" category",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User select the \"Blouse\" option",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User selects the following details for the item",
  "rows": [
    {
      "cells": [
        "3",
        "L",
        "Black"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User add the products to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on the Continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on the \"Evening Dresses\" category",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User click on the \"All specials\" small button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User select the \"Printed Chiffon Dress\" option",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User selects the following details for the item",
  "rows": [
    {
      "cells": [
        "1",
        "S",
        "Green"
      ],
      "line": 43
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User add the products to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User click on the Continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "The user is ready to continue",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "duration": 2651040100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouses",
      "offset": 19
    }
  ],
  "location": "stepDefination.user_click_on_the_something_category(String)"
});
formatter.result({
  "duration": 7853178200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 17
    }
  ],
  "location": "stepDefination.user_select_the_something_option(String)"
});
formatter.result({
  "duration": 6627657500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_selects_the_following_details_for_the_item(DataTable)"
});
formatter.result({
  "duration": 2352592700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_add_the_products_to_the_cart()"
});
formatter.result({
  "duration": 65778400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_continue_shopping_button()"
});
formatter.result({
  "duration": 7065200500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Evening Dresses",
      "offset": 19
    }
  ],
  "location": "stepDefination.user_click_on_the_something_category(String)"
});
formatter.result({
  "duration": 8651850700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All specials",
      "offset": 19
    }
  ],
  "location": "stepDefination.user_click_on_the_something_small_button(String)"
});
formatter.result({
  "duration": 5280305300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 17
    }
  ],
  "location": "stepDefination.user_select_the_something_option(String)"
});
formatter.result({
  "duration": 6790384300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_selects_the_following_details_for_the_item(DataTable)"
});
formatter.result({
  "duration": 2342544200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_add_the_products_to_the_cart()"
});
formatter.result({
  "duration": 65483300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_continue_shopping_button()"
});
formatter.result({
  "duration": 7073849600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_item_is_on_the_shopping_cart()"
});
formatter.result({
  "duration": 132300,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "The user is ready to pay",
  "description": "",
  "id": "shopping-login;the-user-is-ready-to-pay",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@ShoppingTest"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "The user has products in the Cart",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User click on the Check out button",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "User proceeds to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User writes \"Be careful with the clothes\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User proceeds to Shipping options",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User reads the terms",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User select the Terms of service checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User proceeds to the payment",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User selects the \"bankwire\" payment option",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User confirms the order",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User goes to the orders page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User checks and confirms the details of the order",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User downloads the invoice as PDF",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "The order has been completed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.the_user_has_products_in_the_cart()"
});
formatter.result({
  "duration": 1198003700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_check_out_button()"
});
formatter.result({
  "duration": 1369310500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_proceeds_to_checkout()"
});
formatter.result({
  "duration": 3075749000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Be careful with the clothes",
      "offset": 13
    }
  ],
  "location": "stepDefination.user_writes_something(String)"
});
formatter.result({
  "duration": 1103837600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_proceeds_to_shipping_options()"
});
formatter.result({
  "duration": 3778517900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_reads_the_terms()"
});
formatter.result({
  "duration": 5252275200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_select_the_terms_of_service_checkbox()"
});
formatter.result({
  "duration": 1130371500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_proceeds_to_the_payment()"
});
formatter.result({
  "duration": 3560223500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankwire",
      "offset": 18
    }
  ],
  "location": "stepDefination.user_selects_the_payment_option(String)"
});
formatter.result({
  "duration": 3524458100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_confirms_the_order()"
});
formatter.result({
  "duration": 5924517700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_goes_to_the_orders_page()"
});
formatter.result({
  "duration": 4313364800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_checks_the_details_of_the_order()"
});
formatter.result({
  "duration": 2124531800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_downloads_the_invoice_as_pdf()"
});
formatter.result({
  "duration": 2132053500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_order_has_been_completed_successfully()"
});
formatter.result({
  "duration": 4355398700,
  "status": "passed"
});
});