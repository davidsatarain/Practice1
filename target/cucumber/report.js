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
  "duration": 6160580800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "duration": 4806926200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.check_home_page()"
});
formatter.result({
  "duration": 36328900,
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
  "name": "User enter the email with \"endtoend7@testing.com\"",
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
  "duration": 4277967400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.authentication_page()"
});
formatter.result({
  "duration": 31491600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "endtoend7@testing.com",
      "offset": 27
    }
  ],
  "location": "stepDefination.puttingEmail(String)"
});
formatter.result({
  "duration": 2561313100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.clickCreate()"
});
formatter.result({
  "duration": 225100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.create_account_page()"
});
formatter.result({
  "duration": 10032972600,
  "status": "passed"
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
  "duration": 296500,
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
  "duration": 3192218900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_enter_the_following_details_of_personal_information(DataTable)"
});
formatter.result({
  "duration": 7913924300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_select_the_newsletter_checkbox()"
});
formatter.result({
  "duration": 227661400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_select_the_special_offers_checkbox()"
});
formatter.result({
  "duration": 237222400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_enter_the_following_details_of_the_adress(DataTable)"
});
formatter.result({
  "duration": 7294499700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_register_button()"
});
formatter.result({
  "duration": 4801956400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.my_account_page_is_populated()"
});
formatter.result({
  "duration": 18252400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_sign_out_button()"
});
formatter.result({
  "duration": 7942861800,
  "status": "passed"
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
  "name": "User enter the email already created with \"endtoend7@testing.com\"",
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
  "duration": 3989760600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.authentication_page()"
});
formatter.result({
  "duration": 16907300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "endtoend7@testing.com",
      "offset": 43
    }
  ],
  "location": "stepDefination.user_enter_the_email_already_created(String)"
});
formatter.result({
  "duration": 3328704500,
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
  "duration": 273542700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_sing_in_button()"
});
formatter.result({
  "duration": 4492989400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.my_account_page_is_populated()"
});
formatter.result({
  "duration": 18823200,
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
  "duration": 4164992200,
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
  "duration": 381418300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_search_button()"
});
formatter.result({
  "duration": 3227494900,
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
  "duration": 7933364200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_selects_the_following_details_for_the_item(DataTable)"
});
formatter.result({
  "duration": 2977385300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_add_the_products_to_the_cart()"
});
formatter.result({
  "duration": 3236477300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_continue_shopping_button()"
});
formatter.result({
  "duration": 10198264100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_item_is_on_the_shopping_cart()"
});
formatter.result({
  "duration": 368400,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "The user search for items from the category tabs",
  "description": "",
  "id": "end-to-end-test;the-user-search-for-items-from-the-category-tabs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@E2ETest"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "Home page is triggered",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "User click on the \"Blouses\" category",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User select the \"Blouse\" option",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User selects the following details for the item",
  "rows": [
    {
      "cells": [
        "3",
        "L",
        "Black"
      ],
      "line": 60
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User add the products to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User click on the Continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User click on the \"Evening Dresses\" category",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User click on the \"All specials\" small button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User select the \"Printed Chiffon Dress\" option",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User selects the following details for the item",
  "rows": [
    {
      "cells": [
        "1",
        "S",
        "Green"
      ],
      "line": 67
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User add the products to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User click on the Continue shopping button",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "The user is ready to continue",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "duration": 4383330900,
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
  "duration": 9574846600,
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
  "duration": 7536485000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_selects_the_following_details_for_the_item(DataTable)"
});
formatter.result({
  "duration": 2949210300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_add_the_products_to_the_cart()"
});
formatter.result({
  "duration": 3261887500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_continue_shopping_button()"
});
formatter.result({
  "duration": 10203141500,
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
  "duration": 11175131300,
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
  "duration": 8941366600,
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
  "duration": 8464258100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_selects_the_following_details_for_the_item(DataTable)"
});
formatter.result({
  "duration": 2950199400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_add_the_products_to_the_cart()"
});
formatter.result({
  "duration": 3244561900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_continue_shopping_button()"
});
formatter.result({
  "duration": 10222616900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_item_is_on_the_shopping_cart()"
});
formatter.result({
  "duration": 166300,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "The user is ready to pay",
  "description": "",
  "id": "end-to-end-test;the-user-is-ready-to-pay",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 72,
      "name": "@E2ETest"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "The user has products in the Cart",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "User click on the Check out button",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "User proceeds to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User writes \"Be careful with the clothes\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User proceeds to Shipping options",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User reads the terms",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User select the Terms of service checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User proceeds to the payment",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User selects the \"bankwire\" payment option",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "User confirms the order",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "User goes to the orders page",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "User checks and confirms the details of the order",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User downloads the invoice as PDF",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "The order has been completed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.the_user_has_products_in_the_cart()"
});
formatter.result({
  "duration": 1343215200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_check_out_button()"
});
formatter.result({
  "duration": 2605599100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_proceeds_to_checkout()"
});
formatter.result({
  "duration": 2915824100,
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
  "duration": 1335094600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_proceeds_to_shipping_options()"
});
formatter.result({
  "duration": 5113961500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_reads_the_terms()"
});
formatter.result({
  "duration": 8724928500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_select_the_terms_of_service_checkbox()"
});
formatter.result({
  "duration": 1218549100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_proceeds_to_the_payment()"
});
formatter.result({
  "duration": 4991646800,
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
  "duration": 4925886000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_confirms_the_order()"
});
formatter.result({
  "duration": 6938167100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_goes_to_the_orders_page()"
});
formatter.result({
  "duration": 7625746100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_checks_the_details_of_the_order()"
});
formatter.result({
  "duration": 5280539500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_downloads_the_invoice_as_pdf()"
});
formatter.result({
  "duration": 10304881900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_order_has_been_completed_successfully()"
});
formatter.result({
  "duration": 3872932200,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Sign off from the existing session",
  "description": "",
  "id": "end-to-end-test;sign-off-from-the-existing-session",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 89,
      "name": "@E2ETest"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "MY ACCOUNT page is populated",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "User click on the sign out button",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "The session has been closed sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "The browser closes",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.my_account_page_is_populated()"
});
formatter.result({
  "duration": 22996300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_sign_out_button()"
});
formatter.result({
  "duration": 6895529300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_session_has_been_closed_sucessfully()"
});
formatter.result({
  "duration": 14887000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_browser_closes()"
});
formatter.result({
  "duration": 292251300,
  "status": "passed"
});
});