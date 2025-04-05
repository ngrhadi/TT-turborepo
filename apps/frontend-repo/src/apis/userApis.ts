import axios from '@/lib/axios/axiosIntance';
import { UserDetails } from '@/types/User/user';

export const getUserData = async (uid: string): Promise<UserDetails> => {
  const response = await axios.get(`/users/fetch-user-data/${uid}`);
  return response.data.data;
};


export const updateUserData = async (
  uid: string,
  updates: Partial<UserDetails>
): Promise<void> => {
  await axios.put(`/users/update-user-data/${uid}`, updates);
};
