import { configDotenv } from "dotenv";
configDotenv();

export const env = {
    port: process.env.PORT,
    dburl: process.env.DBURL
}