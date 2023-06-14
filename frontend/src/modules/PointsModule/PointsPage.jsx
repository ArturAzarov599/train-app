import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import Loader from "../../components/Loader";
import SnackBar from "../../components/SnackBar";
import CreateButton from "../../components/CreateButton";
import DeleteButton from "../../components/DeleteButton";
import UpdateButton from "../../components/UpdateButton";
import SimplePointDialog from "./components/SimplePointDialog";

import {
  getPointErrorMessage,
  getPointSuccessMessage,
} from "./store/points.selectors";
import { useGetPointsQuery, useDeletePointMutation } from "./store/points.api";
import { usePointsActions } from "./hooks/usePointsActions";

const PointPage = () => {
  const [mode, setMode] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const errorMessage = useSelector(getPointErrorMessage);
  const successMessage = useSelector(getPointSuccessMessage);
  const { resetState } = usePointsActions();
  const [deletePoint] = useDeletePointMutation();
  const { data, isFetching } = useGetPointsQuery();

  useEffect(() => {
    if (errorMessage || successMessage) {
      setTimeout(() => {
        resetState();
      }, 5000);
    }
  }, [errorMessage, successMessage, resetState]);

  const handleClick = (modeType) => {
    setOpenModal(true);
    setMode(modeType);
  };

  return (
    <Box width="100%">
      <Grid container spacing={2}>
        <Grid item xs={11}>
          <Typography textAlign="center" fontSize="24px">
            Points Page
          </Typography>

          {!isFetching && (
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {data.map((point) => (
                <ListItem key={point.id} disablePadding>
                  <ListItemButton onClick={() => setSelectedPoint(point)} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={selectedPoint?.id === point.id}
                        tabIndex={-1}
                        disableRipple
                      />
                    </ListItemIcon>
                    <ListItemText id={point.id} primary={point.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </Grid>

        <Grid item xs={1}>
          <Box>
            <CreateButton onClick={() => handleClick("create")} />
          </Box>
          <Box margin="16px 0">
            <DeleteButton
              disabled={!selectedPoint}
              onClick={() => {
                deletePoint({ name: selectedPoint?.name });
                setSelectedPoint(null);
              }}
            />
          </Box>
          <Box>
            <UpdateButton
              disabled={!selectedPoint}
              onClick={() => handleClick("update")}
            />
          </Box>
        </Grid>
      </Grid>

      <Loader open={isFetching} />

      <SnackBar open={errorMessage} severity="error" text={errorMessage} />
      <SnackBar
        open={successMessage}
        severity="success"
        text={successMessage}
      />

      {openModal && (
        <SimplePointDialog
          open={openModal}
          onClose={() => setOpenModal(false)}
          selectedPoint={selectedPoint}
          mode={mode}
        />
      )}
    </Box>
  );
};

export default PointPage;
