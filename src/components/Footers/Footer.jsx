import React from 'react'
import logo from "../../images/ty_global_1-1-160x160.png"
import './footer.css';
import {BiLogoFacebook} from "react-icons/bi"
import {BsTwitter} from "react-icons/bs"
import {BiLogoLinkedin} from "react-icons/bi"
import {FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='foot'>
        <div className="up">
            <div className='news'>
                <h1>Subscribe to our Newsletter</h1>
            </div>
            <div className='sub'>
                <input type="email" name="" id="" placeholder='Your email'/>
                <button>Subscribe</button>
            </div>
        </div>
        <div className="bottom">
            <div>
                <img src={logo} alt={logo} />
            </div>
            <div>
                <div>
                    <h4 className='f_heading'>Home</h4>
                    <ul className='options'>
                        <li>About Us</li>
                        <li>Work With Us</li>
                        <li>Contact</li>
                        <li>Case Studies</li>
                    </ul>
                </div>
                <div>
                <h4 className='f_heading'>Services</h4>
                    <ul className='options'>
                        <li>Software Development</li>
                        <li>Elevate – IT training services</li>
                        <li>IT consulting</li>
                    </ul>
                </div>
            </div>
            <div>
            <h4 className='f_heading'>Industries</h4>
                    <ul className='options'>
                        <li>Banking & Finance</li>
                        <li>Insurance</li>
                        <li>Healthcare</li>
                        <li>Retail & e-commerce</li>
                        <li>Technology and Communications</li>
                        <li>Education</li>
                        <li>Travel</li>
                        <li>Media and Entertainment</li>
                    </ul>
            </div>
            <div>
                <h4 className='f_heading'>Connect</h4>
                <div className='s_logo'>
                    <div className='s_logospace'>
                        <BiLogoFacebook/>
                    </div>
                    <div className='s_logospace'>
                        <BiLogoLinkedin/>
                    </div>
                    <div className='s_logospace'>
                        <BsTwitter/>
                    </div>
                    <div className='s_logospace'>
                        <FaInstagram/>
                    </div>
                </div>
                <div>
                    <p>Ph: +1 888 980 7010</p>
                </div>
                <div>
                    <p>hello@testyantraglobal.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer