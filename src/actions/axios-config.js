import axios from 'axios';
import { toast } from 'react-toastify';
import { headers } from '.././api/apiConstants';

export const axiosInstance = axios.create({});

export const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? false : true
}

export const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {

    }
    return request;
}

export const errorHandler = (error) => {
    if (isHandlerEnabled(error.config)) {

    }
    // let errMsg = error.message;
    // if(errMsg.includes("401")) {
    //     // toast.error("Your access token expired, please login to Web Console");
    //     setTimeout(function(){
    //         localStorage.clear();
    //         sessionStorage.clear();
    //         window.location.replace('/auth/signout');
    //     }, 2000);
    //     return false;
    // }
    // if(!errMsg.includes("'cancelToken'")) {
    //     toast.error(error.message);
    // }
    return Promise.reject({ ...error })
}

export const successHandler = (response) => {
    if (isHandlerEnabled(response.config)) {
        // if(response.data.IsValid === false) {
        //   toast.error(response.data.ResultMessage);
        //   if(response.data.ResultMessage && response.data.ResultMessage.includes('status: Unauthorized')) {
        //       setTimeout(function(){
        //           localStorage.clear();
        //           sessionStorage.clear();
        //           window.location.replace('/auth/signout');
        //       }, 2000);
        //   }
        // }
    }
    return response
}