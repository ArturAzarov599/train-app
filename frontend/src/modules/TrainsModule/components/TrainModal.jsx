import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  useGetTrainDetailsQuery,
  useCreateTrainMutation,
  useUpdateTrainMutation,
} from "../store/train.api";
import Loader from "../../../components/Loader";

const TrainModal = ({ mode, onClose, code }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const { data, isFetching } = useGetTrainDetailsQuery(code, {
    skip: mode === "create",
  });
  const [train, setTrain] = useState(null);
  const [createTrain] = useCreateTrainMutation();
  const [updateTrain] = useUpdateTrainMutation();

  const disabled = mode === "view";

  useEffect(() => {
    if (data) {
      setTrain(data);
    }
  }, [data]);

  const onChangeHandler = ({ target: { name, value } }) => {
    setTrain({ ...train, [name]: value });
  };

  const onPositiveClick = () => {
    const handler = mode === "create" ? createTrain : updateTrain;

    handler(train);
    onClose();
  };

  return (
    <Dialog fullScreen={fullScreen} open onClose={onClose}>
      {((!isFetching && train) || mode === "create") && (
        <Box width="600px">
          <DialogTitle textAlign="center">{mode} train</DialogTitle>
          <DialogContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
              marginY="16px"
            >
              <FormControl style={{ width: "30%" }}>
                <TextField
                  id="code"
                  name="code"
                  variant="outlined"
                  type="text"
                  label="Train code"
                  value={train?.code}
                  disabled={mode !== "created"}
                  onChange={onChangeHandler}
                />
              </FormControl>
              <FormControl style={{ width: "30%" }}>
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  labelId="type-label"
                  id="type-select"
                  name="type"
                  defaultValue={train?.type}
                  label="Type"
                  onChange={onChangeHandler}
                  disabled={disabled}
                >
                  <MenuItem value="S-Bahn">S-Bahn</MenuItem>
                  <MenuItem value="Regional Express">Regional Express</MenuItem>
                  <MenuItem value="Regional Bahn">Regional Bahn</MenuItem>
                  <MenuItem value="Interregio-Express">
                    Interregio-Express
                  </MenuItem>
                  <MenuItem value="Intercity">Intercity</MenuItem>
                  <MenuItem value="Eurocity">Eurocity</MenuItem>
                  <MenuItem value="Eurocity Express">Eurocity Express</MenuItem>
                  <MenuItem value="Intercity Express">
                    Intercity Express
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl style={{ width: "30%" }}>
                <TextField
                  id="created"
                  name="created"
                  variant="outlined"
                  type="date"
                  value={train?.created}
                  disabled={disabled}
                  onChange={onChangeHandler}
                />
              </FormControl>
            </Box>

            <FormControl style={{ width: "100%" }}>
              <TextField
                multiline
                label="Description"
                name="description"
                disabled={disabled}
                value={train?.description}
                onChange={onChangeHandler}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={onClose}>
              {mode === "view" ? "exit" : "cancel"}
            </Button>
            {mode !== "view" && (
              <Button onClick={onPositiveClick} autoFocus>
                {mode}
              </Button>
            )}
          </DialogActions>
        </Box>
      )}

      <Loader open={isFetching} />
    </Dialog>
  );
};

export default TrainModal;
