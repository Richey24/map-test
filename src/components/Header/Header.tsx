import React from 'react'
import "./Header.css"
import backIcon from "../../assets/back.svg"
import searchIcon from "../../assets/search.svg"
import bellIcon from "../../assets/bell.svg"
import messageIcon from "../../assets/message.svg"
import avatarIcon from "../../assets/avatar.png"
import downIcon from "../../assets/down.svg"

const Header: React.FC = () => {
  return (
    <div className='theHeader'>
        <p onClick={()=> window.history.back()}><img src={backIcon} alt="" /> Back</p>
        <div className='searchBox'>
            <img src={searchIcon} alt="" />
            <input placeholder='Search here...' type="text" />
        </div>
        <div className='iconBox'>
            <img src={bellIcon} alt="" />
            <img src={messageIcon} alt="" />
            <img className='avatar' src={avatarIcon} alt="" />
            <img src={downIcon} alt="" />
        </div>
    </div>
  )
}

export default Header