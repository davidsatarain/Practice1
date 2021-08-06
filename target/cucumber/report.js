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
  "duration": 3864946300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.browser_is_triggered()"
});
formatter.result({
  "duration": 4856706900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.check_home_page()"
});
formatter.result({
  "duration": 15343400,
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
  "duration": 2707039900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.authentication_page()"
});
formatter.result({
  "duration": 12046600,
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
  "duration": 2260701600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.clickCreate()"
});
formatter.result({
  "duration": 131200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.create_account_page()"
});
formatter.result({
  "duration": 10010475600,
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
  "duration": 75500,
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
  "duration": 3095012600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_enter_the_following_details_of_personal_information(DataTable)"
});
formatter.result({
  "duration": 6721417300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_select_the_newsletter_checkbox()"
});
formatter.result({
  "duration": 65777400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_select_the_special_offers_checkbox()"
});
formatter.result({
  "duration": 87167200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_enter_the_following_details_of_the_adress(DataTable)"
});
formatter.result({
  "duration": 5293474500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_register_button()"
});
formatter.result({
  "duration": 1323945600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.my_account_page_is_populated()"
});
formatter.result({
  "duration": 5359100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_sign_out_button()"
});
formatter.result({
  "duration": 4451353700,
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
  "duration": 1670314800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.authentication_page()"
});
formatter.result({
  "duration": 9013300,
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
  "duration": 3118308200,
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
  "duration": 96576000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_sing_in_button()"
});
formatter.result({
  "duration": 1141413900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.my_account_page_is_populated()"
});
formatter.result({
  "duration": 3459400,
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
  "duration": 1773115400,
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
  "duration": 169318900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_search_button()"
});
formatter.result({
  "duration": 1168917600,
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
  "duration": 6408841100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_selects_the_following_details_for_the_item(DataTable)"
});
formatter.result({
  "duration": 2410763900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_add_the_products_to_the_cart()"
});
formatter.result({
  "duration": 3093267500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_continue_shopping_button()"
});
formatter.result({
  "duration": 10089920700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_item_is_on_the_shopping_cart()"
});
formatter.result({
  "duration": 53000,
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
  "duration": 1864663600,
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
  "duration": 7686207900,
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
  "duration": 6483186000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_selects_the_following_details_for_the_item(DataTable)"
});
formatter.result({
  "duration": 2377732700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_add_the_products_to_the_cart()"
});
formatter.result({
  "duration": 3090461400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_continue_shopping_button()"
});
formatter.result({
  "duration": 10092060700,
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
  "duration": 7554722200,
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
  "duration": 5407616300,
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
  "duration": 6459194200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_selects_the_following_details_for_the_item(DataTable)"
});
formatter.result({
  "duration": 2315507300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_add_the_products_to_the_cart()"
});
formatter.result({
  "duration": 3092456100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_continue_shopping_button()"
});
formatter.result({
  "duration": 10077539300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_item_is_on_the_shopping_cart()"
});
formatter.result({
  "duration": 80600,
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
  "duration": 1220179100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_check_out_button()"
});
formatter.result({
  "duration": 1261271700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_proceeds_to_checkout()"
});
formatter.result({
  "duration": 2201824300,
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
  "duration": 1175501000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_proceeds_to_shipping_options()"
});
formatter.result({
  "duration": 2963572600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_reads_the_terms()"
});
formatter.result({
  "duration": 8296577400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_select_the_terms_of_service_checkbox()"
});
formatter.result({
  "duration": 1094751700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_proceeds_to_the_payment()"
});
formatter.result({
  "duration": 3004252500,
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
  "duration": 2793989600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_confirms_the_order()"
});
formatter.result({
  "duration": 4008117600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_goes_to_the_orders_page()"
});
formatter.result({
  "duration": 6249202100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_checks_the_details_of_the_order()"
});
formatter.result({
  "duration": 5122280700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_downloads_the_invoice_as_pdf()"
});
formatter.result({
  "duration": 10122032100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_order_has_been_completed_successfully()"
});
formatter.result({
  "duration": 3005275800,
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
  "duration": 11617500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.user_click_on_the_sign_out_button()"
});
formatter.result({
  "duration": 3616993600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_session_has_been_closed_sucessfully()"
});
formatter.result({
  "duration": 10465300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.the_browser_closes()"
});
formatter.result({
  "duration": 143234700,
  "status": "passed"
});
});