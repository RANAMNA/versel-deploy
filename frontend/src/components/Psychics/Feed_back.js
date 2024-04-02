import React from 'react'
import avatar from '../Images/avatar.png';
const Feed_back = () => {
  return (
    
         <div className="content-wrapper" >
      {/* Content Header */}
      <div className="content-header">
        <div className="container-fluid">
           <div className="col-md-12" data-aos="fade-up"
         data-aos-duration="1000">
  {/* Box Comment */}
  <div className="card card-widget">
    <div className="card-header" style={{background:'#ff6000'}}>
      <div className="user-block">
        <span className="username-testimonials"><a href="#">Testimonials</a></span>
        </div>
      {/* /.user-block */}
      <div className="card-tools">
      
        <button type="button" className="btn btn-tool" data-card-widget="collapse" style={{color:'#fff'}}>
          <i className="fas fa-minus" />
        </button>
      
      </div>
      {/* /.card-tools */}
    </div>
    {/* /.card-header */}
   
    {/* /.card-body */}
    <div className="card-footer card-comments">
      <div className="card-comment">
        {/* User image */}
        <img className="img-circle img-sm" src={avatar} alt="User Image" />
        <div className="comment-text">
          <span className="username">
            Maria Gonzales
            <span className="text-muted float-right">8:03 PM Today</span>
          </span>{/* /.username */}
          
  
  <div class="stars">
    <label for="star5">★</label>
    <label for="star4">★</label>
    <label for="star3">★</label>
    <label for="star2">★</label>
    <label for="star1">★</label>
  </div>



          It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.
        </div>
        {/* /.comment-text */}
      </div>
      <div className="card-comment">
        {/* User image */}
        <img className="img-circle img-sm" src={avatar} alt="User Image" />
        <div className="comment-text">
          <span className="username">
            Maria Gonzales
            <span className="text-muted float-right">8:03 PM Today</span>
          </span>{/* /.username */}
          <div class="stars">
    <label for="star5">★</label>
    <label for="star4">★</label>
    <label for="star3">★</label>
    <label for="star2">★</label>
    <label for="star1">★</label>
  </div>
          It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.
        </div>
        {/* /.comment-text */}
      </div><div className="card-comment">
        {/* User image */}
        <img className="img-circle img-sm" src={avatar} alt="User Image" />
        <div className="comment-text">
          <span className="username">
            Maria Gonzales
            <span className="text-muted float-right">8:03 PM Today</span>
          </span>{/* /.username */}
          <div class="stars">
    <label for="star5">★</label>
    <label for="star4">★</label>
    <label for="star3">★</label>
    <label for="star2">★</label>
    <label for="star1">★</label>
  </div>
          It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.
        </div>
        {/* /.comment-text */}
      </div><div className="card-comment">
        {/* User image */}
        <img className="img-circle img-sm" src={avatar} alt="User Image" />
        <div className="comment-text">
          <span className="username">
            Maria Gonzales
            <span className="text-muted float-right">8:03 PM Today</span>
          </span>{/* /.username */}
          <div class="stars">
    <label for="star5">★</label>
    <label for="star4">★</label>
    <label for="star3">★</label>
    <label for="star2">★</label>
    <label for="star1">★</label>
  </div>
          It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.
        </div>
        {/* /.comment-text */}
      </div>
      {/* /.card-comment */}
      <div className="card-comment">
        {/* User image */}
        <img className="img-circle img-sm" src={avatar} alt="User Image" />
        <div className="comment-text">
          <span className="username">
            Nora Havisham
            <span className="text-muted float-right">8:03 PM Today</span>
          </span>{/* /.username */}
          <div class="stars">
    <label for="star5">★</label>
    <label for="star4">★</label>
    <label for="star3">★</label>
    <label for="star2">★</label>
    <label for="star1">★</label>
  </div>
          The point of using Lorem Ipsum is that it hrs a morer-less
          normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </div>
        {/* /.comment-text */}
      </div>
      {/* /.card-comment */}
    </div>
    {/* /.card-footer */}
   
    {/* /.card-footer */}
  </div>
  {/* /.card */}
</div>
      </div>
      </div>
      </div>
    
  )
}

export default Feed_back
