import { createSlice } from '@reduxjs/toolkit'

export interface InvitesState {
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
  hirer: {};
  driver: {};
  invite: {};
  isDeleting: boolean;
}

const initialState: InvitesState = {
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
  hirer: {},
  driver: {},
  pay: 0,
  isDeleting: false,
  invite: {},
}

export const invitesStateSlice = createSlice({
  name: 'invites',
  initialState,
  reducers: {
    setResetInvitesState: (state) => state = initialState,
    setIsLoadingInvite: (state, action) => {
      state.isLoading = action.payload
    },
    setInviteError: (state, action) => {
      state.error = action.payload
    },
    setInvite: (state, action) => {
      state.invite = action.payload
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
    setInviteSuccessMessage: (state, action) => {
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
    setDriver: (state, action) => {
      state.driver = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setIsLoadingInvite,
  setJobId,
  setJobTitle,
  setEmploymentType,
  setLocation,
  setStartDate,
  setEndDate,
  setDescription,
  setHirerId,
  setAllJobs,
  setInviteError,
  setInviteSuccessMessage,
  setPay,
  setHirer,
  setDriver,
  setJobStatus,
  setIsDeleting,
  setResetInvitesState,
  setInvite
} = invitesStateSlice.actions

export default invitesStateSlice
