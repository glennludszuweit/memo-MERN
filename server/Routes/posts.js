import express from 'express';
import { getPosts, getPost, addPost, editPost } from '../Controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/add', addPost);
router.post('/edit/:id', editPost);

export default router;
