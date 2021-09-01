import store from "../../store/store";


export const getCustomerDetails=()=>{
    var landingReducer=store.getState().LandingReducer;
    console.log('*** Customer ***',landingReducer?.customerDetails);
    return landingReducer?.customerDetails;
}
