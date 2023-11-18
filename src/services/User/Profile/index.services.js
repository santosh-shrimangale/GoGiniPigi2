import { userProfile } from "../../../apiEndPoints";
import { logger } from "../../../utils";
import APIrequest from "../../axios";

const userProfileService = {
  updateProfileService: async (bodyData) => {
    try {
      const payload = {
        ...userProfile.UpdateProfile,
        bodyData,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
};
export default userProfileService;
