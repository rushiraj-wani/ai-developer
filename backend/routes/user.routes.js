import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { body } from "express-validator";

const router = Router();

router.post(
  "/register",
  body("email").isEmail().withMessage("Email must be a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must include at least one special character")
    .matches(/[A-Z]/)
    .withMessage("Password must include at least one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password must include at least one lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must include at least one number"),
  userController.createUserController
);

export default router;