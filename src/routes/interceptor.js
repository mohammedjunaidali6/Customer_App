import axios from 'axios';
import { axiosInstance, requestHandler, errorHandler, successHandler } from '../actions/axios-config';

export default function InterceptorsFn() {
    var axiosInstanceAjaxCAllPending = 0;
    var axiosAjaxCAllPending = 0;

    axiosInstance.interceptors.request.use((request) => {
        axiosInstanceAjaxCAllPending++;
        sessionStorage.setItem('axiosInstanceAjaxCAllPending', axiosInstanceAjaxCAllPending);
        sessionStorage.setItem('api_inprogress', true);
        return requestHandler(request);
    }, (error) => {
        sessionStorage.removeItem('api_inprogress');
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use((response) => {
        axiosInstanceAjaxCAllPending--;
        sessionStorage.setItem('axiosInstanceAjaxCAllPending', axiosInstanceAjaxCAllPending);
        if (axiosInstanceAjaxCAllPending === 0) {
        sessionStorage.removeItem('api_inprogress');
        sessionStorage.removeItem('axiosInstanceAjaxCAllPending');
        }
        return successHandler(response);
    }, (error) => {
        axiosInstanceAjaxCAllPending--;
        sessionStorage.setItem('axiosInstanceAjaxCAllPending', axiosInstanceAjaxCAllPending);
        if (axiosInstanceAjaxCAllPending === 0) {
        sessionStorage.removeItem('api_inprogress');
        sessionStorage.removeItem('axiosInstanceAjaxCAllPending');
        }
        return errorHandler(error);
    });

    axios.interceptors.request.use((request) => {
        axiosAjaxCAllPending++;
        sessionStorage.setItem('api_inprogress', true);
        return requestHandler(request);
    }, (error) => {
        sessionStorage.removeItem('api_inprogress');
        return Promise.reject(error);
    });

    axios.interceptors.response.use((response) => {
        axiosAjaxCAllPending--;
        if (axiosAjaxCAllPending === 0) {
        sessionStorage.removeItem('api_inprogress');
        }
        return successHandler(response);
    }, (error) => {
        axiosAjaxCAllPending--;
        if (axiosAjaxCAllPending === 0) {
        sessionStorage.removeItem('api_inprogress');
        }
        return errorHandler(error);
    });
}