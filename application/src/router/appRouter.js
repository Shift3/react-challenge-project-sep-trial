import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main, Login, OrderForm, ViewOrders } from '../components';

const AppRouter = (props) => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path={"/login"} exact component={Login} />
      <Route path={isLoggedIn ? "/order" : "/login"} exact component={OrderForm} />
      <Route path={isLoggedIn ? "/view-orders" : "/login"} exact component={ViewOrders} />
    </Router>
  );
}

export default AppRouter;
