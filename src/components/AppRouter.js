import React from "react";
import {  Switch, Route } from "react-router-dom";
import Shop from "./shop/Shop";
import SignUp from "./SignUp"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "./Dashboard";
import ForgotPassword from './ForgotPassword'
import UpdateProfile from "./UpdateProfile";
// import HomePage from "./home/HomePage";

function AppRouter() {
  return (
    <div>
      <Switch>
        {/* <PrivateRoute exact path="/" component={Dashboard}/> */}
        <Route path="/shop" component={Shop} />
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/signUp" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/updateProfile" component={UpdateProfile} />
        {/* <Route path="/home" component={HomePage} /> */}
      </Switch>
    </div>
  );
}

export default AppRouter;
