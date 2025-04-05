import { Request, Response } from 'express';
import {
  sendSuccess,
  sendFail,
  sendError,
} from '../../utils/responseHandler.js';
import { auth, db } from '../../config/firebase.js';
import { User } from '../../entities/user/User.js';

export async function getOneUser(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;

    if (!id) {
      sendFail(res, 'User ID is required', 400);
      return;
    }

    const userDoc = await db.collection('users').doc(id).get();

    if (!userDoc.exists) {
      sendFail(res, 'User not found', 404);
      return;
    }

    const user = new User(userDoc.data()!);

    sendSuccess(res, 'User fetched successfully', user);
  } catch (error: any) {
    sendError(res, error);
  }
}

export async function updateUser(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (!id || !updates) {
      res
        .status(400)
        .json({ status: 'fail', message: 'id and updates are required' });
      return;
    }

    await db
      .collection('users')
      .doc(id)
      .update({
        ...updates,
        updatedAt: new Date(),
      });

    const updatedUserDoc = await db.collection('users').doc(id).get();
    const updatedUser = new User(updatedUserDoc.data()!);

    sendSuccess(res, 'User updated successfully', updatedUser);
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
