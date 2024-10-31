import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';


export const boxSetting = style({
  color: vars.colors.primary,
  backgroundColor: vars.colors.complementary,
  textAlign: "center",
  padding: vars.space['5x'],
  margin: vars.space['5x'],
});

export const boxTitle = style({
  backgroundImage: vars.colors.gradient,  // Use the gradient as a background
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',  // Make text transparent to reveal the gradient
  fontWeight: 'bolder',
  fontStyle: 'italic',
  fontSize: '4em',
});

export const boxPara = style({
  fontWeight: vars.fontWeights.light,
  fontSize: vars.fontSizes['4x'],
  margin: `${vars.space['5x']} 0`,
});

export const linkHero = style({
  fontWeight: vars.fontWeights.bold,
  fontSize: vars.fontSizes['3x'],
  margin: `${vars.space['5x']} 0`,
  padding: '15px 20px', // Adjust padding as needed
  backgroundColor: "#3b82f6", // Set the background color
  color: vars.colors.primary, // Set the text color
  border: 'none',
  borderRadius: '15px', // Rounded corners
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  textDecoration: 'none',

  // For hover effect
  ':hover': {
    backgroundColor: '#1e40af', // Change to a darker shade for hover effect
  },
});
