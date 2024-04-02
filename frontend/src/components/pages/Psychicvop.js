
import React, { useState } from 'react';
import '../assets/style.css';
import capricorn from '../Images/capricorn.png';
import Horoscopes_banner from '../Images/Horoscopes_banner.png';
import aqurius from '../Images/aqurius.png';
import cancer from '../Images/cancer.png';
import capri from '../Images/capri.png';
import gemini from '../Images/gemini.png';
import leo from '../Images/leo.png';
import libra from '../Images/libra.png';
import pisces from '../Images/pisces.png';
import sargit from '../Images/sargit.png';
import scorpio from '../Images/scorpio.png';
import taraus from '../Images/taraus.png';
import virgo from '../Images/virgo.png';
import Horoscopes_add from '../Images/Horoscopes_add.png';
import '../assets/style.css';


const Psychicvop = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return(
    <div className='container'>
       <br/> 
      <div className="love_banner" data-aos="zoom-in-up">
  <img src={Horoscopes_banner} alt="love banner"/>
  <div className="caption" >
    <h4>Answers at your reach 
        <br/> 
        <strong style={{fontSize:'2em'}}> $1/Min</strong>
    </h4>
    <p>Love psychics can answer questions and give love advice! </p>
   
  </div>
  
</div>
<br/>



<div className="centered-row">
    
    <li className="Horoscope-list-btn"> Capricorn Insight </li>
    <li className="Horoscope-list-btn"> Saturn Guidance
</li>
    <li className="Horoscope-list-btn">  Practical Wisdom
</li>
    <li className="Horoscope-list-btn">  Ambition Focus
</li>
    <li className="Horoscope-list-btn">  Earth Sign Energy
</li>
    <li className="Horoscope-list-btn">  Life Discipline
</li>
    <li className="Horoscope-list-btn">  Relationship Harmony
</li>
    <li className="Horoscope-list-btn">  Financial Mastery
</li>
    <li className="Horoscope-list-btn">  Astro Blueprint
 </li>
    <li className="Horoscope-list-btn">  Capricorn Spirit
 </li>
    <li className="Horoscope-list-btn">  Goal Analysis
 </li>
    
  </div>






<hr className='underline' style={{color:'gray'}}/>

{/* Horoscopes start here  */}
<section className="content"data-aos="zoom-in-down">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
        {/* Profile Image */}

        
        <div className="card card-primary card-outline">
          <div className="card-body box-profile">
            <div className="text-center">
            <img src={Horoscopes_add} alt='horoscopes' className='horoscope_add'/>
         
           
           </div>
          </div>
          {/* /.card-body */}
        </div>


        <div className="card card-primary card-outline">
          <div className="card-body box-profile">
            <div className="text-center">
              <img className="profile-user-img img-fluid img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture" />
            </div>
            <h6 className='profile-name text-center'> Naninkan</h6>
             <span className="text-muted text-center" style={{fontSize:'0.7em'}}>Love & Relationships
Destiny & Life Path
Money & Finance</span>
            <ul className="list-group list-group-unbordered">
              <li className="list-group-item">
                <span style={{color:'#636363',fontSize:'0.7em'}}>$2.00/Min <span><del> $5.00</del> </span></span> <a className="float-right" style={{fontSize:'0.7em'}} > Rating (4.5)
    <label for="star5">★</label> </a>
                 <a className="float-left" style={{fontSize:'0.7em',color:'#636363'}} > Reading Since 2001 (4.5)</a>
              </li>
              
            </ul>
            <br/>
            <div className="btn-chat-group">
            <a href="#" className="btn btn-block-chat" style={{background:'#ff6000', color:'#fff'}}> Call </a>
            <a href="#" className="btn btn-block-chat" style={{background:'#ff6000', color:'#fff'}}> Message </a>
            </div>
          </div>
          {/* /.card-body */}
        </div>
        <div className="card card-primary card-outline">
          <div className="card-body box-profile">
            <div className="text-center">
              <img className="profile-user-img img-fluid img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture" />
            </div>
            <h6 className='profile-name text-center'> Naninkan</h6>
             <span className="text-muted text-center" style={{fontSize:'0.7em'}}>Love & Relationships
Destiny & Life Path
Money & Finance</span>
            <ul className="list-group list-group-unbordered">
              <li className="list-group-item">
                <span style={{color:'#636363',fontSize:'0.7em'}}>$2.00/Min <span><del> $5.00</del> </span></span> <a className="float-right" style={{fontSize:'0.7em'}} > Rating (4.5)
    <label for="star5">★</label> </a>
                 <a className="float-left" style={{fontSize:'0.7em',color:'#636363'}} > Reading Since 2001 (4.5)</a>
              </li>
              
            </ul>
            <br/>
            <div className="btn-chat-group">
            <a href="#" className="btn btn-block-chat" style={{background:'#ff6000', color:'#fff'}}> Call </a>
            <a href="#" className="btn btn-block-chat" style={{background:'#ff6000', color:'#fff'}}> Message </a>
            </div>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
        {/* About Me Box */}
         <div className="card card-primary card-outline">
          <div className="card-body box-profile">
            <div className="text-center">
              <img className="profile-user-img img-fluid img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture" />
            </div>
            <h6 className='profile-name text-center'> Naninkan</h6>
             <span className="text-muted text-center" style={{fontSize:'0.7em'}}>Love & Relationships
Destiny & Life Path
Money & Finance</span>
            <ul className="list-group list-group-unbordered">
              <li className="list-group-item">
                <span style={{color:'#636363',fontSize:'0.7em'}}>$2.00/Min <span><del> $5.00</del> </span></span> <a className="float-right" style={{fontSize:'0.7em'}} > Rating (4.5)
    <label for="star5">★</label> </a>
                 <a className="float-left" style={{fontSize:'0.7em',color:'#636363'}} > Reading Since 2001 (4.5)</a>
              </li>
              
            </ul>
            <br/>
            <div className="btn-chat-group">
            <a href="#" className="btn btn-block-chat" style={{background:'#ff6000', color:'#fff'}}> Call </a>
            <a href="#" className="btn btn-block-chat" style={{background:'#ff6000', color:'#fff'}}> Message </a>
            </div>
          </div>
          {/* /.card-body */}
        </div>
<div className="card card-danger">
  <div className="card-header">
    <h5 className='title-book'> Get Your Personal Hyroscopes Daily</h5>
  </div>
  {/* /.card-header */}
  <div className="card-body">
    
    <div className="form-group">
      <input type="text" className="form-control form-control-border" id="exampleInputBorder" placeholder="enter full name" />
    </div>
    <div className="form-group">
     <input type="text" className="form-control form-control-border border-width-2" id="exampleInputBorderWidth2" placeholder="enter email" />
    </div>
    <div className='appointment-btn'>
      <button type="submit" className="btn"> Submit</button>
    </div>
   
   
  </div>
  {/* /.card-body */}
</div>

        {/* /.card */}
      </div>
      {/* /.col */}
      
      <div className="col-md-9">
      <div className="card card-tabs">
        <div className="card-header p-0">
          <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'home'  ? 'active' : ''} `}
                onClick={() => handleTabClick('home')} 
                role="tab"
              >
                Daily Horoscopes
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => handleTabClick('profile')}
                role="tab"
              >
                Weekly Horoscopes
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'messages' ? 'active' : ''}`}
                onClick={() => handleTabClick('messages')}
                role="tab"
              >
                Montly Horoscopes
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => handleTabClick('settings')}
                role="tab"
              >
                Yearly Horoscopes
              </a>
            </li>
            
          </ul>
        </div>
        <div className="card-body">
          {activeTab === 'home' && (
            <div className="tab-pane active"> 
             <p> YESTERDAY | TODAY | TOMORROW</p>
             <p style={{color:'#90009d', fontWeight:'500'}}>Tuesday, October 6, 2023</p>
             With the sun in Libra and your partnership zone through October 22, you’re at your best with a sweet sidekick. Meaningful one-on-one interactions will give you a boost, whether the connection is romantic or platonic. Around the solar eclipse on October 14, you may realize that an attachment holds you back. It’s not like you to compromise your independence or individuality. As Venus opposes Saturn from October 12-14, you’ll need to decide whether to stay or go. A lavish date can be satisfying as Venus trines Jupiter from October 21-23, making for some of the best date nights of the month. The excitement continues as Venus trines Uranus from October 30-31, ending the month on a high note!
            
             <ul className="Horoscope-btn">
  {/* First Row */}
  
  {/* Second Row (Centered) */}
  <div className="centered-row">
    <li className="Horoscope-list-btn"> <i class="fas fa-calendar-day"></i> Weekly Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-clipboard-list"></i> Monthly Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-heart"></i> Yearly Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-calendar-day"></i> Love Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-clipboard-list"></i> Astrology Blogs</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-heart"></i> Chinese Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-calendar-day"></i> Aries  Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-clipboard-list"></i> Dating Life Aries Men</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-heart"></i> Dating Life Aries Women</li>
    
  </div>
</ul>


          
           </div>
          )}
         {activeTab === 'profile' && (
            <div className="tab-pane active">
              <p> Last Week | This Week| Next Week</p>
             <p style={{color:'#90009d', fontWeight:'500'}}>Mon, October 6, 2023 - Sun, November 5, 2023</p>
              <p style={{fontSize:'2em'}}> Aries Weekly Horoscope</p>
             Your helpfulness will lift the spirits of someone close to you at the start of the week as Venus in your realm of service aligns with Uranus. Simply offering a kind word to a stranger would get you into the flow of your higher self. Later, Venus opposes nebulous Neptune on Friday and Saturday, which may distort your judgment about love. It might be time to evaluate the balance of give and take in your relationship(s). If you’re doing most of the giving, you may feel like you’ve been taken advantage of. Speak with a Love Psychic for additional insight. Finally, Mercury opposes Uranus throughout the weekend, which can bring a sudden wakeup call about an issue you’ve set aside.
             
              
             <ul className="Horoscope-btn">
  {/* First Row */}
  
  {/* Second Row (Centered) */}
  <div className="centered-row">
    <li className="Horoscope-list-btn"> <i class="fas fa-calendar-day"></i> Weekly Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-clipboard-list"></i> Monthly Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-heart"></i> Yearly Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-calendar-day"></i> Love Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-clipboard-list"></i> Astrology Blogs</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-heart"></i> Chinese Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-calendar-day"></i> Aries  Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-clipboard-list"></i> Dating Life Aries Men</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-heart"></i> Dating Life Aries Women</li>
    
  </div>
</ul>
              </div>
          )}
          {activeTab === 'messages' && (
            <div className="tab-pane active">

            <p style={{fontSize:'2em'}}>Aries November 2023 Monthly Horoscope</p>
            You might test the limits of your spending power as the sun opposes Jupiter from November 2-4. With Jupiter in your house of earnings, you’re probably more flush than usual. Still, it’s unwise to squander your blessings. Overestimating (or underestimating) your worth can cause problems on the job as Venus opposes Neptune. Staying rightsized is key. Steering clear of workplace drama can also be helpful. The Scorpio New Moon on November 13 could spark a conflict around money, resources, or debts. You can raise hell or regroup and move in a new direction. Your most powerful days for effecting change, particularly with matters of career and finance, are November 20-22, when the sun trines Pluto. You’ll also have luck from November 21-24, which is when your ruler, Mars, and Pluto align. The Gemini Full Moon on November 27 signals a tense and busy time. You can’t be all places at once, yet you’ll still have to try. Table your anxieties and take practical measures to fulfill your responsibilities.

             
            <ul className="Horoscope-btn">
  {/* First Row */}
  
  {/* Second Row (Centered) */}
  <div className="centered-row">
    <li className="Horoscope-list-btn"> <i class="fas fa-calendar-day"></i> Weekly Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-clipboard-list"></i> Monthly Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-heart"></i> Yearly Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-calendar-day"></i> Love Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-clipboard-list"></i> Astrology Blogs</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-heart"></i> Chinese Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-calendar-day"></i> Aries  Horoscope</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-clipboard-list"></i> Dating Life Aries Men</li>
    <li className="Horoscope-list-btn"> <i class="fas fa-heart"></i> Dating Life Aries Women</li>
    
  </div>
</ul>
             </div>
          )}
          {activeTab === 'settings' && (
            <div className="tab-pane active">
            <p style={{fontSize:'2em'}}>  Aries Yearly Horoscope: 2023</p>
            The year ahead holds abundant opportunities for growth, education, and adventure. Jupiter is in your sign through May 16, encouraging you to broaden your horizons. Your escapades may spark a desire to live large. After that, Jupiter in prosperous Taurus from May 16 through the end of the year may grant you the opportunities and resources you need to fund a luxe lifestyle.
          
            <ul className='horoscope_list'>
             <h6 align="left"> What You Have To Look Forward To</h6>
              <li>You’ll have a greater capacity to act on your ideas and put your plans into motion.</li>
              <li>You can enjoy a sense of increased optimism and courage, as well as a willingness to venture beyond your comfort zone in search of new and exciting experiences.</li>
              <li>You’ll develop an ability to hold your own with influential people and cultivate potentially life-transforming connections.</li>
           

            </ul>
            <ul className='horoscope_list'>
             <h6 align="left"> What You Should Watch Out For</h6>
              <li>Don’t indulge in a pity party when Jupiter meets Chiron on March 12. The bigger the wound, the greater the opportunity for healing.</li>
              <li>You might feel like you’ve lost your way when Saturn enters your exile zone on March 7. Get used to pursuing your ambitions from behind the scenes.</li>
           

            </ul>
           
             <h6 align="left"> Love Predictions</h6>
              <p>Venus is retrograde from July 22 through the month of September. This could bring an ex back into the picture. They might have a surprising hold on you, and you’ll need the strength and support of your friends if you want to make the right decisions.</p>

              <h6> Important Dates</h6>
              <p>
              January 12: Your ruler, Mars, stations direct, increasing your self-control and allowing you to move forward with stalled plans.
            <br/>
March 23: Pluto enters Aquarius, changing the trajectory of your future and replacing old goals with new ambitions.
 <br/><br/>
April 20: A total solar eclipse in your sign brings a major phase to a close. You’ll feel an increased urgency to complete an important goal.


              </p>
             </div>
           
             
          )}
        </div>
  
    
      {/* /.card */}
    </div>
    


  </div>
  


      {/* /.col */}
    </div>
    {/* /.row */}
  </div>{/* /.container-fluid */}
</section>


{/* Horoscopes ends here  */}
</div>

  )
}

export default Psychicvop
