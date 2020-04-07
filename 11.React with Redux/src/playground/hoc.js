// HOC -> Higher Order Component - A component (HOC) that renders another component(regular component)
// The goal is to reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// this is a regular component
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// creating our first HOC
const withAdminWarning = (WrappedComponent) =>{
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

// HOC from the challenge

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
            (
                <WrappedComponent {...props} />
            ):(
                <div>
                    <p>Please log in to view the info</p>
                    <button>LogIn</button>
                </div>    
            )
            }
        </div>
    )
};

// =========Challenge=========
// requireAuthentication 
// Create HOC to practice the new syntax 
const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin = {false} info="There are the details" />,document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuthenticated = {true} info="You are logged in" />,document.getElementById("app"))