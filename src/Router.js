import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));

function Router() {
    return (
        <Suspense fallback={<span className='mainLoader'><div class="loader"></div></span>}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
            </BrowserRouter>
        </Suspense>

    )
}

export default Router
