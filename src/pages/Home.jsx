import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Button as SyncButton, Alert } from '@holmesdev/sync';
import { AlertDialog } from 'sync-compo-test-round2';
import TuBox from '../components/common/TuBox';
import * as styles from './Home.css';

// Props for the alerts
const alertProps = { title: "Primary Alert", body: "This is a primary alert.", type: "successDark" };

// Button variants
const buttonVariants = [
  { text: "Default Button", variant: "default" },
  { text: "Primary Button", variant: "primary" },
  { text: "Success Button", variant: "success" },
  { text: "Warning Button", variant: "warning" },
];

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
        <Col xs={12} md={6}>
          <Alert title="Sync Alert" body="This is the default alert from Sync!" type="defaultDark" />
          <Alert title="Sync Alert" body="This is the primary alert from Sync!" type="primaryDark" />
          <Alert title="Sync Alert" body="This is the success alert from Sync!" type="successDark" />
          <Alert title="Sync Alert" body="This is the warning alert from Sync!" type="warningDark" />
        </Col>
      </Row>

      {/* Button Section using TuBox with Card */}
      <Row className="mb-5 mt-5 justify-content-center">
        <h2 className='text-center text-white py-5'>Button Collections</h2>
        <Col xs={12} md={6} className="text-center">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              {buttonVariants.map((btnProps, index) => (
                <div key={index} className="mb-2">
                  <SyncButton text={btnProps.text} variant={btnProps.variant} />
                </div>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>

      <AlertDialog 
        title="Sync AlertDialog" 
        body="This is the custom alert from Sync!" 
        status="successDark" 
        btnColor="white" 
        //alertType="success"
        children="Open The alert" 
        isOpen={isOpen} // Pass the state variable here
        onClose={closeDialog}
        buttonVariant="success"
      />
    </Container>
  );
};

export default Home;
