import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Linkedpages from './components/Admin/Linkedpages';
import Linkedpage from './components/Psychics/Linkedpage';
import Pagelinks from './components/pages/Pagelinks';

function App() {
  // Remove the useLocation hook as it's not needed in the App component

  return (
    <>
    <Router>
      
      <div className="App">
     
        <Switch>
           <Route path="/" component={Pagelinks} exact/>
             <Route path="/admin" component={Linkedpages}/>
          <Route path="/psychics" component={Linkedpage}/>
        </Switch>
        <ToastContainer />
      </div>
    </Router>
    </>
    
  );
}

export default App;
