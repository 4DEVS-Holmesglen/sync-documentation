import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const navbar = style({
  fontFamily: vars.fonts.brand,
  backgroundColor: vars.colors.complementary,
  padding: 0,
  transition: "background 0.2s ease-in, color 0.2s ease-in",
  position: 'relative',
  ':after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '1px', // This mimics the borderBottom height
    backgroundImage: `linear-gradient(to right, #a78bfa , #2563eb)`, // Your gradient
  }
});

export const brandLink = style({
  display: 'flex',
  flexDirection: "row",
  gap: vars.space['2x'],
  alignItems: "center",
  color:"white",
  textTransform: "uppercase",
})

export const logo = style({
  width: '100px',
})

export const logoTextBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0,
})

export const brand = style({
  fontSize: vars.fontSizes["4x"],
  fontWeight: vars.fontWeights.bolder,
  lineHeight: "20px"
})

export const brandSub = style({
  fontSize: vars.fontSizes["2x"],
  fontWeight: vars.fontWeights.light,
})


export const navLink = style({
  color: "white",
  fontSize: vars.fontSizes["4x"],
  marginInline: vars.space['3x'],
  textDecoration: 'none', // Optional: to remove underline if it's a link

  ':hover': {
    color: '#94a3b8',
  },
});

