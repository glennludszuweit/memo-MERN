import express from 'express';
import { getUsers, addUser } from '../Controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);

export default router;
