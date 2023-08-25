import'./mailList.css'
import React from 'react'

const MailList = () => {
  return (
   <div className="mail">
     <h1 className="mailTitle">Save Time ,Save Money</h1>
     <span className="mailDesc">Sign up and we'll send the best deal to you</span>
     <div className="mailInputContainer">
        <input type="text" placeholder='your Email' />
        <button>Subscribe</button>
     </div>
   </div>
  )
}

export default MailList
