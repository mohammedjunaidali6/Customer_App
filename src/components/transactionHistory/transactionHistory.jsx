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
        <Typography component="div" style={{paddingBottom:  10, margin: "0 20px"}} >
            {props.children}
        </Typography>
    );
}

export default function TransactionHistory(props) {
    const [activeIndex, setactiveIndex] = useState(0);
    const [last10list, setlast10list] = useState(tempArray.filter(e => e.flag === 'last10'));
    const [lastmonthlist, setlastmonthlist] = useState(tempArray.filter(e => e.flag === 'lastmonth'));
    const [lastyearlist, setlastyearlist] = useState(tempArray.filter(e => e.flag === 'lastyear'));

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
    
    return (
        <Fragment>
            <Back parentProps={props} fromTransactionHistory={true} />
            <BackBanner fromTransaction={true} />
            <div id="transaction-history-container" style={{height: containerHeightCalcFn(), overflowY: 'auto'}}>
                <div className="t-h-heading">
                    <span className="t-h-header">Transaction History</span>
                </div>
                <div>
                    <HorizontalTabs value={activeIndex} onChange={(_, activeIndex) => setactiveIndex(activeIndex)} >
                        <MyTab label={<div className={activeIndex === 0 ? `tab-header-active` : `tab-header-inactive`}><span>Last 10 Transaction</span></div>}></MyTab>
                        <MyTab label={<div className={activeIndex === 1 ? `tab-header-active` : `tab-header-inactive`}><span>Last Month</span></div>}></MyTab>
                        <MyTab label={<div className={activeIndex === 2 ? `tab-header-active` : `tab-header-inactive`}><span>Last Year</span></div>}></MyTab>
                    </HorizontalTabs>
                    {activeIndex === 0 && <TabCotainer>
                        {last10list && last10list.length > 0 ? (
                            <Fragment>
                                {last10list.map(obj => (
                                    <div className="t-h-box">
                                        <div className="w-15 float-left clearfix t-h-b-logobox">
                                            <img src={obj.id % 2 ? price_tag_src : gem_small_src} />
                                        </div>
                                        <div className="common-divider float-left clearfix" style={{height: "54px"}}></div>
                                        <div className="w-83 float-left clearfix t-h-b-contentbox">
                                            <div className="t-h-b-header"><span>{obj.offerText}</span></div>
                                            <div className="t-h-b-date"><span>{obj.date}</span></div>
                                        </div>
                                    </div>
                                ))}
                            </Fragment>
                        ) : null}
                    </TabCotainer>}
                    {activeIndex === 1 && <TabCotainer>
                        {lastmonthlist && lastmonthlist.length > 0 ? (
                            <Fragment>
                                {lastmonthlist.map(obj => (
                                    <div className="t-h-box">
                                        <div className="w-15 float-left clearfix t-h-b-logobox">
                                            <img src={obj.id % 2 ? price_tag_src : gem_small_src} />
                                        </div>
                                        <div className="common-divider float-left clearfix" style={{height: "54px"}}></div>
                                        <div className="w-83 float-left clearfix t-h-b-contentbox">
                                            <div className="t-h-b-header"><span>{obj.offerText}</span></div>
                                            <div className="t-h-b-date"><span>{obj.date}</span></div>
                                        </div>
                                    </div>
                                ))}
                            </Fragment>
                        ) : null}
                    </TabCotainer>}
                    {activeIndex === 2 && <TabCotainer>
                        {lastyearlist && lastyearlist.length > 0 ? (
                            <Fragment>
                                {lastyearlist.map(obj => (
                                    <div className="t-h-box">
                                        <div className="w-15 float-left clearfix t-h-b-logobox">
                                            <img src={obj.id % 2 ? price_tag_src : gem_small_src} />
                                        </div>
                                        <div className="common-divider float-left clearfix" style={{height: "54px"}}></div>
                                        <div className="w-83 float-left clearfix t-h-b-contentbox">
                                            <div className="t-h-b-header"><span>{obj.offerText}</span></div>
                                            <div className="t-h-b-date"><span>{obj.date}</span></div>
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
