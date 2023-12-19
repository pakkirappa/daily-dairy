import { body, param, query } from "express-validator";

export const getNoteBookValidator = [
  query("user_id")
    .notEmpty()
    .withMessage("User Id must not be empty")
    .isInt()
    .withMessage("User Id must be a number"),
];

export const getPageValidator = [
  query("notebook_id")
    .notEmpty()
    .withMessage("User Id must not be empty")
    .isInt()
    .withMessage("User Id must be a number"),
];

export const createUserValidator = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ min: 3 })
    .withMessage("Name must be atleast 3 characters long"),
  body("username")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3 })
    .withMessage("Username must be atleast 3 characters long"),
  body("email").isEmail().withMessage("Email must be a valid email address"),
  body("password")
    .isString()
    .withMessage("Password must be a string")
    .isLength({ min: 6, max: 8 })
    .withMessage("Password must be atleast 6 and max 8 characters long"),
];

export const updateUserValidator = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ min: 3 })
    .withMessage("Name must be atleast 3 characters long"),
  body("username")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3 })
    .withMessage("Username must be atleast 3 characters long"),
  body("email").isEmail().withMessage("Email must be a valid email address"),
];

export const userLoginValidater = [
  body("username")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3 })
    .withMessage("Username must be atleast 3 characters long"),
  body("password")
    .isString()
    .withMessage("Password must be a string")
    .isLength({ min: 6, max: 8 })
    .withMessage("Password must be atleast 6 and max 8 characters long"),
];

export const createNoteBookValidator = [
  body("name")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3 })
    .withMessage("Username must be atleast 3 characters long"),
];

export const updateNoteBookValidator = [
  body("name")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3 })
    .withMessage("Username must be atleast 3 characters long"),
];

export const createPageValidator = [
  body("content")
    .notEmpty()
    .withMessage("Content Is Required")
    .isString()
    .withMessage("Content must be a string"),
  body("notebook_id")
    .notEmpty()
    .withMessage("Notebook Id must not be empty")
    .isInt()
    .withMessage("Notebook Id must be a number"),
];

export const updatePageValidator = [
  body("content")
    .notEmpty()
    .withMessage("Content must not be empty")
    .isString()
    .withMessage("Content must be a string"),
];

export const idValidater = [
  param("id").isInt().withMessage("Id must be a number"),
];
