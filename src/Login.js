import React from 'react';
import './login.css';
import {Button} from '@mui/material';
import {auth, provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    
    const [{},dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            // console.log(result))
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    }

  return (
    <>
        <div className='login'>
            <div className="login-container">
            <h1>Login</h1>
                <img src="https://i.pinimg.com/originals/c7/76/3f/c7763f33e1db730876004ac6d1f3798c.png" alt=""/>
            <div className="login-text">
                <h1>Sign in to WhatsApp</h1>
            </div>

            <Button type="submit" onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>    
    </>
  )
}

export default Login