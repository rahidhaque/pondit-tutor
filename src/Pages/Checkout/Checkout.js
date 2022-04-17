import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div>
            <div className='register-form text-center mb-5 w-25 mx-auto'>
                <h1>Thanks For Checking Out</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="f-name" id="f-name" placeholder='First name' {...register("First name", { required: true, maxLength: 80 })} />
                    <br />
                    <input type="text" name="l-name" id="l-name" placeholder='Last name' {...register("Last name", { required: true, maxLength: 100 })} />
                    <br />
                    <input type="text" name="address" id="address" placeholder='your address' {...register("your address", { required: true, maxLength: 100 })} />
                    <br />
                    <input type="password" name="password" id="password" placeholder='confirm your password' {...register("confirm your password", { required: true, maxLength: 100 })} />
                    <div>
                        <input className='btn btn-secondary' type="submit" value="Purchase" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Checkout;