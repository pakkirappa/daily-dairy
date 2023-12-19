import { Router, Request, Response } from "express";
import asyncHandler from "../middleware/AsyncHandler";
import { JwtDao } from "../constants/types";
import {
  createNoteBookValidator,
  getNoteBookValidator,
  idValidater,
  updateNoteBookValidator,
} from "../lib/Validations";
import { dbDelete, validate } from "../middleware/Validator";
import db from "../db";
import { PRC_NAMES, TABLE_NAMES } from "../constants";
import { BadRequest, NotFound } from "../errors/Errors";

const router = Router();

// creating the user
router.post(
  "/",
  validate(createNoteBookValidator),
  asyncHandler(async (req: any, res: Response) => {
    const { name } = req.body as { name: string };
    const { id } = req.user as JwtDao;

    // creating the notebook
    // p_name, p_user_id

    const [[{ result, code }]] = await db.query(PRC_NAMES.ADD_NOTEBOOK, [
      name,
      id,
    ]);

    if (Number(code) === 400) {
      throw new BadRequest(result);
    } else if (Number(code) === 404) {
      throw new NotFound(result);
    }

    // sending the response
    res.json({
      msg: result,
    });
  })
);

router.get(
  "/",
  validate(getNoteBookValidator),
  asyncHandler(async (req: Request, res: Response) => {
    const { user_id } = req.query as { user_id: string };

    // creating the user
    const notebooks = await db.query(
      `SELECT name,DATE_FORMAT(created_at , '%D-%M-%Y') as created_at , DATE_FORMAT(updated_at , '%D-%M-%Y') as updated_at FROM ${TABLE_NAMES.NOTEBOOKS} WHERE user_id = ?`,
      [user_id]
    );

    // sending the response
    res.json(notebooks);
  })
);

router.patch(
  "/:id",
  validate(idValidater),
  validate(updateNoteBookValidator),
  asyncHandler(async (req: any, res: Response) => {
    const { name } = req.body as { name: string };

    const { id } = req.params as { id: string };

    // creating the user
    // p_user_id,p_notebook_id,p_name
    const [[{ result, code }]] = await db.query(PRC_NAMES.UPDATE_NOTEBOOK, [
      req.user.id,
      id,
      name,
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
  dbDelete(TABLE_NAMES.NOTEBOOKS),
  asyncHandler(async (req: any, res: Response) => {
    // sending the response
    res.json({
      msg: "Notebook Deleted Successfully",
    });
  })
);

export default router;
