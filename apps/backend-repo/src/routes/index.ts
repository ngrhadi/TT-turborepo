import { Router, Request, Response } from 'express';
import userRoutes from './userRoutes.js';
import { db } from '../config/firebase.js';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Currently is healthy 🟢',
    timestamp: new Date().toISOString(),
  });
});

router.get('/test-paginate-user', async (req, res) => {
  try {
    const testUsers = [
      {
        id: 'userA',
        totalAverageWeightRatings: 4.3,
        numberOfRents: 30,
        recentlyActive: 1738938812 * 1000,
      },
      {
        id: 'userB',
        totalAverageWeightRatings: 4.3,
        numberOfRents: 30,
        recentlyActive: 1738679612 * 1000,
      },
      {
        id: 'userC',
        totalAverageWeightRatings: 4.3,
        numberOfRents: 28,
        recentlyActive: 1738679612 * 1000,
      },
    ];

    const batch = db.batch();
    testUsers.forEach((user) => {
      const docRef = db.collection('TEST_USERS').doc(user.id);

      const score =
        user.totalAverageWeightRatings * 100000 +
        user.numberOfRents * 100 +
        user.recentlyActive / 10000000000;

      batch.set(docRef, {
        ...user,
        score,
      });
    });

    await batch.commit();

    const snapshot = await db
      .collection('TEST_USERS')
      .orderBy('score', 'desc')
      .limit(10)
      .get();

    const users = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

router.use('/users', userRoutes);

export default router;
