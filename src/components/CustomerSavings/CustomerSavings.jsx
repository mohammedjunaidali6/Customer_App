import React, { Fragment, useState } from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Back from "../common/back";
import gem_small_src from '../../assets/img/transactionHistory/gem_small.svg';
import price_tag_src from '../../assets/img/transactionHistory/price-tag.svg';
import './CustomerSavings.css';
import { containerHeightCalcFn } from "../common/global";
import BackBanner from "../common/backBanner";
import { useEffect } from 'react';
import { getData } from '../../api/apiHelper';
import { Engagement_Host_URI, Gameplay_Host_URI } from '../../api/apiConstants';
import { LastXDays } from '../../constants/globalConstants';
import store from '../../../src/store/store';

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

export default function CustomerSavings(props) {
    const [activeIndex, setactiveIndex] = useState(0);
    const [last7DaysSavings, setLast7DaysSavings] = useState();
    const [lastMonthSavings, setLastMonthSavings] = useState();
    const [last6MonthsSavings, setLast6MonthsSavings] = useState();


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
        getData(`${Engagement_Host_URI}/engt/customersavings?player_id=${1}&fetchLastX=${LastxDays}`)
            .then(customerSavings => {
                if (activeIndex == 0) {
                    setLast7DaysSavings(customerSavings);
                } else if (activeIndex == 1) {
                    setLastMonthSavings(customerSavings);
                } else if (activeIndex == 2) {
                    setLast6MonthsSavings(customerSavings);
                }
            });
    }
    const convertDateToLocalDate = (date) => {
        return new Date(date)?.toLocaleDateString()
    }


    useEffect(() => {
        getData(`${Engagement_Host_URI}/engt/customersavings?player_id=${1}&fetchLastX=Last7Days`)
            .then(customerSavings => {
                setLast7DaysSavings(customerSavings)
                props.customerSavingsActionHandler.dispathCustomerSavings(customerSavings);
            });
    }, []);


    return (
        <Fragment>
            <Back parentProps={props} fromTransactionHistory={true} height="138" />
            <BackBanner fromCustomerSavings={true} />
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
                        {last7DaysSavings && last7DaysSavings.length > 0 ? (
                            <Fragment>
                                {last7DaysSavings.map(obj => (
                                    <div className="t-h-box">
                                        <div className="w-15 float-left clearfix t-h-b-logobox">
                                            <img src={price_tag_src} />
                                        </div>
                                        <div className="common-divider float-left clearfix" style={{ height: "54px" }}></div>
                                        <div className="w-83 float-left clearfix t-h-b-contentbox">
                                            <div className="t-h-b-header"><span>{obj.CouponRedeemed}</span></div>
                                            <div className="t-h-b-date"><span>{convertDateToLocalDate(obj.RedeemedDate)}</span></div>
                                        </div>
                                    </div>
                                ))}
                            </Fragment>
                        ) : null}
                    </TabCotainer>}
                    {activeIndex === 1 && <TabCotainer>
                        {lastMonthSavings && lastMonthSavings.length > 0 ? (
                            <Fragment>
                                {lastMonthSavings.map(obj => (
                                    <div className="t-h-box">
                                        <div className="w-15 float-left clearfix t-h-b-logobox">
                                            <img src={price_tag_src} />
                                        </div>
                                        <div className="common-divider float-left clearfix" style={{ height: "54px" }}></div>
                                        <div className="w-83 float-left clearfix t-h-b-contentbox">
                                            <div className="t-h-b-header"><span>{obj.CouponRedeemed}</span></div>
                                            <div className="t-h-b-date"><span>{convertDateToLocalDate(obj.RedeemedDate)}</span></div>
                                        </div>
                                    </div>
                                ))}
                            </Fragment>
                        ) : null}
                    </TabCotainer>}
                    {activeIndex === 2 && <TabCotainer>
                        {last6MonthsSavings && last6MonthsSavings.length > 0 ? (
                            <Fragment>
                                {last6MonthsSavings.map(obj => (
                                    <div className="t-h-box">
                                        <div className="w-15 float-left clearfix t-h-b-logobox">
                                            <img src={price_tag_src} />
                                        </div>
                                        <div className="common-divider float-left clearfix" style={{ height: "54px" }}></div>
                                        <div className="w-83 float-left clearfix t-h-b-contentbox">
                                            <div className="t-h-b-header"><span>{obj.CouponRedeemed}</span></div>
                                            <div className="t-h-b-date"><span>{convertDateToLocalDate(obj.RedeemedDate)}</span></div>
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
