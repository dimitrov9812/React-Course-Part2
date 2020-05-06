import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

// ...rest is getting the rest of the props which we did not destructured    
export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest}
    component = {(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props}/> 
            </div>
        ):
        (
            <div>   
            <Redirect to="/"/>
            </div>
        )
    )}
     />
     
);

const mapStateToProps = (state) => ({
    // !! used to return the bool data from the expression
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);

{/* <Route {...rest} component={(props) => {
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props}/>
            </div>
            
        ):
        (
            <Redirect to="/"/>
        )
    }} /> */}