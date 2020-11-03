import express from 'express';
import { posts, post, add, edit } from '../Controllers/posts.js';

const router = express.Router();

router.get('/', posts);
router.get('/:id', post);
router.get('/add', add);
router.get('/edit/:id', edit);

export default router;
