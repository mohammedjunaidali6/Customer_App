import React, { Fragment, useEffect, useState } from 'react';
import Back from "../common/back";
import { containerHeightCalcFn } from "../common/global";
import store from "../../store/store";
import GameDetailGameInfo from './gameInfo';
import GameDetailScratchNow from "./scratchNow";
import GameDetailRewards from "./rewards";
import GameDetailWhoElseplaying from "./whoElsePlaying";
import GameDetailHowToPlay from "./howToPlay";
import GCarousel from '../common/carousel';
import './gameDetails.css';
import { postData } from '../../api/apiHelper';
import {
    ENGT_PROD_HOST_URI,
    SERVICE_TYPE,
    ENGAGEMENT_DETAILS_FOR_PLAYER,
} from '../../api/apiConstants';
import { getCustomerDetails } from '../common/getStoreData';


export default function GameDetail(props) {
    // console.log('***', props)
    const rewardZoneReducerData = store.getState().RewardZoneReducer;
    const [allEngagements, setAllEngagements] = useState(rewardZoneReducerData.engagements);
    const [selectedEngagement, setSelectedEngagement] = useState(rewardZoneReducerData.selectedEngagement);
    const [engagementDetails, setEngagementDetails] = useState({});

    var customer=getCustomerDetails();
    var rewardZoneReducer=store.getState().RewardZoneReducer;
    var redeemedAmount=rewardZoneReducer.engagementPurchasedAmounts.find(e=>e.EngagementID==selectedEngagement.EngagementID)?.FormattedAmountRedeemed;

    const carouselItemClick = (data) => {
        props.rewardZoneActionHandler.pushSelectedEngagement(allEngagements[data]);
        setSelectedEngagement(allEngagements[data]);
    }

    useEffect(() => {
        var requestData = {
            EngagementID: selectedEngagement.EngagementID,
            JourneyID: selectedEngagement.JourneyID,
            CustomerID:customer.CustomerID,
            CustomerFullName:customer.FirstName+' '+customer.LastName
        }
        postData(`${ENGT_PROD_HOST_URI}${ENGAGEMENT_DETAILS_FOR_PLAYER}`, requestData, SERVICE_TYPE.ENGT)
            .then(engagementDetails => {
                setEngagementDetails(engagementDetails);
            })
    }, [selectedEngagement])

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
            <GameDetailGameInfo parentProps={props} redeemedAmount={redeemedAmount}/>
            <div style={{ height: containerHeightCalcFn(348), overflowY: 'auto' }}>
                <GameDetailScratchNow
                    selectedGameDetail={selectedEngagement}
                    engagementDetails={engagementDetails}
                    parentProps={props}
                />
                <div className="w-90 disp-flex-root common-divider float-left ml-4" style={{ marginBottom: "12px" }}></div>
                <GameDetailRewards rewards={engagementDetails?.Rewards} />
                <GameDetailWhoElseplaying />
                <GameDetailHowToPlay />
            </div>
        </Fragment>
    )
}
