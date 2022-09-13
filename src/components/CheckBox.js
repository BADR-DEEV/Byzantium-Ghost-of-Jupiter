import React from "react";
import Checkbox from "@mui/material/Checkbox";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../constants/StyleConstants";

// a wrapper class for material ui checkbox
// Since you are just using the mui checkbox, simply pass all the props through to restore functionality.
function CheckboxWrapper(props) {
  return (
    <ThemeProvider theme = {theme}>
    <Checkbox
    color = "error"
      icon={<CircleUnchecked />}
      checkedIcon={<CircleCheckedFilled />}
      {...props}
    />
    </ThemeProvider>
  );
}

export default CheckboxWrapper;