import React from 'react';
import "./notificationPage.css"
import Back from "../common/back";
import { containerHeightCalcFn } from "../common/global";
import defaultuser_src from "../../assets/img/gameDetails/default_user.png";
import { Fragment } from 'react';
// import NotificationDisplayBox from "./notificationDisplayBox.jsx";

const tempArray =[
    {
        id: 1,
        name: "Rayan Mathew",
        intro: "Leading  on Mega Coupon contest",
        date: "03/01/2021",
        time: "02:55 PM"
    },
    {
        id: 2,
        name: "Richard Wills",
        intro: "Won 1st prize in mega contest",
        date: "03/01/2021",
        time: "02:55 PM"
    },
    {
        id: 3,
        name: "Anna Marie R",
        intro: "Your friend holding  2nd position  now",
        date: "03/01/2021",
        time: "02:55 PM"
    },
    {
        id: 4,
        name: "Richard Wills",
        intro: "Won 1st prize in mega contest",
        date: "03/01/2021",
        time: "02:55 PM"
    }
]


export default function Notification(props){
    return(
        <div>
            <Back fromNotification={true} parentProps={props} height="72" backTitle="Notifications" />
             <div className='members-list' style={{height: containerHeightCalcFn(54), overflowY: 'auto'}}>
                {tempArray.map((user)=>(
                    <div className='w-100 float-left clearfix notf-box'>
                        <div className='w-20 float-left clearfix'>
                            <img src={defaultuser_src} className='profile-pic'alt=""/>
                        </div>
                        <div className='w-80 float-left clearfix profile-details'>
                            <div className='profile-name'>{user.name}</div>
                            <div className='profile-intro w-100'>{user.intro}</div>
                            <div className='date-time-container'>
                                <div className='date'>{user.date}</div>
                                <div className='time'>{user.time}</div>
                            </div>
                        </div>
                    </div>
                ))

                }
                 
             </div>
                
    

         
            
         </div> 
    )
}
















// export default function notification(){
//     return(
//         <div>
//         {tempArray.map((user) =>{
//             <NotificationDisplayBox 
//                 id={user.id}
//                 name={user.name}
//                 intro={user.intro}
//                 date={user.date}
//                 time={user.time} />
//         })}
//         </div>
//     )
// }