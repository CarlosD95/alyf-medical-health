import React from 'react';
import './CSS/OurServices.css';

const OurServices = () => {
  return (
    <div style={{marginBottom: '30px'}} className="services">
      <div style={{textAlign: 'center'}} className="title">
        <span style={{ fontSize: "28px", textDecoration: 'underline' }}>Our Departments</span>
        <h2 style={{ fontSize: "4rem" }}>Our Medical Services</h2>
      </div>
      <div className="flex-container">
        <div className="flex-item">
          <span style={{fontSize: '3rem'}} className="material-symbols-outlined">dentistry</span>
          <h4>Dentistry</h4>
        </div>
        <div className="flex-item">
          <span style={{fontSize: '3rem'}} className="material-symbols-outlined">cardiology</span>
          <h4>Cardiology</h4>
        </div>
        <div className="flex-item">
          <span style={{fontSize: '3rem'}} className="material-symbols-outlined">microbiology</span>
          <h4>Blood Screening</h4>
        </div>
        <div className="flex-item">
          <span style={{fontSize: '3rem'}} className="material-symbols-outlined">neurology</span>
          <h4>Neuroanatomy</h4>
        </div>
        <div className="flex-item">
          <span style={{fontSize: '3rem'}} className="material-symbols-outlined">oncology</span>
          <h4>Oncology</h4>
        </div>
      </div>
    </div>
  );
}

export default OurServices