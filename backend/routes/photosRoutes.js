import express from 'express';
const router = express.Router();
import { deletePhoto, getPhotoById, getPhotos, updatePhoto, createPhoto } from '../controllers/photoController.js'
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getPhotos).post(protect, admin, createPhoto)
router.route('/:id')
    .get(getPhotoById)
    .delete(protect, admin, deletePhoto)
    .put(protect, admin, updatePhoto)


export default router;