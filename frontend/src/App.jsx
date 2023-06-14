import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";

import SideMenu from "./layout/SideMenu";
import HomePage from "./modules/Home/HomePage";
import TrainsPage from "./modules/TrainsModule/TrainsPage";
import PointsPage from "./modules/PointsModule/PointsPage";
import TrainsSchedulesPage from "./modules/TrainsSchedulesModule/TrainsSchedulesPage";

import {
  POINT_ROUTE_PATH,
  TRAIN_ROUTE_PATH,
  TRAIN_SCHEDULE_ROUTE_PATH,
} from "./constants/routes";

const App = () => (
  <div className="wrapper">
    <BrowserRouter>
      <SideMenu />
      <Box width="100%" padding="16px">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={`${TRAIN_ROUTE_PATH}`} element={<TrainsPage />} />
          <Route
            path={`${TRAIN_SCHEDULE_ROUTE_PATH}`}
            element={<TrainsSchedulesPage />}
          />
          <Route path={`${POINT_ROUTE_PATH}`} element={<PointsPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </div>
);

export default App;
