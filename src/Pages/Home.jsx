import React from 'react';
import Imagen2 from '../Assets/Images/1.png';
import Imagen3 from '../Assets/Images/2.png';
import Imagen4 from '../Assets/Images/3.png';
import Button from 'react-bootstrap/Button';
import './CSS/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="menu-container-principal">
        <div className="text-section-principal">
          <h2 className="title">Healthcare with you at the center.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            quas accusantium doloribus ex, quisquam cum.
          </p>
          <Button
            href="/contact"
            style={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "20px",
              margin: "0 auto",
              fontSize: "18px",
              alignItems: "center",
            }}
            variant="success"
          >
            Join Today{" "}
            <span class="material-symbols-outlined"> chevron_right </span>
          </Button>{" "}
        </div>
      </div>
      <div className="menu-container">
        <div className="text-section">
          <h1 className="title">Welcome to alyf</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis
            voluptate! Suscipit doloribus voluptatem accusantium fugit
            inventore, at architecto eum harum eos illo laudantium officiis
            ducimus, reprehenderit deleniti amet enim.
          </p>
          <Button
            href="/contact"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
              fontSize: "18px",
              alignItems: "center",
              borderRadius: "20px",
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
          <h1 className="title">Connect with our team.</h1>
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
              alignItems: "center",
              borderRadius: "20px",
            }}
            variant="success"
          >
            Join Today{" "}
            <span class="material-symbols-outlined"> chevron_right </span>
          </Button>{" "}
        </div>
      </div>
      <div className="menu-container">
        <div className="text-section">
          <h1 className="title">Receive comprehensive care.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis
            voluptate! Suscipit doloribus voluptatem accusantium fugit
            inventore, at architecto eum harum eos illo laudantium officiis
            ducimus, reprehenderit deleniti amet enim.
          </p>
          <Button
            href="/contact"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
              fontSize: "18px",
              alignItems: "center",
              borderRadius: "20px",
            }}
            variant="success"
          >
            Join Today{" "}
            <span class="material-symbols-outlined"> chevron_right </span>
          </Button>{" "}
        </div>
        <div className="img-section">
          <img src={Imagen4} />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,160L120,144C240,128,480,96,720,96C960,96,1200,128,1320,144L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div className="menu-container-white">
        <div className="img-section">
          <img src={Imagen2} />
        </div>
        <div className="text-section">
          <h1 className="title">Contact to alyf</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis
            voluptate! Suscipit doloribus voluptatem accusantium fugit
            inventore, at architecto eum harum eos illo laudantium officiis
            ducimus, reprehenderit deleniti amet enim.
          </p>
          <Button
            href="/contact"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
              fontSize: "18px",
              alignItems: "center",
              borderRadius: "20px",
            }}
            variant="success"
          >
            Join Today{" "}
            <span class="material-symbols-outlined"> chevron_right </span>
          </Button>{" "}
        </div>
      </div>
      <svg style={{marginTop: '-2px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,192L48,213.3C96,235,192,277,288,272C384,267,480,213,576,208C672,203,768,245,864,229.3C960,213,1056,139,1152,144C1248,149,1344,235,1392,277.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home