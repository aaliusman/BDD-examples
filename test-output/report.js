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
  "duration": 12090776280,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_login_page_is_Free_Crm()"
});
formatter.result({
  "duration": 74158755,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Free CRM software in the cloud powers sales and customer] service\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and] service\u003e\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\n\tat stepDefinition.LoginSteps.title_of_login_page_is_Free_Crm(LoginSteps.java:34)\n\tat ✽.When title of login page is Free Crm(/Users/bravo1516/eclipse-workspace/FreeCrmBDD/src/main/java/features/contacts.feature:6)\n",
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
  "duration": 13661245639,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_login_page_is_Free_Crm()"
});
formatter.result({
  "duration": 14466225,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Free CRM software in the cloud powers sales and customer] service\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and] service\u003e\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\n\tat stepDefinition.LoginSteps.title_of_login_page_is_Free_Crm(LoginSteps.java:34)\n\tat ✽.When title of login page is Free Crm(/Users/bravo1516/eclipse-workspace/FreeCrmBDD/src/main/java/features/contacts.feature:6)\n",
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
  "duration": 8141895489,
  "error_message": "org.openqa.selenium.WebDriverException: Process unexpectedly closed with status: 0\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Muhammads-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:1c13:40ca:d1c3:7706%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: stack backtrace:\n   0:        0x10603849e - backtrace::backtrace::trace::h3ab5720c483fe461\n   1:        0x1060384dc - backtrace::capture::Backtrace::new::h096accf58447e0d5\n   2:        0x105f71534 - webdriver::error::WebDriverError::new::hc0958d01acda7bfc\n   3:        0x105f78e1d - geckodriver::marionette::MarionetteHandler::create_connection::h59a68c8dfef48e54\n   4:        0x105f57d3c - _$LT$webdriver..server..Dispatcher$LT$T$C$$u20$U$GT$$GT$::run::h5a26ba0bb4fdb139\n   5:        0x105f300c5 - std::sys_common::backtrace::__rust_begin_short_backtrace::h3f868f7a1a12bdcc\n   6:        0x105f3ad2d - std::panicking::try::do_call::hfce1ad2a948c3632\n   7:        0x1060e4a5c - __rust_maybe_catch_panic\n   8:        0x105f4deb5 - _$LT$F$u20$as$u20$alloc..boxed..FnBox$LT$A$GT$$GT$::call_box::h651dedb755194a8c\n   9:        0x1060e0c4b - std::sys::imp::thread::Thread::new::thread_start::h48c72bb09587cbc3\n  10:     0x7fff78ef3660 - _pthread_body\n  11:     0x7fff78ef350c - _pthread_start\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:99)\n\tat stepDefinition.LoginSteps.user_is_already_on_login_page(LoginSteps.java:25)\n\tat ✽.Given User is already on login page(/Users/bravo1516/eclipse-workspace/FreeCrmBDD/src/main/java/features/contacts.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.title_of_login_page_is_Free_Crm()"
});
formatter.result({
  "status": "skipped"
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