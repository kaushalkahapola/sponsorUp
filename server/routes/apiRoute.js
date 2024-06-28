import express from "express";
import {
  getApiMessage,
  examplePost,
  emailSignUp,
} from "../controllers/apiController.js";

export const router = express.Router();

router.get("/", getApiMessage);
router.post("/create", examplePost);
router.post("/emailSignUp", emailSignUp);
