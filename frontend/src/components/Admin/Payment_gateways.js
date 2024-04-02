import React from 'react';

import paypal from './payment/paypal.jpeg';
import skrill from './payment/skrill.png';
import bank from './payment/bank.jpg';
import squre from './payment/squre.png';
import payoneer from './payment/payoneer.png';
import stripe from './payment/stripe.png';

const Payment_gateways = () => {
  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              {/* ... (your existing code) */}
            </div>
          </div>
        </section>
        {/* Main content */}
        <section className="content">
          {/* Default box */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title"><span className='text-white'> Payment Gateways</span></h3>
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
                    <th style={{ width: '2%' }} className="text-center">
                      SL
                    </th>
                    <th style={{ width: '20%' }} className="text-center">
                      Gateway Name
                    </th>
                    <th style={{ width: '5%' }}>
                      Gateway Image
                    </th>
                    <th style={{ width: '15%' }} className="text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-center'>
                    <td>1</td>
                    <td>
                      <a>
                      Paypal
                      </a>
                    </td>
                    <td className="text-center">
                      <img
                        src={paypal}
                        alt="Payment Gateway 1"
                        style={{ maxWidth: '50px', maxHeight: '50px'  }}
                      />
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
                    <td>2</td>
                    <td>
                      <a>
                     Skrill
                      </a>
                    </td>
                    <td className="text-center">
                      <img
                        src={skrill}
                        alt="Payment Gateway 1"
                        style={{ maxWidth: '50px', maxHeight: '50px'  }}
                      />
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
                    <td>3</td>
                    <td>
                      <a>
                      Payoneer
                      </a>
                    </td>
                    <td className="text-center">
                      <img
                        src={payoneer}
                        alt="Payment Gateway 1"
                        style={{ maxWidth: '50px', maxHeight: '50px'  }}
                      />
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
                    <td>4</td>
                    <td>
                      <a>
                      Bank Transfer
                      </a>
                    </td>
                    <td className="text-center">
                      <img
                        src={bank}
                        alt="Payment Gateway 1"
                        style={{ maxWidth: '50px', maxHeight: '50px'  }}
                      />
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
                      Square
                      </a>
                    </td>
                    <td className="text-center">
                      <img
                        src={squre}
                        alt="Payment Gateway 1"
                        style={{ maxWidth: '50px', maxHeight: '50px'  }}
                      />
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
                     Stripe
                      </a>
                    </td>
                    <td className="text-center">
                      <img
                        src={stripe}
                        alt="Payment Gateway 1"
                        style={{ maxWidth: '50px', maxHeight: '50px'  }}
                      />
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
                  {/* Repeat similar blocks for other payment gateways */}
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

export default Payment_gateways;
