import React, { Fragment, useState } from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Back from "../common/back";
import price_tag_src from '../../assets/img/transactionHistory/price-tag.svg';
import './CustomerSavings.css';
import { containerHeightCalcFn } from "../common/global";
import BackBanner from "../common/backBanner";
import { useEffect } from 'react';
import { postData } from '../../api/apiHelper';
import { CUSTOMER_SAVINGS, ENGT_PROD_HOST_URI, SERVICE_TYPE } from '../../api/apiConstants';
import { LastXDays } from '../../constants/globalConstants';
import { getCustomerDetails } from '../common/getStoreData';


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

    var customer=getCustomerDetails();

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
        let data={
            CustomerID:customer.CustomerID,
            FetchLastX:LastxDays
        }
        postData(`${ENGT_PROD_HOST_URI}${CUSTOMER_SAVINGS}`,data, SERVICE_TYPE.ENGT)
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
        let data={
            CustomerID:customer.CustomerID,
            FetchLastX:LastXDays.Last7Days
        }
        postData(`${ENGT_PROD_HOST_URI}${CUSTOMER_SAVINGS}`,data, SERVICE_TYPE.ENGT)
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
                <div className="c-s-heading">
                    <span className="c-s-header">Amount Saving History</span>
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
                                    <div className="c-s-box">
                                        <div className="w-15 float-left clearfix c-s-b-logobox">
                                            <img src={price_tag_src} />
                                        </div>
                                        <div className="common-divider float-left clearfix" style={{ height: "54px" }}></div>
                                        <div className="float-left clearfix c-s-b-contentbox">
                                            <div className="c-s-b-header">
                                                <span>{`Won ${obj.AmountSaved}/- in ${obj.DisplayName}`}</span>
                                            </div>
                                            <div className="c-s-b-date"><span>{convertDateToLocalDate(obj.RedeemedDate)}</span></div>
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
                                    <div className="c-s-box">
                                        <div className="w-15 float-left clearfix c-s-b-logobox">
                                            <img src={price_tag_src} />
                                        </div>
                                        <div className="common-divider float-left clearfix" style={{ height: "54px" }}></div>
                                        <div className="float-left clearfix c-s-b-contentbox">
                                            <div className="c-s-b-header">
                                                <span>{`Won ${obj.AmountSaved}/- in ${obj.DisplayName}`}</span>
                                            </div>
                                            <div className="c-s-b-date"><span>{convertDateToLocalDate(obj.RedeemedDate)}</span></div>
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
                                    <div className="c-s-box">
                                        <div className="w-15 float-left clearfix c-s-b-logobox">
                                            <img src={price_tag_src} />
                                        </div>
                                        <div className="common-divider float-left clearfix" style={{ height: "54px" }}></div>
                                        <div className="float-left clearfix c-s-b-contentbox">
                                            <div className="c-s-b-header">
                                                <span>{`Won ${obj.AmountSaved}/- in ${obj.DisplayName}`}</span>
                                            </div>
                                            <div className="c-s-b-date"><span>{convertDateToLocalDate(obj.RedeemedDate)}</span></div>
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
