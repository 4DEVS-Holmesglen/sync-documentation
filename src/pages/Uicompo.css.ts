import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css';

export const container = style({
  marginLeft: '150px',
  backgroundColor: 'black', // Dark background for modern look
  color: 'white',
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
});

export const card = style({
  backgroundColor: vars.colors.complementary,
  //width: '600px',
  borderRadius: '20px',
  padding: '15px',
  marginBottom: '20px',
  border: '1px solid grey',
  transition: 'transform 0.2s, box-shadow 0.2s',
  ':hover': {
    transform: 'translateY(-2px)', // Slight lift on hover
    //backgroundColor: '#172554',
  },
});

export const cardHeader = style({
  padding: '10px 15px',
  fontSize: '30px',
  fontWeight: 'bold',
  color: 'white', // Light color for header text
});

export const h2 = style({
  fontSize: '25px',
  fontWeight: '600',
  marginBottom: '1rem',
  color: '#1e90ff',
});

export const input = style({
  backgroundColor: 'black', // Dark input background
  color: '#ffffff',
  borderColor: '#555',
  borderRadius: '10px',
  padding: '0.5rem',
  width: '100%',
  maxWidth: '300px',
  marginTop: '1rem',
  marginBottom: '1rem',
  transition: 'border-color 0.2s, background-color 0.2s',
  ':focus': {
    borderColor: '#1e90ff',
    outline: 'none',
    boxShadow: '0 0 0 0.2rem rgba(30, 144, 255, 0.25)',
    backgroundColor: '#333', // Slightly lighter on focus
  },
});

export const propList = style({
  listStyle: 'none',
  padding: '0',
  margin: '0',
  color: '#dcdcdc',
});

export const description = style({
  fontSize: '18px',
  marginBottom: '10px',
  marginLeft: '20px',
});

export const keyword = style({
  fontSize: '20px',
  color: 'White',
  fontWeight: 'bold',
});

export const string = style({
  color: 'White',
  fontSize: '18px',
});

export const type = style({
  color: 'White',
  fontSize: '18px',
});

export const codeBlock = style({
  backgroundColor: '#272727', // Dark background for code blocks
  padding: '10px',
  borderRadius: '5px',
  overflowX: 'auto',
  color: '#f8f8f2',
});
