import mongoose from "mongoose";
import { MONGO_URL } from "../utils";

const connectMongo = async () => {
  try {
    const { connetion } = await mongoose.connect(process.env.MONGO_URL);

    if (connetion.readyState == 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
