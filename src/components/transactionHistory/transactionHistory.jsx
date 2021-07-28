import React, { Fragment, useState } from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Back from "../common/back";
import gem_small_src from '../../assets/img/transactionHistory/gem_small.svg';
import price_tag_src from '../../assets/img/transactionHistory/price-tag.svg';
import gem_src from "../../assets/img/transactionHistory/gem_small.svg";
import './transactionHistory.css';
import { containerHeightCalcFn } from "../common/global";
import BackBanner from "../common/backBanner";
import { useEffect } from 'react';
import { getData } from '../../api/apiHelper';
import { Gameplay_Host_URI, GAME_PROD_HOST_URI, PLAYER_POINTS_BALANCE, SERVICE_TYPE } from '../../api/apiConstants';
import { LastXDays } from '../../constants/globalConstants';


const tempArray = [
    {
        id: 1,
        offerText: 'Earned 200 points on shoping',
        date: '02/01/2021',
        flag: 'last10'
    },
    {
        id: 2,
        offerText: 'Earned 200 points on Mega coupon',
        date: '02/01/2021',
        flag: 'last10'
    },
    {
        id: 3,
        offerText: 'Earned 200 points on shoping',
        date: '02/01/2021',
        flag: 'lastyear'
    },
    {
        id: 4,
        offerText: 'Earned 200 points on Mega coupon',
        date: '02/01/2021',
        flag: 'last10'
    },
    {
        id: 5,
        offerText: 'Earned 200 points on shoping',
        date: '02/01/2021',
        flag: 'lastmonth'
    },
    {
        id: 6,
        offerText: 'Earned 200 points on Mega coupon',
        date: '02/01/2021',
        flag: 'last10'
    },
    {
        id: 7,
        offerText: 'Earned 200 points on shoping',
        date: '02/01/2021',
        flag: 'lastmonth'
    },
    {
        id: 8,
        offerText: 'Earned 200 points on Mega coupon',
        date: '02/01/2021',
        flag: 'last10'
    },
    {
        id: 9,
        offerText: 'Earned 200 points on shoping',
        date: '02/01/2021',
        flag: 'last10'
    },
    {
        id: 10,
        offerText: 'Earned 200 points on Mega coupon',
        date: '02/01/2021',
        flag: 'last10'
    },
    {
        id: 11,
        offerText: 'Earned 200 points on shoping',
        date: '02/01/2021',
        flag: 'last10'
    },
    {
        id: 12,
        offerText: 'Earned 200 points on Mega coupon',
        date: '02/01/2021',
        flag: 'last10'
    },
    {
        id: 13,
        offerText: 'Earned 200 points on shoping',
        date: '02/01/2021',
        flag: 'last10'
    }
];

function TabCotainer(props) {
    return (
        <Typography component="div" style={{ paddingBottom: 10, margin: "0 27px" }} >
            {props.children}
        </Typography>
    );
}

export default function TransactionHistory(props) {
    const [activeIndex, setactiveIndex] = useState(0);
    const [last7DaysPoints, setLast7DaysPoints] = useState();
    const [lastMonthPoints, setLastMonthPoints] = useState();
    const [last6MonthsPoints, setLast6MonthsPoints] = useState();


    const HorizontalTabs = withStyles(theme => ({
        flexcontainer: {
            flexDirection: 'row'
        },
        indicator: {
            display: 'none'
        }
    }))(Tabs);
    const MyTab = withStyles(theme => ({
        selected: {
            color: '#005d98',
            borderBottom: 'none'
        }
    }))(Tab);

    const filterPointsBalance = (activeIndex) => {
        setactiveIndex(activeIndex)
        let LastxDays = activeIndex == 1 ? LastXDays.LastMonth : activeIndex == 2 ? LastXDays.Last6Month : LastXDays.Last7Days;
        getData(`${GAME_PROD_HOST_URI}${PLAYER_POINTS_BALANCE}${LastxDays}`, SERVICE_TYPE.GAME)
            .then(pointsBalance => {
                if (activeIndex == 0) {
                    setLast7DaysPoints(pointsBalance);
                } else if (activeIndex == 1) {
                    setLastMonthPoints(pointsBalance);
                } else if (activeIndex == 2) {
                    setLast6MonthsPoints(pointsBalance);
                }
            });
    }
    const convertDateToLocalDate = (date) => {
        return new Date(date)?.toLocaleDateString()
    }


    useEffect(() => {
        getData(`${GAME_PROD_HOST_URI}${PLAYER_POINTS_BALANCE}${LastXDays.Last7Days}`, SERVICE_TYPE.GAME)
            .then(pointsBalance => {
                console.log('*', pointsBalance)
                setLast7DaysPoints(pointsBalance);
            });
    }, []);


    return (
        <Fragment>
            <Back parentProps={props} fromTransactionHistory={true} height="138" />
            <BackBanner fromTransaction={true} />
            <div id="transaction-history-container" style={{ height: containerHeightCalcFn(234), overflowY: 'auto', marginTop: '-40px' }}>
                <div className="t-h-heading">
                    <span className="t-h-header">Transaction History</span>
                </div>
                <div>
                    <HorizontalTabs value={activeIndex} onChange={(_, activeIndex) => filterPointsBalance(activeIndex)} >
                        <MyTab label={<div className={activeIndex === 0 ? `tab-header-active` : `tab-header-inactive`}>
                            <span>Last 7 Days</span></div>}>
                        </MyTab>
                        <MyTab label={<div className={activeIndex === 1 ? `tab-header-active` : `tab-header-inactive`}>
                            <span>Last Month</span></div>}>
                        </MyTab>
                        <MyTab label={<div className={activeIndex === 2 ? `tab-header-active` : `tab-header-inactive`}>
                            <span>Last 6 Months</span></div>}>
                        </MyTab>
                    </HorizontalTabs>
                    {activeIndex === 0 && <TabCotainer>
                        {last7DaysPoints && last7DaysPoints.length > 0 ? (
                            <Fragment>
                                {last7DaysPoints.map(obj => (
                                    <div className="t-h-box">
                                        <div className="w-15 float-left clearfix t-h-b-logobox">
                                            <img src={gem_small_src} />
                                        </div>
                                        <div className="common-divider float-left clearfix" style={{ height: "54px" }}></div>
                                        <div className="w-82 float-left clearfix t-h-b-contentbox">
                                            <div className="t-h-b-header">
                                                <span>{`Won ${obj.value} Points by ${obj.activity_name}`}</span>
                                            </div>
                                            <div className="t-h-b-date"><span>{convertDateToLocalDate(obj.added_on)}</span></div>
                                        </div>
                                    </div>
                                ))}
                            </Fragment>
                        ) : null}
                    </TabCotainer>}
                    {activeIndex === 1 && <TabCotainer>
                        {lastMonthPoints && lastMonthPoints.length > 0 ? (
                            <Fragment>
                                {lastMonthPoints.map(obj => (
                                    <div className="t-h-box">
                                        <div className="w-15 float-left clearfix t-h-b-logobox">
                                            <img src={gem_small_src} />
                                        </div>
                                        <div className="common-divider float-left clearfix" style={{ height: "54px" }}></div>
                                        <div className="w-82 float-left clearfix t-h-b-contentbox">
                                            <div className="t-h-b-header">
                                                <span>{`Won ${obj.value} Points by ${obj.activity_name}`}</span>
                                            </div>
                                            <div className="t-h-b-date"><span>{convertDateToLocalDate(obj.added_on)}</span></div>
                                        </div>
                                    </div>
                                ))}
                            </Fragment>
                        ) : null}
                    </TabCotainer>}
                    {activeIndex === 2 && <TabCotainer>
                        {last6MonthsPoints && last6MonthsPoints.length > 0 ? (
                            <Fragment>
                                {last6MonthsPoints.map(obj => (
                                    <div className="t-h-box">
                                        <div className="w-15 float-left clearfix t-h-b-logobox">
                                            <img src={gem_small_src} />
                                        </div>
                                        <div className="common-divider float-left clearfix" style={{ height: "54px" }}></div>
                                        <div className="w-82 float-left clearfix t-h-b-contentbox">
                                            <div className="t-h-b-header">
                                                <span>{`Won ${obj.value} Points by ${obj.activity_name}`}</span>
                                            </div>
                                            <div className="t-h-b-date"><span>{convertDateToLocalDate(obj.added_on)}</span></div>
                                        </div>
                                    </div>
                                ))}
                            </Fragment>
                        ) : null}
                    </TabCotainer>}
                </div>
            </div>
        </Fragment>
    )
}
