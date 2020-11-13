import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "../../pages/Index";
import Portfolio from "../../pages/Portfolio";
import Contact from "../../pages/Contact";

const Routes = () => {
    return (
        <Switch> 
            <Route exact path = "/" component ={Index}></Route>
            <Route exact path = "/portfolio" component = {Portfolio}></Route>
            <Route exact path = "/contact" component = {Contact}></Route>
        </Switch>
    )
}

export default Routes;