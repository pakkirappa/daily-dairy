import { NextFunction, Response } from "express";
import { Unauthorized } from "../errors/Errors";
import db from "../db";
import { PRC_NAMES } from "../constants";
import jwt from "jsonwebtoken";
import { JwtDao } from "../constants/types";
import CONFIG from "../config";

const LOGIN_URL = "/api/v1/users/login";
const REGISTER_URL = "/api/v1/users/";

/**
 * @description This middleware is used to authenticate the subAdmin
 * @overview - this will check for bearer token in the authorization header
 * and will check if the token is valid or not and will add the subAdmin details
 * to the request object if the token is valid and will pass the request to the next middleware
 */
export default async function authHandler(
  req: any,
  res: Response,
  next: NextFunction
) {
  try {
    if (
      req.url === LOGIN_URL ||
      (req.url === REGISTER_URL && req.method === "POST")
    ) {
      return next();
    }

    const { authorization } = req.cookies;

    if (!authorization) {
      throw new Unauthorized(`Authorization is required in cookies`);
    }

    const token = authorization.split(" ")[1];

    if (!token) {
      throw new Unauthorized(`Token is required`);
    }

    const decoded = jwt.verify(token, CONFIG.JWT_SECRET) as JwtDao;

    const [[user]] = await db.query(PRC_NAMES.GET_USER_BY_ID, [decoded.id]);

    if (!user) {
      throw new Unauthorized(
        `No User found with this token , please login again`
      );
    }

    req.user = user;
    next();
  } catch (error: any) {
    res.status(401).json({
      msg: error.message,
    });
  }
}
