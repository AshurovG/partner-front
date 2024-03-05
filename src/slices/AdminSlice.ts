import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface DataState {
  currentImageId: number | undefined;
}

const dataSlice = createSlice({
  name: "data",
  initialState: {
    currentImageId: undefined
  } as DataState,
  reducers: {
    setCurrentImageId(state, action: PayloadAction<number | undefined>) {
        console.log(action.payload)
        state.currentImageId = action.payload
    },
  },
});

export const useCurrentImageId = () =>
  useSelector((state: { mainData: DataState }) => state.mainData.currentImageId);

export const {
    setCurrentImageId: setCurrentImageIdAction,
} = dataSlice.actions;

export default dataSlice.reducer;