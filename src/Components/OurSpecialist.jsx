import React from 'react';
import doc1 from '../Assets/Images/team1.png';
import doc2 from '../Assets/Images/team2.png';
import doc3 from '../Assets/Images/team3.png';
import './CSS/OurSpecialist.css';
import { CDBIcon, CDBContainer } from 'cdbreact';

const OurSpecialist = () => {
  return (
    <div className="specialist">
      <div style={{ textAlign: "center" }} className="title">
        <span style={{ fontSize: "28px", textDecoration: "underline" }}>
          Our Doctors
        </span>
        <h2 style={{ fontSize: "4rem" }}>Our Specialist</h2>
      </div>
      <div className="flex-container-doctor">
        <div className="flex-item-doctor">
          <img src={doc1} />
          <section className="doctor">
            <h2>Mike Stanton</h2>
            <span>Oncology</span>
            <div className="social-media">
              <CDBContainer>
                <CDBIcon style={{margin: '5px', padding: '10px', cursor: 'pointer'}} fab border icon="facebook" />
                <CDBIcon style={{margin: '5px', padding: '10px', cursor: 'pointer'}} fab border icon="instagram" />
                <CDBIcon style={{margin: '5px', padding: '10px', cursor: 'pointer'}} fab border icon="google" />
              </CDBContainer>
            </div>
          </section>
        </div>
        <div className="flex-item-doctor">
          <img src={doc2} />
          <section className="doctor">
            <h2>Angelo Smith</h2>
            <span>Oncology</span>
            <div className="social-media">
              <CDBContainer>
                <CDBIcon style={{margin: '5px', padding: '10px', cursor: 'pointer'}} fab border icon="facebook" />
                <CDBIcon style={{margin: '5px', padding: '10px', cursor: 'pointer'}} fab border icon="instagram" />
                <CDBIcon style={{margin: '5px', padding: '10px', cursor: 'pointer'}} fab border icon="google" />
              </CDBContainer>
            </div>
          </section>
        </div>
        <div className="flex-item-doctor">
          <img src={doc3} />
          <section className="doctor">
            <h2>Maria James</h2>
            <span>Cardiology</span>
            <div className="social-media">
              <CDBContainer>
                <CDBIcon style={{margin: '5px', padding: '10px', cursor:'pointer'}} fab border icon="facebook" />
                <CDBIcon style={{margin: '5px', padding: '10px', cursor: 'pointer'}} fab border icon="instagram" />
                <CDBIcon style={{margin: '5px', padding: '10px', cursor: 'pointer'}} fab border icon="google" />
              </CDBContainer>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default OurSpecialist