import React from 'react'
import {SlEnvolopeLetter} from "react-icons/sl"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {FaLinkedinIn} from "react-icons/fa"

const Top = () => {
  return (
    <section className='top'>
        <div className='tops'>
        <div className='hello'>
            <SlEnvolopeLetter/>
            <p>hello@testyantraglobal.com</p>
        </div>
        <div className='icon'>
            <AiFillFacebook/>
            <BsTwitter/>
            <AiOutlineInstagram/>
            <FaLinkedinIn/>
        </div>
        </div>
        <div>

        </div>
    </section>  
  )
}

export default Top