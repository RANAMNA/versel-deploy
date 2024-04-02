import React from 'react'
import avatar from '../Images/avatar.png';
import avatar2 from '../Images/avatar2.png';
import avatar3 from '../Images/avatar3.png';
import avatar4 from '../Images/avatar4.png';
import avatar5 from '../Images/avatar5.png';

const Psychics_Userlist = () => {
  return (
    <div>
        <div className="content-wrapper">
      {/* Content Header */}
      <div className="content-header">
        <div className="container-fluid"></div>
      <div className="row">
  <div className="col-md-6">
    {/* DIRECT CHAT */}
    <div className="card direct-chat direct-chat-warning">
      <div className="card-header">
      <h3 className="card-title"><span className='text-white'>Top Chat</span></h3>
        <div className="card-tools">
          <span title="3 New Messages" className="badge badge-warning">3</span>
          <button type="button" className="btn btn-tool" data-card-widget="collapse">
            <i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
            <i className="fas fa-comments" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove">
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body">
        {/* Conversations are loaded here */}
        <div className="direct-chat-messages">
          {/* Message. Default to the left */}
          <div className="direct-chat-msg">
            <div className="direct-chat-infos clearfix">
              <span className="direct-chat-name float-left">Alexander Pierce</span>
              <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
            </div>
            {/* /.direct-chat-infos */}
            <img className="direct-chat-img" src={avatar} alt="message user image" />
            {/* /.direct-chat-img */}
            <div className="direct-chat-text">
              Is this template really for free? That's unbelievable!
            </div>
            {/* /.direct-chat-text */}
          </div>
          {/* /.direct-chat-msg */}
          {/* Message to the right */}
          <div className="direct-chat-msg right">
            <div className="direct-chat-infos clearfix">
              <span className="direct-chat-name float-right">Sarah Bullock</span>
              <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
            </div>
            {/* /.direct-chat-infos */}
            <img className="direct-chat-img" src={avatar2} alt="message user image" />
            {/* /.direct-chat-img */}
            <div className="direct-chat-text">
              You better believe it!
            </div>
            {/* /.direct-chat-text */}
          </div>
          {/* /.direct-chat-msg */}
          {/* Message. Default to the left */}
          <div className="direct-chat-msg">
            <div className="direct-chat-infos clearfix">
              <span className="direct-chat-name float-left">Alexander Pierce</span>
              <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
            </div>
            {/* /.direct-chat-infos */}
            <img className="direct-chat-img" src={avatar} alt="message user image" />
            {/* /.direct-chat-img */}
            <div className="direct-chat-text">
              Working with AdminLTE on a great new app! Wanna join?
            </div>
            {/* /.direct-chat-text */}
          </div>
          {/* /.direct-chat-msg */}
          {/* Message to the right */}
          <div className="direct-chat-msg right">
            <div className="direct-chat-infos clearfix">
              <span className="direct-chat-name float-right">Sarah Bullock</span>
              <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
            </div>
            {/* /.direct-chat-infos */}
            <img className="direct-chat-img" src={avatar2} alt="message user image" />
            {/* /.direct-chat-img */}
            <div className="direct-chat-text">
              I would love to.
            </div>
            {/* /.direct-chat-text */}
          </div>
          {/* /.direct-chat-msg */}
        </div>
        {/*/.direct-chat-messages*/}
        {/* Contacts are loaded here */}
        <div className="direct-chat-contacts">
          <ul className="contacts-list">
            <li>
              <a href="#">
                <img className="contacts-list-img" src={avatar} alt="User Avatar" />
                <div className="contacts-list-info">
                  <span className="contacts-list-name">
                    Count Dracula
                    <small className="contacts-list-date float-right">2/28/2015</small>
                  </span>
                  <span className="contacts-list-msg">How have you been? I was...</span>
                </div>
                {/* /.contacts-list-info */}
              </a>
            </li>
            {/* End Contact Item */}
            <li>
              <a href="#">
                <img className="contacts-list-img" src={avatar2} alt="User Avatar" />
                <div className="contacts-list-info">
                  <span className="contacts-list-name">
                    Sarah Doe
                    <small className="contacts-list-date float-right">2/23/2015</small>
                  </span>
                  <span className="contacts-list-msg">I will be waiting for...</span>
                </div>
                {/* /.contacts-list-info */}
              </a>
            </li>
            {/* End Contact Item */}
            <li>
              <a href="#">
                <img className="contacts-list-img" src={avatar3} alt="User Avatar" />
                <div className="contacts-list-info">
                  <span className="contacts-list-name">
                    Nadia Jolie
                    <small className="contacts-list-date float-right">2/20/2015</small>
                  </span>
                  <span className="contacts-list-msg">I'll call you back at...</span>
                </div>
                {/* /.contacts-list-info */}
              </a>
            </li>
            {/* End Contact Item */}
           
            {/* End Contact Item */}
          </ul>
          {/* /.contacts-list */}
        </div>
        {/* /.direct-chat-pane */}
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        <form action="#" method="post">
          <div className="input-group">
            <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
            <span className="input-group-append">
              <button type="button" className="btn btn-warning">Send</button>
            </span>
          </div>
        </form>
      </div>
      {/* /.card-footer*/}
    </div>
    {/*/.direct-chat */}
  </div>
  {/* /.col */}
  <div className="col-md-6">
    {/* USERS LIST */}
    <div className="card">
      <div className="card-header">
        <h3 className="card-title"><span className='text-white'>Latest Members</span></h3>
        <div className="card-tools">
          <span className="badge badge-danger">8 New Members</span>
          <button type="button" className="btn btn-tool" data-card-widget="collapse">
            <i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove">
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body p-0">
        <ul className="users-list clearfix">
          <li>
            <img src={avatar} alt="User Image" />
            <a className="users-list-name" href="#">Alexander Pierce</a>
            <span className="users-list-date">Today</span>
          </li>
          <li>
            <img src={avatar2} alt="User Image" />
            <a className="users-list-name" href="#">Norman</a>
            <span className="users-list-date">Yesterday</span>
          </li>
          <li>
            <img src={avatar3} alt="User Image" />
            <a className="users-list-name" href="#">Jane</a>
            <span className="users-list-date">12 Jan</span>
          </li>
          <li>
            <img src={avatar5} alt="User Image" />
            <a className="users-list-name" href="#">John</a>
            <span className="users-list-date">12 Jan</span>
          </li>
          <li>
            <img src={avatar2} alt="User Image" />
            <a className="users-list-name" href="#">Alexander</a>
            <span className="users-list-date">13 Jan</span>
          </li>
          <li>
            <img src={avatar4} alt="User Image" />
            <a className="users-list-name" href="#">Sarah</a>
            <span className="users-list-date">14 Jan</span>
          </li>
          <li>
            <img src={avatar} alt="User Image" />
            <a className="users-list-name" href="#">Nora</a>
            <span className="users-list-date">15 Jan</span>
          </li>
          <li>
            <img src={avatar5} alt="User Image" />
            <a className="users-list-name" href="#">Nadia</a>
            <span className="users-list-date">15 Jan</span>
          </li>
        </ul>
        {/* /.users-list */}
      </div>
      {/* /.card-body */}
      <div className="card-footer text-center">
        <a href="javascript:">View All Psychics</a>
      </div>
      {/* /.card-footer */}
    </div>
    {/*/.card */}
  </div>
  {/* /.col */}
</div>

<div className='row'>
    <div className='col-md-6'>
<div className="card">
  <div className="card-header border-transparent">
  <h3 className="card-title"><span className='text-white'>Latest Profile</span></h3>
    <div className="card-tools">
      <button type="button" className="btn btn-tool" data-card-widget="collapse">
        <i className="fas fa-minus" />
      </button>
      <button type="button" className="btn btn-tool" data-card-widget="remove">
        <i className="fas fa-times" />
      </button>
    </div>
  </div>
  {/* /.card-header */}
  <div className="card-body p-0">
    <div className="table-responsive">
      <table className="table m-0">
        <thead>
          <tr>
            <th>Profile ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="pages/examples/invoice.html">OR9842</a></td>
            <td>Arolnad</td>
            <td><span className="badge badge-success">Approve</span></td>
            <td>
              <div className="sparkbar" data-color="#00a65a" data-height={20}>Psychics</div>
            </td>
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR1848</a></td>
            <td>Samual</td>
            <td><span className="badge badge-warning">Pending</span></td>
            <td>
              <div className="sparkbar" data-color="#f39c12" data-height={20}>Psychics</div>
            </td>
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR7429</a></td>
            <td>Jinshin</td>
            <td><span className="badge badge-success">Approve</span></td>
            <td>
              <div className="sparkbar" data-color="#f56954" data-height={20}>User</div>
            </td>
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR7429</a></td>
            <td>Samsung Smart TV</td>
            <td><span className="badge badge-info">Processing</span></td>
            <td>
              <div className="sparkbar" data-color="#00c0ef" data-height={20}>90,80,-90,70,-61,83,63</div>
            </td>
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR1848</a></td>
            <td>Samual</td>
            <td><span className="badge badge-warning">Pending</span></td>
            <td>
              <div className="sparkbar" data-color="#f39c12" data-height={20}>User</div>
            </td>
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR1848</a></td>
            <td>Samual</td>
            <td><span className="badge badge-warning">Pending</span></td>
            <td>
              <div className="sparkbar" data-color="#f39c12" data-height={20}>Psychics</div>
            </td>
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR9842</a></td>
            <td>Donayal</td>
            <td><span className="badge badge-success">Approve</span></td>
            <td>
              <div className="sparkbar" data-color="#00a65a" data-height={20}>User</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* /.table-responsive */}
  </div>
  {/* /.card-body */}
  <div className="card-footer clearfix">
    <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Visit Profiles</a>
  </div>
  {/* /.card-footer */}
</div>
</div>
<div className='col-md-6'>

<div className="card">
  <div className="card-header">
  <h3 className="card-title"><span className='text-white'>Recently Chats</span></h3>
    <div className="card-tools">
      <button type="button" className="btn btn-tool" data-card-widget="collapse">
        <i className="fas fa-minus" />
      </button>
      <button type="button" className="btn btn-tool" data-card-widget="remove">
        <i className="fas fa-times" />
      </button>
    </div>
  </div>
  {/* /.card-header */}
  <div className="card-body p-0">
    <ul className="products-list product-list-in-card pl-2 pr-2">
      <li className="item">
        <div className="product-img">
          <img src={avatar} alt="Product Image" className="img-size-50" />
        </div>
        <div className="product-info">
          <a href="javascript:void(0)" className="product-title">Danila
            <span className="badge badge-warning float-right">End</span></a>
          <span className="product-description">
           How are you Broma Chezo?.
          </span>
        </div>
      </li>
      {/* /.item */}
      <li className="item">
        <div className="product-img">
          <img src={avatar4} alt="Product Image" className="img-size-50" />
        </div>
        <div className="product-info">
          <a href="javascript:void(0)" className="product-title">Danila
            <span className="badge badge-success float-right">Complete</span></a>
          <span className="product-description">
           How are you Broma Chezo?.
          </span>
        </div>
      </li>
      <li className="item">
        <div className="product-img">
          <img src={avatar2} alt="Product Image" className="img-size-50" />
        </div>
        <div className="product-info">
          <a href="javascript:void(0)" className="product-title">Danila
            <span className="badge badge-info float-right">Continue</span></a>
          <span className="product-description">
           How are you Broma Chezo?.
          </span>
        </div>
      </li>
      <li className="item">
        <div className="product-img">
          <img src={avatar3} alt="Product Image" className="img-size-50" />
        </div>
        <div className="product-info">
          <a href="javascript:void(0)" className="product-title">Danila
            <span className="badge badge-warning float-right">End</span></a>
          <span className="product-description">
           How are you Broma Chezo?.
          </span>
        </div>
      </li>
      {/* /.item */}
    </ul>
  </div>
  {/* /.card-body */}
  <div className="card-footer text-center">
  <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Check Activity</a>
  </div>
  {/* /.card-footer */}
</div>
</div>

</div>


<div className='row'>
    <div className='col-md-6'>
<div className="card">
  <div className="card-header border-transparent">
  <h3 className="card-title"><span className='text-white'>Rejected Profile</span></h3>
    <div className="card-tools">
      <button type="button" className="btn btn-tool" data-card-widget="collapse">
        <i className="fas fa-minus" />
      </button>
      <button type="button" className="btn btn-tool" data-card-widget="remove">
        <i className="fas fa-times" />
      </button>
    </div>
  </div>
  {/* /.card-header */}
  <div className="card-body p-0">
    <div className="table-responsive">
      <table className="table m-0">
        <thead>
          <tr>
            <th>Profile ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="pages/examples/invoice.html">OR9842</a></td>
            <td>Arolnad</td>
            <td><span className="badge badge-warning">Pending</span></td>
            <td>
              <div className="sparkbar" data-color="#00a65a" data-height={20}>Imcomplete</div>
            </td>
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR1848</a></td>
            <td>Samual</td>
            <td><span className="badge badge-danger">Rejected</span></td>
            <td>
              <div className="sparkbar" data-color="#f39c12" data-height={20}>Misbehave</div>
            </td>
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR7429</a></td>
            <td>Jinshin</td>
            <td><span className="badge badge-danger">Rejected</span></td>
            <td>
              <div className="sparkbar" data-color="#f56954" data-height={20}>No Paid</div>
            </td>
          </tr>
          
          <tr>
            <td><a href="pages/examples/invoice.html">OR1848</a></td>
            <td>Samual</td>
            <td><span className="badge badge-danger">Rejected</span></td>
            <td>
              <div className="sparkbar" data-color="#f39c12" data-height={20}>Imcomplete</div>
            </td>
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR1848</a></td>
            <td>Samual</td>
            <td><span className="badge badge-warning">Pending</span></td>
            <td>
              <div className="sparkbar" data-color="#f39c12" data-height={20}>Psychics</div>
            </td>
          </tr>
          <tr>
            <td><a href="pages/examples/invoice.html">OR9842</a></td>
            <td>Donayal</td>
            <td><span className="badge badge-warning">Pending</span></td>
            <td>
              <div className="sparkbar" data-color="#00a65a" data-height={20}>Misbehave</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* /.table-responsive */}
  </div>
  {/* /.card-body */}
  <div className="card-footer clearfix">
    <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Visit Profiles</a>
  </div>
  {/* /.card-footer */}
</div>
</div>
<div className='col-md-6'>


</div>

</div>
</div>
</div></div>
    
  )
}

export default Psychics_Userlist
