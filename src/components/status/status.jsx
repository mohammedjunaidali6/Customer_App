import React from "react";
import { useTranslation } from "react-i18next";
import Back from "../common/back";
import master_src from '../../assets/img/rewardZone/master.svg';
import Champion_src from '../../assets/img/rewardZone/Champion.svg';
import Novice_src from '../../assets/img/rewardZone/Novice.svg';
import Group_src from '../../assets/img/status/Group.svg';
import ProgressBar from "../common/progressBar";
import "./status.css";

export default function Status(props){
    const { t, i18n } = useTranslation();

    return(
        <div>
            <Back fromStatus={true} parentProps={props} />
            <div className='w-100 status-container'>
                 <div className='w-100 status-box '>
                    <div className='w-100 status-item text-center'>
                        <img src={Group_src} className='status-image' alt=""/>
                        <div className='status-title text-center '>{t('status.status')}</div>
                        <div className='status-intro text-center'>{t('status.taskMessage')}</div>
                    </div>
                </div> 
                <div className='status-progress w-100 disp-flex'>
                    <div className='status-progress-image'>
                        <img src={Novice_src} className='status-progress-image' alt=""/>
                        <div className='status-progress-label'>{t('status.novice')}</div>
                    </div>
                    <ProgressBar percentage="100" />
                    <div className='status-progress-image'>  
                        <img src={master_src} className='status-progress-image' alt=""/>
                        <div className='status-progress-label'>{t('status.master')}</div>
                    </div>
                    <ProgressBar percentage="1" />
                    <div className='status-progress-image'>
                        <img src={Champion_src} className='status-progress-image' alt=""/>
                        <div className='status-progress-label'>{t('status.champion')}</div>
                    </div>
                    
                </div>
                
                <div className='w-100 description-box'>
                    <div className='description-title text-left'>{t('status.benifits')}</div>
                    <div className='description-content'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    </div>
                </div>
            </div>
        </div>
    )
}