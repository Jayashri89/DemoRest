package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\Ajinkyasales\\workspace\\RestProject\\src\\main\\java\\Features"
		,glue={"stepDefination"}
		,format={"pretty","html:test-output"}
			
		)
public class TestRunner {

}
