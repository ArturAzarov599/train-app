import { useNavigate, useLocation } from "react-router-dom";

import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import MapRoundedIcon from "@mui/icons-material/MapRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TrainRoundedIcon from "@mui/icons-material/TrainRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

import {
  POINT_ROUTE_PATH,
  TRAIN_ROUTE_PATH,
  TRAIN_SCHEDULE_ROUTE_PATH,
} from "../constants/routes";
import { Typography } from "@mui/material";

const menuItems = [
  {
    title: "Home",
    url: "/",
    Icon: HomeOutlinedIcon,
  },
  {
    title: "Trains",
    url: TRAIN_ROUTE_PATH,
    Icon: TrainRoundedIcon,
  },
  {
    title: "Trains schedules",
    url: TRAIN_SCHEDULE_ROUTE_PATH,
    Icon: MapRoundedIcon,
  },
  {
    title: "Points",
    url: POINT_ROUTE_PATH,
    Icon: LocationOnRoundedIcon,
  },
];

const SideMenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigateTo = (url) => navigate(url);

  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <Typography textAlign="center" fontSize="20px" marginTop="16px">
        Manage trains app
      </Typography>
      <MenuList>
        {menuItems.map(({ title, url, Icon }) => (
          <MenuItem
            key={title}
            style={{
              margin: "8px 0",
              backgroundColor: pathname === url ? "blue" : "",
            }}
            onClick={() => navigateTo(url)}
          >
            <ListItemIcon>{<Icon />}</ListItemIcon>
            <ListItemText primary={title} />
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

export default SideMenu;
