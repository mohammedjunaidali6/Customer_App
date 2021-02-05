import { axiosInstance } from '../axios-config';

export const login = async (reqUrl) => await axiosInstance.post(reqUrl);