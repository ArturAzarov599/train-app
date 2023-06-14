import { forwardRef } from "react";

import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const SnackBar = ({ open, severity, text }) => (
  <Snackbar open={open} autoHideDuration={6000}>
    <Alert severity={severity} sx={{ width: "100%" }}>
      {text}
    </Alert>
  </Snackbar>
);

export default SnackBar;
