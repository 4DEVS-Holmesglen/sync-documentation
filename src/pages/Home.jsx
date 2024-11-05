import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Button, Alert, AlertDialog } from '@holmesdev/sync';
import TuBox from '../components/common/TuBox';


const Home = () => {
  return (
    <Container>
      <TuBox
        title="Alerts & Buttons"
        content="Add some flair to your projects by trying our dazzling yet practical Button & Alert components! Built with user interactivity and accessibility in mind, choose from an array of themes/variant types pertaining to each level of action severity, along with customizable options to tailor and enhance the functionality of each component."
        link="Get Started"
        linkTo="https://github.com/4DEVS-Holmesglen/4devs-alert-btn-component"
      />
      
      {/* Alert & TuBox Section */}
      <Row className="mb-5 mt-5 justify-content-center">
        <h2 className='text-center text-white py-5'>AlertBoxes</h2>
        <Col xs={12} md={5}>
        <Alert
        // title is the title text for the alert box
         title="Confirm"
         // body is the paragraph or text in the alert
         body="Please confirm the request."
         // status is the variant of the alert box 
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
            // children="Good" we pass children to outside so users can type the text via the Button like this <Button>Sync Button</Button>
             // type is to set the type of button such as submit, button, reset
             type="button"
             // path is allows users to pass external link or internal link for navigation
             path="/home"
             // variant is the variant or color of the Button
             variant="default"
             // hoverColor is the hover color for the Button and allows users to pass Hex code to change the color
             hoverColor="#1e293b"
             >Sync Button</Button>

            <Button
             type="button"
             path="/home"
             variant="primary"
             hoverColor="#172554"
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
             hoverColor="#9f1239"
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
                hoverColor="#9f1239"
                children="Open The alert" 
                buttonVariant="success" 
                />

             <AlertDialog 
                title="Sync AlertDialog" 
                body="Hold up! Looks like a couple fields need a bit more love." 
                status="default" 
                btnColor="white" 
                children="Open The alert" 
                buttonVariant="default" 
                />
                <AlertDialog
                // Title of the Dialog 
                title="Sync AlertDialog"
                // Body description for Dialog 
                body="Hold up! Looks like a couple fields need a bit more love."
                // Status is the variant of the AlertDialog 
                status="warning" 
                // hoverColor is a hover for open dialog button
                hoverColor="#9f1239"
                // btnColor is the color of the close button or Icon X for close
                btnColor="white" 
                // children is the text for the open AlertDialog Button
                children="Open The alert" 
                // isOpen is a function to open the Dialog
                // onClose is a function to close the Dialog
                // buttonVariant is a variant of open alert button
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
