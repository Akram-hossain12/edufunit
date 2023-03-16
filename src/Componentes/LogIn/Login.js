import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
    return (
      
            <div class="box">
                <form autocomplete="off">
                    <h2>Sign in</h2>
                    <div class="inputBox">
                        <input name='email' type="email" required="required"/>
                            <span>Email</span>
                            <i></i>
                    </div>
                    <div class="inputBox">
                        <input type="password" required="required"/>
                            <span>Password</span>
                            <i></i>
                    </div>
                    <div class="links">
                        <a href="#">Forgot Password ?</a>
                        <Link To="/register">Signup</Link>
                    </div>
                    <input type="submit" value="Login"/>
                </form>
            </div>

    );
};

export default Login;