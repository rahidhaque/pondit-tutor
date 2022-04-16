import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='mt-5'>
            <footer className="bg-light text-center">

                <div className="container p-4 pb-0">

                    <section className="">
                        <form action="">

                            <div className="row d-flex justify-content-center">

                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>



                                <div className="col-md-5 col-12">

                                    <div className="form-outline mb-4">
                                        <input type="email" id="form5Example27" className="form-control" placeholder='provide email' />
                                    </div>
                                </div>



                                <div className="col-auto">

                                    <button type="submit" className="btn btn-secondary mb-4">
                                        Subscribe
                                    </button>
                                </div>

                            </div>

                        </form>
                    </section>

                </div>



                <div className="fw-bold text-center text-xl p-3 bg-secondary">
                    <p className='text-white'> &copy; {new Date().getFullYear()} Copyright: Pondit Tutor</p>
                </div>

            </footer >
        </div >
    );
};

export default Footer;