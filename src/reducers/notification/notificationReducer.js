import {GET_NOTIFICATION} from '../../constants/actionTypes';

const initialState = {
    notificationList: null
};

const NotificationReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_NOTIFICATION:
            const newState = {...state};
            newState.notification = action.payload ? action.payload : null;

        default:
            return {...state};


    }
};

export default NotificationReducer;