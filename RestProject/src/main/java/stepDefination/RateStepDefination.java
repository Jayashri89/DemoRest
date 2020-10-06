package stepDefination;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import org.testng.Assert;

public class RateStepDefination {

String baseUri="https://api.ratesapi.io";
	RequestSpecification Res_Spec;
	Response res;
	ValidatableResponse ValRes;
	Scenario scn;
	@Before
	public void BeforeHooks(Scenario s)
	{
		this.scn=s;
	}

	@Given("^Customer have API for foreign Exchange rates$")
	public void Customer_have_API_for_foreign_Exchange_rates() throws Throwable {
		Res_Spec=given().baseUri(baseUri);   
	}

	@When("^Customer hit API$")
	public void Customer_hit_API() throws Throwable {
		res=Res_Spec.when().get("/api/latest");
	    scn.write("Response return as"+res.asString());

	    
	}

	@Then("^status code come as (\\d+)$")
	public void status_code_come_as(int int1) throws Throwable {
		ValRes=res.then();
		ValRes.statusCode(int1);    

	   
	}

	@Then("^body contain base is$")
	public void body_contain_base_is() throws Throwable {
		ValRes.body("base", equalTo("EUR"));
	}
	    
	}

