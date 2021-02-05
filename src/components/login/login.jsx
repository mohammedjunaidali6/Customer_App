import React from 'react';

export default function Login(props) {
  
  return (
    <div id="login-container" className="">
        <div className="sign-in">Sign in</div>
        <div className="sign-in-with-social">
            Sign in with social media
        </div>
        <div className="socials">
            <div id="fb-rectangle">
                LOGIN WITH FACEBOOK
            </div>
            <div id="google-rectangle">
                LOGIN WITH GOOGLE
            </div>
        </div>
        <div className="or-login-with-email">
            or login with email address
        </div>
    </div>
  )
}
