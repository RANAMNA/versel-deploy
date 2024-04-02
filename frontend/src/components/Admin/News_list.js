import React from 'react';
import { NavLink ,Link} from 'react-router-dom'
import getstart from '../Images/getstart.jpg';
import love_couple from '../Images/love_couple.jpg';
import psychic_team from '../Images/psychic_team.png';
import love_reading from '../Images/love_reading.jpg';
import snowfall from '../Images/snowfall.jpg';

const News_list = () => {
  return (
    <div>
   <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>News </h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active"> News</li>
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
              <th style={{width: '5%'}} className="text-center">
                Image
              </th>
              
             
              <th style={{width: '15%'}} className="text-center">
                TiTles
              </th>
              <th style={{width: '5%'}} className="text-center">
                Status
              </th>
              <th style={{width: '15%'}} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
          <tr>
      <td>1</td>
      <td>
        <a>
        Mystic Musings
        </a>
      </td>
      <td className="project-image">
        <img
          src={getstart}
          alt="Psychic Insights Image"
          style={{ maxWidth: '50px', maxHeight: '50px' }}
        />
      </td>
      <td className="project-state">
        <p>Unlocking the Secrets of Crystal Energy
Journey Through the Tarot Cards: A Mystic Guide</p>
      </td>
      <td className="project-state">
        <span className="badge badge-success">Active</span>
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
           

    <tr>
      <td>1</td>
      <td>
        <a>
        Enhancing Psychic Abilities
        </a>
      </td>
      <td className="project-image">
        <img
          src={love_reading}
          alt="Psychic Insights Image"
          style={{ maxWidth: '50px', maxHeight: '50px' }}
        />
      </td>
      <td className="project-state">
        <p>Connecting with Your Spirit Guides: A Mystic's Perspective
Dream Diaries: Exploring Psychic Symbols</p>
      </td>
      <td className="project-state">
        <span className="badge badge-success">Active</span>
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
    </tr>    <tr>
      <td>1</td>
      <td>
        <a>
        Decoding Dreams: A Psychic Perspective
        </a>
      </td>
      <td className="project-image">
        <img
          src={love_couple}
          alt="Psychic Insights Image"
          style={{ maxWidth: '50px', maxHeight: '50px' }}
        />
      </td>
      <td className="project-state">
        <p>Astrology Demystified: Your Cosmic Blueprint
The Art of Energy Healing: Balancing Body and Spirit</p>
      </td>
      <td className="project-state">
        <span className="badge badge-success">Active</span>
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
    </tr>    <tr>
      <td>1</td>
      <td>
        <a>
        he Power of Energy Healing        </a>
      </td>
      <td className="project-image">
        <img
          src={psychic_team}
          alt="Psychic Insights Image"
          style={{ maxWidth: '50px', maxHeight: '50px' }}
        />
      </td>
      <td className="project-state">
        <p>Psychic Development 101: Tapping into Your Inner Gifts
Intuitive Living: Embracing Your Sixth Sense</p>
      </td>
      <td className="project-state">
        <span className="badge badge-success">Active</span>
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
    </tr>    <tr>
      <td>1</td>
      <td>
        <a>
        Exploring the Paranormal World        </a>
      </td>
      <td className="project-image">
        <img
          src={snowfall}
          alt="Psychic Insights Image"
          style={{ maxWidth: '50px', maxHeight: '50px' }}
        />
      </td>
      <td className="project-state">
        <p>Beyond the Veil: Paranormal Encounters
Mediumship Unveiled: Bridging Two Worlds</p>
      </td>
      <td className="project-state">
        <span className="badge badge-success">Active</span>
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

export default News_list;
