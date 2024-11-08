import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import { Button, Alert, AlertDialog } from '@holmesdev/sync';


import TuBox from '../components/common/TuBox';
import * as styles from './Home.css';

const Home = () => {
  return (
    <Container>
    <div className={styles.container}>
      {/* TuBox Component Section */}
      <TuBox
        title="Sync Ui Component"
        content="Add some flair to your projects by trying our dazzling yet practical Button & Alert components! Built with user interactivity and accessibility in mind, choose from an array of themes/variant types pertaining to each level of action severity, along with customizable options to tailor and enhance the functionality of each component."
        link="Get Started"
        linkTo="https://github.com/4DEVS-Holmesglen/4DEVS-SYNC?tab=readme-ov-file#installation"
      />
      

      {/* Alert Component Section */}
      <div className={styles.componentSection}>
        <h2 className={styles.sectionHeader}>AlertBox Collections</h2>
        <Row className={styles.alertContainer}>
          <Col xs={12} md={4}>
            
            <Alert 
            title="Sync Alert" 
            body="This is an Alert from Sync. Feel free to try it out!" status="defaultDark" />

            <Alert 
            title="Sync Alert" 
            body="This is an Alert from Sync. Feel free to try it out!" status="primaryDark" />

            <Alert 
            title="Sync Alert" 
            body="This is an Alert from Sync. Feel free to try it out!" status="successDark" />

            <Alert 
            title="Sync Alert" 
            body="This is an Alert from Sync. Feel free to try it out!" status="warningDark" />

          </Col>
        </Row>
      </div>

      {/* Alert Component Props Table */}
      <div className={styles.componentSection}>
        <h2 className={styles.sectionHeader}>Alert Component Props</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Prop</th>
                <th className={styles.tableHeader}>Type</th>
                <th className={styles.tableHeader}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>title</td>
                <td className={styles.tableCell}>string</td>
                <td className={styles.tableCell}>Title text for the Alert box.</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>body</td>
                <td className={styles.tableCell}>string</td>
                <td className={styles.tableCell}>Body text for the Alert box.</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>status</td>
                <td className={styles.tableCell}>string</td>
                <td className={styles.tableCell}>Variant of the Alert box (e.g., defaultDark, primaryDark, successDark, warningDark).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Button Component Section */}
      <div className={styles.componentSection}>
        <h2 className={styles.sectionHeader}>Button Collections</h2>
        <div className={styles.buttonContainer}>

          <Button 
          type="button" 
          path="https://github.com/4DEVS-Holmesglen/4DEVS-SYNC?tab=readme-ov-file#button-component" variant="default" 
          hoverColor="#1e293b">
            Sync Button
          </Button>

          <Button 
          type="button" 
          path="https://github.com/4DEVS-Holmesglen/4DEVS-SYNC?tab=readme-ov-file#button-component" variant="primary" 
          hoverColor="#172554">
            Sync Button
          </Button>

          <Button 
          type="button" 
          path="https://github.com/4DEVS-Holmesglen/4DEVS-SYNC?tab=readme-ov-file#button-component" variant="success" 
          hoverColor="green">
            Sync Button
          </Button>

          <Button 
          type="button" 
          path="https://github.com/4DEVS-Holmesglen/4DEVS-SYNC?tab=readme-ov-file#button-component" variant="warning" 
          hoverColor="#7f1d1d">
            Sync Button
          </Button>

        </div>
      </div>

      {/* Button Component Props Table */}
      <div className={styles.componentSection}>
        <h2 className={styles.sectionHeader}>Button Component Props</h2>
      
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Prop</th>
                <th className={styles.tableHeader}>Type</th>
                <th className={styles.tableHeader}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>type</td>
                <td className={styles.tableCell}>string</td>
                <td className={styles.tableCell}>Type of the button (e.g., button, submit, reset).</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>path</td>
                <td className={styles.tableCell}>string</td>
                <td className={styles.tableCell}>URL to navigate when the button is clicked.</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>variant</td>
                <td className={styles.tableCell}>string</td>
                <td className={styles.tableCell}>Variant/color of the button (e.g., default, primary, success, warning).</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>hoverColor</td>
                <td className={styles.tableCell}>string</td>
                <td className={styles.tableCell}>Hex code for the hover color of the button.</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>children</td>
                <td className={styles.tableCell}>String</td>
                <td className={styles.tableCell}>Text or elements to display inside the button.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* AlertDialog Component Section */}
      <div className={styles.componentSection}>
        <h2 className={styles.sectionHeader}>AlertDialog Collections</h2>
        <div className={styles.alertDialogContainer}>

          <AlertDialog 
            title="Sync AlertDialog" 
            body="Hold up! Looks like a couple fields need a bit more love."
            status="successDark" 
            btnColor="white"
            hoverColor="green"
            children="Open The alert"
            buttonVariant="success" 
          />

          <AlertDialog 
            title="Sync AlertDialog"
            body="Hold up! Looks like a couple fields need a bit more love."
            status="defaultDark"
            btnColor="white"
            hoverColor="#1e293b"
            children="Open The alert"
            buttonVariant="default"
          />
          
          <AlertDialog 
            title="Sync AlertDialog"
            body="Hold up! Looks like a couple fields need a bit more love."
            status="warningDark"
            btnColor="white"
            hoverColor="red"
            children="Open The alert"
            buttonVariant="warning"
          />
          <AlertDialog 
            title="Sync AlertDialog"
            body="Hold up! Looks like a couple fields need a bit more love."
            status="primaryDark"
            btnColor="white"
            hoverColor="blue"
            children="Open The alert"
            buttonVariant="primary"
          />
        </div>
      </div>

      {/* AlertDialog Component Props Table */}
      <div className={styles.componentSection}>
        <h2 className={styles.sectionHeader}>AlertDialog Component Props</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Prop</th>
                <th className={styles.tableHeader}>Type</th>
                <th className={styles.tableHeader}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>title</td>
                <td className={styles.tableCell}>string</td>
                <td className={styles.tableCell}>Title of the Dialog.</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>body</td>
                <td className={styles.tableCell}>string</td>
                <td className={styles.tableCell}>Body description for Dialog.</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>status</td>
                <td className={styles.tableCell}>string</td>
                <td className={styles.tableCell}>Status of the Dialog (e.g., successDark, defaultDark).</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>hoverColor</td>
                <td className={styles.tableCell}>string</td>
                <td className={styles.tableCell}>Hex code for hover effect on the button.</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>children</td>
                <td className={styles.tableCell}>ReactNode</td>
                <td className={styles.tableCell}>Text or elements to display inside the button.</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>buttonVariant</td>
                <td className={styles.tableCell}>string</td>
                <td className={styles.tableCell}>Variant of the button (e.g., default, success, warning).</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>btnColor</td>
                <td className={styles.tableCell}>string</td>
                <td className={styles.tableCell}>Variant of the close button ( X icon ) You can customize the colour by using colours hex code.</td>
              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Home;
