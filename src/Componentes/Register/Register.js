import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div class="box">
        <form autocomplete="off">
            <h2>Sign up</h2>
            <div class="inputBox">
                <input name='name' type="text" required="required"/>
                    <span>Userame</span>
                    <i></i>
            </div>
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
                <Link To="/login">Login</Link>
            </div>
            <input type="submit" value="Register"/>
        </form>
    </div>
    );
};

export default Register;