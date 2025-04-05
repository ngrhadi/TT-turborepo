import axiosFirebase from '@/lib/axios/axiosFirebase';

export const getTimeServer = async (): Promise<string> => {
  const response = await axiosFirebase.get(`/getServerTime`);
  return response.data?.data?.serverTime;
};
