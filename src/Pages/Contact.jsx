import React from 'react'
import Forms from '../Components/FormContact'
import img from '../Assets/Images/3.png';
import './CSS/Contact.css';

function Contact() {
  return (
    <div className="contact-us">
      <div className="text">
        <img className='contact-image' src={img} alt="contact" />
        <h2 style={{fontSize: '2rem', fontFamily: 'Cormorant Garamond', marginBottom: '30px'}}>The healthcare revolution includes all of us</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde placeat,
          perspiciatis vitae recusandae, ducimus consequuntur doloremque obcaecati
          maxime, mollitia cumque quas quasi harum vero enim odio consectetur
          rerum quisquam perferendis?
        </p>
      </div>
      <Forms />
    </div>
  );
}

export default Contact