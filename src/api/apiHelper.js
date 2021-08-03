import { axiosInstance } from '../actions/axios-config';

function addHeaders(serviceType) {
    let apiKey = '';
    switch (serviceType) {
        case 'GAME':
            apiKey = 'jfvVfOe3bm5oEvY9yn0Ar9FUPLAvpMzu7HPb8XRw';
            break;
        case 'ENGT':
        case 'REPT':
        case 'EVNT':
        case 'IDTY':
        case 'TNET':
            apiKey = 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr';
            break;
    }
    axiosInstance.defaults.headers.common['x-api-key'] = apiKey;
    axiosInstance.defaults.headers.common['x-tenant-key'] = 'TENANT1234';
}

export const getData = async (resource, serviceType) => {
    try {
        addHeaders(serviceType);
        const response = await axiosInstance.get(resource);

        return handleResponse(response);

    } catch (error) {
        console.error('*', error)

        return handleError(error);
    }
};

export const postData = async (resource, postData, serviceType) => {
    try {
        addHeaders(serviceType);
        const response = await axiosInstance.post(resource, postData);

        return handleResponse(response);

    } catch (error) {
        return handleError(error);
    }
};



function handleResponse(response) {
    if (response.status == 200 && response.data?.message == "SUCCESS") {
        return response.data.data;
    } else {
        console.error(`*** `, response.data)
        return null;
    }
}

function handleError(error) {
    console.error(`*** `, error.message)
    return null;
}