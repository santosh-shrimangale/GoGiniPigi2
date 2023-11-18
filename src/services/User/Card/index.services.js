import { Card } from "../../../apiEndPoints";
import { logger } from "../../../utils";
import APIrequest from "../../axios";

const CardServices = {
  cardDetailsServices: async () => {
    try {
      const payload = {
        ...Card.cardDetails,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
  addCardServices: async (bodyData) => {
    try {
      const payload = {
        ...Card.addCard,
        bodyData,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
  deleteCardServices: async (id) => {
    try {
      const payload = {
        ...Card.deleteCard(id),
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
};

export default CardServices;
