import React from 'react';
import { NavLink ,Link} from 'react-router-dom'

const News = () => {
  return (
    <div>
   <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Blogs Category</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Blogs</li>
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
      <h3 className="card-title"><span className='text-white'> Profile</span></h3>
        <div className="card-tools">
          <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
            <i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      <div className="card-body p-0">
        <table className="table table-striped projects">
          <thead>
            <tr>
            <th style={{width: '2%'}} className="text-center">
                SL
              </th>
              <th style={{width: '10%'}} className="text-center">
                Category Names
              </th>
              <th style={{width: '15%'}} className="text-center">
                Category Slug
              </th>
             
              <th style={{width: '15%'}} className="text-center">
                Topics
              </th>
              <th style={{width: '10%'}} className="text-center">
                Status
              </th>
              <th style={{width: '15%'}} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1
              </td>
              <td>
                <a>
                Psychic Insights
                </a>
                
              </td>
             
             
              <td className="project-state">
                <p>Psychics/Reading</p>
              </td>
              <td className="project-state">
               <p>Understanding Psychic Abilities, Real-life Psychic Experiences</p>
              </td>
              <td className="project-state">
                <span className="badge badge-success">Active</span>
              </td>
              <td className="project-actions text-right">
               
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td>
                2
              </td>
              <td>
                <a>
                Tarot Readings
                </a>
              
              </td>
              <td className="project-state">
                <p> Tarot Readings, Tarot</p>
                            </td><td className="project-state">
                <p>How to Read Tarot Cards for Yourself, Common Tarot Card Meanings Explained </p>
              </td>
              <td className="project-state">
                <span className="badge badge-success">Active</span>
              </td>
              <td className="project-actions text-right">
               
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td>
                3
              </td>
              <td>
                <a>
                Astrology
                </a>
              
              </td>
              <td className="project-state">
                <p> Astrology, Logic</p>
                            </td><td className="project-state">
                <p>Exploring Your Astrological Birth Chart, The Influence of Planets on Psychic Abilities </p>
              </td>
              <td className="project-state">
                <span className="badge badge-success">Active</span>
              </td>
              <td className="project-actions text-right">
               
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Delete
                </a>
              </td>
            </tr>

            <tr>
              <td>
                4
              </td>
              <td>
                <a>
                Psychic Development                </a>
              
              </td>
              <td className="project-state">
                <p> Enhancing Your Intuition</p>
                            </td><td className="project-state">
                <p>Enhancing Your Intuition, Meditation Techniques for Psychic Growth </p>
              </td>
              <td className="project-state">
                <span className="badge badge-success">Active</span>
              </td>
              <td className="project-actions text-right">
               
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Delete
                </a>
              </td>
            </tr>
           

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

export default News;
