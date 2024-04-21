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
  token: string;
  userId: String;
  role: string;
}

const initialState: UserState = {
  user: null,
  firstName: "",
  lastName: "",
  email: "",
  cellNumber: "",
  password: "",
  isLoading: false,
  error: "",
  token: "",
  userId: "",
  role: "",
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
    setToken: (state, actions) => {
      state.token = actions.payload;
    },
    setRole: (state, actions) => {
      state.role = actions.payload;
    },
  },
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
  setRole
} = userStateSlice.actions

export default userStateSlice
