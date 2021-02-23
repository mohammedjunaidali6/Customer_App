import {GET_STATUS} from '../../constants/actionTypes';


const initialState = {
    statusContent: null
}

const statusReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_STATUS:
            const newState = {...state};
            newState.statusContent = action.payload ? action.payload : null;
            return newState

        default:
            return state;

    }
};

export default statusReducer;