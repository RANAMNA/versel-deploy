import React from 'react'

const Update = () => {
  return (
    <div>
      

      <div className="content-wrapper">
      {/* Content Header */}
      <div className="content-header">
        <div className="container-fluid">

      <h4> Profile and Announcement</h4>
<div className="row">
  
  <div className="col-md-6" data-aos="fade-left" >
    <div className="card card-default">
      <div className="card-header">
        <h3 className="card-title">
         <span className='text-white'>  <i className="far fa fa-exclamation-triangle p-1" /></span>
         <span className='text-white'>Alerts</span> 
        </h3>
      </div>
      {/* /.card-header */}
      <div className="card-body">
        <div className="alert alert-danger alert-dismissible">
          <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
          <h5><i className="icon fas fa-ban" /> Alert!</h5>
          Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my
          entire
          soul, like these sweet mornings of spring which I enjoy with my whole heart.
        </div>
        <div className="alert alert-info alert-dismissible">
          <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
          <h5><i className="icon fas fa-info" /> Alert!</h5>
          Info alert preview. This alert is dismissable.
        </div>
        <div className="alert alert-warning alert-dismissible">
          <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
          <h5><i className="icon fas fa-exclamation-triangle" /> Alert!</h5>
          Warning alert preview. This alert is dismissable.
        </div>
        <div className="alert alert-success alert-dismissible">
          <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
          <h5><i className="icon fas fa-check" /> Alert!</h5>
          Success alert preview. This alert is dismissable.
        </div>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </div>
  {/* /.col */}
 <div className="col-md-6" data-aos="zoom-in-down">
  <div className="card">
    
    <div className="card-header">
     <h3 className="card-title">  <span className='text-white'> <i class="far fa fa-bullhorn"/></span>
    <span className='text-white'>Announcement </span></h3>
    </div>
    {/* /.card-header */}
    <div className="card-body">
      {/* we are adding the accordion ID so Bootstrap's collapse plugin detects it */}
      <div id="accordion">
        <div className="card card-primary">
          <div className="card-header">
            <h4 className="card-title w-100">
              <a className="d-block w-100" data-toggle="collapse" href="#collapseOne">
                Collapsible Group Item #1
              </a>
            </h4>
          </div>
          <div id="collapseOne" className="collapse show" data-parent="#accordion">
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              3
              wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum
              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
              nulla
              assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
              beer
              farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
              labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card card-danger">
          <div className="card-header">
            <h4 className="card-title w-100">
              <a className="d-block w-100" data-toggle="collapse" href="#collapseTwo">
                Collapsible Group Danger
              </a>
            </h4>
          </div>
          <div id="collapseTwo" className="collapse" data-parent="#accordion">
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              3
              wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum
              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
              nulla
              assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
              beer
              farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
              labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card card-success">
          <div className="card-header">
            <h4 className="card-title w-100">
              <a className="d-block w-100" data-toggle="collapse" href="#collapseThree">
                Collapsible Group Success
              </a>
            </h4>
          </div>
          <div id="collapseThree" className="collapse" data-parent="#accordion">
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              3
              wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum
              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
              nulla
              assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
              beer
              farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
              labore sustainable VHS.
            </div>
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
    </div>
    </div>
    </div>
  )

}

export default Update
