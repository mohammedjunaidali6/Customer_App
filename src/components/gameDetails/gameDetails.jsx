import React, { Fragment, useEffect, useState } from 'react';
import './gameDetails.css';
import Back from "../common/back";
import { containerHeightCalcFn } from "../common/global";
import store from "../../store/store";
import GameDetailGameInfo from './gameInfo';
import GameDetailScratchNow from "./scratchNow";
import GameDetailRewards from "./rewards";
import GameDetailWhoElseplaying from "./whoElsePlaying";
import GameDetailHowToPlay from "./howToPlay";
import GCarousel from '../common/carousel';
import { getCustomerDetails } from '../common/getStoreData';
import dots_progress from '../../assets/img/dots-progress.gif';
import { getData, postData } from '../../api/apiHelper';
import {
    ENGT_PROD_HOST_URI,
    SERVICE_TYPE,
    ENGAGEMENT_DETAILS_FOR_PLAYER,
    ENGAGEMENT_SUMMARY,
} from '../../api/apiConstants';


export default function GameDetail(props) {
    // console.log('***', props)
    const rewardZoneReducerData = store.getState().RewardZoneReducer;
    const [allEngagements, setAllEngagements] = useState(rewardZoneReducerData.engagements);
    const [selectedEngagement, setSelectedEngagement] = useState(rewardZoneReducerData.selectedEngagement);
    const [engagementDetails, setEngagementDetails] = useState({});
    const [engagementSummary,setEngagementSummary]=useState({});
    const [loadingRewards, setLoadingRewards] = useState(true);
    const [loadingSummary, setLoadingSummary] = useState(true);


    var customer=getCustomerDetails();

    const carouselItemClick = (data) => {
        props.rewardZoneActionHandler.pushSelectedEngagement(allEngagements[data]);
        setSelectedEngagement(allEngagements[data]);
    }

    useEffect(() => {
        setLoadingRewards(true)
        var requestData = {
            EngagementID: selectedEngagement.EngagementID,
            IsTournament:selectedEngagement.IsTournament,
            JourneyID: selectedEngagement.JourneyID,
            CustomerID:customer.CustomerID,
            CustomerFullName:customer.FirstName+' '+customer.LastName
        }
        postData(`${ENGT_PROD_HOST_URI}${ENGAGEMENT_DETAILS_FOR_PLAYER}`, requestData, SERVICE_TYPE.ENGT)
            .then(engagementDetails => {
                setEngagementDetails(engagementDetails);
            })
        setLoadingRewards(false)
    }, [selectedEngagement])

    useEffect(()=>{
        setLoadingSummary(true)
        getData(`${ENGT_PROD_HOST_URI}${ENGAGEMENT_SUMMARY}${selectedEngagement?.EngagementID}`,SERVICE_TYPE.ENGT)
        .then(res=>{
                setEngagementSummary(res);
            })
        setLoadingSummary(false)
    },[])


    return (
        <Fragment>
            <Back parentProps={props} height="235" fromGameDetail={true} />
            {/* <GCarousel data={allEngagements}
                fromGameDetail={true}
                centerMode={true}
                centerSlidePercentage={80}
                carouselItemClick={carouselItemClick} >
            </GCarousel> */}
            <img className='g-d-carousel' style={{height:'28%',width:'100%'}} src={selectedEngagement.Game?.BannerImageUrl} alt='Game Banner'/>
             
            {loadingSummary ? 
            <img src={dots_progress} height='20%' width='40%' style={{margin:'20% 30%'}}/> :
            <GameDetailGameInfo
                parentProps={props}
                engagementSummary={engagementSummary}
                isTourn={selectedEngagement?.IsTournament}
                />  }
            <div style={{ height: containerHeightCalcFn(348), overflowY: 'auto' }}>
                <GameDetailScratchNow
                    selectedGameDetail={selectedEngagement}
                    engagementDetails={engagementDetails}
                    parentProps={props}
                />
                <div className="w-90 disp-flex-root common-divider float-left ml-4" style={{ marginBottom: "12px" }}></div> 
                <div height="100px">
                    {loadingRewards ?
                    <img src={dots_progress} alt="Loading..." height='20%' width='40%' style={{margin:'20% 30%'}}/>:
                    <GameDetailRewards engagement={selectedEngagement} rewards={engagementDetails?.Rewards} /> }
                </div>
                <GameDetailWhoElseplaying />
                <GameDetailHowToPlay />
            </div>
        </Fragment>
    )
}
