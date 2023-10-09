import React from 'react';
import { CDBBtn, CDBIcon, CDBBox, CDBInput} from 'cdbreact';
import './CSS/Footer.css';

export default function Footer() {
  return (
    <>
      <div style={{backgroundColor: '#212529', color: '#bdbdbd' }} className="shadow footer">
        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a style={{textDecoration:'none', color: '#bdbdbd'}} href="/" className="d-flex align-items-center p-0">
                <span style={{color: '#FFF', fontFamily: 'Cormorant Garamond', fontSize: '30px'}}  className="ms-3 h5 font-weight-bold">alyf</span>
              </a>
              <p className="my-3" style={{ width: '250px', textAlign: 'justify' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum deleniti iste possimus incidunt reiciendis velit, veniam exercitationem minima quaerat odio.
              </p>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                About
              </p>
              <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '10px', }}>
                <a style={{textDecoration:'none'}} href="/about">About Us</a>
                <a style={{textDecoration:'none'}} href="/contact">Contact</a>
                <a style={{textDecoration:'none'}} href="/">FAQ</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600', fontSize: '24px' }}>
              +564 7885 3222
              </p>
              <CDBBox display="flex" flex="column" style={{ padding: '0' }}>
                <span style={{fontSize: '20px'}}>youralyf@gmail.com</span>
                <div className='py-2 d-flex'>
                  <CDBInput type="email" placeholder="Your E-mail" />
                  <CDBBtn color="success"> Send</CDBBtn>
                </div>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox
            display="flex"
            justifyContent="center"
            style={{ width: '100%' }}
            className="mx-auto mt-4"
          >
            <CDBBtn flat color="primary" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="primary" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="secondary" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
          <small className="text-center mt-5">&copy; alyf, 2023. All rights reserved.</small>
        </CDBBox>
      </div>
    </>
  );
};