import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        'DejaVu Sans Mono',
      ].join(','),
      body1: {
        marginBottom:12,
      }
    },
  });

export default theme;