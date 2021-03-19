import { axiosInstance } from '../axios-config';

export const getUsers = async (reqUrl) => await axiosInstance.get(reqUrl);