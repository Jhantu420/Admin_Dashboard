import React from 'react'
import img1 from './sonic(1).png'
import './Home.css'

export default function Home() {
  const user=()=>{
    window.location.href = '/user';
  }
  const contributer=()=>{
    window.location.href = '/contributer';
  }
  return (
    <>
    <div className='div0'>
    <div className='div1'>
     <div>
        <img src={img1} alt='poster' id='img1'/>
        <h3>
            SONIC helps you to find your desired audio. Explore numerous audio data from all over the world. You can even contribute by your own. Choose your role and start exploring.
        </h3>
     </div>
     </div>
     <div className='div2'>
    <div>
        <h1 id='label1'> Choose any role from below according to your purpose  </h1>
        <p>[either you want to add files to our database or find something that you needed]</p>
        <button type="button" className='button' onClick={user}>I want to find something</button>
        <button type="button" className='button1' onClick={contributer}>I am here to contribute</button>
    </div>
     </div>
    </div>
    </>
  )
}
