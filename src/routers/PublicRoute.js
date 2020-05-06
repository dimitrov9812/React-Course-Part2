import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// ...rest is getting the rest of the props which we did not destructured    
export const PublicRoute = ({ isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest}
    component = {(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard"/>
        ):
        (
                <Component {...props}/>
            
        )
    )}
     />
     
);

const mapStateToProps = (state) => ({
    // !! used to return the bool data from the expression
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
