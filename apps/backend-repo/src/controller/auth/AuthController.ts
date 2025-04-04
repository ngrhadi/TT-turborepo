import { Request, Response } from 'express';
import { auth } from '../../config/firebase.js';

export async function register(req: Request, res: Response): Promise<void> {
  try {
    const { email, password, displayName } = req.body;

    if (!email || !password || !displayName) {
      res.status(400).json({
        status: 'fail',
        message: 'Email, password, and displayName are required',
      });
      return;
    }

    const userRecord = await auth.createUser({
      email,
      password,
      displayName,
    });

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
      },
    });
  } catch (error: any) {
    console.error('Error registering user:', error);
    res.status(500).json({
      status: 'error',
      message: error.message || 'Internal server error',
    });
  }
}

export async function login(req: Request, res: Response): Promise<void> {
  res.status(200).json({ message: 'Logged in successfully' });
}

export async function logout(req: Request, res: Response): Promise<void> {
  res.status(200).json({ message: 'Logged out successfully' });
}
