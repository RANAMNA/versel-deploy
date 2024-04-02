import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
const Home = () => {




    // Sample data for Line chart
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  // Sample data for Doughnut chart
  const doughnutChartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };
  return (
    <div className="content-wrapper">
      {/* Content Header */}
      <div className="content-header">
        <div className="container-fluid">

     <section className="content" data-aos="fade-left">
  <div className="container-fluid">
    {/* Small boxes (Stat box) */}
    <div className="row">
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box" style={{ backgroundColor: 'hsl(290, 96.61%, 45.66%)' }}>
  {/* Content of the small box */}
  
          <div className="inner">
            
            <p className='text-white'>Total Messages Record</p>
            <h6 className='text-white'>15:20:40</h6>
          </div>
          <div className="icon text-white">
            <i className="ion ion-clock" />
          </div>
          <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right text-white" /></a>
        </div>
      </div>
      {/* ./col */}
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box " style={{backgroundColor: '#ff6000'}}>
          <div className="inner">
          <p className='text-white'>Total Earning</p>
            <h6 className='text-white'>53</h6>
            
          </div>
          <div className="icon text-white">
          <i className="ion ion">&#36;</i>
          </div>
          <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right text-white" /></a>
        </div>
      </div>
      {/* ./col */}
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box" style={{ backgroundColor: 'hsl(290, 96.61%, 45.66%)' }}>
  {/* Content of the small box */}
  
          <div className="inner">
            
            <p className='text-white'>Followers</p>
            <h6 className='text-white'>150</h6>
          </div>
          <div className="icon text-white">
            <i className="ion ion-heart" />
          </div>
          <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right text-white" /></a>
        </div>
      </div>
      {/* ./col */}
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box " style={{backgroundColor: '#ff6000'}}>
          <div className="inner">
            
            <p className='text-white'>Rating & Reviews</p>
            <h6 className='text-white'>53</h6>
          </div>
          <div className="icon text-white">
          <i className="ion ion-star"></i>
          </div>
          <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right text-white" /></a>
        </div>
      </div>
      {/* ./col */}
    </div>
     </div>{/* /.container-fluid */}
</section>


<div className="row" data-aos="fade-up"
     data-aos-duration="500">
      <section className="col-lg-7 connectedSortable">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <i className="fas fa-chart-pie mr-1" />
              Sales
            </h3>
            <div className="card-tools">
              {/* Your chart tabs */}
            </div>
          </div>
          <div className="card-body">
            <div className="tab-content p-0">
              {/* Line chart */}
              <div className="chart tab-pane active" id="revenue-chart">
                <Line data={lineChartData} />
              </div>
              {/* Doughnut chart */}
              <div className="chart tab-pane" id="sales-chart">
                <Doughnut data={doughnutChartData} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ... other sections ... */}
    </div>


          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0"></h1>
            </div>
            
          </div>
        </div>
      </div>
     

 <h4> Old Chats </h4>
<div className="row" data-aos="fade-left">
  <div className="col-md-4">
    {/* DIRECT CHAT PRIMARY */}
    <div className="card card-primary card-outline direct-chat direct-chat-primary">
      <div className="card-header">
        <h3 className="card-title">Direct Chat</h3>
        <div className="card-tools">
          <span title="3 New Messages" className="badge bg-primary">3</span>
          <button type="button" className="btn btn-tool" data-card-widget="collapse">
            <i className="far fa fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
            <i className="far fa fa-comments" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove">
            <i className="far fa fa-times" />
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
            <img className="direct-chat-img" src="../../dist/img/user1-128x128.jpg" alt="Message User Image" />
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
            <img className="direct-chat-img" src="../../dist/img/user3-128x128.jpg" alt="Message User Image" />
            {/* /.direct-chat-img */}
            <div className="direct-chat-text">
              You better believe it!
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
                <img className="contacts-list-img" src="../../dist/img/user1-128x128.jpg" alt="User Avatar" />
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
          </ul>
          {/* /.contatcts-list */}
        </div>
        {/* /.direct-chat-pane */}
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        <form >
          <div className="input-group">
            <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
            <span className="input-group-append">
              <button type="submit" className="btn btn-primary"> <Link to="/psychics/pages/Home"> <span className='text-white'>Send</span></Link></button>
            </span>
          </div>
        </form>
      </div>
      {/* /.card-footer*/}
    </div>
    {/*/.direct-chat */}
  </div>
  {/* /.col */}
  <div className="col-md-4">
    {/* DIRECT CHAT SUCCESS */}
    <div className="card card-success card-outline direct-chat direct-chat-success">
      <div className="card-header">
        <h3 className="card-title">Direct Chat</h3>
        <div className="card-tools">
          <span title="3 New Messages" className="badge bg-success">3</span>
          <button type="button" className="btn btn-tool" data-card-widget="collapse">
            <i className="far fa fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
            <i className="far fa fa-comments" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove">
            <i className="far fa fa-times" />
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
            <img className="direct-chat-img" src="../../dist/img/user1-128x128.jpg" alt="Message User Image" />
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
            <img className="direct-chat-img" src="../../dist/img/user3-128x128.jpg" alt="Message User Image" />
            {/* /.direct-chat-img */}
            <div className="direct-chat-text">
              You better believe it!
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
                <img className="contacts-list-img" src="../../dist/img/user1-128x128.jpg" alt="User Avatar" />
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
          </ul>
          {/* /.contatcts-list */}
        </div>
        {/* /.direct-chat-pane */}
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        <form >
          <div className="input-group">
            <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
            <span className="input-group-append">
              <button type="submit" className="btn btn-success"> <Link to="/psychics/pages/Home"> <span className='text-white'>Send</span></Link></button>
            </span>
          </div>
        </form>
      </div>
      {/* /.card-footer*/}
    </div>
    {/*/.direct-chat */}
  </div>
  {/* /.col */}
  <div className="col-md-4">
    {/* DIRECT CHAT SUCCESS */}
    <div className="card card-success card-outline direct-chat direct-chat-success">
      <div className="card-header">
        <h3 className="card-title">Direct Chat</h3>
        <div className="card-tools">
          <span title="3 New Messages" className="badge bg-success">3</span>
          <button type="button" className="btn btn-tool" data-card-widget="collapse">
            <i className="far fa fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
            <i className="far fa fa-comments" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove">
            <i className="far fa fa-times" />
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
            <img className="direct-chat-img" src="../../dist/img/user1-128x128.jpg" alt="Message User Image" />
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
            <img className="direct-chat-img" src="../../dist/img/user3-128x128.jpg" alt="Message User Image" />
            {/* /.direct-chat-img */}
            <div className="direct-chat-text">
              You better believe it!
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
                <img className="contacts-list-img" src="../../dist/img/user1-128x128.jpg" alt="User Avatar" />
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
          </ul>
          {/* /.contatcts-list */}
        </div>
        {/* /.direct-chat-pane */}
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        <form >
          <div className="input-group">
            <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
            <span className="input-group-append">
              <button type="submit" className="btn btn-success"> <Link to="/psychics/pages/Home"> <span className='text-white'>Send</span></Link></button>
            </span>
          </div>
        </form>
      </div>
      {/* /.card-footer*/}
    </div>
    {/*/.direct-chat */}
  </div>
  {/* /.col */}
</div>











      
    </div>
  );
};

export default Home;
