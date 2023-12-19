import { Router, Request, Response } from "express";
import asyncHandler from "../middleware/AsyncHandler";
import { JwtDao, LoginDto, RegisterDto } from "../constants/types";
import {
  createPageValidator,
  createUserValidator,
  getPageValidator,
  idValidater,
  updatePageValidator,
  userLoginValidater,
} from "../lib/Validations";
import { dbDelete, dbUpdate, validate } from "../middleware/Validator";
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
  validate(createPageValidator),
  asyncHandler(async (req: any, res: Response) => {
    const { content, notebook_id } = req.body as {
      content: string;
      notebook_id: number;
    };

    // creating the page
    // p_user_id,p_notebook_id, p_content
    const [[{ result, code }]] = await db.query(PRC_NAMES.ADD_PAGE, [
      req.user.id,
      notebook_id,
      content,
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

router.get(
  "/",
  validate(getPageValidator),
  asyncHandler(async (req: Request, res: Response) => {
    const { notebook_id } = req.query as { notebook_id: string };

    const pages = await db.query(
      `SELECT id,content FROM ${TABLE_NAMES.PAGES} WHERE notebook_id = ?`,
      [notebook_id]
    );

    // sending the response as json
    res.json(pages);
  })
);

router.patch(
  "/:id",
  validate(idValidater),
  validate(updatePageValidator),
  asyncHandler(async (req: Request<{ id: number }>, res: Response) => {
    const { id } = req.params;
    const { content } = req.body;

    // creating the user
    // p_page_id, p_content
    const [[{ result, code }]] = await db.query(PRC_NAMES.UPDATE_PAGE, [
      id,
      content,
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

router.delete(
  "/:id",
  validate(idValidater),
  dbDelete(TABLE_NAMES.PAGES),
  asyncHandler(async (req: Request<{ id: number }>, res: Response) => {
    // sending the response
    res.json({
      msg: "Page deleted successfully",
    });
  })
);

export default router;
