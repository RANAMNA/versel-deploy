import React from 'react'
import Horoscopes_add from "../Images/Horoscopes_add.png";
import banner from '../Images/banner.jpg';
import profile_img1 from '../Images/profile_img1.jpg';
import experience from '../Images/experience.png';
import target from '../Images/target.png';
import decision from '../Images/decision.png';
import happy_icon from '../Images/happy_icon.png';
import star_card from '../Images/star_card.png';
import phone_card from '../Images/phone_card.png';
import search_card from '../Images/search_card.png';
import banner2 from '../Images/banner2.png';
import aura_reading from '../Images/aura_reading.jpeg';
import { NavLink } from 'react-router-dom';
const AuraReading = () => {
  return (
    <div className="container">
    <br/> 
   
    <div className="love_banner" data-aos="zoom-in-up">
  <img src={aura_reading} alt="love banner"/>
  <div className="caption" >
    <h3>
        <br/> 
        <strong style={{fontSize:'2em', color:'black', fontStyle:'italic', marginBottom:'20px'}}> Aura Readings</strong>
    </h3>
   
  </div>
  
</div>
   
           <div className="product-box">
             <div className="product-main">
               <h2 className="title" data-aos="fade-right">
                 
               </h2>
               <div className="intro" data-aos="fade-right">
                 <span>
                 Connect with our skilled aura reading psychics for profound insights and crystal-clear guidance. Unlock the secrets of your energy field by tapping into the expertise of our seasoned advisors. Experience clarity and enlightenment as our specialized advisors unveil the mysteries of your aura. </span>
               </div>
               <br></br>
               <div className="card card-solid" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" >
                 <div className="card-body pb-0">
                   <div className="row">
                     
                     <div className="card-column">
                     <div className="card bg-light d-flex flex-fill">
     <div className="card-header-psychics">
       <span className='online_status'> Online</span>
       <span className='icon-eye float-right'><NavLink to="/Psychicsprofile"><NavLink to="/Psychicsprofile"><i className='fas fa-eye' style={{ color: 'white' }}></i> </NavLink> </NavLink></span>
     </div>
   
   
                         <div className="card-body ">
                           <div className="row">
                             <div className="col-7">
                               <h2 className="lead">
                                 <b>Nichle Delok</b>
                               </h2>
                               <p className="text-muted text-sm">
                                 <b>About: </b>
                                 <br></br> Psychic with great ability to solve complicated problems of life 
                               </p>
                               <ul className="fa-ul text-muted">
                                 <li className="small">
                                   <span className="fa-li">
                                     <i className="fas fa-lg fa-comment" />
                                   </span>
                                   2300
                                 </li>
                                 <li className="small">
                                   <span className="fa-li">
                                     <i className="fas fa-lg fa-star" />
                                   </span>
                                   4.5
                                 </li>
                               </ul>
                               <div className="chat-rate-container">
                                 <h5>
                                   $4.00 <del> $8.00</del>
                                 </h5>
                               </div>
                             </div>
                             <div className="col-5 text-center">
                               
                               <img src={profile_img1} alt="user-avatar" style={{marginLeft:'15px'}}className="img-circle img-fluid"  />
                               <span className='experties'> Expertise:
                                 
                               </span>
                               <span className='experties-about'> Top Online Psychcis Reading</span>
                             </div>
                           </div>
                         </div>
                         <div className="card-footer">
                         <div className="text-right">
                             <button className='chat-button'>
                             < NavLink to="/Chatform"><span className='text-white'>Chat</span></NavLink>
                             </button>
                             <button className='profile-button'>
                            <span className='text-white'> Phone </span>
                                  </button>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="card-column">
                     <div className="card bg-light d-flex flex-fill">
     <div className="card-header-psychics">
       <span className='busy_status'> Busy</span>
       <span className='icon-eye float-right'><NavLink to="/Psychicsprofile"><i className='fas fa-eye' style={{ color: 'white' }}></i> </NavLink></span>
     </div>
   
   
                         <div className="card-body ">
                           <div className="row">
                             <div className="col-7">
                               <h2 className="lead">
                                 <b>Nichle Delok</b>
                               </h2>
                               <p className="text-muted text-sm">
                                 <b>About: </b>
                                 <br></br> Psychic with great ability to solve complicated problems of life 
                               </p>
                               <ul className="fa-ul text-muted">
                                 <li className="small">
                                   <span className="fa-li">
                                     <i className="fas fa-lg fa-comment" />
                                   </span>
                                   2300
                                 </li>
                                 <li className="small">
                                   <span className="fa-li">
                                     <i className="fas fa-lg fa-star" />
                                   </span>
                                   4.5
                                 </li>
                               </ul>
                               <div className="chat-rate-container">
                                 <h5>
                                   $3.00 <del> $6.00</del>
                                 </h5>
                               </div>
                             </div>
                             <div className="col-5 text-center">
                               
                               <img src={profile_img1} alt="user-avatar" style={{marginLeft:'15px'}}className="img-circle img-fluid"  />
                               <span className='experties'> Expertise:
                                 
                               </span>
                               <span className='experties-about'> Top Online Psychcis Reading</span>
                             </div>
                           </div>
                         </div>
                         <div className="card-footer">
                         <div className="text-right">
                             <button className='chat-button'>
                             < NavLink to="/Chatform"><span className='text-white'>Chat</span></NavLink>
                             </button>
                             <button className='profile-button'>
                            <span className='text-white'> Phone </span>
                                  </button>
                           </div>
                         </div>
                       </div>
                     </div><div className="card-column">
                     <div className="card bg-light d-flex flex-fill">
     <div className="card-header-psychics">
       <span className='offline_status'> Offline</span>
       <span className='icon-eye float-right'><NavLink to="/Psychicsprofile"><i className='fas fa-eye' style={{ color: 'white' }}></i> </NavLink></span>
     </div>
   
   
                         <div className="card-body ">
                           <div className="row">
                             <div className="col-7">
                               <h2 className="lead">
                                 <b>Nichle Delok</b>
                               </h2>
                               <p className="text-muted text-sm">
                                 <b>About: </b>
                                 <br></br> Psychic with great ability to solve complicated problems of life 
                               </p>
                               <ul className="fa-ul text-muted">
                                 <li className="small">
                                   <span className="fa-li">
                                     <i className="fas fa-lg fa-comment" />
                                   </span>
                                   2300
                                 </li>
                                 <li className="small">
                                   <span className="fa-li">
                                     <i className="fas fa-lg fa-star" />
                                   </span>
                                   4.5
                                 </li>
                               </ul>
                               <div className="chat-rate-container">
                                 <h5>
                                   $4.00 <del> $5.00</del>
                                 </h5>
                               </div>
                             </div>
                             <div className="col-5 text-center">
                               
                               <img src={profile_img1} alt="user-avatar" style={{marginLeft:'15px'}}className="img-circle img-fluid"  />
                               <span className='experties'> Expertise:
                                 
                               </span>
                               <span className='experties-about'> Top Online Psychcis Reading</span>
                             </div>
                           </div>
                         </div>
                         <div className="card-footer">
                         <div className="text-right">
                             <button className='chat-button'>
                             < NavLink to="/Chatform"><span className='text-white'>Chat</span></NavLink>
                             </button>
                             <button className='profile-button'>
                            <span className='text-white'> Phone </span>
                                  </button>
                           </div>
                         </div>
                       </div>
                     </div>
                    
                    </div>
   
                    <div className="row">
                     
                     <div className="card-column">
                     <div className="card bg-light d-flex flex-fill">
     <div className="card-header-psychics">
       <span className='online_status'> Online</span>
       <span className='icon-eye float-right'><NavLink to="/Psychicsprofile"><i className='fas fa-eye' style={{ color: 'white' }}></i> </NavLink></span>
     </div>
   
   
                         <div className="card-body ">
                           <div className="row">
                             <div className="col-7">
                               <h2 className="lead">
                                 <b>Nichle Delok</b>
                               </h2>
                               <p className="text-muted text-sm">
                                 <b>About: </b>
                                 <br></br> Psychic with great ability to solve complicated problems of life 
                               </p>
                               <ul className="fa-ul text-muted">
                                 <li className="small">
                                   <span className="fa-li">
                                     <i className="fas fa-lg fa-comment" />
                                   </span>
                                   2300
                                 </li>
                                 <li className="small">
                                   <span className="fa-li">
                                     <i className="fas fa-lg fa-star" />
                                   </span>
                                   4.5
                                 </li>
                               </ul>
                               <div className="chat-rate-container">
                                 <h5>
                                   $4.00 <del> $8.00</del>
                                 </h5>
                               </div>
                             </div>
                             <div className="col-5 text-center">
                               
                               <img src={profile_img1} alt="user-avatar" style={{marginLeft:'15px'}}className="img-circle img-fluid"  />
                               <span className='experties'> Expertise:
                                 
                               </span>
                               <span className='experties-about'> Top Online Psychcis Reading</span>
                             </div>
                           </div>
                         </div>
                         <div className="card-footer">
                         <div className="text-right">
                             <button className='chat-button'>
                             < NavLink to="/Chatform"><span className='text-white'>Chat</span></NavLink>
                             </button>
                             <button className='profile-button'>
                            <span className='text-white'> Phone </span>
                                  </button>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="card-column">
                     <div className="card bg-light d-flex flex-fill">
     <div className="card-header-psychics">
       <span className='busy_status'> Busy</span>
       <span className='icon-eye float-right'><NavLink to="/Psychicsprofile"><i className='fas fa-eye' style={{ color: 'white' }}></i> </NavLink></span>
     </div>
   
   
                         <div className="card-body ">
                           <div className="row">
                             <div className="col-7">
                               <h2 className="lead">
                                 <b>Nichle Delok</b>
                               </h2>
                               <p className="text-muted text-sm">
                                 <b>About: </b>
                                 <br></br> Psychic with great ability to solve complicated problems of life 
                               </p>
                               <ul className="fa-ul text-muted">
                                 <li className="small">
                                   <span className="fa-li">
                                     <i className="fas fa-lg fa-comment" />
                                   </span>
                                   2300
                                 </li>
                                 <li className="small">
                                   <span className="fa-li">
                                     <i className="fas fa-lg fa-star" />
                                   </span>
                                   4.5
                                 </li>
                               </ul>
                               <div className="chat-rate-container">
                                 <h5>
                                   $3.00 <del> $6.00</del>
                                 </h5>
                               </div>
                             </div>
                             <div className="col-5 text-center">
                               
                               <img src={profile_img1} alt="user-avatar" style={{marginLeft:'15px'}}className="img-circle img-fluid"  />
                               <span className='experties'> Expertise:
                                 
                               </span>
                               <span className='experties-about'> Top Online Psychcis Reading</span>
                             </div>
                           </div>
                         </div>
                         <div className="card-footer">
                         <div className="text-right">
                             <button className='chat-button'>
                             < NavLink to="/Chatform"><span className='text-white'>Chat</span></NavLink>
                             </button>
                             <button className='profile-button'>
                            <span className='text-white'> Phone </span>
                                  </button>
                           </div>
                         </div>
                       </div>
                     </div><div className="card-column">
                     <div className="card bg-light d-flex flex-fill">
     <div className="card-header-psychics">
       <span className='online_status'> Online</span>
       <span className='icon-eye float-right'><NavLink to="/Psychicsprofile"><i className='fas fa-eye' style={{ color: 'white' }}></i> </NavLink></span>
     </div>
   
   
                         <div className="card-body ">
                           <div className="row">
                             <div className="col-7">
                               <h2 className="lead">
                                 <b>Nichle Delok</b>
                               </h2>
                               <p className="text-muted text-sm">
                                 <b>About: </b>
                                 <br></br> Psychic with great ability to solve complicated problems of life 
                               </p>
                               <ul className="fa-ul text-muted">
                                 <li className="small">
                                   <span className="fa-li">
                                     <i className="fas fa-lg fa-comment" />
                                   </span>
                                   2300
                                 </li>
                                 <li className="small">
                                   <span className="fa-li">
                                     <i className="fas fa-lg fa-star" />
                                   </span>
                                   4.5
                                 </li>
                               </ul>
                               <div className="chat-rate-container">
                                 <h5>
                                   $4.00 <del> $5.00</del>
                                 </h5>
                               </div>
                             </div>
                             <div className="col-5 text-center">
                               
                               <img src={profile_img1} alt="user-avatar" style={{marginLeft:'15px'}}className="img-circle img-fluid"  />
                               <span className='experties'> Expertise:
                                 
                               </span>
                               <span className='experties-about'> Top Online Psychcis Reading</span>
                             </div>
                           </div>
                         </div>
                         <div className="card-footer">
                         <div className="text-right">
                             <button className='chat-button'>
                             < NavLink to="/Chatform"><span className='text-white'>Chat</span></NavLink>
                             </button>
                             <button className='profile-button'>
                            <span className='text-white'> Phone </span>
                                  </button>
                           </div>
                         </div>
                       </div>
                     </div>
                    
                    </div>
                    </div>
                 <div className="card-footer">
     <nav aria-label="Contacts Page Navigation">
       <ul className="pagination justify-content-center m-0">
         <li className="page-item"><a className="page-link" href="#"  style={{background:'#ff6000',color:'#fff'}}>1</a></li>
         <li className="page-item"><a className="page-link" href="#">2</a></li>
         <li className="page-item"><a className="page-link" href="#">3</a></li>
         <li className="page-item"><a className="page-link" href="#">4</a></li>
         <li className="page-item"><a className="page-link" href="#">5</a></li>
         <li className="page-item"><a className="page-link" href="#">6</a></li>
         <li className="page-item"><a className="page-link" href="#">7</a></li>
         <li className="page-item"><a className="page-link" href="#">8</a></li>
       </ul>
     </nav>
   </div>
               </div>
               
             </div>
   
     
   
   
   
   
             <div className="visit-more-container" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
               <button className="visit-more">Visit More Psychics</button>
             </div>
   
   
   
   
          
   
   
   {/*  Faq's start here to convert  */}
   <div className='frequntly asked questions'data-aos="fade-right" >
     <div className='intro-question'>
       <h4> Frequently Asked Question</h4>
     </div>
     <section className="content">
     <div className="row">
       <div className="col-12" id="accordion">
         <div className="card card-primary">
           <a className="d-block" data-toggle="collapse" href="#collapseOne">
           <div className="card-head card-head-custom">
               <h4 className="card-title w-100">
                 1. What is An Aura Reading?
               </h4>
             </div>
           </a>
           <div id="collapseOne" className="collapse show" data-parent="#accordion">
             <div className="card-body">
             An aura reading gives you insights and information about the layers of your aura and chakras. There are seven energy levels in your aura, and seven corresponding chakras: Root Chakra, Sacral Chakra, Solar Plexus (Navel Chakra), Heart Chakra, Throat Chakra, Third Eye Chakra, and Crown Chakra.

The colors, movements, shapes, and sometimes energy blocks found in your layers of aura and chakra tell the aura reader what’s happening in your inner and outer world, and how you’re responding. Maybe your heart hasn’t opened to love yet? Maybe someone is draining your energy and you don’t know how to protect yourself? Your aura reader will see all these details and will give you tips and advice to find health and balance.

With psychic vision, a good online aura reader can connect with you and see your aura from miles away. During or after your reading, your reader may ask you to perform simple spiritual exercises, such as breathing into your heart, repeating an affirmation, meditating, or wearing specific colors. Trust your reader and let them guide you to love and joy!

   </div>
           </div>
         </div>
         <div className="card card-primary card-outline">
           <a className="d-block w-100" data-toggle="collapse" href="#collapseTwo">
           <div className="card-head card-head-custom">
               <h4 className="card-title w-100">
                 2. How to find Best Aura Reading
               </h4>
             </div>
           </a>
           <div id="collapseTwo" className="collapse" data-parent="#accordion">
             <div className="card-body">
             When contacting aura readers, your goal should be to find the best reader for you and your current personal needs:
1. Browse profiles of online aura readers and see who you feel drawn to. Trust your feeling.
2. Take a look at reviews and ratings given to the reader by other users.
3. Start your reading via phone or chat!

Try out 3 different aura readers with 3 minutes FREE. Introduce yourself, ask questions and interact with your aura reader. Use this time to confirm that you feel a personal connection to your reader. If yes, continue on for a detailed, life-changing reading!

Full confidentiality is guaranteed in all sessions. For full anonymity, or if you don’t feel like talking over the phone, choose the chat option.

   </div>
           </div>
         </div>
        
      
       </div>
     </div>
     
   </section>
   <br></br>
   <h4>Latest Blogs</h4> 
<div className="row">

  <br/><br/>
  <div className="col-md-4">
    <div className="card">
      <div className="card-header">
        <h5 className="card-title" style={{fontSize:'1.1em'}}>
          <i className="fas fa-text-width" style={{padding:'3px' }} />
          <span className='text-white'>  The Secrets to Finding Karmic Love</span>
        </h5>
      </div>
      {/* /.card-header */}
    <div className="card-body clearfix">
        <blockquote className="quote-secondary">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <small>Someone famous in </small>
          <br/>
          <cite title="Source Title" style={{color:'#ff6000', cursor:'pointer'}}>Read More</cite>
        </blockquote>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </div>
  {/* ./col */}
  <div className="col-md-4">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title" style={{fontSize:'1.1em'}}>
          <i className="fas fa-text-width" style={{padding:'3px'}} />
          <span className='text-white'>  The Secrets to Finding Karmic Love</span>
        </h3>
      </div>
      {/* /.card-header */}
      <div className="card-body clearfix">
        <blockquote className="quote-secondary">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <small>Someone famous in </small>
          <br/>
          <cite title="Source Title" style={{color:'#ff6000', cursor:'pointer'}}>Read More</cite>
        </blockquote>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </div>
  <div className="col-md-4">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title" style={{fontSize:'1.1em'}}>
          <i className="fas fa-text-width" style={{padding:'3px'}} />
          <span className='text-white'>  The Secrets to Finding Karmic Love</span>
        </h3>
      </div>
      {/* /.card-header */}
      <div className="card-body clearfix">
        <blockquote className="quote-secondary">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <small>Someone famous in </small>
          <br/>
          <cite title="Source Title" style={{color:'#ff6000', cursor:'pointer'}}>Read More</cite>
        </blockquote>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </div>
  {/* ./col */}
</div>
     
   
   
   {/* How pyschics work end */}
       </div>
   
     </div>
   </div>
  )
}

export default AuraReading
