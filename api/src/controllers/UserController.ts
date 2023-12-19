import { Router, Request, Response } from "express";
import asyncHandler from "../middleware/AsyncHandler";
import { JwtDao, LoginDto, RegisterDto } from "../constants/types";
import {
  createUserValidator,
  idValidater,
  userLoginValidater,
} from "../lib/Validations";
import { dbUpdate, validate } from "../middleware/Validator";
import db from "../db";
import { PRC_NAMES, TABLE_NAMES } from "../constants";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { BadRequest, NotFound } from "../errors/Errors";
import CONFIG from "../config";

const router = Router();

// creating the user
router.post(
  "/",
  validate(createUserValidator),
  asyncHandler(async (req: Request, res: Response) => {
    const { name, email, username } = req.body as RegisterDto;
    let { password } = req.body as RegisterDto;

    // creating the user
    // p_name, p_username,p_email, p_password
    password = await bcrypt.hash(password, 10);
    const [[{ result, code }]] = await db.query(PRC_NAMES.ADD_USER, [
      name,
      username,
      email,
      password,
    ]);

    if (Number(code) === 400) {
      throw new BadRequest(result);
    }

    // sending the response
    res.json({
      msg: result,
    });
  })
);

// creating the user
router.post(
  "/login",
  validate(userLoginValidater),
  asyncHandler(async (req: Request, res: Response) => {
    const { password, username } = req.body as LoginDto;
    // login the user
    // p_username, p_password
    const [user] = await db.query(
      `SELECT * FROM ${TABLE_NAMES.USERS} WHERE username = ? OR email = ?`,
      [username, username]
    );

    if (!user) {
      throw new NotFound(`User with username or email ${username} not found`);
    }

    const isPasswordSame = await bcrypt.compare(password, user.password);

    if (!isPasswordSame) {
      throw new BadRequest("Invalid Password");
    }

    await db.query(`UPDATE ${TABLE_NAMES.USERS} SET last_login = NOW()`);

    const payLoad = {
      id: user.id,
      username: user.username,
      name: user.name,
    } as JwtDao;

    const token = jwt.sign(payLoad, CONFIG.JWT_SECRET, {
      expiresIn: "1d",
      issuer: CONFIG.JWT_ISSUER,
    });

    // sending the response
    res
      .cookie("authorization", "Bearer " + token, {
        httpOnly: true,
        expires: new Date(Date.now() + 86400000), // 1 day
      })
      .json({
        msg: `Welcome ${user.name} , you have successfully logged in`,
        token,
      });
  })
);

// updating the user
router.patch(
  "/:id",
  validate(idValidater),
  dbUpdate(TABLE_NAMES.USERS),
  asyncHandler(async (req: Request<{ id: number }>, res: Response) => {
    const { id } = req.params;

    const keys = Object.keys(req.body);
    const keysCanUpdate = ["name", "email"];

    if (keys.length === 0) {
      throw new BadRequest("No data to update");
    }

    if (!keys.every((key) => keysCanUpdate.includes(key))) {
      throw new BadRequest("Invalid data to update");
    }

    let sql = `UPDATE ${TABLE_NAMES.USERS} SET `;

    // changing the name
    if (req.body.name) {
      sql += `name = '${req.body.name}'`;
    }

    // changing the email
    if (req.body.email) {
      if (sql.includes("username")) {
        sql += `,email = '${req.body.email}'`;
      }
    }

    sql += ` WHERE id = ${id}`;

    await db.transaction(async (manager) => {
      await manager.query(sql);
    });

    res.json({
      msg: "User updated successfully",
    });
  })
);

router.get(
  "/:id",
  validate(idValidater),
  asyncHandler(async (req: Request<{ id: number }>, res: Response) => {
    const { id } = req.params;

    // creating the user
    const [user] = await db.query(PRC_NAMES.GET_USER_BY_ID, [id]);

    // sending the response
    res.json(user);
  })
);
export default router;
