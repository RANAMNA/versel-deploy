import React from 'react'
import pakistanflag from '../Images/pakistanflag.jpg';
import getstart from '../Images/getstart.png';
import contact_image from '../Images/contact_image.jpg';
import team_psychics from '../Images/team_psychics.jfif';
import psychic_team from '../Images/psychic_team.png';
const Contact = () => {
  return (
    <div className='container'>

   <div className='container-contact' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <h4 className='contact-heading'> Get in Touch</h4>
    <p className='contact-para'> 
    Please try our <span style={{color:'#90009d', fontSize:'1.2em', fontWeight:'600'}}> Help Center </span> below to find an answer quickly. If you don’t
find what you need, we’re here to help and answer any question you
might have. Just fill out our contact form or call us. We look forward to
hearing from you.
    </p>

    </div>
<div className="row" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
  {/* left column */}
  <div className="col-md-6">
    {/* general form elements */}
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-center">Submit a Request to Support Team</h3>
      </div>
      {/* /.card-header */}
      {/* form start */}
      <form>
        <div className="card-body">
          <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Name" />
          </div>
          <div className="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Email" />
            
          </div>
          <div className="form-group">
            <div className='row'>
                <div className='col-md-6'>
            
            <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Phone" />
            </div>
            <div className='col-md-6'>
            
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Country" />
            </div>
            </div>
          </div>
         
          <div className="form-group">
             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            
          </div>
          <div className="form-group">
            
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Request Type" />
            
          </div>
          <div className="form-group">
          <textarea id="message" name="message" className='form-control' placeholder='message' rows="5" cols="20" required></textarea>
 </div>
        </div>

        
        {/* /.card-body */}
        <div className="card-footer">
          <button type="submit" className="btn-contact">Submit</button>
        </div>
      </form>
    </div>
    {/* /.card */}
    {/* general form elements */}
   
  </div>
  {/*/.col (left) */}
  <div className="col-md-2">
    {/* Form Element sizes */}
    
  </div>
  {/* right column */}
  <div className="col-md-4">
    {/* Form Element sizes */}
    <h4> Phone support </h4>
    <img src={pakistanflag}  alt="" style={{width:'50px', height:'30px'}}/> <span style={{display:'block'}}> Pakistan</span>
    <p className='card p-2'>
    Customer Care Team:    1.800.828.8016
         </p>
         <p className='card p-2'>
         Psychic Reader Line:1.800.785.7667
         </p>
         <h5> See More  Countries </h5>
  </div>
  {/*/.col (right) */}
</div>
<br/><br/><br/>
 <h5 className='text-center' data-aos="zoom-in-up"> Help Center</h5>
 <p className='card-text' data-aos="zoom-in-up" style={{width:'600px', margin:'0px auto', textAlign:'center'}}>
 Get the info you’re looking for right now. Please select a topic below related to your inquiry.
If you don’t find what you need, fill out our contact form.

 </p>
<div className='favour-card' data-aos="fade-up"
     data-aos-duration="1500">
  
  <div className='favour-card-banner' style={{background:'none'}}> 
    <img src={getstart} alt="phone_card" className='getstart'/>
    <h5  style={{color:'#90009d'}}> Get Start</h5>
    

    </div>
  <div className='favour-card-banner' style={{background:'none'}}> 
    <img src={contact_image} alt="phone_card" className='getstart'/>
    <h5  style={{color:'#90009d'}}>General Questions</h5>
   
 
</div>
    </div>


    <div className='favour-card' data-aos="fade-up"
     data-aos-duration="1500">
  
  <div className='favour-card-banner' style={{background:'none'}}> 
    <img src={team_psychics} alt="phone_card" className='getstart'/>
    <h5  style={{color:'#90009d'}}> Meet Psychics</h5>
    

    </div>
  <div className='favour-card-banner' style={{background:'none'}}> 
    <img src={psychic_team} alt="phone_card" className='getstart'/>
    <h5  style={{color:'#90009d'}}> Connect Psychic</h5>
   
 
</div>
    </div>
</div>
   
  )
}

export default Contact
