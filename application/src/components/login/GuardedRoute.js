import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GuardedRout = ({ component: Component, ...rest }) => {
  const userToken = useSelector(state => state.auth.token);
  return (
    <div>
      <Route
        {...rest}
        render={props =>
          userToken ? <Component {...props} /> : <Redirect to='/login' />
        }
      />
    </div>
  );
};

export default GuardedRout;
