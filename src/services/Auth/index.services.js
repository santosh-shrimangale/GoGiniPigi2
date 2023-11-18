import Auth from "../../apiEndPoints/Auth";
import { logger } from "../../utils";
import APIrequest from "../axios";

export const AuthServices = {
  /**
   *
   * @returns
   * Function To handle Login action
   */
  loginService: async (bodyData) => {
    try {
      const payload = {
        ...Auth.login,
        bodyData,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
  userRegisterService: async (bodyData) => {
    try {
      const payload = {
        ...Auth.userRegister,
        bodyData,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
  providerRegisterService: async (bodyData) => {
    try {
      const payload = {
        ...Auth.providerRegister,
        bodyData,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
  forgetPasswordService: async (bodyData) => {
    try {
      const payload = {
        ...Auth.forgetPassword,
        bodyData,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
  veryfyOtpService: async (bodyData) => {
    try {
      const payload = {
        ...Auth.verifyOtp,
        bodyData,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
  resetPasswordService: async (bodyData) => {
    try {
      const payload = {
        ...Auth.resetPassword,
        bodyData,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
  profileProviderService: async (bodyData, apiEndPoint) => {
    try {
      const payload = {
        ...apiEndPoint,
        bodyData,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
  logoutService: async () => {
    try {
      const payload = {
        ...Auth.logout,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
};
