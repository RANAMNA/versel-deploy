import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './adminstyle.css';
import avatar from '../Images/avatar.png';
import logo from '../Images/logo.png';

function Sidenav2() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const toggleDropdown = (dropdownId) => {
    setIsDropdownOpen((prevId) => (prevId === dropdownId ? null : dropdownId));
  };

  return (
    <div>
      <aside className="main-sidebar elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link" style={{ textDecoration: 'none' }}>
          <img src={logo} className="brand-image img-circle elevation-3" alt="AdminLTE Logo" />
          <p>Talk To Psychics</p>
        </a>

        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src={avatar} className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>

          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class with font-awesome or any other icon font library */}

              <li className="nav-item">
                <NavLink to="/admin/pages/Home" className="nav-link">
                  <i className="far fa fa-tachometer-alt" style={{ marginRight: '8px' }} />
                  <p>Dashboard</p>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/admin/pages/Psychics_list" className="nav-link">
                  <i className="far fa fa-eye" style={{ marginRight: '8px' }} />
                  <p>Overview</p>
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink to="/admin/pages/visitors" className="nav-link">
                  <i className="fas fa-external-link-alt"  style={{ marginRight: '8px', color:'gray' }} />
                  <p>Visitors</p>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/admin/pages/Mail" className="nav-link">
                  <i className="far fa-envelope" style={{ marginRight: '8px' }} />
                  <p>Email Configuration</p>
                </NavLink>
              </li>





              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${isDropdownOpen === 5 ? '' : ''}`}
                  onClick={() => toggleDropdown(5)}
                >
                  <i className="fa fa-file" style={{ marginRight: '8px', color: 'gray' }} />
                  <p>
                    Pages
                    <i className={`fas ${isDropdownOpen === 5 ? 'fa-angle-down' : 'fa-angle-left'} right`} />
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview" style={{ display: isDropdownOpen === 5 ? 'block' : 'none' }}>
                  <li className="nav-item">
                    <NavLink to="/admin/pages/page_details" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Psychics</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin/pages/faq" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>FAQ's </p>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${isDropdownOpen === 1 ? '' : ''}`}
                  onClick={() => toggleDropdown(1)}
                >
                  <i className="fa fa-user-md" style={{ marginRight: '8px', color: 'gray' }} />
                  <p>
                    All Psychics
                    <i className={`fas ${isDropdownOpen === 1 ? 'fa-angle-down' : 'fa-angle-left'} right`} />
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview" style={{ display: isDropdownOpen === 1 ? 'block' : 'none' }}>
                  <li className="nav-item">
                    <NavLink to="/admin/pages/Psychics" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Psychics</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin/pages/Users" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Users</p>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${isDropdownOpen === 2 ? '' : ''}`}
                  onClick={() => toggleDropdown(2)}
                >
                  <i className="fa fa-blog" style={{ marginRight: '8px', color: 'gray' }} />
                  <p>
                    Blogs Section
                    <i className={`fas ${isDropdownOpen === 2 ? 'fa-angle-down' : 'fa-angle-left'} right`} />
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview" style={{ display: isDropdownOpen === 2 ? 'block' : 'none' }}>
                  <li className="nav-item">
                    <NavLink to="/admin/pages/News" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Category</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin/pages/News_list" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>News</p>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${isDropdownOpen === 3 ? '' : ''}`}
                  onClick={() => toggleDropdown(3)}
                >
                  <i className="fa fa-dollar-sign" style={{ marginRight: '8px', color: 'gray' }} />
                  <p>
                    Pricing Section
                    <i className={`fas ${isDropdownOpen === 3 ? 'fa-angle-down' : 'fa-angle-left'} right`} />
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview" style={{ display: isDropdownOpen === 3 ? 'block' : 'none' }}>
                  <li className="nav-item">
                    <NavLink to="/admin/pages/Pricing" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pricing Plan</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin/pages/Pricing_section" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pricing Section</p>
                    </NavLink>
                  </li>
                </ul>
              </li>


              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${isDropdownOpen === 4 ? '' : ''}`}
                  onClick={() => toggleDropdown(4)}
                >
                  <i className="fa fa-cogs" style={{ marginRight: '8px', color: 'gray' }} />
                  <p>
                    Element Section
                    <i className={`fas ${isDropdownOpen === 4 ? 'fa-angle-down' : 'fa-angle-left'} right`} />
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview" style={{ display: isDropdownOpen === 4 ? 'block' : 'none' }}>
                  <li className="nav-item">
                    <NavLink to="/admin/pages/Testimonials" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Testimonials</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin/pages/accounts" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Social Accounts</p>
                    </NavLink>
                  </li>
                </ul>
              </li>


              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${isDropdownOpen === 6 ? '' : ''}`}
                  onClick={() => toggleDropdown(6)}
                >
                  <i className="fa fa-credit-card" style={{ marginRight: '8px', color: 'gray' }} />
                  <p>
                    Payment Gateways
                    <i className={`fas ${isDropdownOpen === 6 ? 'fa-angle-down' : 'fa-angle-left'} right`} />
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview" style={{ display: isDropdownOpen === 6 ? 'block' : 'none' }}>
                  <li className="nav-item">
                    <NavLink to="/admin/pages/payment_gateways" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Gateways</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/admin/pages/accepted_payment" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Accept Payments</p>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="#" className="nav-link">
                  <i className="far fa fa-sign-out-alt" style={{ marginRight: '8px' }} />
                  <p>Exit</p>
                </NavLink>
              </li>
              

            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
}

export default Sidenav2;
