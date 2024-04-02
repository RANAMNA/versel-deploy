import React from 'react'
import love_banner from '../Images/love_banner.png';
import love_banner_symbol from '../Images/love_banner_symbol.png';
import Love_psychics_team from './Love_psychics_team';
import Love_read_more_banner from '../Images/Love_read_more_banner.png';
import fallinlove from '../Images/fallinlove.png';
import love_couple from '../Images/love_couple.jpg';
import love_reading from '../Images/love_reading.jpg';
const Love = () => {
  console.log('Love_psychics_team');
  return (
    <div className='container'>
        <br/> 
   <div className="love_banner" data-aos="zoom-in-up">
  <img src={love_banner}alt />
  <div className="caption">
    <h4>Love & Relationship Psychics</h4>
    <p>Love psychics can answer questions and give love advice! Will I find love? Will I marry? Is he cheating? What will happen with my divorce?</p>
  </div>
</div>

{/* filter start here  */}
<br>
</br>
<br></br>
<div className="card-body">
  <div>
    <div className="btn-group w-90 mb-2">
      <a className="btn" href="javascript:void(0)" data-filter="all"> <span className='online'>Online  34</span></a>
      <a className="btn" href="javascript:void(0)" data-filter={1}> <span className='busy'>busy 14</span> </a>
      <a className="btn" href="javascript:void(0)" data-filter={2}> <span className='offline'>Offline  134</span> </a>
      
      </div>
    <div className="mb-2">
     <div className="float-right">
        <select className="custom-select" style={{width: 'auto'}} data-sortorder>
          <option value="index"> Availablity </option>
          <option value="sortData"> Chat Rating </option>
          <option value="sortData"> Comments </option>
          <option value="sortData"> Low to High Price</option>
          <option value="sortData"> High to Low price </option>
          <option value="sortData"> Experience </option>
          <option value="sortData"> Chat Psychics </option>
         
        </select>
        <div className="btn-group">
          <a className="btn btn-default" href="javascript:void(0)" data-sortasc> Ascending </a>
          <a className="btn btn-default" href="javascript:void(0)" data-sortdesc> Descending </a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* filter end hre  */}
<br></br>'
{
Love_psychics_team.map( love=>
<div className="row" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
  <div className="col-md-3">
    {/* Profile Image */}
    
    <div className="card card-primary card-outline">
      <div className="card-body box-profile">
        <div className="text-center">
          <img className="profile-user-img img-fluid img-circle" src={love.image} alt="User profile picture" />
        </div>
        
        <h3 className="profile-username text-center">{love.name}  <i className="fas fa-heart" style={{color:'#940094'}}/></h3>
        <p className="text-center">{love.field}</p>
        <ul className="list-group list-group-unbordered">
          <li className="list-group-item">
            <b>Rating</b> <a className="float-right" style={{fontSize:'1em'}}>{love.Rating}</a>
          </li>
          <li className="list-group-item"> 
            <b>Price</b> <p className="float-right" style={{fontSize:'1em'}}>{love.price} <del style={{color:'gray'}}>$8.00</del></p>
          </li>
         
        </ul>
        <div className="btn_chat_psychics">
        <button className="btn_chat_psychics_btn"> Chat </button>
        <button className="btn_chat_psychics_btn"> Message </button>

        </div>
        
      </div>
      
    </div>
  
  </div>
 
  <div className="col-md-9">
    <div className="card">
      <div className="card-header-nav">
        <ul className="nav nav-pills">
          <li className="nav-item"><a className="nav-link-nav active" href="#activity" data-toggle="tab">Topics / Abilities</a></li>
          </ul>
      </div>{/* /.card-header */}
      <div className="love-card-body">
        <div className="tab-content-love">
       <div className="time-label">
      
         <div className='joined-date'> Joined date <span className="joined-date-day">
                  {love.join_date}
                </span></div>
                
              </div>
             
               <div className="timeline timeline-inverse">
               <div className="tab-pane" id="timeline">
            {/* The timeline */}
            <div className="timeline timeline-inverse">
             
              <div>
              <i className="fas fa-user-plus" style={{ background: '#94009d', color: 'white' }} />
                <div className="timeline-item">
                  <p className="timeline-header" style={{color:'#94009d' }}>Abilities/Topics</p>
                  <div className="timeline-body">
              {love.topics}
                   </div>
                 
                </div>
              </div>
            
              <div>
                <i className="fas fa-tools" style={{background:'#94009d' , color: 'white' }}/>
                <div className="timeline-item" >
                  <span className="time"><i className="far fa-clock" /> 27 mins ago</span>
                  <p className="timeline-header" style={{color:'#94009d'}}>Tools </p>
                  <div className="timeline-body">
                  {love.tools}
                   </div>
                
                </div>
              </div> 
            </div>
          </div>
           </div>
        </div>
      </div>
      
    </div>
    
  </div>
  
</div>

)
}
<div className='view_more_love_psychics'>
<button className='view_more_btn'>  View More Psychics</button>

</div>
<div className="help_banner" data-aos="flip-left">
  <img src={Love_read_more_banner}alt />
  <div className="love_caption">
    <h4 className='love_banner_content'>Need Help  Just finding best Psychics</h4>
    <button className='Match_me'>  Match Me</button>
  </div>
</div>

<div class="underline">
  <div class="line"></div>
  <div class="star">&#9733;</div>
  <div class="line"></div>
</div>


<h4 className='fallinlove_intro'> Fall In Love With Guidance</h4>
 <div className='fallinlove_container'>
 
  <div className='fallinlove_container_content' data-aos="fade-right">
      <img src={fallinlove} alt="fallinlove" className='fallinlove_img'/>
    </div>
 <div className='fallinlove_container_content'>
  
 <p> Our dedication to this theme has led to millions around the world receiving the answers they seek.

  </p>
<ul className='fallinlove_list'>
 <li>Will I find love?</li> 
<li>Who will I marry?</li>
<li>Is this the real thing or just a crush?</li>
<li>Have they cheated on me? Will they?</li>
<li>Will this work out, or should</li>
 <li>I make space for someone new?</li>
</ul>
 </div>
 </div>
 <div class="underline">
  <div class="line"></div>
  <div class="star">&#9733;</div>
  <div class="line"></div>
</div>
{/*  Relationships have such an impact in our lives. */}
 <div className='relationships_container'>
  <div className='relationships_content'>
  <h4>Relationships have such an impact in our lives. </h4>
  <br></br>
  <ul className='relationship_list'>
    <li> Gauge the true compatibility with an existing or potential partner</li>
    <li>Accurately pinpoint where you are in your relationship</li>
    <li>Understand what deep-seated emotional issues might be blocking you</li>
    <li> Realize the potential that lies before you and your partner</li>
    <li>See how you can move towards the best outcome for your highest good</li>
  </ul>
</div>
<div className="relationships_img" data-aos="fade-left">
 <img src={love_couple} alt="love_couple"/>
  </div>
</div>
{/*  Relationships have such an impact in our lives Ends  */}
 <br/> <br/> <br/> <br/> <br/>
<div class="underline">
  <div class="line"></div>
  <div class="star">&#9733;</div>
  <div class="line"></div>
</div>
<br/> <br/>

<div className="row" data-aos="zoom-in">


<div className="col-md-6">
    <div className="card">
      
     
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
      
    </div>
    
</div>
  <div className="col-md-6">
   
      
       <div className="card-body">
         <div id="accordion">
          <div className="card-primary">
            
            <div id="collapseOne" className="collapse show" data-parent="#accordion">
              <div className="card-body">
              Tarot is one of the most powerful tools for insight into romantic relationships of the past, present, and future.
                Watch our video from our DIY Spirituality to learn how to read what the cards have in store
                for you. 
             
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
     
  </div>
 
</div>


<br/>
<br/>
<br/>
<hr className='underline'/>
<div className='love_guider_container' data-aos="fade-up"
     data-aos-duration="1500">
  <h4> Get ready for Love Readings! </h4>
  <p> By nature, these readings can be emotionally intense and very
revealing. That’s why our advisors recommend you:</p>
 <div className='love_guider_content'>
   <ul className='love_guide_list'>
 <li>Come into them with an open mind and heart</li>
 <li>Be ready to accept their guidance</li>
<li>What deep-seated emotional issues Take some
time before the reading and center yourself</li>
   </ul>
  </div>
</div>
{/* Get ready for Love Readings! Ends */}
{/* Blog section start hre */}
<br/><br/><br/>
<hr className='underline'/>
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




</div>
    
  )
}

export default Love
