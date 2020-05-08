import React, { version } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div>
        <div className="box-layout">
                <div className="login-div">
                        <div className="login-text">Login</div>
                    <div className="login-form">
                        <div className="input">
                            <p className="user-guide">Username</p>
                            <input className="login-input" type="text" placeholder="Email"/><br/>
                        </div>
                        <div className="input pass-input">
                            <p className="user-guide">Password</p>
                            <input className="login-input" type="password" placeholder="Password"/>
                        </div>
                        <button className="login-button" onClick={startLogin}>Login</button>
                    </div>
                </div>
                <div className="final">
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