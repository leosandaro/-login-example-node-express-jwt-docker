import { Router } from 'express';
import { z } from 'zod';
import { connect } from './database';
import jwt from 'jsonwebtoken';
import { authenticate } from './auth';

const router = Router();

router.get('/users', authenticate, async (req, res) => {
  const db = await connect();
  const users = await db.all('SELECT * FROM users');

  res.json(users);
});

export default router;