import express from 'express';
import { getApiMessage, examplePost } from '../controllers/apiController.js';

export const router = express.Router();

router.get('/', getApiMessage);
router.post('/create', examplePost);

