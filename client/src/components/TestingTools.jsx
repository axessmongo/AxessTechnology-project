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
            playWrightOffcanvaId: 'Javaplaywright'
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
                            {key.description}
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}


