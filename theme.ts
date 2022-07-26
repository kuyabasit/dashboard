import { extendTheme } from "@chakra-ui/react";

const colors = {
  texts: {
    900: "#333333",
    800: "#555562",
    700: "#a3a5c0",
  },
  blues: {
    900: "#2c4a89",
    800: "#4678df",
    700: "#d8e4ff",
  },
  greys: {
    900: "#8e8e9c",
    800: "#9898ad",
    700: "#f2f3f7",
  },
  oranges: {
    900: "#f1863e",
  },
  bgs: {
    900: "#f2f4f9",
    800: "#f9f9f9",
    700: "#f9fafd",
  },
  signs: {
    900: "#10c664",
    800: "#ff504c",
  },
};

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#f9fafd",
      },
    },
  },
  fonts: {
    body: `'Avenir Next', sans-serif`,
  },
  colors,
});

export default theme;
