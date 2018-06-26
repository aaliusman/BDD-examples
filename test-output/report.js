$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/bravo1516/eclipse-workspace/FreeCrmBDD/src/main/java/features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM to create new contacts scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-to-create-new-contacts-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free Crm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user mouse hover to contacts page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters contacts info \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cjobtitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-to-create-new-contacts-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "jobtitle"
      ],
      "line": 14,
      "id": "free-crm-create-contacts;free-crm-to-create-new-contacts-scenario;;1"
    },
    {
      "cells": [
        "bravo1516",
        "abcd1234",
        "Rafael",
        "Nadal",
        "Sportsman"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-to-create-new-contacts-scenario;;2"
    },
    {
      "cells": [
        "bravo1516",
        "abcd1234",
        "Muhammad",
        "Usman",
        "Test Engineer"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-to-create-new-contacts-scenario;;3"
    },
    {
      "cells": [
        "bravo1516",
        "abcd1234",
        "John",
        "Travolta",
        "Actor"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-to-create-new-contacts-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Free CRM to create new contacts scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-to-create-new-contacts-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free Crm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"bravo1516\" and \"abcd1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user mouse hover to contacts page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters contacts info \"Rafael\" and \"Nadal\" and \"Sportsman\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 14608590775,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_login_page_is_Free_Crm()"
});
formatter.result({
  "duration": 81133329,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Free CRM software in the cloud powers sales and customer service]\u003e but was:\u003c[Get Insurance Quotes - Save on Auto Insurance - State Farm®]\u003e\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\n\tat stepDefinition.LoginSteps.title_of_login_page_is_Free_Crm(LoginSteps.java:34)\n\tat ✽.When title of login page is Free Crm(/Users/bravo1516/eclipse-workspace/FreeCrmBDD/src/main/java/features/contacts.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "bravo1516",
      "offset": 13
    },
    {
      "val": "abcd1234",
      "offset": 29
    }
  ],
  "location": "LoginSteps.enterCredentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.mouseHoverToContacts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rafael",
      "offset": 27
    },
    {
      "val": "Nadal",
      "offset": 40
    },
    {
      "val": "Sportsman",
      "offset": 52
    }
  ],
  "location": "LoginSteps.user_enters_contacts_info_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM to create new contacts scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-to-create-new-contacts-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free Crm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"bravo1516\" and \"abcd1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user mouse hover to contacts page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters contacts info \"Muhammad\" and \"Usman\" and \"Test Engineer\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 11041167728,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_login_page_is_Free_Crm()"
});
formatter.result({
  "duration": 13152674,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Free CRM software in the cloud powers sales and customer service]\u003e but was:\u003c[Get Insurance Quotes - Save on Auto Insurance - State Farm®]\u003e\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\n\tat stepDefinition.LoginSteps.title_of_login_page_is_Free_Crm(LoginSteps.java:34)\n\tat ✽.When title of login page is Free Crm(/Users/bravo1516/eclipse-workspace/FreeCrmBDD/src/main/java/features/contacts.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "bravo1516",
      "offset": 13
    },
    {
      "val": "abcd1234",
      "offset": 29
    }
  ],
  "location": "LoginSteps.enterCredentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.mouseHoverToContacts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Muhammad",
      "offset": 27
    },
    {
      "val": "Usman",
      "offset": 42
    },
    {
      "val": "Test Engineer",
      "offset": 54
    }
  ],
  "location": "LoginSteps.user_enters_contacts_info_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM to create new contacts scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-to-create-new-contacts-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free Crm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"bravo1516\" and \"abcd1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user mouse hover to contacts page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters contacts info \"John\" and \"Travolta\" and \"Actor\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 15527775420,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_login_page_is_Free_Crm()"
});
formatter.result({
  "duration": 15987103,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Free CRM software in the cloud powers sales and customer service]\u003e but was:\u003c[Get Insurance Quotes - Save on Auto Insurance - State Farm®]\u003e\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\n\tat stepDefinition.LoginSteps.title_of_login_page_is_Free_Crm(LoginSteps.java:34)\n\tat ✽.When title of login page is Free Crm(/Users/bravo1516/eclipse-workspace/FreeCrmBDD/src/main/java/features/contacts.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "bravo1516",
      "offset": 13
    },
    {
      "val": "abcd1234",
      "offset": 29
    }
  ],
  "location": "LoginSteps.enterCredentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.mouseHoverToContacts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 27
    },
    {
      "val": "Travolta",
      "offset": 38
    },
    {
      "val": "Actor",
      "offset": 53
    }
  ],
  "location": "LoginSteps.user_enters_contacts_info_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
});