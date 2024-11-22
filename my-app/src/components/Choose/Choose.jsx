import React from 'react'

import { TbDeviceDesktopCog } from "react-icons/tb";
import { MdOutlineBackup } from "react-icons/md";
import { SiGooglecloudstorage } from "react-icons/si";
import { GiCyberEye } from "react-icons/gi";

import "./Choose.css"

export default function Choose() {
  return (
    <>
        <div className="choose-main">
            <div className="choose-text">
                <h5 className="primary-heading">WHY CHOOSE US</h5>
                <h2 className="secondary-heading">Custom IT Solutions for Your Business</h2>
                <p className="choose-para">Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated. Wanted easily in my called formed suffer. Songs hoped sense as taken ye mirth at. Believe fat how six drawing pursuit minutes far. Same do seen head am part it dear open to Whatever.</p>
            </div>
            <div className="choose-img">
                    <div className="choose-box">
                        <TbDeviceDesktopCog size="50px" className='white-icon'/>
                        <p className="choose-box-heading">IT Consultancy</p>
                        <p className="choose-box-para">Astonished set expression solicitude way admiration</p>
                    </div>
                    <div className="choose-hover-box" style={{position:"relative" , bottom:"4rem"}}>
                        <SiGooglecloudstorage size="50px" className='blue-icon' />
                        <p className="choose-hover-box-heading">Cloud Computing</p>
                        <p className="choose-hover-box-para">Astonished set expression solicitude way admiration</p>
                    </div>
                    <div className="choose-hover-box">
                        <GiCyberEye size="50px" className='blue-icon' />
                        <p className="choose-hover-box-heading">Cyber Security</p>
                        <p className="choose-hover-box-para">Astonished set expression solicitude way admiration</p>
                    </div>
                    <div className="choose-box" style={{position:"relative" , bottom:"4rem"}}>
                        <MdOutlineBackup size="50px" className='white-icon'/>
                        <p className="choose-box-heading">Backup & Recovery</p>
                        <p className="choose-box-para">Astonished set expression solicitude way admiration</p>
                    </div>
            </div>
        </div>
    </>
  )
}
