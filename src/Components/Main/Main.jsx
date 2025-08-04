import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>SKM</p>
        <img src={assets.user_icon}/>

      </div>
      <div className="main-container">
        <div className="greet">
            <p>
                <span>Hello,</span>
                <p>How Can I Help You?</p>

            </p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful place to see on an upcoming road trip</p>
                <img src={assets.compass_icon}/>
            </div>
        
            <div className="card">
                <p>Brifly Summrize this conpcet: urben planning</p>
                <img src={assets.bulb_icon}/>
            </div>
       
            <div className="card">
                <p>Suggest beautiful place to see on an upcoming road trip</p>
                <img src={assets.code_icon}/>
            </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" name="" placeholder='Enter Prompt Here' id="" />
            <div>
              <img src={assets.gallery_icon}/>
              <img src={assets.mic_icon}/>
              <img src={assets.send_icon}/>
            </div>
          </div>
          <p className="bottom-info">
            Hello I am Shubham Kumar Welcome to my website
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
