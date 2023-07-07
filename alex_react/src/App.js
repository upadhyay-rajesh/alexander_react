import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import HomeComponent from './component/home';
import SignUpComponent from './component/signup';
import DisplayAllComponent from './component/displayall';
import EditComponent from './component/editcomponent';
import ViewComponent from './component/viewcomponent';
import StateHooks from './hooks/StateHooks';

function App(props) {
  return (
    <div className="App">
     <Router>
       <div>
         <Switch>
           <Route path="/" exact component={HomeComponent}></Route>
           <Route path="/signup" exact component={SignUpComponent}></Route>
           <Route path="/displayallrecord" exact component={DisplayAllComponent}></Route>


           <Route path="/edit/:id" exact component={EditComponent}></Route>
           <Route path="/view/:id" exact component={ViewComponent}></Route>

         </Switch>
       </div>

     </Router>

     <StateHooks />

    </div>
  );
}

export default App;
