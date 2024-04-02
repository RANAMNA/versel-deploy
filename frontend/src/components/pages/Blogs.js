import React from 'react'
import '../assets/style.css';
import Horoscopes_banner from '../Images/Horoscopes_banner.png';
import Horoscopes_add from '../Images/Horoscopes_add.png';
import { NavLink } from 'react-router-dom';

const Blogs = () => {
  return (
    <div className='container'>
       <br/>
   <div className="love_banner" data-aos="zoom-in-up">
  <img src={Horoscopes_banner} alt="love banner"/>
  <div className="caption">
    <h4>Answers at your reach 
        <br/> 
        <strong style={{fontSize:'2em'}}> $1/Min</strong>
    </h4>
    <p>Love psychics can answer questions and give love advice! </p>
   
  </div>
  
</div>
<br/> <br/><br/>
<div className="card-body">
  <div className="tab-content">
    <div className="card p-2" id="activity">
      

    <ul className="Horoscope-btn">
  {/* First Row */}
  <h4> Psychics Blogs </h4>
  {/* Second Row (Centered) */}
  <div className="centered-row">
    <h6> Topics:</h6>
    <li className="Horoscope-list-btn"> Astrology </li>
    <li className="Horoscope-list-btn"> Tarot Blogs</li>
    <li className="Horoscope-list-btn">  Spirituality</li>
    <li className="Horoscope-list-btn">  Horoscope</li>
    <li className="Horoscope-list-btn">  Relationship Active</li>
    <li className="Horoscope-list-btn">  Couple Love</li>
    <li className="Horoscope-list-btn">  Soulmate</li>
    <li className="Horoscope-list-btn">  Relationship</li>
    <li className="Horoscope-list-btn">  Today Life </li>
    
  </div>
</ul>




      <div className="post">
        {/* /.user-block */}
        <div className="row mb-3" >

        <div className="col-md-3">
        {/* Profile Image */}

        
        <div className="card card-primary card-outline" data-aos="fade-up"
     data-aos-duration="1500">
          <div className="card-body box-profile">
            <div className="text-center">
            <img src={Horoscopes_add} alt='horoscopes' className='horoscope_add'/>
         
           
           </div>
          </div>
          {/* /.card-body */}
        </div>


        <div className="card card-primary card-outline" data-aos="fade-up"
     data-aos-duration="1500">
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
            <a className="btn btn-block-chat" style={{background:'#ff6000', color:'#fff'}}> Call </a>
            <a className="btn btn-block-chat" style={{background:'#ff6000', color:'#fff'}}> <NavLink to="/Chatform"> Chat </NavLink> </a>
            </div>
          </div>
          {/* /.card-body */}
        </div>
        <div className="card card-primary card-outline" data-aos="fade-up"
     data-aos-duration="1500">
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
            <a className="btn btn-block-chat" style={{background:'#ff6000', color:'#fff'}}> Call </a>
            <a className="btn btn-block-chat" style={{background:'#ff6000', color:'#fff'}}> <NavLink to="/Chatform"> Chat </NavLink> </a>
            </div>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
        {/* About Me Box */}
         <div className="card card-primary card-outline" data-aos="fade-up"
     data-aos-duration="1500">
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
            <a className="btn btn-block-chat" style={{background:'#ff6000', color:'#fff'}}> Call </a>
            <a className="btn btn-block-chat" style={{background:'#ff6000', color:'#fff'}}> <NavLink to="/Chatform"> Chat </NavLink> </a>
            </div>
          </div>
          {/* /.card-body */}
        </div>
<div className="card card-danger" data-aos="fade-up"
     data-aos-duration="1500">
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





        <div class="col-sm-3">
  <div class="card" data-aos="fade-up"
     data-aos-duration="1500">
    <img class="card-img-top" src="../../dist/img/photo3.jpg" alt="Photo" />
    <div class="card-body">
      <h5 class="card-title">Blog Title 1</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur, sem at congue lobortis.</p>
      <button className='blog_btn'> <NavLink to="/Blogdetails"> Read More </NavLink></button>
    </div>
    <div class="card-footer">
      <div class="row">
      <div class="col-sm-4">
          <i class="far fa-thumbs-up"></i> <span className='icon'> (20)</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-comment"></i> <span className='icon'>(20)</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-share-square"></i> <span className='icon'></span>
        </div>
      </div>
    </div>
  </div>
  <div class="card"data-aos="fade-up"
     data-aos-duration="1500">
    <img class="card-img-top" src="../../dist/img/photo3.jpg" alt="Photo" />
    <div class="card-body">
      <h5 class="card-title">Blog Title 1</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur, sem at congue lobortis.</p>
      <button className='blog_btn'> <NavLink to="/Blogdetails"> Read More </NavLink></button>
    </div>
    <div class="card-footer">
      <div class="row">
      <div class="col-sm-4">
          <i class="far fa-thumbs-up"></i> <span className='icon'> (20)</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-comment"></i> <span className='icon'>(20)</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-share-square"></i> <span className='icon'></span>
        </div>
      </div>
    </div>
  </div>
  <div class="card" data-aos="fade-up"
     data-aos-duration="1500">
    <img class="card-img-top" src="../../dist/img/photo3.jpg" alt="Photo" />
    <div class="card-body">
      <h5 class="card-title">Blog Title 1</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur, sem at congue lobortis.</p>
      <button className='blog_btn'> <NavLink to="/Blogdetails"> Read More </NavLink></button>
    </div>
    <div class="card-footer">
      <div class="row">
      <div class="col-sm-4">
          <i class="far fa-thumbs-up"></i> <span className='icon'> (20)</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-comment"></i> <span className='icon'>(20)</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-share-square"></i> <span className='icon'></span>
        </div>
      </div>
    </div>
  </div><div class="card" data-aos="fade-up"
     data-aos-duration="1500">
    <img class="card-img-top" src="../../dist/img/photo3.jpg" alt="Photo" />
    <div class="card-body">
      <h5 class="card-title">Blog Title 1</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur, sem at congue lobortis.</p>
      <button className='blog_btn'> <NavLink to="/Blogdetails"> Read More </NavLink></button>
    </div>
    <div class="card-footer">
      <div class="row">
      <div class="col-sm-4">
          <i class="far fa-thumbs-up"></i> <span className='icon'> (20)</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-comment"></i> <span className='icon'>(20)</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-share-square"></i> <span className='icon'></span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="col-sm-3">
  <div class="card" data-aos="fade-up"
     data-aos-duration="1500">
    <img class="card-img-top" src="../../dist/img/photo1.png" alt="Photo" />
    <div class="card-body">
      <h5 class="card-title">Blog Title 2</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur, sem at congue lobortis.</p>
      <button className='blog_btn'> <NavLink to="/Blogdetails"> Read More </NavLink></button>
    </div>
    <div class="card-footer">
      <div class="row">
      <div class="col-sm-4">
          <i class="far fa-thumbs-up"></i> <span className='icon'> 20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-comment"></i> <span className='icon'>20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-share-square"></i> <span className='icon'></span>
        </div>
      </div>
    </div>
  </div>
  <div class="card" data-aos="fade-up"
     data-aos-duration="1500">
    <img class="card-img-top" src="../../dist/img/photo1.png" alt="Photo" />
    <div class="card-body">
      <h5 class="card-title">Blog Title 2</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur, sem at congue lobortis.</p>
      <button className='blog_btn'> <NavLink to="/Blogdetails"> Read More </NavLink></button>
    </div>
    <div class="card-footer">
      <div class="row">
      <div class="col-sm-4">
          <i class="far fa-thumbs-up"></i> <span className='icon'> 20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-comment"></i> <span className='icon'>20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-share-square"></i> <span className='icon'></span>
        </div>
      </div>
    </div>
  </div> <div class="card" data-aos="fade-up"
     data-aos-duration="1500">
    <img class="card-img-top" src="../../dist/img/photo1.png" alt="Photo" />
    <div class="card-body">
      <h5 class="card-title">Blog Title 2</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur, sem at congue lobortis.</p>
      <button className='blog_btn'> <NavLink to="/Blogdetails"> Read More </NavLink></button>
    </div>
    <div class="card-footer">
      <div class="row">
      <div class="col-sm-4">
          <i class="far fa-thumbs-up"></i> <span className='icon'> 20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-comment"></i> <span className='icon'>20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-share-square"></i> <span className='icon'></span>
        </div>
      </div>
    </div>
  </div>
  <div class="card" data-aos="fade-up"
     data-aos-duration="1500">
    <img class="card-img-top" src="../../dist/img/photo1.png" alt="Photo" />
    <div class="card-body">
      <h5 class="card-title">Blog Title 2</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur, sem at congue lobortis.</p>
      <button className='blog_btn'> <NavLink to="/Blogdetails"> Read More </NavLink></button>
    </div>
    <div class="card-footer">
      <div class="row">
      <div class="col-sm-4">
          <i class="far fa-thumbs-up"></i> <span className='icon'> 20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-comment"></i> <span className='icon'>20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-share-square"></i> <span className='icon'></span>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="col-sm-3">
  <div class="card" data-aos="fade-up"
     data-aos-duration="1500">
    <img class="card-img-top" src="../../dist/img/photo1.png" alt="Photo" />
    <div class="card-body">
      <h5 class="card-title">Blog Title 2</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur, sem at congue lobortis.</p>
      <button className='blog_btn'> <NavLink to="/Blogdetails"> Read More </NavLink></button>
    </div>
    <div class="card-footer">
      <div class="row">
      <div class="col-sm-4">
          <i class="far fa-thumbs-up"></i> <span className='icon'> 20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-comment"></i> <span className='icon'>20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-share-square"></i> <span className='icon'></span>
        </div>
      </div>
    </div>
  </div>
  <div class="card" data-aos="fade-up"
     data-aos-duration="1500">
    <img class="card-img-top" src="../../dist/img/photo1.png" alt="Photo" />
    <div class="card-body">
      <h5 class="card-title">Blog Title 2</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur, sem at congue lobortis.</p>
      <button className='blog_btn'> <NavLink to="/Blogdetails"> Read More </NavLink></button>
    </div>
    <div class="card-footer">
      <div class="row">
      <div class="col-sm-4">
          <i class="far fa-thumbs-up"></i> <span className='icon'> 20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-comment"></i> <span className='icon'>20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-share-square"></i> <span className='icon'></span>
        </div>
      </div>
    </div>
  </div>
  <div class="card" data-aos="fade-up"
     data-aos-duration="1500">
    <img class="card-img-top" src="../../dist/img/photo1.png" alt="Photo" />
    <div class="card-body">
      <h5 class="card-title">Blog Title 2</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur, sem at congue lobortis.</p>
      <button className='blog_btn'> <NavLink to="/Blogdetails"> Read More </NavLink></button>
    </div>
    <div class="card-footer">
      <div class="row">
      <div class="col-sm-4">
          <i class="far fa-thumbs-up"></i> <span className='icon'> 20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-comment"></i> <span className='icon'>20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-share-square"></i> <span className='icon'></span>
        </div>
      </div>
    </div>
  </div>
  <div class="card" data-aos="fade-up"
     data-aos-duration="1500">
    <img class="card-img-top" src="../../dist/img/photo1.png" alt="Photo" />
    <div class="card-body">
      <h5 class="card-title">Blog Title 2</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur, sem at congue lobortis.</p>
      <button className='blog_btn'> <NavLink to="/Blogdetails"> Read More </NavLink></button>
    </div>
    <div class="card-footer">
      <div class="row">
      <div class="col-sm-4">
          <i class="far fa-thumbs-up"></i> <span className='icon'> 20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-comment"></i> <span className='icon'>20</span>
        </div>
        <div class="col-sm-4">
          <i class="far fa-share-square"></i> <span className='icon'></span>
        </div>
      </div>
    </div>
  </div>
</div>



          {/* /.col */}
        </div>
        
        {/* /.row */}
       
     </div>
     
      {/* /.post */}
    </div>
    {/* /.tab-pane */}
    
    {/* /.tab-pane */}
  </div>
  {/* /.tab-content */}
</div>

      
    </div>
  )
}

export default Blogs
