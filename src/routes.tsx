import React from "react";
// @ts-ignore
import { BrowserRouter, Switch,Route} from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component = {Landing}/>
                <Route path='/app' component = {OrphanagesMap}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;