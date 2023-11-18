import { createSlice } from "@reduxjs/toolkit";
import { removeLocalStorageToken } from "../../utils";
import logger from "../../utils/logger";
import routesMap from "../../routeControl/userRouteMap";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: {},
    providerProfileData: {},
    forgetPassword: {},
  },
  reducers: {
    loginAction: (state, action) => {
      return (state = {
        ...state,
        userData: { ...action.payload },
      });
    },
    logoutAction: (state) => {
      return (state = {
        ...state,
        userData: {},
      });
    },
    updateUserDataAction: (state, action) => {
      return (state = {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload,
        },
      });
    },
    providerProfileAction: (state, action) => {
      return (state = {
        ...state,
        providerProfileData: { ...action.payload },
      });
    },

    updateProviderDataAction: (state, action) => {
      return (state = {
        ...state,
        providerProfileData: {
          ...state.providerProfileData,
          ...action.payload,
        },
      });
    },

    forgetpasswordAction: (state, action) => {
      return (state = {
        ...state,
        forgetPassword: { ...action.payload },
      });
    },
  },
});

export const {
  loginAction,
  updateUserDataAction,
  logoutAction,
  providerProfileAction,
  updateProviderDataAction,
  forgetpasswordAction,
} = authSlice.actions;

export const login = (data) => async (dispatch) => {
  try {
    dispatch(loginAction(data));
  } catch (error) {
    logger(error);
  }
};
export const forgetPassword = (data) => async (dispatch) => {
  try {
    dispatch(forgetpasswordAction(data));
  } catch (error) {
    logger(error);
  }
};

export const logout = (navigate) => async (dispatch) => {
  try {
    removeLocalStorageToken();
    dispatch(logoutAction());
    navigate(routesMap.LOGIN.path);
  } catch (error) {
    logger(error);
  }
};

export const updateUserData = (data) => async (dispatch) => {
  try {
    dispatch(updateUserDataAction(data));
  } catch (error) {
    logger(error);
  }
};

export const providerProfile = (data) => async (dispatch) => {
  try {
    dispatch(providerProfileAction(data));
  } catch (error) {
    logger(error);
  }
};

export const updateProviderData = (data) => async (dispatch) => {
  try {
    dispatch(updateProviderDataAction(data));
  } catch (error) {
    logger(error);
  }
};

export const selectUserData = (state) => state.auth.userData;
export const forgetPasswordData = (state) => state.auth.forgetPassword;

export default authSlice.reducer;
