import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const footer = style({
  color: vars.colors.primary,
  backgroundColor: vars.colors.complementary,
  padding: vars.space["3x"],
  display: 'flex',
  flexDirection: 'column', // Stack items vertically
  alignItems: 'center', // Center all items
});

export const designedBy = style({
  display: 'flex',
  alignItems: 'center', // Align text and logo vertically
  marginBottom: vars.space["2x"], // Space between the logo and copyright
});

export const logoImg = style({
  width: '80px',
  marginLeft: vars.space["1x"], // Space between text and logo
});

export const copyright = style({
  textAlign: 'center', // Center the copyright text
});
