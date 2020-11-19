import './App.css'
import Postform from './postform'
import Postlist from './postlist'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return(
        <Router>
        <div className="index1" >

           
           
            <Switch>
                <Route path="/" exact component={Postform}></Route>
                <Route path="/postform" exact component={Postform}></Route>
                <Route path="/postlist" exact component={Postlist}></Route>
            </Switch>
        </div>
        </Router>
    );
}

export default App;
