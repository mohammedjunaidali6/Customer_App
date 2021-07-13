import React from 'react';
import { Carousel } from "react-responsive-carousel";
import { CAROUSEL_INTERVAL } from "../../constants/globalConstants";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { gameAssetsPath } from '../../api/apiConstants';


export default function GCarousel(props) {

    const onChange = (e) => {

    }
    const onClickItem = (e) => {
        props.carouselItemClick(e);
    }
    const onClickThumb = (e) => {

    }


    return (
        <div className="g-carousel-container">
            {props.data && props.data.length > 0 ? (
                <Carousel
                    className={props.fromGameDetail ? `g-d-carousel` : ``}
                    showArrows={true}
                    centerMode={props.centerMode ? props.centerMode : false}
                    centerSlidePercentage={props.centerSlidePercentage ? props.centerSlidePercentage : 80}
                    showIndicators={props.showIndicators ? props.showIndicators : false}
                    showThumbs={props.showThumbs ? props.showThumbs : false}
                    useKeyboardArrows={props.useKeyboardArrows ? props.useKeyboardArrows : false}
                    autoPlay={props.autoPlay ? props.autoPlay : true}
                    infiniteLoop={props.infiniteLoop ? props.infiniteLoop : true}
                    stopOnHover={props.stopOnHover ? props.stopOnHover : true}
                    interval={props.interval ? props.interval : CAROUSEL_INTERVAL}
                    onChange={onChange}
                    onClickItem={onClickItem}
                    onClickThumb={onClickThumb}>
                    {props.data.map((loopObj, idx) => (
                        <div key={`Carousel-Image-${idx}`}>
                            <img src={`${loopObj.Game?.BannerImageUrl}`} alt={`Carousel-Image-${idx}`} />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                    ))}
                </Carousel>
            ) : null}
        </div>
    )
}
