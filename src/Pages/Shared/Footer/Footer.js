import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './footer.css'
import logo from '../../../Images/Logo.png'

const Footer = () => {
    return (
        <div classNameName=''>

            <footer className="footer-10 bg-dark text-warning">
                <div className="container">
                    <div className="row mb-5 pb-3 no-gutters">
                        <div className="col-md-4 mb-md-0 mb-4 d-flex">
                            <div className="con con-1 w-100 py-5">
                                <div className="con-info w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span><Icon icon="ion-ios-call" /></span>
                                    </div>
                                    <div className="text">
                                        <span>(+00) 1234 5678</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-4 d-flex">
                            <div className="con con-2 w-100 py-5">
                                <div className="con-info w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span><Icon icon="ion-ios-mail" /></span>
                                    </div>
                                    <div className="text">
                                        <span>ontirahid@yahoo.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-4 d-flex">
                            <div className="con con-3 w-100 py-5">
                                <div className="con-info w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span><Icon icon="ion-ios-pin" /></span>
                                    </div>
                                    <div className="text">
                                        <span>76, Segunbagicha Dhaka</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="row w-100 text-center">
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">About</h2>
                                    <ul className="list-unstyled text-decoration-none">
                                        <li><a href="#" className="d-block ">Out story</a></li>
                                        <li><a href="#" className="d-block">Awards</a></li>
                                        <li><a href="#" className="d-block">Our Team</a></li>
                                        <li><a href="#" className="d-block">Career</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">Company</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="d-block">Our services</a></li>
                                        <li><a href="#" className="d-block">Clients</a></li>
                                        <li><a href="#" className="d-block">Contact</a></li>
                                        <li><a href="#" className="d-block">Press</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">Resources</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="d-block">Blog</a></li>
                                        <li><a href="#" className="d-block">Newsletter</a></li>
                                        <li><a href="#" className="d-block">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mb-md-0 mb-4">
                            <h2 className="footer-heading text-center">Subscribe</h2>
                            <form action="#" className="subscribe-form d-block">
                                <div className="form-group d-flex">
                                    <input type="text" className="form-control rounded-left" placeholder="Enter email address" />
                                    <button type="submit" className="sub-btn form-control submit rounded-right bg-dark text-white mx-2">Subscribe</button>
                                </div>
                                <div className='mt-2 text-center'>
                                    <span className="subheading">Get our subject updates in your mailbox</span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-5 pt-4 border-top">
                        <div className="col-md-6 col-lg-8 mb-md-0 mb-4 text-center">
                            <p className="copyright mb-0">
                                Copyright &copy;{new Date().getFullYear()} All rights reserved. | Pondit Tutor
                            </p>
                            <p>
                                <img className='mt-2' src={logo} style={{ height: '35px' }} alt="" />
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4 text-md-right">
                            <ul className="ftco-footer-social p-0">
                                <li className="ftco-animate"><a href="https://twitter.com/home?lang=en" data-toggle="tooltip" data-placement="top" title="Twitter"><span><Icon icon="ion-logo-twitter" /></span></a></li>
                                <li className="ftco-animate"><a href="https://www.facebook.com/" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook"></span><span><Icon icon="ion-logo-facebook" /></span></a></li>
                                <li className="ftco-animate"><a href="https://www.instagram.com/" data-toggle="tooltip" data-placement="top" title="Instagram"><span><Icon icon="ion-logo-instagram" /></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div >
    );
};

export default Footer;