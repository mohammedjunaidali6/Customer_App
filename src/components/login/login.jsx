import React from 'react';
import { FormBuilder, FieldGroup, FieldControl, Validators } from 'react-reactive-form';
import { TextInput } from '../common/utils/textInput';

export default function Login(props) {
  
    const loginForm = FormBuilder.group({
        Email: ['', Validators.required],
        Password: ['', Validators.required]
    });

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
            <div className="">
                <FieldGroup control={loginForm}
                    render={({get, invalid}) => (
                        <form>
                            <div className="col-md-12 float-left clearfix w-100 mb-2">
                                <FieldControl 
                                    name="Email"
                                    render={TextInput}
                                    meta={{ id: 'login-txt-email', label: 'Email address', maxlen: 1024, colval: 12 }}
                                />
                            </div>
                            <div className="col-md-12 float-left clearfix w-100 mb-2">
                                <FieldControl 
                                    name="Password"
                                    render={TextInput}
                                    meta={{ id: 'login-txt-password', label: 'Password', maxlen: 1024, colval: 12, type: 'password' }}
                                />
                            </div>
                        </form>
                    )}
                />
            </div>
            <div id="sign-in-container" className="mt-4">
                <button type="button" id="btn-sign-in">
                    <span className="button-text">SIGN IN</span>
                </button>
            </div>

        </div>
    )
}
