import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NPRarticles from "./pages/Home/NPRarticles";


const App = () => (
<Router>
    <div>
        <Route path="/" component={NPRarticles} />
    </div>
</Router>
);

export default App; 