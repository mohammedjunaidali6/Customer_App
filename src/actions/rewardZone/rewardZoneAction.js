import { axiosInstance } from '../axios-config';

export const getRewardss = async (reqUrl) => await axiosInstance.get(reqUrl);