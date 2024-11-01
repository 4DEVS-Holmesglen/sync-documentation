import React, { Fragment, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Form } from 'react-bootstrap';
import { Button as SyncButton, Alert } from '@holmesdev/sync';
import { AlertDialog } from 'sync-compo-test-round2';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import * as styles from './Uicompo.css';

const customSolarizedLight = {
  ...solarizedlight,
  'pre[class*="language-"]': {
    ...solarizedlight['pre[class*="language-"]'],
    backgroundColor: '#000000', // Set the background to black
  },
  'code[class*="language-"]': {
    ...solarizedlight['code[class*="language-"]'],
    backgroundColor: '#000000', // Set the background to black
  },
};

const Uicompo = () => {
  const [buttonProps, setButtonProps] = useState({
    text: "Sync Branding",
    variant: "default",
    type: "button"
  });

  const [alertProps, setAlertProps] = useState({
    title: "Sync Branding",
    body: "This is AlertBox from Sync Library!",
    type: "defaultDark"
  });

  const [alertDialogProps, setAlertDialogProps] = useState({
    title: "Default Alert",
    body: "This is a default alert message.",
    status: "default",
    buttonVariant: "primary",
    children: "Open The Dialog",
    btnColor: "#ffffff",
    isOpen: false,
  });


  const buttonCode = `
import { Button } from '@holmesdev/sync';

<SyncButton 
  text="${buttonProps.text}" 
  variant="${buttonProps.variant}" 
  type="${buttonProps.type}" 
/>`;

  const alertCode = `
import { Alert } from '@holmesdev/sync';import { Button } from '@holmesdev/sync';

<Alert 
  title="${alertProps.title}" 
  body="${alertProps.body}" 
  type="${alertProps.type}" 
/>`;

  const alertDialogCode = `
import { Button, Alert, AlertDialog } from '@holmesdev/sync';

<AlertDialog 
  title="${alertDialogProps.title}" 
  body="${alertDialogProps.body}" 
  status="${alertDialogProps.status}"
  buttonVariant="${alertDialogProps.buttonVariant}"  
  btnColor="${alertDialogProps.btnColor}" 
  isOpen={${alertDialogProps.isOpen}} 
  onClose={closeDialog} 
/>`;

  return (
    <Fragment>
      <Container className={styles.container}>
        {/* Button Component */}
        <SyncButton {...buttonProps} className="mb-3" />
        <Row className="mb-5">
          <Col xs={12} md={6}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>Button</div>
              <p className={styles.description}>
                Customize our button to adapt in your project!
              </p>
              <SyntaxHighlighter language="jsx" style={customSolarizedLight}>
                {buttonCode}
              </SyntaxHighlighter>
              <ul className={styles.propList}>
                <li><span className={styles.keyword}>Text:</span> <span className={styles.string}>Required string inside the Button</span></li>
                <li><span className={styles.keyword}>Variant:</span> One of <span className={styles.string}>“default”, “primary”, “success”, “warning”</span></li>
                <li><span className={styles.keyword}>Type:</span> One of <span className={styles.string}>“button”, “submit”, “reset”</span></li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="buttonText">
              <Form.Label>Button Text</Form.Label>
              <Form.Control
                type="text"
                value={buttonProps.text}
                onChange={(e) => setButtonProps({ ...buttonProps, text: e.target.value })}
                className={styles.input}
              />
            </Form.Group>
            <Form.Group controlId="buttonVariant">
              <Form.Label>Button Variant</Form.Label>
              <Form.Control
                as="select"
                value={buttonProps.variant}
                onChange={(e) => setButtonProps({ ...buttonProps, variant: e.target.value })}
                className={styles.input}
              >
                <option value="default">Default</option>
                <option value="primary">Primary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="buttonType">
              <Form.Label>Button Type</Form.Label>
              <Form.Control
                as="select"
                value={buttonProps.type}
                onChange={(e) => setButtonProps({ ...buttonProps, type: e.target.value })}
                className={styles.input}
              >
                <option value="button">Button</option>
                <option value="submit">Submit</option>
                <option value="reset">Reset</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Alert Component */}
        <Alert {...alertProps} className="mb-3" />
        <Row className="mb-5">
          <Col xs={12} md={6}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>AlertBox</div>
              <p className={styles.description}>
                Customize our alert box to adapt in your project!
              </p>
              <SyntaxHighlighter language="jsx" style={customSolarizedLight}>
                {alertCode}
              </SyntaxHighlighter>
              <ul className={styles.propList}>
                <li><span className={styles.keyword}>Title:</span> <span className={styles.string}>Required string for the alert title</span></li>
                <li><span className={styles.keyword}>Body:</span> <span className={styles.string}>Required string for the alert body</span></li>
                <li><span className={styles.keyword}>Type:</span> One of <span className={styles.string}>“default”, “primary”, “success”, “warning”, “defaultDark”, “primaryDark”</span></li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="alertTitle">
              <Form.Label>Alert Title</Form.Label>
              <Form.Control
                type="text"
                value={alertProps.title}
                onChange={(e) => setAlertProps({ ...alertProps, title: e.target.value })}
                className={styles.input}
              />
            </Form.Group>
            <Form.Group controlId="alertBody">
              <Form.Label>Alert Body</Form.Label>
              <Form.Control
                type="text"
                value={alertProps.body}
                onChange={(e) => setAlertProps({ ...alertProps, body: e.target.value })}
                className={styles.input}
              />
            </Form.Group>
            <Form.Group controlId="alertType">
              <Form.Label>Alert Type</Form.Label>
              <Form.Control
                as="select"
                value={alertProps.type}
                onChange={(e) => setAlertProps({ ...alertProps, type: e.target.value })}
                className={styles.input}
              >
                <option value="defaultDark">Default Dark</option>
                <option value="primaryDark">Primary Dark</option>
                <option value="successDark">Success Dark</option>
                <option value="warningDark">Warning Dark</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Alert Dialog Component */}
        <AlertDialog 
                {...alertDialogProps} 
                onClose={() => setAlertDialogProps({ ...alertDialogProps, isOpen: false })} 
              />
        <Row className="mb-5">
          <Col xs={12} md={6}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>Alert Dialog</div>
              <p className={styles.description}>
                Here are props that we provide for you to use in Alert Dialog. Let's try it out!
              </p>
              <SyntaxHighlighter language="jsx" style={customSolarizedLight}>
                {alertDialogCode}
              </SyntaxHighlighter>
              <ul className={styles.propList}>
                <li><span className={styles.keyword}>Title:</span> <span className={styles.string}>Required string for the dialog title</span></li>
                <li><span className={styles.keyword}>Body:</span> <span className={styles.string}>Required string for the dialog body</span></li>
                <li><span className={styles.keyword}>Status:</span> <span className={styles.string}>Required status type</span></li>
                <li><span className={styles.keyword}>btnColor:</span> <span className={styles.string}>Hex color for the button</span></li>
                <li><span className={styles.keyword}>alertType:</span> <span className={styles.string}>Various theme types</span></li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="alertDialogTitle">
              <Form.Label>Alert Dialog Title</Form.Label>
              <Form.Control
                type="text"
                value={alertDialogProps.title}
                onChange={(e) => setAlertDialogProps({ ...alertDialogProps, title: e.target.value })}
                className={styles.input}
              />
            </Form.Group>
            <Form.Group controlId="alertDialogBody">
              <Form.Label>Alert Dialog Body</Form.Label>
              <Form.Control
                type="text"
                value={alertDialogProps.body}
                onChange={(e) => setAlertDialogProps({ ...alertDialogProps, body: e.target.value })}
                className={styles.input}
              />
            </Form.Group>
            <Form.Group controlId="alertDialogStatus">
              <Form.Label>Alert Dialog Status</Form.Label>
              <Form.Control
                as="select"
                value={alertDialogProps.status}
                onChange={(e) => setAlertDialogProps({ ...alertDialogProps, status: e.target.value })}
                className={styles.input}
              >
                <option value="default">Default</option>
                <option value="primary">Primary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="defaultDark">Default Dark</option>
                <option value="primaryDark">Primary Dark</option>
                <option value="successDark">Success Dark</option>
                <option value="warningDark">Warning Dark</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="alertDialogBtnColor">
              <Form.Label>Close Button Icon Color (Hex)</Form.Label>
              <Form.Control
                type="color"
                value={alertDialogProps.btnColor}
                onChange={(e) => setAlertDialogProps({ ...alertDialogProps, btnColor: e.target.value })}
                className={styles.input}
              />
            </Form.Group>
            
            <Form.Group controlId="alertDialogButtonVariant">
              <Form.Label>Button Variant</Form.Label>
              <Form.Control
                as="select"
                value={alertDialogProps.buttonVariant}
                onChange={(e) => setAlertDialogProps({ ...alertDialogProps, buttonVariant: e.target.value })}
                className={styles.input}
              >
                <option value="default">Default</option>
                <option value="primary">Primary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="alertDialogChildren">
              <Form.Label>Alert Dialog Children</Form.Label>
              <Form.Control
                type="text"
                value={alertDialogProps.children}
                onChange={(e) => setAlertDialogProps({ ...alertDialogProps, children: e.target.value })}
                className={styles.input}
              />
            </Form.Group>
           { /* <Form.Group controlId="alertDialogOpenState">
              <Form.Check
                type="checkbox"
                label="Is Open"
                checked={alertDialogProps.isOpen}
                onChange={(e) => setAlertDialogProps({ ...alertDialogProps, isOpen: e.target.checked })}
              />
  </Form.Group> */}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Uicompo;
