import React from 'react';
import { PsyAuthContext } from '../../context/PsyAuthContext';


const Profile2 = () => {
  
const[authPsychics] = PsyAuthContext();
  return (


    <div>

    
<div className='container' data-aos="fade-right">
      
      <div className="container-fluid">
      
       <div class="card-body">
            
            <div class="row">
              <div class="col-5 col-sm-3">
                <div class="nav flex-column nav-tabs h-100" id="vert-tabs-tab" role="tablist" aria-orientation="vertical">
                  <a class="nav-link active" id="vert-tabs-home-tab" data-toggle="pill" href="#vert-tabs-home" role="tab" aria-controls="vert-tabs-home" aria-selected="true">Profile</a>
                  <a class="nav-link" id="vert-tabs-profile-tab" data-toggle="pill" href="#vert-tabs-profile" role="tab" aria-controls="vert-tabs-profile" aria-selected="false">Recent Activitie</a>
                  <a class="nav-link" id="vert-tabs-messages-tab" data-toggle="pill" href="#vert-tabs-messages" role="tab" aria-controls="vert-tabs-messages" aria-selected="false">Payment Gateways</a>
                  <a class="nav-link" id="vert-tabs-settings-tab" data-toggle="pill" href="#vert-tabs-settings" role="tab" aria-controls="vert-tabs-settings" aria-selected="false">Update Profile</a>
                  
                  <a class="nav-link" id="vert-tabs-password-tab" data-toggle="pill" href="#vert-tabs-password" role="tab" aria-controls="vert-tabs-password" aria-selected="false">Reset Password</a>
                
                  <button class="nav-link" role="tab" data-toggle="pill" style={{textAlign:'left'}} >
      Logout
    </button>
                </div>  
              </div>


              <div class="col-7 col-sm-9">
                <div class="tab-content" id="vert-tabs-tabContent">
                  <div class="tab-pane text-left fade show active" id="vert-tabs-home" role="tabpanel" aria-labelledby="vert-tabs-home-tab">
                  <div className="col-md-12">
                {/* Widget: user widget style 1 */}
                <div className="card card-widget widget-user">
                  {/* Add the bg color to the header using any of the bg-* classes */}
                  <div className="widget-user-header bg-orange">
                    
                    <h2 className="widget-user-desc text-white" >Hello Name</h2>
                  </div>
                  <div className="widget-user-image">
                    <img className="img-circle  elevation-2" src=""  style={{width:'100px', height:'100px'}}/>
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-sm-4 border-right">
                        <div className="description-block">
                          <h5 className="description-header">Email</h5>
                          <span className="description-text">ranazia@gmail.com</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-4 border-right">
                        <div className="description-block">
                          <h5 className="description-header">Total Chats</h5>
                          <span className="description-text">0</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-4">
                        <div className="description-block">
                          <h5 className="description-header">Joined Date</h5>
                          <span className="description-text"></span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  </div>
                </div>
                {/* /.widget-user */}
              </div> 
                  </div>
                  <div class="tab-pane fade" id="vert-tabs-profile" role="tabpanel" aria-labelledby="vert-tabs-profile-tab">
                  <div className="row">
    <div className="col-12">
      <h4>Recent Chats</h4>
      <div className="post">
        <div className="user-block">
          <img className="img-circle img-bordered-sm" src="../../dist/img/user1-128x128.jpg" alt="user image" />
          <span className="username">
            <a href="#">Jonathan Burke Jr.</a>
          </span>
          <span className="description">Shared publicly - 7:45 PM today</span>
        </div>
        {/* /.user-block */}
        <p>
          Lorem ipsum represents a long-held tradition for designers,
          typographers and the like. Some people hate it and argue for
          its demise, but others ignore.
        </p>
        <p>
          <a href="#" className="link-black text-sm"><i className="fas fa-link mr-1" /> Demo File 1 v2</a>
        </p>
      </div>
      <div className="post clearfix">
        <div className="user-block">
          <img className="img-circle img-bordered-sm" src="../../dist/img/user7-128x128.jpg" alt="User Image" />
          <span className="username">
            <a href="#">Sarah Ross</a>
          </span>
          <span className="description">Sent you a message - 3 days ago</span>
        </div>
        {/* /.user-block */}
        <p>
          Lorem ipsum represents a long-held tradition for designers,
          typographers and the like. Some people hate it and argue for
          its demise, but others ignore.
        </p>
        <p>
          <a href="#" className="link-black text-sm"><i className="fas fa-link mr-1" /> Demo File 2</a>
        </p>
      </div>
      <div className="post">
        <div className="user-block">
          <img className="img-circle img-bordered-sm" src="../../dist/img/user1-128x128.jpg" alt="user image" />
          <span className="username">
            <a href="#">Jonathan Burke Jr.</a>
          </span>
          <span className="description">Shared publicly - 5 days ago</span>
        </div>
        {/* /.user-block */}
        <p>
          Lorem ipsum represents a long-held tradition for designers,
          typographers and the like. Some people hate it and argue for
          its demise, but others ignore.
        </p>
        <p>
          <a href="#" className="link-black text-sm"><i className="fas fa-link mr-1" /> Demo File 1 v1</a>
        </p>
      </div>
    </div>
  </div> </div>
                  <div class="tab-pane fade" id="vert-tabs-messages" role="tabpanel" aria-labelledby="vert-tabs-messages-tab">
                  <div className="row">
    <div className="col-md-9">

    <div className="form-group">
        <label>Payment Gateways</label>
        <select className="form-control ">
          <option selected="selected"></option>
          <option>Stripe</option>
<option>Paypal</option>
<option>square</option>
<option>Skrill</option>


        </select>
      </div>
      <div className="form-group">
        <label>Country</label>
        <select className="form-control select2">
          <option selected="selected">USA</option>
          <option>Afghanistan</option>
<option>Albania</option>
<option>Algeria</option>
<option>Argentina</option>
<option>Australia</option>
<option>Austria</option>
<option>Argentina</option>
<option>Australia</option>
<option>Austria</option><option>Argentina</option>
<option>Australia</option>
<option>Austria</option>

        </select>
      </div>


      <div className="form-group">
<label> Email</label>
<input type="email" className="form-control" placeholder="">

</input>
        </div>
      {/* /.form-group */}
      <button type="submit" className="btn btn-orange" >
        Save
      </button>
      {/* /.form-group */}
    </div>
    {/* /.col */}
   
   
  </div>   </div>
                  {/* Update profile  */}

                  <div class="tab-pane fade" id="vert-tabs-settings" role="tabpanel" aria-controls="vert-tabs-settings">
                  <div className="row">
    <div className="col-md-12">

                 
      <div className="row wrapper">
        <div className="col-6 col-lg-10">
          <form  className="shadow-lg" encType='multipart/form-data'>
            <h1 className="mt-2 mb-5 text-center purple">Update Profile</h1>

            <div className="form-group">
              <label htmlFor="email_field">Name</label>
              <input
                type="name"
                id="name_field"
                className="form-control"
                name='name'
               
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name='email'
               
              />
            </div>

            <div className='form-group'>
              <label htmlFor='avatar_upload'>Avatar</label>
              <div className='d-flex align-items-center'>
                <div>
                  <figure className='avatar mr-3 item-rtl'>
                    <img
                      src=""
                      className='rounded-circle'
                      alt='Avatar Preview'
                    />
                  </figure>
                </div>
                <div className='custom-file'>
                  <input
                    type='file'
                    name='avatar'
                    className='custom-file-input'
                    id='customFile'
                    accept="image/*"
                    
                  />
                  <label className='custom-file-label' htmlFor='customFile'>
                    Choose Avatar
                  </label>
                </div>
              </div>
            </div>

            <button type="submit" className="btn update-btn btn-block mt-4 mb-3" >Update</button>
          
          </form>
        </div>
       


      </div>
    
</div>
</div>
</div>

{/* update profile end here  */}

<div class="tab-pane fade" id="vert-tabs-password" role="tabpanel" aria-controls="vert-tabs-password">
                  <div className="row">
    <div className="col-md-12">

   
            <div className="row wrapper">
                <div className="col-10 col-lg-10">
                    <form className="shadow-lg" >
                        <h2 className="mt-2 mb-5 text-center purple">Update Password</h2>
                        <div className="form-group">
                            <label htmlFor="old_password_field">Old Password</label>
                            <input
                                type="password"
                                id="old_password_field"
                                className="form-control"
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="new_password_field">New Password</label>
                            <input
                                type="password"
                                id="new_password_field"
                                className="form-control"
                                  />
                        </div>
                        <button type="submit"  className="btn update-btn btn-block mt-4 mb-3">Update Password</button>
                    </form>
                </div>
            </div>
        


      </div></div>
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

export default Profile2
