import React from 'react'
import { Link } from 'react-router-dom'
const PsyUpdate_profile = () => {
  return (
    <div className="content-wrapper">
        
    {/* Content Header (Page header) */}
    <section className="content-header" data-aos="fade-up"
         data-aos-duration="1000">
      <div className="container-fluid">
    {/* SELECT2 EXAMPLE */}
    
    {/* /.card */}
   
    {/* /.card */}
    <div className="row">
      <div className="col-md-6">
        <div className="card card-orange">
          <div className="card-header">
            <h3 className="card-title"> <span className='text-white'> Update Profile</span></h3>
          </div>
          <div className="card-body">
            {/* Date dd/mm/yyyy */}
            <div className="form-group">
              <label>Name</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="far fa-user" /></span>
                </div>
                <input type="text" className="form-control" data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy" data-mask />
              </div>
              {/* /.input group */}
            </div>
            {/* /.form group */}
            {/* Date mm/dd/yyyy */}
            <div className="form-group">
            <label> Email</label>
              <div className="input-group">
                <div className="input-group-prepend">
                    
                  <span className="input-group-text"><i className="far fa-envelope" /></span>
                </div>
                <input type="text" className="form-control" data-inputmask-alias="datetime" data-inputmask-inputformat="mm/dd/yyyy" data-mask />
              </div>
              {/* /.input group */}
            </div>
            {/* /.form group */}
            {/* phone mask */}
            <div className="form-group">
              <label>Phone No</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="far fa fa-phone"/></span>
                </div>
                <input type="number" className="form-control" data-inputmask="&quot;mask&quot;: &quot;(999) 999-9999&quot;" data-mask />
              </div>
              {/* /.input group */}
            </div>
            {/* /.form group */}
            {/* phone mask */}
            <div className="form-group">
              <label>Topics:</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="far fa fa-check" /></span>
                </div>
                <input type="text" className="form-control" data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']" data-mask />
              </div>
              {/* /.input group */}
            </div>
            {/* /.form group */}
            {/* IP mask */}
            <div className="form-group">
              <label>Tools</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="far fa fa-laptop" /></span>
                </div>
                <input type="text" className="form-control" data-inputmask="'alias': 'ip'" data-mask />
              </div>
              {/* /.input group */}
            </div>
            {/* /.form group */}
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
       
        {/* /.card */}
      </div>
      {/* /.col (left) */}
      <div className="col-md-6">
        <div className="card card-orange">
          <div className="card-header">
            <h3 className="card-title"><span className='text-white'>Country/Abilities</span></h3>
          </div>
          <div className="card-body">
            {/* Date */}
            <div className="form-group">
              <label>Country:</label>
              <div className="input-group date" id="reservationdate" data-target-input="nearest">
                <input type="text" className="form-control datetimepicker-input"  />
                <div className="input-group-append" data-target="#reservationdate">
                  <div className="input-group-text"><i className="far fa fa-flag"/></div>
                </div>
              </div>
            </div>
            {/* Date and time */}
            <div className="form-group">
              <label>Abilities</label>
              <div className="input-group date" id="reservationdatetime" data-target-input="nearest">
                <input type="text" className="form-control datetimepicker-input"  />
                <div className="input-group-append" data-target="#reservationdatetime">
                  <div className="input-group-text"><i className="far fa fa-check" /></div>
                </div>
              </div>
            </div>
            {/* /.form group */}
            {/* Date range */}
          
            {/* /.form group */}
            {/* Date and time range */}
            <div className="form-group">
             
              <div className="input-group">
                <button type="button" className="btn btn-default float-right" id="daterange-btn">
                 <span className='text-white'>Save</span> 
                  
                </button>
              </div>
            </div>
            {/* /.form group */}
          </div>
       
          {/* /.card-body */}
        </div>
        {/* /.card */}
        {/* iCheck */}
       
        {/* /.card */}
        {/* Bootstrap Switch */}
       
        {/* /.card */}
      </div>
      {/* /.col (right) */}
    </div>
    {/* /.row */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-default">
         
          <div className="card-body p-0">
            <div className="bs-stepper">
              <div className="bs-stepper-header" role="tablist">
                {/* your steps here */}
               
                <div className="line" />
               
              </div>
              <div className="bs-stepper-content">
                {/* your steps content here */}
                <div id="logins-part" className="content" role="tabpanel" aria-labelledby="logins-part-trigger">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Intro Line</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" />
                  </div>
                  <div className="form-group">
  <label htmlFor="exampleInputPassword1">About</label>
  <textarea className="form-control" id="exampleInputPassword1" />
</div>

                  </div>
                <div id="information-part" className="content" role="tabpanel" aria-labelledby="information-part-trigger">
                  <div className="form-group">
                    <label htmlFor="exampleInputFile">Image Upload</label>
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" id="exampleInputFile" />
                        <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                      </div>
                      <div className="input-group-append">
                        <span className="input-group-text">Upload</span>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary" onclick="stepper.previous()"> <Link to="/psychics/pages/Profile"> <span className='text-white'>Previous</span></Link></button>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
          {/* /.card-body */}
        
        </div>
        {/* /.card */}
      </div>
    </div>
    {/* /.row */}
    
    {/* /.row */}
  </div>
  {/* /.container-fluid */}
</section>



    </div>
  )
}

export default PsyUpdate_profile
