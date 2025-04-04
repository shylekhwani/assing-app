import dotenv from 'dotenv';

dotenv.config();


export const PORT : number = Number(process.env.PORT) || 5000;

export const DEV_DB_URL : string = process.env.DEV_DB_URL || "";

export const NODE_ENV : string = process.env.NODE_ENV || 'development';