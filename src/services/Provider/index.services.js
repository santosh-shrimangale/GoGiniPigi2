import { Categories } from "../../apiEndPoints";
import { logger } from "../../utils";
import APIrequest from "../axios";

export const ProviderServices = {
  getCategoriesService: async () => {
    try {
      const payload = {
        ...Categories,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
};
