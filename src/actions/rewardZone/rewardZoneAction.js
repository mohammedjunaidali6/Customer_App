import { axiosInstance } from '../axios-config';

export const getRewards = async (reqUrl) => await axiosInstance.get(reqUrl);