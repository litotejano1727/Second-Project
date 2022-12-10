import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import App from "./App";
import Auth from "./Auth";

function App2() {
    return (
        <Router>
            <Switch>
                <Route path="/Admin" exact>
                    <Admin />
                </Route>
                <Route path="/" exact>
                    <App />
                </Route>
                <Route path="/auth/*">{<Auth />}</Route>
            </Switch>
        </Router>
    );
}

export default App2;
