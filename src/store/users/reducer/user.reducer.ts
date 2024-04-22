import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  user: null;
  firstName: String;
  lastName: String;
  email: String;
  cellNumber: String;
  password: String;
  isLoading: Boolean;
  error: String;
  successMessage: string;
  token: string;
  userId: String;
  role: string;
  allHirers: [];
  allDrivers: [];
  licenseType: string;
  licenseCode: string;
  firstIssued: string;
  expiryDate: string;
  countryIssued: string;
  description: string;
  idNumber: string;
  updateDriverProfileIsLoading: boolean;
}

const initialState: UserState = {
  user: null,
  firstName: "",
  lastName: "",
  email: "",
  cellNumber: "",
  password: "",
  isLoading: false,
  updateDriverProfileIsLoading: false,
  error: "",
  successMessage: "",
  token: "",
  userId: "",
  role: "",
  allHirers: [],
  allDrivers: [],
  licenseType: "",
  licenseCode: "",
  firstIssued: "",
  expiryDate: "",
  countryIssued: "",
  description: "",
  idNumber: "",
}

export const userStateSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload
    },
    setFirstName: (state, actions) => {
      state.firstName = actions.payload;
    },
    setLastName: (state, actions) => {
      state.lastName = actions.payload;
    },
    setEmail: (state, actions) => {
      state.email = actions.payload;
    },
    setCellNumber: (state, actions) => {
      state.cellNumber = actions.payload;
    },
    setPassword: (state, actions) => {
      state.password = actions.payload;
    },
    setIsLoading: (state, actions) => {
      state.isLoading = actions.payload;
    },
    setError: (state, actions) => {
      state.error = actions.payload;
    },
    setSuccessMessage: (state, actions) => {
      state.successMessage = actions.payload;
    },
    setToken: (state, actions) => {
      state.token = actions.payload;
    },
    setRole: (state, actions) => {
      state.role = actions.payload;
    },
    setAllHirers: (state, actions) => {
      state.allHirers = actions.payload;
    },
    setAllDrivers: (state, actions) => {
      state.allDrivers = actions.payload;
    },
    setLicenseType: (state, actions) => {
      state.licenseType = actions.payload;
    },
    setLicenseCode: (state, actions) => {
      state.licenseCode = actions.payload;
    },
    setFirstIssued: (state, actions) => {
      state.firstIssued = actions.payload;
    },
    setExpiryDate: (state, actions) => {
      state.expiryDate = actions.payload;
    },
    setCountryIssued: (state, actions) => {
      state.countryIssued = actions.payload;
    },
    setDescription: (state, actions) => {
      state.description = actions.payload;
    },
    setIdNumber: (state, actions) => {
      state.idNumber = actions.payload;
    }, 
    setUpdateDriverProfileIsLoading: (state, actions) => {
      state.updateDriverProfileIsLoading = actions.payload;
    },
    
  }
})

// Action creators are generated for each case reducer function
export const {
  setUserId,
  setFirstName,
  setLastName,
  setEmail,
  setCellNumber,
  setPassword,
  setIsLoading,
  setError,
  setToken,
  setRole,
  setAllHirers,
  setAllDrivers,
  setSuccessMessage,
  setLicenseType,
  setLicenseCode,
  setFirstIssued,
  setExpiryDate,
  setCountryIssued,
  setDescription,
  setIdNumber,
  setUpdateDriverProfileIsLoading
} = userStateSlice.actions

export default userStateSlice
