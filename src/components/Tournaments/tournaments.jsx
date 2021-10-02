import React, { Fragment, useEffect, useState } from 'react';
import './tournaments.css';
import Back from "../common/back";
import { containerHeightCalcFn } from "../common/global";
import RewardBox from "../common/rewardBox";
import tournament_src from '../../assets/img/ranking.svg';
import store from '../../store/store';
import { getCustomerDetails } from '../common/getStoreData';
import { getData } from '../../api/apiHelper';
import { 
    SERVICE_TYPE,
    GAME_PROD_HOST_URI,
    GAMEPLAYS_BY_CUSTOMER, 
} from '../../api/apiConstants';


export default function Tournaments(props) {
    // console.log('***',props);
    const [customerParticipatedEngagements,setCustomerParticipatedEngagements]=useState([]);
    const [customerNotParticipatedEngagements,setCustomerNotParticipatedEngagements]=useState([]);
    const customer=getCustomerDetails();
    const rewardZoneReducer=store.getState()?.RewardZoneReducer;
    let engagements=rewardZoneReducer?.engagements;


    function gameDetailFn(selectedEngagementData) {
        props.rewardZoneActionHandler.pushSelectedEngagement(selectedEngagementData);
        props.history.push({ pathname: "/gamedetail" });
    }
    function leaderBoardFn(selectedEngagementData) {
        props.rewardZoneActionHandler.pushSelectedEngagement(selectedEngagementData);
        props.history.push('/leaderboard');
    }
    function topCustomerSavingsOpenFn(selectedEngagementData){
        props.rewardZoneActionHandler.pushSelectedEngagement(selectedEngagementData);
        props.history.push('/topcustomersavings');
    }
    
    useEffect(()=>{
        getData(`${GAME_PROD_HOST_URI}${GAMEPLAYS_BY_CUSTOMER}${customer.CustomerID}`,SERVICE_TYPE.GAME)
        .then(res=>{
                if(res){
                    let arr1=[];let arr2=[];
                    engagements=engagements?.forEach(e=>{
                        if(e.IsTournament){
                            let obj=res.find(g=>g.engagement_id===e.EngagementID);
                            if(obj){
                                arr1.push(e);
                            }else{
                                arr2.push(e);
                            }
                        }
                    });
                arr1=arr1.slice(0,10);
                setCustomerParticipatedEngagements(arr1);
                setCustomerNotParticipatedEngagements(arr2);
            }
        });
    },[])


  return(
    <Fragment>
        <Back height="150" parentProps={props} fromRewardZone={false}/>
        <div id="banner-container" className='banner-container-bg' style={{margin:'0 8%'}}>
            <img src={tournament_src} alt='tournaments' className="back-banner-your-tournaments mt-2" />
            <div className='tournaments-header mt-1'>Your Tournaments</div>
        </div>
        <div id="reward-zone-container"style={{ height: containerHeightCalcFn(234), overflowY: 'auto', marginTop: '-62px' }}>
            <div className='tournament-section-header'>Your Recent Tournaments</div>
            {customerParticipatedEngagements&& customerParticipatedEngagements.length > 0 ?
                    <div className="reward-zone-handpicked-items">
                        {customerParticipatedEngagements.map((obj) => (
                            <RewardBox 
                                props={props}
                                engagement={obj}
                                gameDetailFn={gameDetailFn} 
                                customerSavings={topCustomerSavingsOpenFn} 
                                leaderBoardFn={leaderBoardFn} 
                            />
                        ))}
                    </div>
                :
                <div style={{fontSize:'12px', textAlign:'center',opacity:'0.6'}}>
                    You have not participated in any Tournaments
                </div>
            }
            <div className='tournament-section-header'>More Tournaments for Fun</div>
            {customerNotParticipatedEngagements && customerNotParticipatedEngagements.length > 0 &&
                <div className="reward-zone-handpicked-items">
                    {customerNotParticipatedEngagements.map((obj) => (
                        <RewardBox
                            props={props}
                            engagement={obj}
                            gameDetailFn={gameDetailFn} 
                            customerSavings={topCustomerSavingsOpenFn} 
                            leaderBoardFn={leaderBoardFn} 
                        />
                    ))}
                </div>
            }
        </div>
    </Fragment>
  )
}