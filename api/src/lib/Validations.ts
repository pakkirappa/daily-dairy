import { body, param, query } from "express-validator";
import { LEAD_STATUS, PRIORITY, TASK_STATUS } from "../constants";

// validator for source
export const sourceValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .trim()
    .withMessage("Name must be at least 3 characters long"),
];

// validator for team
export const teamValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .trim()
    .withMessage("Name must be at least 3 characters long"),
];

export const projectTypeVadlidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .trim()
    .withMessage("Name must be at least 3 characters long"),
];

export const projectStatusValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),
];

export const leadValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .trim()
    .withMessage("Name must be at least 3 characters long"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid"),
  body("phoneNumber")
    .notEmpty()
    .withMessage("Phone Number is required")
    .isMobilePhone("any")
    .withMessage("Phone Number must be valid"),
  body("source")
    .notEmpty()
    .withMessage("Source is required")
    .isObject()
    .withMessage("Source must be valid"),
  body("address").notEmpty().withMessage("Address is required"),
  body("companyName").notEmpty().withMessage("Company Name is required"),
  body("projectType")
    .notEmpty()
    .withMessage("Project Type is required")
    .isObject()
    .withMessage("Project Type must be valid"),
  body("projectType.id")
    .notEmpty()
    .withMessage("Project Type is required")
    .isInt()
    .withMessage("Project Type must be valid"),
  body("source.id")
    .notEmpty()
    .withMessage("Source is required")
    .isInt()
    .withMessage("Source must be valid"),
];

export const resourceValidator = [
  body("project")
    .notEmpty()
    .withMessage("Project is required")
    .isObject()
    .withMessage("Project must be valid"),
  body("project.id")
    .notEmpty()
    .withMessage("Project.Id is required")
    .isInt()
    .withMessage("Project.Id must be valid"),
];

export const projectValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .trim()
    .withMessage("Name must be at least 3 characters long"),
  body("totalCost")
    .notEmpty()
    .withMessage("Total Cost is required")
    .isNumeric()
    .withMessage("Total Cost must be valid"),
  body("discount")
    .notEmpty()
    .withMessage("Discount is required")
    .isNumeric()
    .withMessage("Discount must be valid"),
  body("finalCost")
    .notEmpty()
    .withMessage("Final Cost is required")
    .isNumeric()
    .withMessage("Final Cost must be valid"),
  body("lead")
    .notEmpty()
    .withMessage("Lead is required")
    .isObject()
    .withMessage("Lead must be valid"),
  body("lead.id")
    .notEmpty()
    .withMessage("Lead.Id is required")
    .isInt()
    .withMessage("Lead.Id must be valid"),
  body("closedBy")
    .notEmpty()
    .withMessage("Closed By is required")
    .isObject()
    .withMessage("Closed By must be valid"),
  body("closedBy.id")
    .notEmpty()
    .withMessage("Closed By.Id is required")
    .isInt()
    .withMessage("Closed By.Id must be valid"),
  body("projectStatus")
    .notEmpty()
    .withMessage("Project Status is required")
    .isObject()
    .withMessage("Project Status must be valid"),
  body("projectStatus.id")
    .notEmpty()
    .withMessage("Project Status.Id is required")
    .isInt()
    .withMessage("Project Status.Id must be valid"),
];

export const projectActitvityValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .trim()
    .withMessage("Name must be at least 3 characters long"),
];

export const projectAccessValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .trim()
    .withMessage("Name must be at least 3 characters long"),
];

export const feedbackValidator = [
  body("feedback")
    .notEmpty()
    .withMessage("Feedback is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),
  body("project")
    .notEmpty()
    .withMessage("Project is required")
    .isObject()
    .withMessage("Project must be valid"),
  body("project.id")
    .notEmpty()
    .withMessage("Project.Id is required")
    .isInt()
    .withMessage("Project.Id must be valid"),
  body("employee")
    .notEmpty()
    .withMessage("Employee is required")
    .isObject()
    .withMessage("Employee must be valid"),
  body("employee.id")
    .notEmpty()
    .withMessage("Employee.Id is required")
    .isInt()
    .withMessage("Employee.Id must be valid"),
];

export const commentValidator = [
  body("comment")
    .notEmpty()
    .withMessage("Comment is required")
    .isLength({ min: 3 })
    .withMessage("Comment must be at least 3 characters long"),
  body("project")
    .notEmpty()
    .withMessage("Project is required")
    .isObject()
    .withMessage("Project must be valid"),
  body("project.id")
    .notEmpty()
    .withMessage("Project.Id is required")
    .isInt()
    .withMessage("Project.Id must be valid"),
  body("employee")
    .notEmpty()
    .withMessage("Employee is required")
    .isObject()
    .withMessage("Employee must be valid"),
  body("employee.id")
    .notEmpty()
    .withMessage("Employee.Id is required")
    .isInt()
    .withMessage("Employee.Id must be valid"),
];

export const ticketValidator = [
  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters long"),
];

export const targetValidator = [
  body("employee")
    .notEmpty()
    .withMessage("Employee is required")
    .isObject()
    .withMessage("Employee must be valid"),
  body("employee.id")
    .notEmpty()
    .withMessage("Employee.Id is required")
    .isInt()
    .withMessage("Employee.Id must be valid"),
  body("amount")
    .notEmpty()
    .withMessage("Amount is required")
    .isNumeric()
    .withMessage("Amount must be valid"),
  body("fromDate")
    .notEmpty()
    .withMessage("From Date is required")
    .isDate({ delimiters: ["-", "/"], format: "DD-MM-YYYY" })
    .withMessage("From Date must be valid")
    .custom((value, { req }) => {
      if (value > req.body.toDate) {
        throw new Error("From Date must be less than To Date");
      }
      return true;
    })
    .toDate(),
  body("toDate")
    .notEmpty()
    .withMessage("To Date is required")
    .isDate({ delimiters: ["-", "/"], format: "DD-MM-YYYY" })
    .withMessage("To Date must be valid")
    .custom((value, { req }) => {
      if (value < req.body.fromDate) {
        throw new Error("To Date must be greater than From Date");
      }
      return true;
    })
    .toDate(),
];

export const employeeValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid"),
  body("mobileNumber")
    .notEmpty()
    .withMessage("Mobile Number is required")
    .isMobilePhone("any")
    .withMessage("Mobile Number must be valid"),
  body("team")
    .notEmpty()
    .withMessage("Team is required")
    .isObject()
    .withMessage("Team must be valid"),
  body("team.id")
    .notEmpty()
    .withMessage("Team.Id is required")
    .isInt()
    .withMessage("Team.Id must be valid"),
];

export const roleValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),
  body("permissions")
    .notEmpty()
    .withMessage("Permissions is required")
    .isArray()
    .withMessage("Permissions must be valid"),
];
export const saleTaskValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .trim()
    .withMessage("Name must be at least 3 characters long"),
  body("status")
    .notEmpty()
    .withMessage("Status is required")
    .isIn([TASK_STATUS.IN_PROGRESS, TASK_STATUS.COMPLETED, TASK_STATUS.PENDING])
    .withMessage(
      `Status must be in ${TASK_STATUS.IN_PROGRESS}, ${TASK_STATUS.PENDING}, ${TASK_STATUS.COMPLETED}`
    )
    .trim(),
  body("priority")
    .notEmpty()
    .withMessage("Priority is required")
    .isIn([PRIORITY.HIGH, PRIORITY.LOW, PRIORITY.MEDIUM])
    .withMessage(
      `Priority must be in ${PRIORITY.HIGH}, ${PRIORITY.LOW}, ${PRIORITY.MEDIUM}`
    )
    .trim(),
  body("dueDate")
    .notEmpty()
    .withMessage("Due Date is required")
    .isDate({ delimiters: ["-", "/"], format: "DD-MM-YYYY" })
    .withMessage("Due Date must be valid")
    .toDate(),
  body("remind")
    .notEmpty()
    .withMessage("Remind is required")
    .isBoolean()
    .withMessage("Remind must be valid"),
  body("lead")
    .notEmpty()
    .withMessage("Lead is required")
    .isObject()
    .withMessage("Lead must be valid"),
  body("lead.id")
    .notEmpty()
    .withMessage("Lead.Id is required")
    .isInt()
    .withMessage("Lead.Id must be valid"),
];

export const idValidater = [
  param("id").isInt().withMessage("Id must be a number"),
];
