import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <div className="mt-5 bg-light text-center">

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

            </div >
        </div>
    );
};

export default Newsletter;