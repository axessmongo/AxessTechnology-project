import React from 'react';
import java from '../assets/images/testingtools/java.png';
import Python from '../assets/images/testingtools/python.png';
import js from '../assets/images/testingtools/js.png';
import ts from '../assets/images/testingtools/ts.png';
import c from '../assets/images/testingtools/c.png';
import ruby from '../assets/images/testingtools/ruby.png';

export default function TestingTools() {

    const playWright = [
        {
            playWrightName: 'Java Playwright',
            playWrightImg: java,
            description: "Java Playwright is a browser automation library that enables developers to write reliable and efficient end-to-end tests for web applications in Java.",
            playWrightOffcanvaId: 'Javaplaywright',
            structure: `
> src
   > main
      > java
        > Dominos
          > Base
            > Base_class ---->  
                Usage Tips:
				 --> This utility class helps in maintaining a clean and organized test code by encapsulating common functionalities.
				 --> It promotes code reusability by centralizing common WebDriver-related operations.
				 --> The methods in this class enhance the readability and maintainability of your test scripts.
     				 --> Utility classes like Base_Class are valuable in test automation, providing a foundation for building robust and maintainable test scripts.
	   > POM 
              > Pages 
                    ---> The Page Object Model is a design pattern that represents the pages of a web application as objects in your test automation code.
				    -->  Each page in the application has a corresponding Page Object that encapsulates the behavior and elements of that page.
                                   -->  The Page Object Model is a powerful pattern for enhancing the structure and maintainability of your test automation code,
                                        especially in the context of web applications.
				  --> Page Objects can be reused across different test scripts, reducing duplication of code.
    > test
	> java
	   > Dominos
	      > Dominos.feature
		    > Feature_file  
                        --> A feature file is a file format used in the behavior-driven development (BDD) methodology, commonly associated with tools like Cucumber.
                        It serves as a readable documentation and a functional acceptance criteria for a particular feature or user story.
                        Feature files are written in a plain-text format, often using the Gherkin language syntax.
	        > Stedefinition
                   > Step_file     
                        --> In the context of behavior-driven development (BDD) and tools like Cucumber, a step definition is the implementation of the steps defined in a feature file.
                    Step definitions are written in a programming language such as Java, Python, or Ruby, and they provide the executable code that corresponds to each step in the Gherkin syntax within a feature file.
                    > Dominos_runner    
                            --> In the context of Cucumber and behavior-driven development (BDD), a runner file is a class that serves as the entry point for executing Cucumber tests.
                            It is responsible for configuring Cucumber and specifying the location of feature files, step definitions, and other relevant settings.	
                            --> Ensure that the Cucumber and JUnit dependencies are included in your project's build configuration (e.g., in your pom.xml for Maven or build.gradle for Gradle).

            `
        }, {
            playWrightName: 'Python Playwright',
            playWrightImg: Python,
            description: "Python Playwright is a browser automation library that facilitates the creation of robust and efficient end-to-end tests for web applications in Python.",
            playWrightOffcanvaId: 'Pythonplaywright'
        }, {
            playWrightName: 'JavaScript Playwright',
            playWrightImg: js,
            description: "JavaScript Playwright is the native language support for Playwright, allowing developers to write browser automation scripts in JavaScript.",
            playWrightOffcanvaId: 'JavaScriptplaywright'
        }, {
            playWrightName: 'C# Playwright',
            playWrightImg: c,
            description: "C# Playwright is the official Playwright bindings for C#, providing developers with tools to create reliable end-to-end tests for web applications.",
            playWrightOffcanvaId: 'Csharpplaywright'
        }, {
            playWrightName: 'TypeScript Playwright',
            playWrightImg: ts,
            description: "TypeScript Playwright extends Playwright's capabilities to TypeScript, enabling developers to write browser automation scripts with static typing.",
            playWrightOffcanvaId: 'TypeScriptplaywright'
        }, {
            playWrightName: 'Ruby Playwright',
            playWrightImg: ruby,
            description: "Ruby Playwright provides Playwright bindings for Ruby, empowering developers to create effective end-to-end tests for web applications using Ruby.",
            playWrightOffcanvaId: 'Rubyplaywright'
        }
    ];


    return (
        <div className='container tool-card-container my-5'>
            <section className="cardish">
                <div className="row gy-4 w-100 ">
                    <div className='text-center'>
                        <h2 className="secondary-header mx-auto bg-img-2">
                            Our playwrights
                        </h2>
                    </div>
                    {playWright.map((key, inedx) => (
                        <div className="col-lg-4" key={inedx}>
                            <div className="card-cardish1">
                                <div className="content">
                                    <h6><img src={key.playWrightImg} alt="" /> {key.playWrightName}</h6>
                                    <div className="hover_content">
                                        <p className="secondary-text mb-1">
                                            {key.description}
                                        </p>
                                        <button class="gold-btn green-btn px-3 py-1" data-bs-toggle="offcanvas" data-bs-target={'#' + key.playWrightOffcanvaId} aria-controls={key.playWrightOffcanvaId}  ><span class="d-block">Know More</span> <i class="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {playWright.map((key, index) => (
                <div
                    className="offcanvas offcanvas-start"
                    tabIndex={-1}
                    id={key.playWrightOffcanvaId}
                    aria-labelledby={key.playWrightOffcanvaId}
                    key={index}
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id={key.playWrightOffcanvaId}>
                            {key.playWrightName}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body">
                        <div>
                            <div className='col-2 mx-auto mb-3'><img src={key.playWrightImg} alt={key.playWrightImg} /></div>
                            <pre>
                                <div className="container">
                                    <p className='text-center secondary-text'>{key.description}</p>
                                {key.structure}
                                </div>
                            </pre>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}


