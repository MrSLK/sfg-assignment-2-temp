import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  jobId: string;
  jobTitle: string;
  employmentType: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  hirerId: string;
  isLoading: boolean;
  allJobs: [];
  jobStatus: string;
  error: string;
  successMessage: string;
  pay: number;
  hirer: string;
  isDeleting: boolean;
}

const initialState: UserState = {
  isLoading: false,
  error: "",
  jobId: "",
  jobTitle: "",
  employmentType: "",
  location: "",
  startDate: "",
  endDate: "",
  description: "",
  hirerId: "",
  allJobs: [],
  jobStatus: "",
  successMessage: "",
  hirer: "",
  pay: 0,
  isDeleting: false
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
    setEmploymentType: (state, action) => {
      state.employmentType = action.payload
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
    setHirer: (state, action) => {
      state.hirer = action.payload
    },
    setJobStatus: (state, action) => {
      state.jobStatus = action.payload
    },
    setIsDeleting: (state, action) => {
      state.isDeleting = action.payload
    }, 
  },
})

// Action creators are generated for each case reducer function
export const {
  setIsLoading,
  setJobId,
  setJobTitle,
  setEmploymentType,
  setLocation,
  setStartDate,
  setEndDate,
  setDescription,
  setHirerId,
  setAllJobs,
  setError,
  setSuccessMessage,
  setPay,
  setHirer,
  setJobStatus,
  setIsDeleting
} = jobStateSlice.actions

export default jobStateSlice
