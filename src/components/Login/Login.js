import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Login/Login.css';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    }


    const [
        signInWithEmailAndPassword,
        user,
    ] = useSignInWithEmailAndPassword(auth);


    const handleFormLogin = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password)
        .then(result => {
            // const user = result.user
            console.log('signed in');
        })
        .catch(error => {
            const errorMessage = error.errorMessage;
            console.log(errorMessage);
        })
    }


    if(user){
        navigate(from, { replace: true });
    }
    return (
        <div className='login-form'>
            <form onSubmit={handleFormLogin}>
                <h2>Login</h2>
                <div className='email-field'>
                    <label className='input-label' htmlFor='email'>Email</label>
                    <div className='mt'>
                        <input onBlur={handleEmailInput} type="email" name="email" id="email" placeholder='Enter your email' required />
                    </div>
                </div>
                <div className='password-field'>
                    <label className='input-label' htmlFor='password'>Password</label>
                    <div className='mt'>
                        <input onBlur={handlePasswordInput} type="password" name="password" id="password" placeholder='Your password' required />
                    </div>
                </div>
                <div className='submit-btn-container'>
                    <button type="submit">Login</button>
                </div>

                <p className='signup-link'>Don't have an account? <Link className='signup-link-inside' to='/signup'>Sign up</Link></p>

                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>

                <div className='google-btn-container'>
                    <button className='go-to-google'>Continue with Google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;