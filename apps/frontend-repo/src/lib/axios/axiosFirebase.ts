import axios from 'axios';

const axiosFirebase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FUNCTION_BASE_URL || 'http://127.0.0.1:5001/YOUR_PROJECT/REGION',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosFirebase;
