import React, { useState } from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'
const Sidebar = () => {
    const [extended,setExtended]=useState(false)
  return (
    <div className='sidebar'>
      <div className="top">
        <img src={assets.menu_icon} className='menu' onClick={()=>{
            setExtended(!extended)
        }}/>
        <div className="new-chat">
            <img src={assets.plus_icon}/>
           {extended?<p >New Chat</p>:null} 

        </div>

       {extended?
        <div className="recent">
            <p className="recent-title">
                Recent
            </p>
            <div className="recent-entity">
                <img src={assets.message_icon}/>
                <p>What is React...</p>
            </div>
    
      </div>:null}
      </div>
      <div className="bootom">
                <div className="bottom-item recent-entity">
                    <img src={assets.question_icon}/>
                    {extended?<p>Help</p>:null}

                </div>
                 <div className="bottom-item recent-entity">
                    <img src={assets.history_icon}/>
                    {extended?<p>Activity</p>:null}
                    
                </div>
                 <div className="bottom-item recent-entity">
                    <img src={assets.setting_icon}/>
                    {extended?<p>Seatting</p>:null}
                </div>
      </div>
    </div>
  )
}

export default Sidebar
