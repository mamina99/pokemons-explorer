import { createSlice } from "@reduxjs/toolkit";
import { RootState} from "../store/store";

type BackToTopSliceState = { visible: boolean };

const initialState: BackToTopSliceState = {visible: false};

const backToToSlice = createSlice({
    name: "back2top",
    initialState,
    reducers: {
      showButton(state) {
        state.visible = true;
      },
      hideButton(state) {
        state.visible = false;
      },
    },
  });

  
export const { showButton } = backToToSlice.actions;
export const { hideButton } = backToToSlice.actions;

export const visibility = ({backToTop} :RootState ) => backToTop;

export default backToToSlice.reducer;
