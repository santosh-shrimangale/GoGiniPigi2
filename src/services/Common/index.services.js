import Common from "../../apiEndPoints/Common";
import { logger } from "../../utils";
import APIrequest from "../axios";

export const CommonServices = {
    CategoryListService: async () => {
        try {
          const payload = {
            ...Common.getCategory
          };
          const res = await APIrequest(payload);
          return res;
        } catch (error) {
          logger(error);
          throw error;
        }
      },
}