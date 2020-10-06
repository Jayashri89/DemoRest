$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RateExchange.feature");
formatter.feature({
  "line": 1,
  "name": "Exchange Rate",
  "description": "",
  "id": "exchange-rate",
  "keyword": "Feature"
});
formatter.before({
  "duration": 195045,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify response for Latest Foreign Exchnage rates",
  "description": "",
  "id": "exchange-rate;verify-response-for-latest-foreign-exchnage-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Customer have API for foreign Exchange rates",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Customer hit API",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "status code come as 200",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "body contain base is",
  "keyword": "And "
});
formatter.match({
  "location": "RateStepDefination.Customer_have_API_for_foreign_Exchange_rates()"
});
formatter.result({
  "duration": 1368277001,
  "status": "passed"
});
formatter.match({
  "location": "RateStepDefination.Customer_hit_API()"
});
formatter.write("Response return as{\"base\":\"EUR\",\"rates\":{\"GBP\":0.91058,\"HKD\":9.1412,\"IDR\":17379.93,\"ILS\":4.0193,\"DKK\":7.4408,\"INR\":86.5715,\"CHF\":1.0781,\"MXN\":25.1631,\"CZK\":27.035,\"SGD\":1.6032,\"THB\":36.795,\"HRK\":7.5688,\"MYR\":4.8991,\"NOK\":10.8603,\"CNY\":8.0111,\"BGN\":1.9558,\"PHP\":57.137,\"SEK\":10.5138,\"PLN\":4.4872,\"ZAR\":19.453,\"CAD\":1.563,\"ISK\":162.8,\"BRL\":6.5363,\"RON\":4.876,\"NZD\":1.7733,\"TRY\":9.1625,\"JPY\":124.58,\"RUB\":91.772,\"KRW\":1368.49,\"USD\":1.1795,\"HUF\":359.72,\"AUD\":1.6472},\"date\":\"2020-10-06\"}");
formatter.result({
  "duration": 3849135472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "RateStepDefination.status_code_come_as(int)"
});
formatter.result({
  "duration": 32588627,
  "error_message": "java.lang.SecurityException: class \"org.hamcrest.Matchers\"\u0027s signer information does not match signer information of other classes in the same package\r\n\tat java.lang.ClassLoader.checkCerts(ClassLoader.java:898)\r\n\tat java.lang.ClassLoader.preDefineClass(ClassLoader.java:668)\r\n\tat java.lang.ClassLoader.defineClass(ClassLoader.java:761)\r\n\tat java.security.SecureClassLoader.defineClass(SecureClassLoader.java:142)\r\n\tat java.net.URLClassLoader.defineClass(URLClassLoader.java:467)\r\n\tat java.net.URLClassLoader.access$100(URLClassLoader.java:73)\r\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:368)\r\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:362)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:361)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:424)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:335)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:357)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat stepDefination.RateStepDefination.status_code_come_as(RateStepDefination.java:47)\r\n\tat ✽.Then status code come as 200(RateExchange.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RateStepDefination.body_contain_base_is()"
});
formatter.result({
  "status": "skipped"
});
});