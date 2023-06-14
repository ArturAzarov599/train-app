import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { actions } from "../store/points.reducer";

export const usePointsActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
