import React from 'react';
import java from '../assets/images/testingtools/java.png';
import Python from '../assets/images/testingtools/python.png';
import js from '../assets/images/testingtools/js.png';
import ts from '../assets/images/testingtools/ts.png';
import c from '../assets/images/testingtools/c.png';
import ruby from '../assets/images/testingtools/ruby.png';
import javastructure from '../assets/images/testingtools/javastructure.png';

export default function TestingTools() {

    const playWright = [
        {
            playWrightName: 'Java Playwright',
            playWrightImg: java,
            description: "Java Playwright is a browser automation library that enables developers to write reliable and efficient end-to-end tests for web applications in Java.",
            playWrightOffcanvaId: 'Javaplaywright',
            structureimg: javastructure,
            structurepoints: [
                {
                    "pointheader": "Base Class in Dominos > Base",
                    "points": [
                        "Utility class for clean and organized test code.",
                        "Encapsulates common WebDriver operations.",
                        "Promotes code reusability and enhances readability."
                    ]
                },
                {
                    "pointheader": "Page Object Model in Dominos > POM > Pages",
                    "points": [
                        "Design pattern representing web application pages as objects.",
                        "Each page has a corresponding Page Object.",
                        "Enhances structure and maintainability of test automation code.",
                        "Enables reuse of Page Objects across different test scripts."
                    ]
                },
                {
                    "pointheader": "Feature Files in Dominos > test > java > Dominos > Dominos.feature",
                    "points": [
                        "File format used in behavior-driven development (BDD).",
                        "Written in plain text using Gherkin language syntax.",
                        "Serves as readable documentation and functional acceptance criteria."
                    ]
                },
                {
                    "pointheader": "Step Definitions in Dominos > test > java > Dominos > Stedefinition > Step_file",
                    "points": [
                        "Implementation of steps defined in a feature file.",
                        "Written in a programming language (Java, Python, Ruby).",
                        "Provides executable code corresponding to Gherkin syntax."
                    ]
                },
                {
                    "pointheader": "Cucumber Runner in Dominos > test > java > Dominos > Stedefinition > Dominos_runner",
                    "points": [
                        "Class serving as entry point for executing Cucumber tests.",
                        "Configures Cucumber and specifies location of feature files.",
                        "Requires inclusion of Cucumber and JUnit dependencies in project's build configuration."
                    ]
                },
                {
                    "pointheader": "Overall",
                    "points": [
                        "These components collectively contribute to a robust and maintainable test automation framework for Dominos."
                    ]
                }
            ]

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
                        <div className="d-flex align-items-center" id={key.playWrightOffcanvaId}>
                            <img src={key.playWrightImg} alt={key.playWrightImg} style={{ height: '40px' }} />
                            <h5 className='d-block offcanvas-title text-nowrap ps-3'>{key.playWrightName}</h5>
                        </div>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body">
                        <div className='container'>
                            <div className="row mb-5 align-items-lg-center">
                                <div className='col-md-5 col-xl-3 mx-auto mb-3'>
                                    <div className="">
                                        <img src={key.structureimg} alt={key.structureimg} className='rounded-4' />
                                    </div>
                                </div>
                                <div className="col-md-7 col-xl-8 col-xxl-7">
                                    <ol>
                                        {key.structurepoints && key.structurepoints.map((point, pointVal) => (
                                            <li className='mb-3'>
                                                <span className='fw-semibold'>{point.pointheader}</span>
                                                <ul>
                                                   {point.points.map((innerPoints, innerPointsIndex)=>(
                                                     <li>{innerPoints}</li>
                                                   ))}
                                                </ul>
                                            </li>
                                        ))
                                        }
                                    </ol>

                                </div>

                                <div className="col-12">
                                    <p className='text-center secondary-text'>{key.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}


