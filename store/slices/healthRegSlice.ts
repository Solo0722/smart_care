import { HealthRegState } from "@/@types/types";
import { healthRegScreens } from "@/constants/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: HealthRegState = {
  currentStep: 1,
  totalSteps: 7,
  data: {
    gender: "",
    dateOfBirth: "",
    bloodType: "",
    allergies: [],
    medicalConditions: [],
    weight: 0,
    medications: [],
  },
};

export const healthRegSlice = createSlice({
  name: "healthReg",
  initialState,
  reducers: {
    incrementStep: (state) => {
      state.currentStep += 1;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    decrementStep: (state) => {
      state.currentStep -= 1;
    },
    updateHealthRecord: (
      state,
      action: PayloadAction<Partial<HealthRegState["data"]>>
    ) => {
      const d = {
        ...state.data,
        ...action.payload,
      };
      state.data = d;
    },
  },
});

export const { incrementStep, decrementStep, updateHealthRecord } =
  healthRegSlice.actions;

export default healthRegSlice.reducer;
