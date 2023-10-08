import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE);
  } catch (error) {
    throw new Err("connection fail!");
  }
};

export default connection;
