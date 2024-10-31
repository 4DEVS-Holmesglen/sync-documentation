import { createGlobalTheme } from "@vanilla-extract/css";

export const root = createGlobalTheme(":root", {
  fonts: {
    brand: "Montserrat, apple-system, sans-serif",
    body: "Montserrat, apple-system, sans-serif",
  },
  colors: {
    // Semantic tokens
    primary: "#ffffff", // white
    complementary: "#000000", // black
    brand: "#10B981", // emerald
    brandLight: "#6EE7B7", // emerald light
    brandDark: "#047857", // emerald dark

    // Color tokens
    success: "#34D399", // green
    warning: "#FBBF24", // amber
    error: "#DC2626", // rose
    grey200: "#E5E7EB", // gray
    grey300: "#D1D5DB", // gray
    grey400: "#9CA3AF", // gray
    grey500: "#6B7280", // gray
    grey600: "#4B5563", // gray

    // Gradient token
    gradient: `linear-gradient(to right, #3b82f6, #ec4899)`, // black to blue
  },
  space: {
    none: '0',
    '1x': '8px',
    '2x': '16px',
    '3x': '24px',
    '4x': '32px',
    '5x': '40px',
    '6x': '48px',
  },
  fontSizes: {
    '1x': '8px',
    '2x': '12px',
    '3x': '16px', 
    '4x': '20px', 
    '5x': '24px', 
  },
  fontWeights: {
    light: "300",
    normal: "500",
    bold: "600",
    bolder: "700",
  }
})

export const vars = { ...root };
