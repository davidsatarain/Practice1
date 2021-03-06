package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features",
		glue="stepDefinations",tags = "@E2ETest",
		plugin= {"pretty","html:target/cucumber","json:target/cucumber.json","junit:target/cukes.xml"})
public class TestRunner {

}
