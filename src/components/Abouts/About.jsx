import React, { useState } from 'react'
import name from './ab.json';
import {BsDot} from "react-icons/bs"
import {FcComments} from "react-icons/fc"
import {BsArrowRightCircle} from "react-icons/bs"
import './abouts.css';

const About = () => {
  let[state,setState]= useState({infos:name})
  return (
    <div className='abouts'>
        {state.infos.map((e)=>{
          return(
          <div className='each'>
            <img src={e.photo} alt={e.photo}/>
            <p className='texter'>
              <span className='orange'>Blogs</span>
              <span className='non_orange'><BsDot/></span>
              <span className='orange'>{e.team}</span>
              <span className='non_orange'>{e.date}</span>
              <span className='non_orange'><FcComments/></span>
              <span className='orange'>{e.comm}</span>
            </p>
            <div className='arrow'>
              <div className='arrow_s'>
                <h1>{e.heading}</h1>
                <div></div>
              </div>
              <div className='arrow_r'>
                <div></div>
                <h3>READ MORE <span><BsArrowRightCircle/></span></h3>
              </div>
            </div>
          </div>
        )
        })}
        </div>
  )
}

export default About