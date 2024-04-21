import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  jobId: string;
  jobTitle: string;
  emplyomentType: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  hirerId: string;
  isLoading: boolean;
  allJobs: [];
  jobsStatus: string;
  error: string;
  successMessage: string;
  pay: number;
}

const initialState: UserState = {
  isLoading: false,
  error: "",
  jobId: "",
  jobTitle: "",
  emplyomentType: "",
  location: "",
  startDate: "",
  endDate: "",
  description: "",
  hirerId: "",
  allJobs: [],
  jobsStatus: "",
  successMessage: "",
  pay: 0
}

export const jobStateSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setJobId: (state, action) => {
      state.jobId = action.payload
    },
    setJobTitle: (state, action) => {
      state.jobTitle = action.payload
    },
    setEmplyomentType: (state, action) => {
      state.emplyomentType = action.payload
    },
    setLocation: (state, action) => {
      state.location = action.payload
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload
    },
    setDescription: (state, action) => {
      state.description = action.payload
    },
    setHirerId: (state, action) => {
      state.hirerId = action.payload
    },
    setAllJobs: (state, action) => {
      state.allJobs = action.payload
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload
    },
    setPay: (state, action) => {
      state.pay = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setIsLoading,
  setJobId,
  setJobTitle,
  setEmplyomentType,
  setLocation,
  setStartDate,
  setEndDate,
  setDescription,
  setHirerId,
  setAllJobs,
  setError,
  setSuccessMessage,
  setPay
} = jobStateSlice.actions

export default jobStateSlice
