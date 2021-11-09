import express from 'express';
const router = express.Router();
import { deleteExpo, getExpoById, getExpos, updateExpo, createExpo } from '../controllers/expoController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/')
    .get(getExpos)
    .post(protect, admin, createExpo)
router.route('/:id')
    .get(getExpoById)
    .delete(protect, admin, deleteExpo)
    .put(protect, admin, updateExpo)


export default router;