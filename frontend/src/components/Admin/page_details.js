import React from 'react';
import Horoscopes_banner from '../Images/Horoscopes_banner.png';
import banner2 from '../Images/banner2.png';
import love_banner from '../Images/love_banner.png';
import freedom_girl from '../Images/freedom_girl.jpg';
import pricing_banner from '../Images/pricing_banner.png';
import { NavLink } from 'react-router-dom';

const Testimonials = () => {
  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Testimonials</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Testimonials</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          {/* Default box */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title"><span className='text-white'>Testimonials</span></h3>
            </div>
            <div className="card-body p-0">
              <table className="table table-striped projects">
                <thead>
                  <tr>
                    <th style={{ width: '2%' }} className="text-center">
                      SL
                    </th>
                    <th style={{ width: '10%' }} className="text-center">
                     Page Name
                    </th>
                    <th style={{ width: '5%' }} className="text-center">
                      Image
                    </th>
                    <th style={{ width: '15%' }} className="text-center">
                      Page Txt
                    </th>
                    
                    <th style={{ width: '15%' }} className="text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                 


                  <tr className='text-center'>
                    <td>3</td>
                    <td>
                      <a>
                        Psychic
                      </a>
                    </td>
                    <td className="project-image">
                      <img
                        src={banner2}
                        alt="Testimonial Image"
                        style={{ width: '100px', height: '100px' }}
                      />
                    </td>
                    <td className="project-state">
                      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
                    </td>
                    
                    <td className="project-actions text-right">
                      <a className="btn btn-info btn-sm" href="#">
                        <i className="fas fa-pencil-alt"></i>
                        Edit
                      </a>
                      <a className="btn btn-danger btn-sm" href="#">
                        <i className="fas fa-trash"></i>
                        Delete
                      </a>
                    </td>
                  </tr>


                  <tr className='text-center'>
                    <td>1</td>
                    <td>
                      <a>
                       Horoscopes
                      </a>
                    </td>
                    <td className="project-image">
                      <img
                        src={Horoscopes_banner}
                        alt="Testimonial Image"
                        style={{ width: '100px', height: '100px' }}
                      />
                    </td>
                    <td className="project-state">
                      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
                    </td>
                   
                    <td className="project-actions text-right">
                    <NavLink to="/admin/pages/Home_page/update" className="edit-page-btn">
                      <a className="btn btn-info btn-sm" href="#">
                        <i className="fas fa-pencil-alt"></i>
                        
                        Edit
                       
                      </a>
                      </NavLink>
                    </td>
                  </tr>

                  <tr className='text-center'>
                    <td>2</td>
                    <td className='text-center'>
                      <a>
                    Love
                      </a>
                    </td>
                    <td className="project-image">
                      <img
                        src={love_banner}
                        alt="Testimonial Image"
                        style={{ width: '100px', height: '100px' }}
                      />
                    </td>
                    <td className="project-state">
                      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
                    </td>
                   
                    <td className="project-actions text-right">
                      <a className="btn btn-info btn-sm" href="#">
                        <i className="fas fa-pencil-alt"></i>
                        Edit
                      </a>
                      <a className="btn btn-danger btn-sm" href="#">
                        <i className="fas fa-trash"></i>
                        Delete
                      </a>
                    </td>
                  </tr>

                  <tr className='text-center'>
                    <td>5</td>
                    <td>
                      <a>
                     Blogs 
                      </a>
                    </td>
                    <td className="project-image">
                      <img
                        src={freedom_girl}
                        alt="Testimonial Image"
                        style={{ width: '100px', height: '100px' }}
                      />
                    </td>
                    <td className="project-state">
                      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
                    </td>
                   
                    <td className="project-actions text-right">
                      <a className="btn btn-info btn-sm" href="#">
                        <i className="fas fa-pencil-alt"></i>
                        Edit
                      </a>
                      <a className="btn btn-danger btn-sm" href="#">
                        <i className="fas fa-trash"></i>
                        Delete
                      </a>
                    </td>
                  </tr>

                  <tr className='text-center'>
                    <td>6</td>
                    <td>
                      <a>
                        How it works
                      </a>
                    </td>
                    <td className="project-image">
                      <img
                        src={pricing_banner}
                        alt="Testimonial Image"
                        style={{ width: '100px', height: '100px' }}
                      />
                    </td>
                    <td className="project-state">
                      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
                    </td>
                   
                    <td className="project-actions text-right">
                      <a className="btn btn-info btn-sm" href="#">
                        <i className="fas fa-pencil-alt"></i>
                        Edit
                      </a>
                      <a className="btn btn-danger btn-sm" href="#">
                        <i className="fas fa-trash"></i>
                        Delete
                      </a>
                    </td>
                  </tr> 
                   <tr className='text-center'>
                    <td>7</td>
                    <td>
                      <a>
                        About us
                      </a>
                    </td>
                    <td className="project-image">
                      <img
                        src={banner2}
                        alt="Testimonial Image"
                        style={{ width: '100px', height: '100px' }}
                      />
                    </td>
                    <td className="project-state">
                      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
                    </td>
                   
                    <td className="project-actions text-right">
                      <a className="btn btn-info btn-sm" href="#">
                        <i className="fas fa-pencil-alt"></i>
                        Edit
                      </a>
                      <a className="btn btn-danger btn-sm" href="#">
                        <i className="fas fa-trash"></i>
                        Delete
                      </a>
                    </td>
                  </tr>

                  {/* Add more testimonials as needed */}
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </section>
        {/* /.content */}
      </div>
    </div>
  )
}

export default Testimonials;
