import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import Loader from "../../components/Loader";
import SnackBar from "../../components/SnackBar";
import TrainModal from "./components/TrainModal";
import ViewButton from "../../components/ViewButton";
import CreateButton from "../../components/CreateButton";
import DeleteButton from "../../components/DeleteButton";
import UpdateButton from "../../components/UpdateButton";

import {
  getTrainErrorMessage,
  getTrainSuccessMessage,
  getTrainLimit,
  getTrainSkipRecords,
  getTrainTotalPages,
} from "./store/train.selectors";
import { useTrainActions } from "./hooks/useTrainActions";
import { useGetTrainsQuery, useDeleteTrainMutation } from "./store/train.api";

const TrainPage = () => {
  const [mode, setMode] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [train, setTrain] = useState(null);
  const errorMessage = useSelector(getTrainErrorMessage);
  const successMessage = useSelector(getTrainSuccessMessage);
  const { resetState, setPage } = useTrainActions();
  const limit = useSelector(getTrainLimit);
  const skip = useSelector(getTrainSkipRecords);
  const totalPages = useSelector(getTrainTotalPages);
  const [deleteTrain] = useDeleteTrainMutation();
  const { data, isFetching } = useGetTrainsQuery({
    limit,
    order: "ASC",
    orderBy: "code",
    skip,
  });

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

  const onChangeHandler = (event, value) => {
    const calculateSkip = (value - 1) * limit;
    setPage(calculateSkip);
  };

  return (
    <Box width="100%" height="100%">
      <Grid container spacing={2} height="100%">
        <Grid item xs={11}>
          <Typography textAlign="center" fontSize="24px">
            Train Page
          </Typography>

          {!isFetching && (
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              height="95%"
            >
              <List
                style={{ width: "100%" }}
                sx={{
                  width: "100%",
                  height: "100%",
                  bgcolor: "background.paper",
                }}
              >
                {data.data.map((t) => (
                  <ListItem key={t.code} disablePadding>
                    <ListItemButton onClick={() => setTrain(t)} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={train?.code === t.code}
                          tabIndex={-1}
                          disableRipple
                        />
                      </ListItemIcon>
                      <ListItemText primary={t.code} />

                      <ListItemText primary={t.type} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

              <Stack>
                <Pagination
                  count={totalPages}
                  color="primary"
                  page={skip / limit + 1}
                  onChange={onChangeHandler}
                />
              </Stack>
            </Box>
          )}
        </Grid>

        <Grid item xs={1}>
          <Box>
            <CreateButton onClick={() => handleClick("create")} />
          </Box>
          <Box margin="16px 0">
            <DeleteButton
              disabled={!train}
              onClick={() => {
                deleteTrain(train?.code);
                setTrain(null);
              }}
            />
          </Box>
          <Box>
            <UpdateButton
              disabled={!train}
              onClick={() => handleClick("update")}
            />
          </Box>
          <Box marginTop="16px" width="100%">
            <ViewButton disabled={!train} onClick={() => handleClick("view")} />
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
        <TrainModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          selectedPoint={train}
          mode={mode}
          code={train?.code}
        />
      )}
    </Box>
  );
};

export default TrainPage;
