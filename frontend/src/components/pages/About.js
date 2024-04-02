import React from 'react';
import freedom_girl from '../Images/freedom_girl.jpg';
import search_card from '../Images/search_card.png';
import star_card   from '../Images/star_card.png';
import profile_img1 from '../Images/profile_img1.jpg';
import profile_img2 from '../Images/profile_img2.jpg';
import { NavLink } from 'react-router-dom';
const About = () => {
  return (
    <div className='container'>
         <div class="banner" data-aos="zoom-in-down">

<div class="container">
  <h4> About TalktoPsychics</h4>
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
        data-aos-duration="400"> A psychic connection, like no other.</h5>
  <p className='card-text'>
  Since 1995, we’ve had one goal: to connect those with deep questions about their lives with psychic advisors who possess the extraordinary ability to provide them with profound answers. This has been our journey and so far, we’ve been successful. This is because although, not every member of Talktopsychics Psychics was born with these gifts, every person you connect with has a deep desire to help those seeking answers on their life path.

  </p>
  </div>
<br/><br/>
  <div className='about-content' data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="400">
  <h5> Get to know us. And we’ll help you get to know yourself.</h5>
  <p className='card-text' data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="400">
  When you connect with any member of our company, from the customer service rep who answers your questions about a new deal to the brilliant developer behind our latest app feature, you are in contact with someone who takes their calling seriously.
  </p>

  </div>


  {/*  2 div  */}
 <div className='about-intro-container' data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000">

 <div className="row">
  <div className="col-md-6">
   
      
      {/* /.card-header */}
      <div className="card-body" >
        {/* we are adding the accordion ID so Bootstrap's collapse plugin detects it */}
        <div id="accordion">
          <div className="card-primary">
            <h5> Our mission: To be a positive force in people’s lives.</h5>
            <div id="collapseOne" className="collapse show" data-parent="#accordion">
              <p className='card-text'>
              TalktoPsychics is a family of online psychics dedicated to helping you live to your full potential. Whether you want to unlock a mystery, clear a path, or boost your inner power, our psychics are here to help you in matters of love, relationships, money, career and all the things that matter to you. We provide a safe, non-judgmental, quality service on our psychic line that is intent on helping you see and reflect upon your opportunities in life. We are sure that our psychic hotline will both enlighten and engage you!
             
              </p>
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
</div>
  {/* div's end here  */}



  <div className='favour-card' data-aos="fade-right">
  
  <div className='favour-card-banner' style={{background:'none'}}> 
    <img src={search_card} alt="phone_card" className='phone-card'/>
    <h6> We are here to help you reach your full potential — one answer at a time.</h6>
    <p className='card-text'> Our gifted psychics have helped over 2 million people find the clarity they were seeking. Connect with us, and we’ll help you uncover insights about important matters, find love, repair relationships and get a boost on those complicated career decisions.

Need answers? It’s kind of our thing.</p>
<button className='about-btn'>How to fit with </button>
    </div>
  <div className='favour-card-banner' style={{background:'none'}}> 
    <img src={star_card} alt="phone_card" className='phone-card'/>
    <h6> Millions of people have reached out to our psychics for accurate guidance. It’s easy to see why.</h6>
    <p className='card-text'> Our psychics earn their place within our family of advisors with every reading. No matter who you choose to have your confidential reading with, you can be sure that it will be accurate and of the highest quality.

Learn more about how we select the best psychic advisors</p>
<button className='about-btn'>How to fit with </button>
 
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
  )
}

export default About
