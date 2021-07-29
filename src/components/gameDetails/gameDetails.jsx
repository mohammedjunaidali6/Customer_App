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


export default function GameDetail(props) {
    console.log('**', props);
    const rewardZoneReducerData = store.getState().RewardZoneReducer;
    const [allEngagements, setAllEngagements] = useState(rewardZoneReducerData.engagements);
    const [selectedEngagement, setSelectedEngagement] = useState(rewardZoneReducerData.selectedEngagement);
    const [engagementDetails, setEngagementDetails] = useState();

    const carouselItemClick = (data) => {
        props.rewardZoneActionHandler.pushSelectedReward(allEngagements[data]);
        setSelectedEngagement(rewardZoneReducerData.selectedEngagement);
    }

    useEffect(() => {
        var requestData = {
            EngagementID: selectedEngagement.EngagementID,
            JourneyID: selectedEngagement.JourneyID
        }
        postData(`${ENGT_PROD_HOST_URI}${ENGAGEMENT_DETAILS_FOR_PLAYER}`, requestData, SERVICE_TYPE.ENGT)
            .then(engagementDetails => {
                console.log('***', engagementDetails)
                setEngagementDetails(engagementDetails);
            })
    }, [selectedEngagement])

    return (
        <Fragment>
            <Back parentProps={props} height="264" fromGameDetail={true} />
            <GCarousel data={allEngagements}
                fromGameDetail={true}
                centerMode={true}
                centerSlidePercentage={80}
                carouselItemClick={carouselItemClick} >
            </GCarousel>
            <GameDetailGameInfo parentProps={props} />
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
