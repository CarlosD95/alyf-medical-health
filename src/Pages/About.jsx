import React from 'react';
import Imagen2 from '../Assets/Images/play store banner.png';
import Imagen3 from '../Assets/Images/pexels-polina-zimmerman-3778619.jpg';
import Button from 'react-bootstrap/Button';
import OurServices from '../Components/OurServices';
import './CSS/About.css'

function About() {
  return (
    <div>
      <div className="menu-container-about">
        <div className="img-section-about">
          <img className='img-about' src={Imagen2} />
        </div>
        <div className="text-section-about">
          <h1 className="title">Welcome to alyf</h1>
          <p style={{textAlign: 'justify'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            distinctio, vel earum vitae eveniet dolores enim, nobis odit unde
            deleniti autem amet temporibus! Iste dolorum officiis voluptate et
            pariatur obcaecati quia labore, odio corporis quod accusantium
            minima delectus magnam porro itaque tenetur est eaque quae,
            distinctio necessitatibus dignissimos dolor. Distinctio!
          </p>
        </div>
      </div>
      <div className="menu-container">
        <div className="text-section">
          <h1 className="title">A track record of innovation.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis voluptate! Suscipit doloribus voluptatem accusantium fugit inventore, at architecto eum harum eos illo laudantium officiis ducimus, reprehenderit deleniti amet enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, exercitationem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quis voluptate! Suscipit doloribus voluptatem accusantium fugit inventore, at architecto eum harum eos illo laudantium officiis ducimus, reprehenderit deleniti amet enim.
          </p>
        </div>
        <div className="img-section">
          <img src={Imagen3} />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,160L120,144C240,128,480,96,720,96C960,96,1200,128,1320,144L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <div style={{color: '#000', marginBottom: '20px'}} className="our-story">
        <h3 style={{fontWeight: 'bold', fontFamily: 'Cormorant Garamond', color: '#1a68bc', marginBottom: '40px'}}>Our story</h3>
        <p style={{fontSize: '20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nemo autem perspiciatis quas rem, a distinctio non ullam totam nam.</p>
        <p style={{fontSize: '20px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis assumenda ab repudiandae laudantium eum quis pariatur, sed provident deleniti obcaecati quia libero id illum sunt!</p>
        <p style={{fontSize: '20px', marginBottom: '100px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis assumenda ab repudiandae laudantium eum quis pariatur, sed provident deleniti obcaecati quia libero id illum sunt! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis assumenda ab repudiandae laudantium eum quis pariatur, sed provident deleniti obcaecati quia libero id illum sunt! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis assumenda ab repudiandae laudantium eum quis pariatur, sed provident deleniti obcaecati quia libero id illum sunt!</p>
      </div>
      <svg style={{marginTop: '-150px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,192L48,213.3C96,235,192,277,288,272C384,267,480,213,576,208C672,203,768,245,864,229.3C960,213,1056,139,1152,144C1248,149,1344,235,1392,277.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
  );
}

export default About