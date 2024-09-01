import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Fake authentication object
const fakeAuth = {
  isAuthenticated: false,
  authenticate() {
    fakeAuth.isAuthenticated = true;
  },
  signout() {
    fakeAuth.isAuthenticated = false;
  },
};

// ProtectedRoute component definition
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    // Route component from react-router-dom
    <Route
      {...rest}
      render={(props) =>
        // Check if user is authenticated
        fakeAuth.isAuthenticated ? (
          // If authenticated, render the protected component
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;