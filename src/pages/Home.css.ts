import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '20px',
  backgroundColor: 'black',
  color: '#fff',
});

export const sectionHeader = style({
  textAlign: 'center',
  color: '#fff',
  padding: '20px 0',
  fontSize: '2rem',
  fontWeight: 'bold',
});

export const tableWrapper = style({
  marginTop: '20px',
  marginBottom: '40px',
  display: 'flex',
  justifyContent: 'center',
});

export const table = style({
  width: '100%',
  maxWidth: '1000px',
  borderCollapse: 'collapse',
  backgroundColor: 'black',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
});

export const tableHeader = style({
  backgroundColor: '#0f172a', 
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'left',
  padding: '12px 16px',
});

export const tableCell = style({
  padding: '12px 16px',
  textAlign: 'left',
  borderBottom: '1px solid #333',
  color: '#ccc',
});

export const tableRow = style({
  ':hover': {
    backgroundColor: '#18181b',
  },
});

export const componentSection = style({
  marginBottom: '50px',
});

export const buttonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
});

export const alertContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
});

export const alertDialogContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
});

export const componentTitle = style({
  textAlign: 'center',
  color: '#fff',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginTop: '30px',
  marginBottom: '15px',
});

export const colTextCenter = style({
  textAlign: 'center',
});
