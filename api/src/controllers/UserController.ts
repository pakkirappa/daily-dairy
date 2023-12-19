import { Router, Request, Response } from "express";
import asyncHandler from "../middleware/AsyncHandler";
import { RegisterDto } from "../constants/types";

const router = Router();

// creating the user
router.post(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password, username } = req.body as RegisterDto;
  })
);

export default router;
