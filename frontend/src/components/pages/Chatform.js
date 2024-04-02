import React from 'react'
import MessageContainer from '../Chatcontainer/MessageContainer';
import Sidebar from "../Chatcontainer/Sidebar";

const Chatform = () => {
  return (
    <div>
       <main className="content">
  <div className="container p-0">
    <h1 className="h3 mb-3">Messages</h1>
    <div className="card">
      <div className="row g-0">

  <Sidebar/>
  <MessageContainer/>



        </div>
        </div>
        </div>
        </main>
      </div>
    
  )
}

export default Chatform
