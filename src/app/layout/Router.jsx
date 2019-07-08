import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./../Home";
import Bulletin from "./../Bulletin";

const Router = () => (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/bulletin/:id" component={ Bulletin } />
        </Switch>
);
export default Router;
