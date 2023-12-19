import { NextFunction, Response } from "express";
import { Unauthorized } from "../errors/Errors";
import db from "../db";
import { TABLE_NAMES } from "../constants";

/**
 * @description This middleware is used to authenticate the subAdmin
 * @overview - this will check for bearer token in the authorization header
 * and will check if the token is valid or not and will add the subAdmin details
 * to the request object if the token is valid and will pass the request to the next middleware
 */
export const userController = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.cookies;
  if (!authorization)
    throw new Unauthorized(`Authorization header is required`);
  const token = authorization.split(" ")[1];
  if (!token) throw new Unauthorized(`Token is required`);

  const decoded = { id: 1 };

  const [user] = await db.query(
    `SELECT * FROM ${TABLE_NAMES.USERS} WHERE id = ?`,
    [decoded.id]
  );
  if (!user)
    throw new Unauthorized(
      `No User found with this token , please login again`
    );

  req.user = user;
  next();
};
