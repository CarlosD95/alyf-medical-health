import React from 'react';
import Imagen2 from '../Assets/Images/about1.png';
import Imagen3 from '../Assets/Images/imagen.jpg';
import Button from 'react-bootstrap/Button';
import OurServices from '../Components/OurServices';

function About() {
  return (
    <div>
      <div className="menu-container">
        <div className="text-section">
          <h1 className="title">Welcome to alyf</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            distinctio, vel earum vitae eveniet dolores enim, nobis odit unde
            deleniti autem amet temporibus! Iste dolorum officiis voluptate et
            pariatur obcaecati quia labore, odio corporis quod accusantium
            minima delectus magnam porro itaque tenetur est eaque quae,
            distinctio necessitatibus dignissimos dolor. Distinctio!
          </p>
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: 'center',
              margin: "0 auto",
              fontSize: '18px'
            }}
            variant="success"
          >
            Join Today{" "}
            <span class="material-symbols-outlined"> chevron_right </span>
          </Button>{" "}
        </div>
        <div className="img-section">
          <img src={Imagen2} />
        </div>
      </div>
      <div className="menu-container">
        <div className="img-section">
          <img src={Imagen3} />
        </div>
        <div className="text-section">
          <h1 className="title">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            distinctio, vel earum vitae eveniet dolores enim, nobis odit unde
            deleniti autem amet temporibus! Iste dolorum officiis voluptate et
            pariatur obcaecati quia labore, odio corporis quod accusantium
            minima delectus magnam porro itaque tenetur est eaque quae,
            distinctio necessitatibus dignissimos dolor. Distinctio!
          </p>
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: 'center',
              margin: "0 auto",
              fontSize: '18px'
            }}
            variant="success"
          >
            Join Today{" "}
            <span class="material-symbols-outlined"> chevron_right </span>
          </Button>{" "}
        </div>
      </div>
      <OurServices/>
    </div>
  );
}

export default About