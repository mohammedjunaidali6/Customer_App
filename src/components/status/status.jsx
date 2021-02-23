import React from "react";
import Back from "../common/back";
import master_src from '../../assets/img/rewardZone/master.svg';
import Champion_src from '../../assets/img/rewardZone/Champion.svg';
import Novice_src from '../../assets/img/rewardZone/Novice.svg';
import ProgressBar from "../common/progressBar";
import "./status.css";

export default function Status(){
    return(
        <div>
            <Back />
                <div className='w-100 status-container'>
                 <div className='w-100 status-box '>
                    <div className='status-item text-center'>
                        <img src="https://images.all-free-download.com/images/graphicthumb/glowing_green_box_311775.jpg" className='status-image' alt=""/>
                        
                        <div className='status-title text-center '>Status-B</div>
                        <div className='status-intro text-center'>Perform 2 more task to reach status B</div>
                        
                    </div>
                </div> 
                <div className='status-progress w-100 disp-flex'>
                    <div className='status-progress-image'>
                        <img src={Novice_src} className='status-progress-image' alt=""/>
                        <div className='status-progress-label'>NOVICE</div>
                    </div>
                    <ProgressBar percentage="100" />
                    <div className='status-progress-image'>  
                        <img src={master_src} className='status-progress-image' alt=""/>
                        <div className='status-progress-label'>MASTER</div>
                    </div>
                    <ProgressBar percentage="1" />
                    <div className='status-progress-image'>
                        <img src={Champion_src} className='status-progress-image' alt=""/>
                        <div className='status-progress-label'>CHAMPION</div>
                    </div>
                    
                </div>
                
                <div className='w-100 description-box'>
                    <div className='description-title'>Benifits of Step-up</div>
                    <div className='description-content'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    </div>
                </div>
                </div>
        </div>
    )
}