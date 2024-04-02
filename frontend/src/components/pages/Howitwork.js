import React from 'react'
import phone_card from '../Images/phone_card.png';
import { Link } from 'react-router-dom';

const Howitwork = () => {
  return (
    <div className='container'>
      

      <div data-aos="fade-right">
  <h5 className="mb-2 mt-4">You’re only a few clicks away from a <strong>great reading!</strong></h5>
  <p className='card-text '>
  We know exactly where you stand – or sit, if you’re on a desktop. You’re at a point where you need more than the ordinary. You want answers. You need guidance.
But you’re a bit unsure. We get it. It happens with every first experience, that’s why we put together a list of quick and easy steps to help your first reading be the best possible experience.

  </p>
  <br/><br/><br/>
  <div className="row" data-aos="fade-right">
    <div className="col-lg-4 col-6">
      {/* small card */}
      <div className="small-box">
        <div className="inner"> 
        
          <h6>Select a Psychic</h6>
          
        </div>
        <div className="icon">
          <i className="fas fa-check" />
        </div>
        <br/><br/>
        <p className='card-text-para'>
          Browse our list of psychics and learn more about who they are and what they specialize in to find the one that’s perfect for you.
          </p>
       
      </div>
    </div>
   
    <div className="col-lg-4 col-6">
      {/* small card */}
      <div className="small-box">
        <div className="inner">
        
        <h6> Create your account</h6>
          
        </div>
        <div className="icon">
          <i className="fas fa-check" />
        </div>
        <br/><br/>
        <p className='card-text-para'>
          Browse our list of psychics and learn more about who they are and what they specialize in to find the one that’s perfect for you.
          </p>
       
      </div>
    </div>
    
    <div className="col-lg-4 col-6">
      {/* small card */}
      <div className="small-box">
        <div className="inner">
        
        <h6>Connect to your Psychic</h6>
          
        </div>
        <div className="icon">
          <i className="fas fa-check" />
        </div>
        <br/><br/>
        <p className='card-text-para'>
          Browse our list of psychics and learn more about who they are and what they specialize in to find the one that’s perfect for you.
          </p>
       
      </div>
    </div>
    
<br/><br/><br/><br/>
    {/* How see psychics change your life */}
    <div className="row" data-aos="fade-up"
     data-aos-duration="1500">
  
  {/* /.col */}
  <div className="col-md-6">
    <div className="card">
      
      {/* /.card-header */}
      <div className="card-body">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
         
          <div className="carousel-inner">
            <div className="carousel-item active">
              <video className="d-block w-100" controls>
                <source src="" type="video/mp4" />
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
<div className="col-md-6">
   
      
      {/* /.card-header */}
      <div className="card-body" >
        {/* we are adding the accordion ID so Bootstrap's collapse plugin detects it */}
        <div id="accordion">
          <div className="card-primary">
            <h4> See how a Psychic reading can
change your life.</h4>
            <div id="collapseOne" className="collapse show" data-parent="#accordion">
              <p className='card-text'>
              When you talk to one of our psychics you’ll engage in an intimate conversation where you will find the caring, thoughtful and focused insight you’re looking for. Everybody has their own special reason for connecting with us, so don’t hesitate to speak freely about the answers you seek from our professional, and highly personal, psychics. Remember, our readings are always confidential so you can have the piece of mind that your questions
are safe with your psychic.</p>
              <h6> You can Relax</h6>
              <p className='card-text'>
              When you talk to one of our psychics you’ll engage in an intimate conversation where you will find the caring, thoughtful and focused insight you’re looking for. Everybody has their own special reason for connecting with us, so don’t hesitate to speak freely about the answers you seek from our professional, and highly personal, psychics. Remember, our readings are always confidential so you can have the piece of mind that your questions
are safe with your psychic.</p>
              
            </div>
          </div>
          
          
        </div>
      </div>
      {/* /.card-body */}
    
    {/* /.card */}
  </div>
  {/* /.col */}
</div>

    {/* Ends content */}

{/* Faq's  */}


{/* Faq's end here  */}

  </div>
  
</div>

<div className='contact-container' data-aos="fade-up"
     data-aos-duration="1500">
 <div className='Ready_to_connect'>
 <h4> Get Ready To Started</h4>
 <p className='card-text'> Choose from our Psychics Reading</p>
   Call us at: <h5>0409-34039049-4</h5>
   <div className="work-btn" data-aos="flip-down">
    <button className='work_button'> <Link to="/reading" className="text-white"> Find Your Psychics </Link></button>
    </div>
 </div>
    </div>
    </div>
    
  )
}

export default Howitwork
