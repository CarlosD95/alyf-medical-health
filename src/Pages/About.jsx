import React from 'react';
import Imagen2 from '../Assets/Images/play store banner.png';
import Imagen3 from '../Assets/Images/pexels-polina-zimmerman-3778619.jpg';
import './CSS/About.css';
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <div>
      <div className="menu-container">
        <div className="text-section">
        <h1 className="title">About Us</h1>
          <p style={{ textAlign: "justify" ,fontSize: '20px' }}>
            <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>Alyf </span> is personalizing technology driven solutions to revolutionize
            the delivery of cardiac care.
          </p>
          <p style={{ textAlign: "justify" ,fontSize: '20px' }}>
          <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>Alyf: </span> One (Arabic alif) <br /> <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>Alyf: </span> Infinite (Hebrew aleph)
          </p>
          <p style={{ textAlign: "justify" ,fontSize: '20px', fontStyle: "italic" }}>
            To save one life is to save the world.
          </p>
        </div>
        <div className="img-section">
          <img className='about-image' alt="aboutUs" src={Imagen2} />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,160L120,144C240,128,480,96,720,96C960,96,1200,128,1320,144L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div
        style={{ color: "#000", marginBottom: "20px" }}
        className="our-story"
      >
        <h3
          className='title-story'
          style={{
            fontWeight: "bold",
            fontFamily: "Cormorant Garamond",
            color: "#1a68bc",
            margin: "20px auto",
          }}
        >
          Our credo:{" "}
        </h3>
        <p
          style={{
            margin: "0 auto",
            width: "auto",
            maxWidth: "1200px",
            marginBottom: '30px'
          }}
        >
          We are focused on unlocking the power of your physiology to drive your
          care. We believe each person is unique and deserves optimized personal
          care.
        </p>
        <p
          style={{
            margin: "0 auto",
            width: "auto",
            maxWidth: "1200px",
            marginBottom: '30px'
          }}
        >
          We want to enable you to be a partner with your provider in
          better care with improved outcomes for all..
        </p>
        <p>Empower yourself by joining alyf.</p>
        <Button
            href="/contact"
            style={{
              display: "flex",
              justifyContent: 'flex-start',
              alignItems: 'center',
              borderRadius: "20px",
              margin: "20px auto",
              fontSize: "18px",
            }}
            variant="success"
          >
            Request Access{" "}
            <span class="material-symbols-outlined"> chevron_right </span>
          </Button>{" "}
      </div>
      <svg
        style={{ marginTop: "-60px", marginBottom: "40px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,192L48,213.3C96,235,192,277,288,272C384,267,480,213,576,208C672,203,768,245,864,229.3C960,213,1056,139,1152,144C1248,149,1344,235,1392,277.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default About