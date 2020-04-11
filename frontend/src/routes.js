import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/Main';
import Box from './pages/Box';


export default function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Main } />
                <Route path="/box/:id" component={ Box } />
            </Switch>
        </BrowserRouter>
    )    
}

