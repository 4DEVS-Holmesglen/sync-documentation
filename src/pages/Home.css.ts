import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  padding: '2rem',
  backgroundColor: '#121212', // Dark background for modern dark mode
  minHeight: '100vh', // Full height
  color: '#ffffff', // Default text color
  fontFamily: 'Arial, sans-serif', // Clean font family
});

export const row = style({
  marginBottom: '2rem',
});

export const h2 = style({
  fontSize: '1.5rem',
  fontWeight: '600',
  textAlign: 'center',
  textTransform: 'uppercase',
  color: 'White',
});

export const tuBox = style({
  backgroundColor: '#1e1e1e', // Slightly lighter for contrast
  borderRadius: '10px',
  padding: '1.5rem',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  ':hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',
  },
});


export const buttonVariant = styleVariants({
  default: { backgroundColor: '#1e90ff' },
  primary: { backgroundColor: '#28a745' },
  success: { backgroundColor: '#17a2b8' },
  warning: { backgroundColor: '#ffc107' },
});

export const alertVariants = styleVariants({
  default: { backgroundColor: '#f8d7da', color: '#721c24' },
  primary: { backgroundColor: '#cce5ff', color: '#004085' },
  success: { backgroundColor: '#d4edda', color: '#155724' },
  warning: { backgroundColor: '#fff3cd', color: '#856404' },
});


// Optional: Add styles for titles and text
export const cardTitle = style({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
});

export const cardText = style({
  fontSize: '1rem',
});
