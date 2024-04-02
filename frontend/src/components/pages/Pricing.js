import React from 'react'
import '../assets/style.css';
import Pricing_banner from '../Images/pricing_banner.png';
import { Link } from 'react-router-dom';
const Pricing = () => {
  return (
    <div className='container'>
      <br/>
   <div className="love_banner" data-aos="zoom-in-up">
  <img src={Pricing_banner}alt />
  <div className="caption">
    <h4>Offers & Packages Today</h4>
    <p>Love psychics can answer questions and give love advice! Will I find love? Will I marry? Is he cheating? What will happen with my divorce?</p>
  </div>
</div>
    
  {/* Content Header (Page header) */}
  <section className="content-header" >
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Invoice</h1>
        </div>
       
      </div>  
    </div>{/* /.container-fluid */}
  </section>
  <section className="content" data-aos="fade-up"
     data-aos-duration="1500">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="callout callout-info">
            <h5><i className="fas fa-info" /> Note:</h5>
            Choose from one of the 20-minutes packages
          </div>
          {/* Main content */}
          <div className="invoice p-3 mb-3">
            {/* title row */}
            <div className="row">
              <div className="col-12">
                <h4>
                  <i className="fas fa-globe text-center" /> Best Deals Of the World
                  <small className="float-right" style={{fontSize:'0.8em'}}>Date: 2/10/2014</small>
                </h4>
              </div>
              {/* /.col */}
            </div>
            {/* info row */}
            <div className="row invoice-info">
              <div className="col-sm-4 invoice-col">
              You Pay
                <address>
                 <h4 className='pricing_price'><strong>$1/Min</strong><br /></h4> 
                 Best for the curious
                 <h5 className='pricing_package'> Basic</h5>
                  <button className='pricing_btn'> <Link to="/signup" className='text-white'>Get started</Link> </button>
                 <span className='pricing_intro'> Crack open the basics, without breaking the bank</span>
                </address>
              </div>
              {/* /.col */}
              <div className="col-sm-4 invoice-col">
                
              You Pay
                <address>
                 <h4 className='pricing_price'><strong>$1/Min</strong><br /></h4> 
                 Best for the curious<br />
                 <h5 className='pricing_package'> Basic</h5>
                  <button className='pricing_btn'> <Link to="/signup" className='text-white'>Get started</Link> </button>
                 <span className='pricing_intro'> Crack open the basics, without breaking the bank</span>
                </address>
              </div>
              {/* /.col */}
              <div className="col-sm-4 invoice-col">
              You Pay
                <address>
                 <h4 className='pricing_price'><strong>$1/Min</strong><br /></h4> 
                 Best for the curious<br />
                 <h5 className='pricing_package'> Basic</h5>
                  <button className='pricing_btn'> <Link to="/signup" className='text-white'>Get started</Link> </button>
                 <span className='pricing_intro'> Crack open the basics, without breaking the bank</span>
                </address>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* Table row */}
            <div className="row">
              <div className="col-12 table-responsive">
                <table className="table table-bordered table-striped">
                  
                  <tbody  class="text-center">
                    <tr class="custom-padding-tr">
                      <td>Selection of</td>
                      <td>350+ psychics</td>
                      <td>70+ psychics</td>
                      <td>70+ psychics</td>
                      
                    </tr>
                    <tr class="custom-padding-tr">
                      <td>Selection of</td>
                      <td>350+ psychics</td>
                      <td>70+ psychics</td>
                      <td>70+ psychics</td>
                      
                    </tr>
                    <tr class="custom-padding-tr">
                      <td>Selection of</td>
                      <td>350+ psychics</td>
                      <td>70+ psychics</td>
                      <td>70+ psychics</td>
                      
                    </tr>
                    <tr class="custom-padding-tr">
                      <td>Selection of</td>
                      <td>350+ psychics</td>
                      <td>70+ psychics</td>
                      <td>70+ psychics</td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <div className="row">
              {/* accepted payments column */}
              <div className="col-12">
                <div className='pricing_container'>
              <button className='pricing_btn_stated'> <Link to="/signup" className='text-white'>Get started</Link> </button>
              <button className='pricing_btn_stated'> <Link to="/signup" className='text-white'>Get started</Link></button>
              
              <button className='pricing_btn_stated'> <Link to="/signup" className='text-white'>Get started</Link> </button>
              </div>
              <br/>
                 <p className='paragraph_price'>
                 Make a selection for your <strong> 25-minute</strong> reading and a psychic will be assigned to you.
And don’t worry, if you don’t use up all your minutes we’ll keep them in your account for next time. </p>
<i className='text-center'> *Ratings and experience may vary. See specific profile for exact information.</i>
                 
              </div>
              {/* /.col */}
             
              {/* /.col */}
            </div>
            </div>
       
{/* FAQ'S */}

  
      
{/* FAQ'S END HERE */}
        
          </div>{/* /.col */}
          
      </div>{/* /.row */}
      
    </div>  </section>
  {/* /.content */}
</div>
 )
}

export default Pricing
