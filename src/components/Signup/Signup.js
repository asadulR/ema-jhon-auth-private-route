import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import '../Login/Login.css'
import auth from '../../firebase.init';
const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordInput = (event) => {
        setConfirmPassword(event.target.value);
    }

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleCreateUser = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Password didn.t match!")
            return;
        }

        createUserWithEmailAndPassword(email, password)
        .then(result => {
            // const user = result.user
            console.log('user created');
        })

    }

    
    if(user) {
        navigate('/');
    }

    return (
        <div className='login-form'>
            <form onSubmit={handleCreateUser}>
                <h2>Sign up</h2>
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
                <div className='password-field'>
                    <label className='input-label' htmlFor='confirmPassword'>Confirm password</label>
                    <div className='mt'>
                        <input onBlur={handleConfirmPasswordInput} type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm your password' required />
                    </div>
                </div>
                <p className='error'>{error}</p>
                <div className='submit-btn-container'>
                    <button type="submit">Signup</button>
                </div>

                <p className='signup-link'>Already have an account? <Link className='signup-link-inside' to='/login'>Login</Link></p>

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

export default Signup;