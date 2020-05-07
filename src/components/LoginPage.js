import React, { version } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
        <div className="box-layout">
            <div className="wrap">
                <div className="login-div">
                    <div clasName="login-text-div">
                        <p className="login-text">Login</p>
                    </div>
                    <div className="login-form">
                        <div className="input">
                            <p className="user-guide">Username</p>
                            <input className="login-input" type="text" placeholder="Email"/><br/>
                        </div>
                        <div className="input">
                            <p className="user-guide">Password</p>
                            <input className="login-input" type="password" placeholder="Password"/>
                        </div>
                    </div>
                    <button className="login-button" onClick={startLogin}>Login</button>
                </div>
                <div className="after-from">
                    <h3 className="item">Don't have an account?</h3>
                    <h4 id="signUp-item">SignUp</h4>
                </div>
            </div>
        </div>
    
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);