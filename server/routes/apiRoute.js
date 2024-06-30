import express from "express";
import { validateEmailSignUp } from "../middlewares/validationMiddleware.js";
import {
  getApiMessage,
  examplePost,
  emailSignUp,
} from "../controllers/apiController.js";

import {
  createEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/apiControllerEvent.js";

export const router = express.Router();

router.get("/", getApiMessage);
router.post("/create", examplePost);
router.post("/signup", validateEmailSignUp, emailSignUp);
router.post("/createEvent", createEvent);
router.get("/getEvents", getEvents);
router.get("/getEvent", getEvent);
router.post("/updateEvent", updateEvent);
router.post("/deleteEvent", deleteEvent);
