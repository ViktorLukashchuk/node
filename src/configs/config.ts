import { config } from "dotenv";
config();
export const configs = {
  DB_URI: process.env.DB_URI,

  SECRET_SALT: process.env.SECRET_SALT,
  FRONT_URL: process.env.FRONT_URL || "http://0.0.0.0:3000",

  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,

  JWT_ACTiVATE_SECRET: process.env.JWT_ACTiVATE_SECRET,
  JWT_FORGOT_SECRET: process.env.JWT_FORGOT_SECRET,

  NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL,
  NO_REPLY_PASS: process.env.NO_REPLY_PASS,
};
