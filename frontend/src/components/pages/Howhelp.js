import React from 'react'
import freedom_girl from '../Images/freedom_girl.jpg';
import search_card from '../Images/search_card.png';
import star_card   from '../Images/star_card.png';
import profile_img1 from '../Images/profile_img1.jpg';
import { NavLink } from 'react-router-dom';
const Howhelp = () => {
  return (
    <div>
      <div className='container'>
         <div class="banner" data-aos="zoom-in-down">

<div class="container">
  <h4> How We Can Help
</h4>
  <div class="slider-container has-scrollbar">

        

<div class="slider-item">

  <img src={freedom_girl} alt="modern sunglasses" class="banner-img"/>

  <div class="banner-content">
  <h3 class="banner-title" data-aos="fade-right">Life is full of questions

</h3>
  

    

    <p className="banner-text"  data-aos="fade-left" style={{color:'black'}}>
    Does he love me? Will we get married?
Is this the right job? What is my life's purpose?
    </p>

  </div>

</div>



</div>
<br></br>
  
  <div className='about-content' data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="400">
  <h5 data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="400"> Our psychics can help you fulfill your dreams and awaken your full potential.</h5>
  <p className='card-text'>
  As you can probably tell by now: we take pride in our psychics and the help they bring to millions around the world. By the time you connect with one of our advisors, they have each gone through a specialized interview process before joining our family. That means we really get to know them so that you can enjoy a confidential reading with someone who’s proven their abilities and shown a strong desire to share them with our customers.

  </p>
  </div>
<br/><br/>
  <div className='about-content' data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="400">
  <h5> Our Goal to help</h5>
  <p className='card-text' data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="400">
  It is our mission. It is our calling. It is our purpose. That means that if it matters to you, it matters to us. No matter how big or how small your question, where you find yourself in your journey, whether you’re in love or in disarray, we are here to help.
We prove it every day with new jobs, new relationships, new outlooks on life.t is our mission. It is our calling. It is our purpose. That means that if it matters to you, it matters to us. No matter how big or how small your question, where you find yourself in your journey, whether you’re in love or in disarray, we are here to help. We prove it every day with new jobs, new relationships, new outlooks on life.</p>

  </div>

<br></br>
  {/*  2 div  */}
 
  {/* div's end here  */}



  <div className='favour-card' data-aos="fade-right">
  
  <div className='favour-card-banner' style={{background:'none'}}> 
    <img src={search_card} alt="phone_card" className='phone-card'/>
    <h6> We are here to help you reach your full potential — one answer at a time.</h6>
    <p className='card-text'> Our gifted psychics have helped over 2 million people find the clarity they were seeking. Connect with us, and we’ll help you uncover insights about important matters, find love, repair relationships and get a boost on those complicated career decisions.

Need answers? It’s kind of our thing.</p>

    </div>
  <div className='favour-card-banner' style={{background:'none'}}> 
    <img src={star_card} alt="phone_card" className='phone-card'/>
    <h6> Millions of people have reached out to our psychics for accurate guidance. It’s easy to see why.</h6>
    <p className='card-text'> Our psychics earn their place within our family of advisors with every reading. No matter who you choose to have your confidential reading with, you can be sure that it will be accurate and of the highest quality.

Learn more about how we select the best psychic advisors</p>

 
</div>
    </div>


<br/><br/>
    {/* More psychics */}
    <div class="underline">
  <div class="line"></div>
  <div class="star">&#9733;</div>
  <div class="line"></div>
</div>

<br/><br/><br/><br/>
    <div className="row" data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <h5 className='text-center'> Find the psychic that’s right for you.</h5>
        <p className='card-text' style={{textAlign:'center'}}>
        Whether you’re looking for quick answers to big questions or long-term guidance, our psychics can help you on your path towards happiness, serenity, and success.


        </p>
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
                </div>

{/* More psychics end here  */}
</div>
</div> 
    </div>
    </div>
  )
}

export default Howhelp
