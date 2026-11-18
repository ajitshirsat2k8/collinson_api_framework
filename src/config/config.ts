import dotenv from "dotenv";

dotenv.config();

export const config = {
  baseUrl: process.env.BASE_URL || "",

  weatherApi:
    process.env.WEATHER_API || ""
};