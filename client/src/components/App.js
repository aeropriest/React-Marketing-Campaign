import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


const Header = () => <h1>Header</h1>
const Dashboard = () => <h1>Dashboard</h1>
const SurveyNew = () => <h1>SurveyNew</h1>
const Landing = () => <h1>Landing!</h1>

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' component={Landing} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;