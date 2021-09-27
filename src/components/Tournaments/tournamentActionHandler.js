import { SET_TOURNAMENTS} from '../../constants/actionTypes';

export function dispatchTournaments(data) {
  return (dispatch) => {
    dispatch({
      type: SET_TOURNAMENTS,
      payload: data,
    });
  };
}