import { axiosInstance } from '../axios-config';

export const getTransactionHistory = async (reqUrl) => await axiosInstance.get(reqUrl);