
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';



const Checkout = () => {

    const handleSubmit = event => {
        event.preventDefault();
        toast(`Thank you for Purchasing`);
    }

    return (
        <div>
            <div className='register-form text-center mb-5 w-50 mx-auto'>
                <h1 className='mt-5 mb-2'>Checkout</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="f-name" id="f-name" placeholder='First name' required />
                    <br />
                    <input type="text" name="l-name" id="l-name" placeholder='Last name' required />
                    <br />
                    <input type="text" name="address" id="address" placeholder='your address' required />
                    <br />
                    <input type="password" name="password" id="password" placeholder='confirm your password' required />
                    <div>
                        <input className='btn btn-dark' type="submit" value="Purchase" />
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div >
    );
}

export default Checkout;