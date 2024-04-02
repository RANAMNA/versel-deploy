import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Psychics from './Psychics';
import Navbar from './Navbar';
import Love from './Love';
import Psychics_profile from './Psychics_profile';
import Psychicvop from './Psychicvop';
import Footer from './Web_Footer';
import Pricing from './Pricing';
import Blogs from './Blogs';
import Blogdetails from './Blogdetails';
import Howitwork from './Howitwork';
import About from './About';
import Contact from './Contact';
import Chatform from './Chatform';
import Cheating from './Cheating';
import Login from '../users/Login';
import UserRegister from '../users/UserRegister';
import Profile from '../users/Profile';
import UpdateProfile from '../users/UpdateProfile';
import Reading from './Reading';
import AuraReading from './AuraReading';
import Crystal_reading from './Crystal_reading';
import Pet_psychics from './Pet_psychics';
import Break_up from './Break_up';
import Marriage_life from './Marriage_life';
import Parent_children from './Parent_children';
import Profile2 from '../users/Profile2';
import Psy_register from '../Psychics/Psy_register';
import  Psy_login from '../Psychics/Psy_login';
import Howhelp from './Howhelp';
import Psychics_medium from './Psychics_medium';
import Reading_topics from './Reading_topics';
import Love_psychics from './Love_psychics';
import Star_horoscopes from './Star_horoscopes';
import Couple_psychics from './Couple_psychics';
import Family_psychics from './Family_psychics';
import Study_blogs from './Study_blogs';
import Nature_blog from './Nature_blog';
import Life_blog from './Life_blog';
import DemoChat from './DemoChat';
import { useAuthContext } from '../../context/AuthContext';
// import { PsyuseAuthContext } from '../../context/PsyAuthContext';

const Pagelinks = () => {
const {authUser} = useAuthContext();
// const {authPsychics} = PsyuseAuthContext();


  return (
    <Router>
  <div className="App">
    <Navbar />
    <div className="container container-fluid">
      <Switch>
        <Route exact path="/">
          {authUser ? <Chatform /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {authUser ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/signup">
          {authUser ? <Redirect to="/" /> : <UserRegister />}
        </Route>
          <Route path="/demo" component={DemoChat}/>
          <Route path="/Love" component={Love} />
          <Route path="/life" component={Life_blog}/>
          <Route path="/study" component={Study_blogs}/>
          <Route path="/nature" component={Nature_blog}/>
          <Route path="/help" component={Howhelp}/> 
          <Route path="/profile" component={Profile}/>
          <Route path="/family" component={Family_psychics}/>
          <Route path="/reading" component={Reading_topics}/>
          <Route path="/couple_psychics" component={Couple_psychics}/>
          <Route path="/psychics_love" component={Love_psychics}/>
          <Route path="/psychics_medium" component={Psychics_medium}/>
          <Route path="/AuraReading" component={AuraReading}/>
          <Route path="/star_horoscopes" component={Star_horoscopes}/>
          <Route path="/UpdateProfile" component={UpdateProfile} exact/>
          <Route path="/Psychicsprofile" component={Psychics_profile} />
          <Route path="/Psychicvop" component={Psychicvop} />
          <Route path="/Pricing" component={Pricing} />
          <Route path="/Reading" component={Reading}/>
          <Route path="/Blogs" component={Blogs} />
          <Route path="/Blogdetails" component={Blogdetails} />
          <Route path="/Howitworks" component={Howitwork} />
          <Route path="/About" component={About} />
          <Route path="/maritial_life" component={Marriage_life}/>
          <Route path="/contact" component={Contact} />
          <Route path="/pet_psychics" component={Pet_psychics}/>
          <Route path="/break_up" component={Break_up}/>
          <Route path="/cheating" component={Cheating}/>
          <Route path="/parent_children" component={Parent_children}/>
          <Route path="/profile2" component={Profile2}/>
          <Route path="/crystal_reading" component={Crystal_reading}/>
          <Route path="/Psychics" component={Psychics} exact/>
                   
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Pagelinks;
