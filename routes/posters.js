import express from 'express';

import {
  getAllPosters,
  getPosters,
  createPoster,
  getPosterById,
  updatePoster,
  deletePoster,
} from '../controllers/Poster.js';

import uploadImg from '../middleware/uploadImg.js';

const router = express.Router();

router.get('/all', getAllPosters);
router.get('/posters', getPosters);
router.get('/:id', getPosterById);
router.post('/', uploadImg.single('poster'), createPoster);
router.patch('/:id', updatePoster);
router.delete('/:id', deletePoster);

export default router;