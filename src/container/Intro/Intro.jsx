import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import {BsFillPlayFill, BsFillPauseFill} from "react-icons/bs"
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false)
  const vidRef = useRef()

  const handlevideo =() => {
    setplayVideo((prevplayVideo)=>
      !prevplayVideo

      )
      if(playVideo){
        vidRef.current.pause()
      }else{
        vidRef.current.play()
      }
  }
  return (

  <div className='app__video'>
    <video src={meal} type="video/mp4" controls={false} muted ref={vidRef} loop></video>

    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay_circle flex__center" onClick={handlevideo}>
        {playVideo ? (<BsFillPauseFill color='#fff' fontSize={30}/>) : (<BsFillPlayFill color='#fff' fontSize={30}/>)}
      </div>
    </div>
  </div>
  )
};

export default Intro;
