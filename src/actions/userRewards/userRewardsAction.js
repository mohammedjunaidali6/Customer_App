import { axiosInstance } from '../axios-config';

export const getUserRewards = async (reqUrl) => await axiosInstance.get(reqUrl);