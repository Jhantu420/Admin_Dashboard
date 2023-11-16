import React from 'react';
import './Home.css';
const About = () => {
  return (
    <div className='background'>
      <h1>About us</h1>
      <hr style={{color:" 2px solid black"}}/>
      <div className='about'>
      <h5 className='about-h'><b>Greetings people!!!</b> our team welcomes you to Sonic, a platform that you can use to find your desired audio data or you can contribute to our database. Look up to the specifications search as an input in the search bar and get your desired audio output .</h5>
      <h5 className='about-h'>If you want to contribute to our database kindly choose a .zip or .wav file as no other extensions will be accepted.
We appreciate your time hope that we could help you. thank you.</h5>
      </div>
    </div>
  );
};

export default About;