import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='text-secondary text-center my-5'>Question and Answers</h2>
            <div className='d-flex justify-content-center align-items-center mb-5'>
                <Accordion className="w-75 mb-5" defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Q1. Difference between authorization and authentication</Accordion.Header>
                        <Accordion.Body>
                            <span className='fw-bold'>Authorization</span> means giving someone permission to use any feautures in our website. For example in our programming hero website daily module can't be accessed early before 8 pm which means we are unauthorized. <br />
                            In case of <span className='fw-bold'>Authentication</span> we are determining if someone has proper credentials to login inside the website/app. This means this is just an authentication platform.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                            <span className='fw-bold'>Firebase</span> provides me with easy way to set up the authentication. This provides us with email/pass, Google, GitHub, Yahoo, Facebook etc. authentication and we are getting this many facilities under one roof. It can take few minutes to set up a full authentication without any hassle by reading detailed documentation in their website. Main thing is they are providing with all these features for completely free. <br />
                            Besides firebase there are many options and some are listed below:
                            <ol>
                                <li>Okta</li>
                                <li>Keycloak</li>
                                <li>STYTCH</li>
                                <li>Supabase</li>
                                <li>PingIdentity</li>
                                <li>OneLogin</li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> What other services does firebase provide other than authentication</Accordion.Header>
                        <Accordion.Body>
                            Besides authentication firebase also provides range of other facilities which are listed below:
                            <ol>
                                <li>Realtime Database</li>
                                <li>Remote Config</li>
                                <li>Firebase ML</li>
                                <li>Cloud Functions</li>
                                <li>Cloud Messaging</li>
                                <li>Hosting</li>
                                <li>Cloud Storage</li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;