import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Assets/Images/image.png';
import img2 from '../Assets/Images/image-2.png';
import img3 from '../Assets/Images/image-1.png';

function HomeCarousel() {
  return (
    <Carousel touch={true} indicators={false} data-bs-theme="dark">
      <Carousel.Item>
        <img
          style={{width: '100%', margin: '0 auto', padding: '200px', borderRadius: '30px'}}
          className="d-block"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{width: '100%' , margin: '0 auto', padding: '200px', borderRadius: '30px'}}
          className="d-block"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{width: '100%' , margin: '0 auto', padding: '200px', borderRadius: '30px'}}
          className="d-block"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;