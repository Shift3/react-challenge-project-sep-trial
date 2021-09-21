import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Main, Login, OrderForm, ViewOrders } from "../components";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import { useSelector } from "react-redux";
import { requireLogin } from "./guards";

const AppRouter = () => {
  const token = useSelector((state) => state.login.token);

  return (
    <Router>
      <GuardProvider guards={[requireLogin]}>
        <GuardedRoute path="/" exact component={Main} />
        <GuardedRoute path="/login" exact component={Login} />
        <GuardedRoute
          path="/order"
          exact
          component={OrderForm}
          meta={{ auth: true, token }}
        />
        <GuardedRoute
          path="/view-orders"
          exact
          component={ViewOrders}
          meta={{ auth: true, token }}
        />
      </GuardProvider>
    </Router>
  );
};

export default AppRouter;
