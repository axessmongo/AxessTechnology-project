import React from 'react'
import { useState } from 'react'
import "../assets/css/Technologies.scss"
import Footer from './Footer'
import techtools1 from "../assets/images/Technologies/techtools1.webp"
// each tech image import----->
import android from "../assets/images/Technologies/android.webp"
import angular from "../assets/images/Technologies/angular.webp"
import aws from "../assets/images/Technologies/aws.webp"
import azure from "../assets/images/Technologies/azure.webp"
import azuredevops from "../assets/images/Technologies/azuredevops.webp"
import bootstrap from "../assets/images/Technologies/bootstrap.webp"
import cassandra from "../assets/images/Technologies/cassandra.webp"
import cplusplus from "../assets/images/Technologies/cplusplus.webp"
import csharp from "../assets/images/Technologies/csharp.webp"
import docker from "../assets/images/Technologies/docker.webp"
import dotnet from "../assets/images/Technologies/dotnet.webp"
import dotnetMAUI from "../assets/images/Technologies/dotnetMAUI.webp"
import elasticsearch from "../assets/images/Technologies/elasticsearch.webp"
import expressjs from "../assets/images/Technologies/expressjs.webp"
import flutter from "../assets/images/Technologies/flutter.webp"
import gcloud from "../assets/images/Technologies/gcloud.webp"
import graphql from "../assets/images/Technologies/graphql.webp"
import grpc from "../assets/images/Technologies/grpc.webp"
import hadoop from "../assets/images/Technologies/hadoop.webp"
import ios from "../assets/images/Technologies/ios.webp"
import img from "../assets/images/Technologies/image68.webp"
import java from "../assets/images/Technologies/java.webp"
import jenkins from "../assets/images/Technologies/jenkins.webp"
import kafka from "../assets/images/Technologies/kafka.webp"
import kotlin from "../assets/images/Technologies/kotlin.webp"
import kubernets from "../assets/images/Technologies/kubernets.webp"
import lambda from "../assets/images/Technologies/lambda.webp"
import mongodb from "../assets/images/Technologies/mongodb.webp"
import mssqlserver from "../assets/images/Technologies/mssqlserver.webp"
import mysql from "../assets/images/Technologies/mysql.webp"
import nodeexpress from "../assets/images/Technologies/nodeexpress.webp"
import now from "../assets/images/Technologies/now.webp"
import oracle from "../assets/images/Technologies/oracle.webp"
import php from "../assets/images/Technologies/php.webp"
import powerbi from "../assets/images/Technologies/powerbi.webp"
import python from "../assets/images/Technologies/python.webp"
import rails from "../assets/images/Technologies/rails.webp"
import react from "../assets/images/Technologies/react.webp"
import ruby from "../assets/images/Technologies/ruby.webp"
import redis from "../assets/images/Technologies/redis.svg"
import saas from "../assets/images/Technologies/saas.webp" 
import salesforce from "../assets/images/Technologies/salesforce.webp"
import selenium from "../assets/images/Technologies/selenium.webp"
import serverless from "../assets/images/Technologies/serverless.webp"
import spring from "../assets/images/Technologies/spring.webp"
import postgresql from "../assets/images/Technologies/postgresql.webp"
import sqlazure from "../assets/images/Technologies/sqlazure.webp"
import tableau from "../assets/images/Technologies/tableau.webp"
import terraform from "../assets/images/Technologies/terraform.webp"
import ts from "../assets/images/Technologies/ts.webp"
import wordpress from "../assets/images/Technologies/wordpress.webp"
import xamarin from "../assets/images/Technologies/xamarin.webp"
// each tech import ends---------->
import Banner from './Banner'
import Navbar from './Navbar'
const Technologies = () => {
    const [TechActive, setTechActive] = useState(0);

    return (
        <div className='technology-page'>
            {/* <Navbar /> */}
            {/* <Banner h1='Talk To Us' h2='Empower Your Business with Our Fine Tuned Digital Solutions' h3='Take the first step in creating a better tomorrow by joining hands with Maticz' /> */}
            <div className='technology-section py-5'>
                <div className='container technology' >
                    <div className='primary-header text-center d-flex justify-content-center tech-title py-4'>
                        <p className='bg-img-1'>Tech Tools</p>
                    </div>
                    <div className='tech-container'>
                        <div className='text-center tech-buttons'>
                            <button className={`${TechActive == 0 ? "tech-btn" : ""}`} onClick={() => setTechActive(0)}>ALL</button>
                            <button className={`${TechActive == 1 ? "tech-btn" : ""}`} onClick={() => setTechActive(1)}>Framework</button>
                            <button className={`${TechActive == 2 ? "tech-btn" : ""}`} onClick={() => setTechActive(2)}>Language</button>
                            <button className={`${TechActive == 3 ? "tech-btn" : ""}`} onClick={() => setTechActive(3)}>Cloud</button>
                            <button className={`${TechActive == 4 ? "tech-btn" : ""}`} onClick={() => setTechActive(4)}>Datebase</button>
                            <button className={`${TechActive == 5 ? "tech-btn" : ""}`} onClick={() => setTechActive(5)}>Data Analysis</button>
                            <button className={`${TechActive == 6 ? "tech-btn" : ""}`} onClick={() => setTechActive(6)}>DevOps</button>
                            <button className={`${TechActive == 7 ? "tech-btn" : ""}`} onClick={() => setTechActive(7)}>QA</button>
                            <button className={`${TechActive == 8 ? "tech-btn" : ""}`} onClick={() => setTechActive(8)}>OS</button>
                            <button className={`${TechActive == 9 ? "tech-btn" : ""}`} onClick={() => setTechActive(9)}>Wordpress</button>
                            <button className={`${TechActive == 10 ? "tech-btn" : ""}`} onClick={() => setTechActive(10)}>Others</button>
                        </div>
                        <div className='technology-list'>
                            <div className="row align-items-stretch py-5">
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 8 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100 '>
                                        <img src={android}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 1 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={angular}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 3 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={aws}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 3 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={azure}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 6 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={azuredevops}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 1 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={bootstrap}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 4 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={cassandra}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 2 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={cplusplus}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 8 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={csharp}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 6 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={docker}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 8 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={dotnet}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 1 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={dotnetMAUI}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 10 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={elasticsearch}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 1 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={expressjs}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 1 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={flutter}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 3 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={gcloud}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 4 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={graphql}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 1 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={grpc}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 5 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={hadoop}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 8 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={ios}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 2 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={java}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 7 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={jenkins}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 5 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={kafka}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 1 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={kotlin}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 6 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={kubernets}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 3 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={lambda}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 3 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={img}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 4 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={mongodb}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 4 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={mssqlserver}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 4 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={mysql}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 10 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={nodeexpress}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 10 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={now}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 4 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={oracle}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 2 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={php}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 5 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={powerbi}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 2 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={python}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 1 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={rails}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 1 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={react}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 1 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={ruby}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 4 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={redis}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 3 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={saas}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 10 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={salesforce}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 7 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={selenium}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 3 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={serverless}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 1 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={spring}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 4 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={postgresql}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 4 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={sqlazure}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 5 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={tableau}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 6 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={terraform}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 2 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={ts}></img>
                                    </div>
                                </div>

                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 9 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={wordpress}></img>
                                    </div>
                                </div>
                                <div className={`col-4 col-md-3 col-lg-2 mt-5 ${TechActive === 0 || TechActive === 8 ? "" : "tech-hide"}`}>
                                    <div className='d-flex align-items-center justify-content-center tech-item h-100'>
                                        <img src={xamarin}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='tech-tools-section bg-green-1 py-5 '>
                <div className='container'>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <div className='tech-tools-header d-flex justify-content-center'>
                                <p className='bg-img-1'>Technologies</p>
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-lg-5">
                            <div className="row align-items-center justify-content-center">
                                <div className='techtoolsimg'>
                                    <img src={techtools1} ></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-lg-7">
                            <div>

                                <div className='text-white'>
                                    <h2 className='text-center text-lg-start'>Huge Spectrum of Next-Gen Technologies Under One Roof</h2>
                                    <p  className='text-center text-lg-start'>Leverage our in-depth technical expertise to bring your stunning ideas to Life.</p>
                                </div>
                                <div className='row align-items-center justify-content-center text-white tech-tools-container'>
                                    <div className='col-6 col-md-4 col-lg-3 '>
                                        <div className=' tech-tools'>
                                            <h6 className='text-center py-3'>FrontEnd</h6>
                                            <ul className="">
                                                <li>HTML/ CSS</li>
                                                <li>Angular Js</li>
                                                <li>React Js</li>
                                                <li>Vue Js</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-6 col-md-4 col-lg-3'>
                                        <div className=' tech-tools'>
                                            <h6 className='text-center py-3'>BackEnd</h6>
                                            <ul className="">
                                                <li>C/ C++</li>
                                                <li>Django</li>
                                                <li>PHP</li>
                                                <li>Node Js</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-6 col-md-4 col-lg-3'>
                                        <div className=' tech-tools'>
                                            <h6 className='text-center py-3'>BackEnd</h6>
                                            <ul className="">
                                                <li>.Net</li>
                                                <li>Java</li>
                                                <li>Python</li>
                                                <li>Golang</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-6 col-md-4 col-lg-3'>
                                        <div className=' tech-tools'>
                                            <h6 className='text-center py-3'>Mobile</h6>
                                            <ul className="">
                                                <li>Android</li>
                                                <li>iOS/ Swift</li>
                                                <li>React Native</li>
                                                <li>Flutter</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-6 col-md-4 col-lg-3'>
                                        <div className=' tech-tools'>
                                            <h6 className='text-center py-3'>DevOps</h6>
                                            <ul className="">
                                                <li>Azure</li>
                                                <li>AWS</li>
                                                <li>Google cloud</li>
                                                <li>Lambda</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>


    )
}

export default Technologies