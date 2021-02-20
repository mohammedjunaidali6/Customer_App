import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';

import './login.css';

export default function Login(props) {
  
    // form validation rules 
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
    });

    // functions to build form returned by useForm() hook
    const { register, handleSubmit, reset, errors } = useForm({
        resolver: yupResolver(validationSchema)
    });

    function loginSubmitFn(data) {
        console.log('data', data);
        // display form data on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        props.history.push('/rewardzone');
    }

    return (
        <div id="login-container" className="">
            <div className="sign-in mb-2">Sign in</div>
            <div className="sign-in-with-social">
                Sign in with social media
            </div>
            <div className="socials">
                <div className="w-50 float-left text-center">
                    <button type="button" id="fb-rectangle">LOGIN WITH FACEBOOK</button>
                </div>
                <div className="w-50 float-left text-center">
                    <button type="button" id="google-rectangle">LOGIN WITH GOOGLE</button>
                </div>
            </div>
            <div className="or-login-with-email mb-4">
                or login with email address
            </div>
            <form onSubmit={handleSubmit(loginSubmitFn)} onReset={reset} id="login-form-container">
                <div className="col-md-12 float-left clearfix w-100 mb-2">
                    <input name="email" type="text" ref={register} placeholder="Email address" className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                    {/* <TextField 
                        label="Email address"
                        variant="outlined" 
                        name="email" 
                        type="text" 
                        ref={register} 
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    /> */}
                    <div className="invalid-feedback">{errors.email?.message}</div>
                </div>
                <div className="col-md-12 float-left clearfix w-100 mb-2">
                    <input name="password" type="password" ref={register} placeholder="********" className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    {/* <TextField 
                        label="Password"
                        variant="outlined" 
                        name="password" 
                        type="password" 
                        ref={register} 
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    /> */}
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div id="sign-in-container" className="mt-4">
                    <button type="submit" id="btn-sign-in">
                        <span className="button-text">SIGN IN</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
