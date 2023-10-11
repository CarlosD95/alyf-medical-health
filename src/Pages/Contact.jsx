import React from 'react'
import Forms from '../Components/FormContact'
import img from '../Assets/Images/3.png';
import './CSS/Contact.css';

function Contact() {
  return (
    <div className="contact-us">
      <div className="text">
        <h2 style={{fontSize: '2.5rem', fontFamily: 'Cormorant Garamond', marginBottom: '30px', textAlign: 'center'}}>Empower yourself by joining alyf</h2>
        <img className='contact-image' src={img} alt="contact" />
      </div>
      <Forms />
    </div>
  );
}

export default Contact