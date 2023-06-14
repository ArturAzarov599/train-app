import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { actions } from "../store/train.reducer";

export const useTrainActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
