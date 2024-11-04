import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Button, Alert, AlertDialog } from '@holmesdev/sync';
import TuBox from '../components/common/TuBox';
import * as styles from './Home.css';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <TuBox
        title="Alerts & Buttons"
        content="Add some flair to your projects by trying our dazzling yet practical Button & Alert Box components! Built with user interactivity and accessibility in mind."
        link="Get Started"
        linkTo="https://github.com/4DEVS-Holmesglen/4devs-alert-btn-component"
      />
      
      {/* Alert & TuBox Section */}
      <Row className="mb-5 mt-5 justify-content-center">
        <h2 className='text-center text-white py-5'>AlertBoxes</h2>
        <Col xs={12} md={5}>
        <Alert
         title="Confirm"
         body="Please confirm the request."
         status="defaultDark" 
         />
         <Alert
         title="Confirm"
         body="Please confirm the request."
         status="primaryDark" 
         />
         <Alert
         title="Confirm"
         body="Please confirm the request."
         status="successDark" 
         />
         <Alert
         title="Confirm"
         body="Please confirm the request."
         status="warningDark" 
         />

        </Col>
      </Row>

      {/* Button Section using TuBox with Card */}
      <Row className="mb-5 mt-5 justify-content-center">
        <h2 className='text-center text-white py-5'>Button Collections</h2>
        <Col xs={12} md={6} className="text-center">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">

            <Button
             //children
             type="button"
             path="/home"
             variant="default"
             hoverColor="green"
             >Sync Button</Button>

            <Button
             type="button"
             path="/home"
             variant="primary"
             hoverColor="green"
             >Sync Button</Button>

            <Button
             type="button"
             path="/home"
             variant="success"
             hoverColor="green"
             >Sync Button</Button>

            <Button
             type="button"
             path="/home"
             variant="warning"
             hoverColor="green"
             >Sync Button </Button>

            </Col>
          </Row>
        </Col>
      </Row>

      {/* AlertDialog Section */}
      <Row className="mb-5 mt-5 justify-content-center">
        <h2 className='text-center text-white py-5'>Alert Dialog Collections</h2>
        <Col xs={12} md={6}>
          <Row className="justify-content-center">
            <Col xs={12}>
                <div className="mb-2">
             <AlertDialog 
                title="Sync AlertDialog" 
                body="Hold up! Looks like a couple fields need a bit more love." 
                status="successDark" 
                btnColor="white" 
                children="Open The alert" 
                isOpen={isOpen}
                onClose={closeDialog}
                buttonVariant="success" 
                />

             <AlertDialog 
                title="Sync AlertDialog" 
                body="Hold up! Looks like a couple fields need a bit more love." 
                status="default" 
                btnColor="white" 
                children="Open The alert" 
                isOpen={isOpen}
                onClose={closeDialog}
                buttonVariant="default" 
                />
                <AlertDialog 
                title="Sync AlertDialog" 
                body="Hold up! Looks like a couple fields need a bit more love." 
                status="warning" 
                btnColor="white" 
                children="Open The alert" 
                isOpen={isOpen}
                onClose={closeDialog}
                buttonVariant="warning" 
                />  
                </div>  
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
