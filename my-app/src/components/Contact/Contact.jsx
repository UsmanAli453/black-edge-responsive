import React, { useState } from 'react'
import "./Contact.css"

import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";


export default function Contact() {
    const [tab , setTab] = useState(true)
  return (
    <>
        <div className="contact-main">
            <div className="contact-left">
                <div className="heading-div">
                    <h2 className="contact-heading">Need Help?</h2>
                    <p className="contact-para">Reach out to the world’s most reliable IT services.</p>
                </div>
                <div className="input-div">
                    <input type="text" className="name" placeholder='Name'/>
                    <input type="text" className="email" placeholder='Email'/>
                    <input type="text" className="phone" placeholder='Phone'/>
                    <textarea className='text-area ' placeholder='Please describe what you need.'/>
                <button className="cantact-btn">Get a free consultation</button>
                </div>
            </div>
            <div className="contact-right">
                <div className="top">
                    <h2  className={!tab?"top-heading" : "active"}   onClick={()=>{setTab(!tab ? true : true)}}>Address</h2>
                    <h2  className={tab?"top-heading" : "active"}  onClick={()=>{setTab(tab ? false : false)}}>Google Maps</h2>
                </div>
                { tab ? 
                <div className='address'>
                    <div className="address-location">
                        <div className="address-icon-div">
                            <IoLocationSharp className='address-icon'/>
                        </div>
                        <div className="address-text-div">
                                <p className="first">Our Location</p>
                                <p className='second'>Warwick Street, Punchbowl, Sydney, NSW, Australia</p>
                        </div>
                    </div>
                    <div className="address-email">
                        <div className="address-icon-div">
                            <HiOutlineMailOpen className='address-icon'/>
                        </div>
                        <div className="address-text-div">
                                <p className="first">Send Us Mail</p>
                                <p className='second'>blackedgetechnology@gmail.com</p>
                        </div>
                    </div>
                    <div className="address-call">
                        <div className="address-icon-div">
                            <BsTelephoneFill className='address-icon'/>
                        </div>
                        <div className="address-text-div">
                                <p className="first">Call Us</p>
                                <p className='second'>0416922045</p>
                        </div>
                    </div>
                </div> 
                
                
                
                : <div className='map-div'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.499687769983!2d151.04148337481365!3d-33.92827402214023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bc002e160cc9%3A0xb2b3f0f9288d19f9!2sWarwick%20St%2C%20Punchbowl%20NSW%202196%2C%20Australia!5e0!3m2!1sen!2s!4v1732138589709!5m2!1sen!2s" width="500" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='map'></iframe>
                    </div>}
            </div>
        </div>
    </>
  )
}
