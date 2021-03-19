import { axiosInstance } from '../axios-config';

export const getGameDetail = async (reqUrl) => await axiosInstance.get(reqUrl);