// controller/user/UserController.ts

import { Request, Response } from 'express';
import { auth, firestore, db } from '../../config/firebase.js'; // firestore has not exported
import { User } from '../../entities/user/User';

// add update-user-data to firebase
// add get fetch-user-data from firebase

export async function getOneUser(req: Request, res: Response): Promise<void> {
    try {
      const { uid } = req.params;
      const userDoc = await db.collection('users').doc(uid).get();

      if (!userDoc.exists) {
        res.status(404).json({ status: 'fail', message: 'User not found' });
        return;
      }

      res.status(200).json({
        status: 'success',
        data: userDoc.data(),
      });
    } catch (error: any) {
      res.status(500).json({ status: 'error', message: error.message });
    }
}
export async function updateUser(req: Request, res: Response): Promise<void> {
  try {
    const { uid } = req.params;
    const updates = req.body;

    await db
      .collection('users')
      .doc(uid)
      .update({
        ...updates,
        updatedAt: new Date(),
      });

    res
      .status(200)
      .json({ status: 'success', message: 'User updated successfully' });
  } catch (error: any) {
    res.status(500).json({ status: 'error', message: error.message });
  }
}

export async function deleteUser(req: Request, res: Response): Promise<void> {
  try {
    const { uid } = req.params;

    await auth.deleteUser(uid);
    await db.collection('users').doc(uid).delete();

    res
      .status(200)
      .json({ status: 'success', message: 'User deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ status: 'error', message: error.message });
  }
}
