import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');



    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    }



    return (
        <div className='login-form'>
            <form>
                <h2>Login</h2>
                <div className='email-field'>
                    <label className='input-label' htmlFor='email'>Email</label>
                    <div className='mt'>
                        <input onBlur={handleEmailInput} type="email" name="email" id="email" placeholder='Enter your email' required/>
                    </div>
                </div>
                <div className='password-field'>
                    <label className='input-label' htmlFor='password'>Password</label>
                    <div className='mt'>
                        <input onBlur={ handlePasswordInput} type="password" name="password" id="password" placeholder='Your password' required/>
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