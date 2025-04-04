import { Router, Request, Response } from 'express';
import userRoutes from './userRoutes.js';
import authRoutes from './authRoutes.js';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Currently is healthy 🟢',
    timestamp: new Date().toISOString(),
  });
});

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

export default router;
