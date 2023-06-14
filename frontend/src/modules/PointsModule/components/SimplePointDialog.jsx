import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import {
  useCreatePointMutation,
  useUpdatePointMutation,
} from "../store/points.api";

const SimplePointDialog = ({ onClose, open, selectedPoint, mode }) => {
  const [createPoint] = useCreatePointMutation();
  const [updatePoint] = useUpdatePointMutation();
  const name = mode === "update" ? selectedPoint?.name : "";
  const [pointName, setPointName] = useState(name);
  const handler = mode === "update" ? updatePoint : createPoint;
  const payload = { name: pointName };
  const handlerBody =
    mode === "update" ? { ...payload, id: selectedPoint?.id } : payload;

  const onPositiveActionClick = () => {
    handler(handlerBody);

    onClose();
  };

  return (
    <Dialog fullWidth onClose={onClose} open={open}>
      <DialogTitle textAlign="center">{mode} point</DialogTitle>

      <DialogContent>
        <DialogContentText>
          <TextField
            fullWidth
            placeholder="input point name"
            variant="standard"
            value={pointName}
            onChange={(event) => setPointName(event.target.value)}
          />
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button color="error" variant="contained" onClick={onClose}>
          cancel
        </Button>
        <Button
          color="primary"
          variant="outlined"
          autoFocus
          disabled={pointName.length < 3}
          onClick={onPositiveActionClick}
        >
          {mode}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SimplePointDialog;
