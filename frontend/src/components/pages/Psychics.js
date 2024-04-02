import React, { useEffect } from 'react';
import '../assets/style.css';
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
import clair from '../Images/clair.png';
import career from '../Images/career.png';
import family from '../Images/family.png';
import love from '../Images/love.png';
import tarot from '../Images/tarot.png';
import medium from '../Images/medium.png';
import { NavLink,Link } from 'react-router-dom';

const Psychics = () => {
  
  
  return (
      <div className="container">
 <br/> 

<div class="banner" data-aos="fade-down-right">

    <div class="container">

      <div class="slider-container has-scrollbar">

        

        <div class="slider-item">

          <img src={banner2} alt="modern sunglasses" class="banner-img"/>

          <div class="banner-content">

            <p class="banner-subtitle" data-aos="fade-right">Empathic Guidance
</p>

            <h2 class="banner-title" data-aos="fade-right">Unlock Wisdom</h2>

            <p className="banner-text"  data-aos="fade-left">
              starting at &dollar; <b>1</b>.00
            </p>

            <a href="#" className="banner-btn" data-aos="zoom-in">Starting Now</a>

          </div>

        </div>

       

      </div>
       {/* Slider of cart start from here  */}
      <div className='search-topics-container' data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="1000" >
       <h3>Explore By Topics</h3>
    <div className="search-box-container">
 
   <div className='search-container'>
    <Link to="/family">
    <img src={family} alt="familyName" />
    </Link>
    </div>
    <div className='search-container'>
    <Link to="/love">
    <img src={love} alt="familyName" />
    </Link>
    </div>
    <div className='search-container'>
    <img src={clair} alt="familyName" />
    </div>
    <div className='search-container'>
      <Link to="/psychics_medium">
    <img src={medium} alt="familyName" />
    </Link>
    </div>
    <div className='search-container'>
      <Link to="/crystal_reading">
    <img src={tarot} alt="familyName" />
    </Link>
    </div><div className='search-container'>
      <Link to="/reading">
    <img src={career} alt="familyName" />
    </Link>
    </div><div className='search-container'>
    </div>
   
  </div>
      </div>
      {/* search container end here  */}
    </div>
  </div>

        <div className="product-box">
          <div className="product-main">
            <h2 className="title" data-aos="fade-right">
              Expert Psychics:
            </h2>
            <div className="intro" data-aos="fade-right">
              <span>
                Access the wisdom of our specialized advisors for crystal-clear guidance. Unlock the insights of our seasoned advisors to find clarity. Tap into the expertise of our specialized advisors for clear guidance.
              </span>
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
     

   
                         <div className="card-body "  >
                           <div className="row">
                             <div className="col-7">
                               <h2 className="lead">
                                 <b>Anold </b>
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




       
 <br></br>
          <div className="card-body">
  <h3 className="title-package" data-aos="fade-right">
    New Customer Offer
  </h3>
  
  <div className="intro-packages" data-aos="fade-right">
    <span>
    Our 20 minute intro packages are designed to work with your budget and give you the best possible reading.</span>
  </div>
  <br></br>
  <div className="package" data-aos="fade-right">
  <div className="package-grid">
      <div className="position-relative p-3" >
        <div className="ribbon-wrapper">
          <div className="ribbon">Basic</div>
        </div>
       <h6>Best for the curious.</h6> <br />
        <ul className='package-list'>
          <li>Newest Psychics</li>
          <li>Access to 229 Psychics</li>
          <li>3-5 Years Psychic Experience</li>
          <li>3.8 Average Star Rating</li>
          <li>200+ Positive Testimonials</li>
          
        </ul>
        <button className='package-price-btn' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"> <Link to="/signup" className='text-white'><span> New Customer Rate</span> <h4> $20.00</h4></Link></button>
    
      </div>
    </div>
    <div className="package-grid">
      <div className="position-relative p-3" >
        <div className="ribbon-wrapper">
          <div className="ribbon">Medium</div>
        </div>
       <h6>Best for those getting started.</h6> <br />
        <ul className='package-list'>
          <li>Our Most Popular Psychics</li>
          <li>Access to 299 Psychics</li>
          <li>5 - 15 Years Psychic Experience</li>
          <li>4.2 Average Star Rating</li>
          <li>700+ Positive Testimonials</li>
          
        </ul>
        <button className='package-price-btn' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"> <Link to="/signup" className='text-white'><span> New Customer Rate</span> <h4> $30.00</h4></Link></button>
      </div>
    </div>
    <div className="package-grid">
      <div className="position-relative p-3" >
        <div className="ribbon-wrapper">
          <div className="ribbon">Advance</div>
        </div>
       <h6>For those with big questions.</h6> <br />
        <ul className='package-list'>
          <li>Premier Psychics</li>
          <li>Access to 368 Psychics</li>
          <li>10+ Years Psychic Experience</li>
          <li>4.6 Average Star Rating</li>
          <li>1,200+ Positive Testimonials</li>
          
        </ul>
        <button className='package-price-btn ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><Link to="/signup" className='text-white'> <span> New Customer Rate</span> <h4> $50.00</h4></Link></button>
    
      </div>
    </div>

    
  </div>

 

</div>


<div>
  <br>
  </br>
  <br></br>
  <div className='why-choose' data-aos="fade-right">  <h4> Why TalktoPsychics Important ?</h4></div>
<div className="container-choose" data-aos="fade-right">
  
  <div className="testimonials-box">
    {/*
    - TESTIMONIALS
  */}
    <div className="testimonial">
      <h2 className="title">testimonial</h2>
      <div className="testimonial-card">
        <ul>
        <li>
          <div className="experince-card">
            <div className="experince-card-img"> <img src={experience} alt="experience"/></div>
            <div className='experince-card-description'><h5> 
Over 25 Years in Business
</h5> 
<p>With expertise in selecting the most gifted psychics. </p>
</div>
      </div> 
      </li>
      <li>
          <div className="experince-card">
            <div className="experince-card-img"> <img src={experience} alt="experience"/></div>
            <div className='experince-card-description'><h5> 
Over 25 Years in Business
</h5> 
<p>With expertise in selecting the most gifted psychics. </p>
</div>
      </div> 
      </li>
        </ul>
      </div>
    </div>
    {/*
    - CTA
  */}
    <div className="cta-container">
      <img src={banner} alt="summer collection" className="cta-banner" />
      <div  className="cta-content">
       
        <p className="discount">The Benefits of Psychic Readings
</p>
        <p className="cta-paragraph">Our psychics can help you fulfill your dreams and awaken your full potential.


</p>
        
       
    </div>
    </div>
    {/*
    - SERVICE
  */}
    <div className="testimonial">
      <h2 className="title">testimonial</h2>
      <div className="testimonial-card">
        <ul>
        <li>
          <div className="experince-card">
            <div className="experince-card-img"> <img src={experience} alt="experience"/></div>
            <div className='experince-card-description'><h5> 
Over 25 Years in Business
</h5> 
<p>With expertise in selecting the most gifted psychics. </p>
</div>
      </div> 
      </li>
      <li>
          <div className="experince-card">
            <div className="experince-card-img"> <img src={experience} alt="experience"/></div>
            <div className='experince-card-description'><h5> 
Over 25 Years in Business
</h5> 
<p>With expertise in selecting the most gifted psychics. </p>
</div>
      </div> 
      </li>
        </ul>
      </div>
    </div>
  </div>
</div>

</div>
{/* Notification Banner here  */}



{/*  Notifciaton banner end here  */}

<div className="befenits-psychics-container" data-aos="flip-right"
     data-aos-easing="ease-out"
     data-aos-duration="1500">
 <h3 className='intro-benefits'> The Benefits of Psychic Readings
 </h3>
<div className='benefit-descritpion'><p> Our psychics can help you fulfill your dreams and awaken your full potential.

</p>
</div>
<div className='benefit-image-card'>
<div className='benefit_image'>
  <img src={target} alt=" benefit image"/>
  <p> Get Peace of  Mind in Challenging Time</p> 
</div>
<div className='benefit_image'>
  <img src={decision} alt=" benefit image"/>
  <p> Get Peace of  Mind in Challenging Time</p> 
</div>

<div className='benefit_image'>
  <img src={happy_icon} alt=" benefit image"/>
  <p> Get Peace of  Mind in Challenging Time</p> 
</div>
</div>
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
              1. Lorem ipsum dolor sit amet
            </h4>
          </div>
        </a>
        <div id="collapseOne" className="collapse show" data-parent="#accordion">
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          </div>
        </div>
      </div>
      <div className="card card-primary card-outline">
        <a className="d-block w-100" data-toggle="collapse" href="#collapseTwo">
        <div className="card-head card-head-custom">
            <h4 className="card-title w-100">
              2. Aenean massa
            </h4>
          </div>
        </a>
        <div id="collapseTwo" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </div>
        </div>
      </div>
      <div className="card card-primary card-outline">
        <a className="d-block w-100" data-toggle="collapse" href="#collapseThree">
        <div className="card-head card-head-custom">
            <h4 className="card-title w-100">
              3. Donec quam felis
            </h4>
          </div>
        </a>
        <div id="collapseThree" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </div>
        </div>
      </div>
      <div className="card card-warning card-outline">
        <a className="d-block w-100" data-toggle="collapse" href="#collapseFour">
        <div className="card-head card-head-custom">
            <h4 className="card-title w-100">
              4. Donec pede justo
            </h4>
          </div>
        </a>
        <div id="collapseFour" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </div>
        </div>
      </div>
      <div className="card card-warning card-outline">
        <a className="d-block w-100" data-toggle="collapse" href="#collapseFive">
        <div className="card-head card-head-custom">
            <h4 className="card-title w-100">
              5. In enim justo
            </h4>
          </div>
        </a>
        <div id="collapseFive" className="collapse" data-parent="#accordion">
          <div className="card-body">
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          </div>
        </div>
      </div>
      <div className="card card-warning card-outline">
        <a className="d-block w-100" data-toggle="collapse" href="#collapseSix">
        <div className="card-head card-head-custom">
            <h4 className="card-title w-100">
              6. Integer tincidunt
            </h4>
          </div>
        </a>
        <div id="collapseSix" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          </div>
        </div>
      </div>
      <div className="card card-danger card-outline">
        <a className="d-block w-100" data-toggle="collapse" href="#collapseSeven">
        <div className="card-head card-head-custom">
            <h4 className="card-title w-100">
              7. Aenean leo ligula
            </h4>
          </div>
        </a>
        <div id="collapseSeven" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          </div>
        </div>
      </div>
      <div className="card card-danger card-outline">
        <a className="d-block w-100" data-toggle="collapse" href="#collapseEight">
        <div className="card-head card-head-custom">
            <h4 className="card-title w-100">
              8. Aliquam lorem ante
            </h4>
          </div>
        </a>
        <div id="collapseEight" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
          </div>
        </div>
      </div>
   
    </div>
  </div>
  
</section>


    {/*  Contact Favour Card  */}
   <div className='favour-card' data-aos="flip-up">
  <div className='favour-card-banner'> 
    <img src={phone_card} alt="phone_card" className='phone-card'/>
    <h5> Best Online Psychics </h5>
    <p> Our best online psychis help out you how to improve</p>
    <button className='favour-card-btn'> Learn More</button>
  </div>
  <div className='favour-card-banner'> 
    <img src={search_card} alt="phone_card" className='phone-card'/>
    <h5> Best Online Psychics </h5>
    <p> Our best online psychis help out you how to improve</p>
    <button className='favour-card-btn'> Learn More</button>
  </div>
  <div className='favour-card-banner'> 
    <img src={star_card} alt="phone_card" className='phone-card'/>
    <h5> Best Online Psychics </h5>
    <p> Our best online psychis help out you how to improve</p>
    <button className='favour-card-btn'> Learn More</button>
  </div>
    </div>
    
      {/* contact favour end here  */}

{/* How Psychics Work */}
<br/>
 <br/>
 <br/>
<div className="row" data-aos="fade-up-left">
  <div className="col-md-6">
   
      
      {/* /.card-header */}
      <div className="card-body">
        {/* we are adding the accordion ID so Bootstrap's collapse plugin detects it */}
        <div id="accordion">
          <div className="card-primary">
            <h4> See how a Psychic reading can
change your life.</h4>
            <div id="collapseOne" className="collapse show" data-parent="#accordion">
              <div className="card-body">
              Whether you want to unlock a mystery, clear a path, or boost your inner power, our psychics are here to help you in matters of love, relationships, money, career and all the things that matter to you.
              <button className='guide-psychics-btn'>
              <Link to="/howitworks" className='text-white'>
                How it works
                </Link>
              </button>
             
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
      {/* /.card-body */}
    
    {/* /.card */}
  </div>
  {/* /.col */}
  <div className="col-md-6">
    <div className="card">
      
      {/* /.card-header */}
      <div className="card-body">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
         
          <div className="carousel-inner">
            <div className="carousel-item active">
              <video className="d-block w-100" controls>
                <source src="your-video-source.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
        </div>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
</div>

  {/* /.col */}
</div>


{/* How pyschics work end */}
    </div>

  </div>
</div>


     
   
  );
};

export default Psychics;
