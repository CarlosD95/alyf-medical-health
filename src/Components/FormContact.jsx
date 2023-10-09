import React from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBSelect, CDBContainer } from 'cdbreact';

const Forms = () => {
  const option = [
    {
      text: 'Feature request',
      value: '1',
    },
    {
      text: 'Report a problem',
      value: '2',
    },
    {
      text: 'Help',
      value: '3',
      icon: 'question-circle',
    },
  ];
  return (
    <CDBContainer>
      <CDBCard style={{ width: '90%', background: '#1a68bc', margin: '10px auto', border: 'none' }}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-3">
            <p className="h4" style={{fontFamily: 'Cormorant Garamond', fontSize: '40px'}}> Contact us </p>
          </div>
          <CDBInput placeholder='Please your name' style={{background: '#f3f4f5', marginBottom: '5px' }} material hint="Name" type="text" />
          <CDBInput placeholder='you@gmail.com' style={{background: '#f3f4f5', marginBottom: '5px' }} material hint="E-mail" type="email" />
          <p style={{fontSize: '20px'}} className="text-center mb-1">Subject</p>
          <CDBSelect style={{background: '#f3f4f5', marginBottom: '10px' }} options={option} selected="Feedback" />
          <CDBInput placeholder='Typing your message...' style={{background: '#f3f4f5' }} hint="Message" type="textarea" />
          {/* <div className="d-flex justify-content-center align-items-center mt-4">
            <CDBInput style={{background: '#f3f4f5' }} material type="Checkbox" />
            <p className="m-0">Send me a copy of this message</p>
          </div> */}
          <CDBBtn style={{fontSize: '18px'}} color="warning" className="btn-block my-3 mx-0">
            Send
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};
export default Forms;