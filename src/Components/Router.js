    import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
    import About from './About';
    import Home from './Home';
    function Router(props) {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
            </BrowserRouter>
    );
    }


    export default Router;
