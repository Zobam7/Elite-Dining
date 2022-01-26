import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Homee from "./Homee";
import Navbarr from "./Navbarr";
import SignIn from "./signin";
import SignUp from "./signup";
import Dashboard from "./dashboard"
import Account from "./account";




class Classw extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Navbarr props = {this.state}/>
                    <Switch>
                        <Route exact path="/" component={() => <Homee props={this.state} />} />
                        <Route exact path="/signin" component={() => <SignIn props={this.state} />} />
                        <Route exact path="/signup" component={() => <SignUp props={this.state} />} />
                        <Route exact path="/dashboard" component={() => <Dashboard props={this.state} />} />
                        <Route exact path="/account" component={() => <Account props={this.state} />} />
                    </Switch>
                </React.Fragment>

            </BrowserRouter>
        );
    }
}

export default Classw;