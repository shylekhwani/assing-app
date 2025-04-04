import mongoose from "mongoose";
import { DEV_DB_URL, NODE_ENV } from "./serverConfig";

export const ConnectDB = async (): Promise<void> => {
   try {
     await mongoose.connect(DEV_DB_URL);
     console.log(`connected to mongoDb database from ${NODE_ENV} enviroment`)
   } catch (error) {
    console.log(error,'went wrong something');
    process.exit(1);
   }  
};