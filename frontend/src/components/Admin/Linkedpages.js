// Linkedpages.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Sidenav2 from './Sidenav2';
import Footer from './Footer';
import Psychics_Userlist from './Psychics_Userlist';
import Psychics_profile_details from './Psychics_profile_details';
import Users from './Users';
import User_profile from './User_profile';
import Mail from './Mail';
import Read_mail from './Read_mail';
import Pages from './Pages';
import News from './News';
import News_list from './News_list';
import Pricing_details from './Pricing_details';
import Pricing_section from './Pricing_section';
import Comments from './Comments';
import Testimonials from './testimonials';
import page_details from './page_details';
import Faq from './Faq';
import Visitors from './Visitors';
import payment_gateways from './Payment_gateways';
import accepted_payment from './accepted_payment';
import accounts from './accounts';
const Linkedpages = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidenav2/>
        <Switch>
            <Route path="/admin/pages/Psychics_profile_details" component = {Psychics_profile_details} />
          <Route path="/admin/pages/Home" component={Home} />
          <Route path= "/admin/pages/Psychics_list" component ={Psychics_Userlist}/>
          <Route path="/admin/pages/Users" component={Users}/>
          <Route path= "/admin/pages/User_profile" component= {User_profile}/>
          <Route path="/admin/pages/Mail" component = {Mail}/>
          <Route path= "/admin/pages/Read_mail" component = {Read_mail}/>
          <Route path="/admin/pages/Pages/" component = {Pages}/>
          <Route path="/admin/pages/News" component= {News}/>
          <Route path="/admin/pages/News_list" component = {News_list}/>
          <Route path="/admin/pages/Pricing_details" component={Pricing_details}/>
          <Route path= "/admin/pages/Pricing_section" component= {Pricing_section}/>
          <Route path= "/admin/pages/Comments" component = {Comments}/>
          <Route path= "/admin/pages/testimonials" component= {Testimonials}/>
          <Route path="/admin/pages/page_details" component = {page_details}/>
          <Route path="/admin/pages/Faq" component=  {Faq}/>
          <Route path="/admin/pages/Visitors" component= {Visitors}/>
          <Route path="/admin/pages/payment_gateways" component={payment_gateways}/>
          <Route path="/admin/pages/accepted_payment" component={accepted_payment}/>
          <Route path="/admin/pages/accounts" component={accounts}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default Linkedpages;
