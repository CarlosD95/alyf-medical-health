import React from 'react';
import HomeCarousel from '../Components/HomeCarousel';
import Imagen2 from '../Assets/Images/about1.png';
import Imagen3 from '../Assets/Images/imagen.jpg';
import Button from 'react-bootstrap/Button';
import './CSS/Home.css';
import OurServices from '../Components/OurServices';
import OurSpecialist from '../Components/OurSpecialist';

function Home() {
  return (
    <div>
      <HomeCarousel className="carousel" />
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
            href="/contact"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
              fontSize: "18px",
              alignItems: 'center',
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
            href="/contact"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
              fontSize: "18px",
              alignItems: 'center',
            }}
            variant="success"
          >
            Join Today{" "}
            <span class="material-symbols-outlined"> chevron_right </span>
          </Button>{" "}
        </div>
      </div>
      <OurServices />
      <OurSpecialist />
    </div>
  );
}

export default Home