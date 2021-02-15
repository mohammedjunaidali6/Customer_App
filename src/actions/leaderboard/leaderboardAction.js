import { axiosInstance } from '../axios-config';

export const getLeaderBoard = async (reqUrl) => await axiosInstance.get(reqUrl);
export const getLeaderBoardOthersPlaying = async (reqUrl) => await axiosInstance.get(reqUrl);