import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { Socket } from "socket.io-client";

export interface UserState {
  name: string;
  picture: string;
  email: string;
  isLoggedIn: boolean;
  id: number;
  isAdmin: boolean;
  // ws: any
}
const checkIsAdmin = (id: number) => {
  return id == 1;
};

const getInitialState = () => {
  let data = {
    id: NaN,
    name: "",
    picture: "",
    email: "",
    isAdmin: false,
    isLoggedIn: false,
    // ws: ""
  };
  const token = localStorage.getItem("token");
  if (token) {
    let decodedToken: any = jwt_decode(token);
    data.id = decodedToken.userId;
    data.isAdmin = checkIsAdmin(decodedToken.userId);
  }

  return data;
};
const initialState: UserState = getInitialState();

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // setSocket: (state: UserState, action: PayloadAction<{ws: Socket}>) => {
    //   state.ws = action.payload.ws
    //   console.log(action.payload.ws)
    //   return state
    // },
    // user/login
    facebookLogin: (
      state: UserState,
      action: PayloadAction<{
        name: string;
        picture: string;
        token: string;
        email: string;
      }>
    ) => {
      const payload = action.payload;
      state.name = payload.name;
      state.picture = payload.picture;
      state.email = payload.email;
      state.isLoggedIn = true;
      localStorage.setItem("token", payload.token);
      let decodedToken: any = jwt_decode(payload.token);

      state.isAdmin = checkIsAdmin(decodedToken.userId);
    },

    googleLogin: (
      state: UserState,
      action: PayloadAction<{
        name: string;
        picture: string;
        token: string;
        email: string;
      }>
    ) => {
      const payload = action.payload;

      state.name = payload.name;
      state.picture = payload.picture;
      state.email = payload.email;
      state.isLoggedIn = true;

      localStorage.setItem("token", payload.token);
      let decodedToken: any = jwt_decode(payload.token);

      state.isAdmin = checkIsAdmin(decodedToken.userId);
    },

    login: (
      state: UserState,
      action: PayloadAction<{
        username: string;
        token: string;
      }>
    ) => {
      const payload = action.payload;
      let decodedToken: any = jwt_decode(payload.token);

      state.name = action.payload.username;
      state.isLoggedIn = true;
      state.id = decodedToken.userId;
      state.isAdmin = checkIsAdmin(decodedToken.userId);

      localStorage.setItem("token", payload.token);
    },

    logout: (state: UserState, action: PayloadAction) => {
      // state = getInitialState()
      state.name = "";
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      // state.ws = state.ws.disconnect()
    },
  },
});

export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;

