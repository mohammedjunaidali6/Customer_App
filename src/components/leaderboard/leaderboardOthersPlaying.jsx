import React, { Fragment } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import defaultuser_src from "../../assets/img/gameDetails/default_user.png";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 50
    }
};

const tempArray = [
    {
        id: 1,
        header: 'Richard Wills',
        desc: 'Your Friend, XYZ is on 2nd Rank'
    },
    {
        id: 2, 
        header: 'Richard Wills',
        desc: 'Your Friend, XYZ is on 2nd Rank'
    },
    {
        id: 3, 
        header: 'Richard Wills',
        desc: 'Your Friend, XYZ is on 2nd Rank'
    },
    {
        id: 4, 
        header: 'Richard Wills',
        desc: 'Your Friend, XYZ is on 2nd Rank'
    }
];

const CustomDot = ({ onClick, ...rest }) => {
    const { onMove, index, active, carouselState: { currentSlide, deviceType }  } = rest;
    const carouselItems = [];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button className={active ? 'active' : 'inactive'} onClick={() => onClick()}>
        {React.Children.toArray(carouselItems)[index]}
      </button>
    )
}

export default function OthersPlaying(props) {
    // console.log('***',props.parentProps);
    
    return (
        <div id="leaderboard-othersplaying-container">
            <div className="others-playing-header pl-1">See What Others are Playing</div>
            {tempArray && tempArray.length > 0 ? (
                <Carousel
                    swipeable={true}
                    draggable={false}
                    arrows={false}
                    showDots={true}
                    renderDotsOutside={true}
                    // customDot={<CustomDot />}
                    responsive={responsive}
                    partialVisbile='right'
                    slidesToSlide={1}
                    infinite={true}
                    autoPlay={false}
                    keyBoardControl={true}
                    transitionDuration={1000}
                    containerClass='carousel-container'
                    removeArrowOnDeviceType={['tablet', 'mobile']}
                >
                    {tempArray.map((obj) => (
                        <div key={obj.id} className="leaderboard-othersplaying-sec">
                            <div className="w-15 float-left clearfix text-center leaderboard-othersplaying-logo">
                                <img src={defaultuser_src} className="leaderboard-winners-list-logo" />
                            </div>
                            <div className="w-60 float-left clearfix leaderboard-othersplaying pl-3">
                                <div className="leaderboard-othersplaying-header">{obj.header} - {obj.id}</div>
                                <div className="leaderboard-othersplaying-desc">{obj.desc}</div>
                            </div>
                            <div className="w-25 float-left clearfix text-center pt-2">
                                <button type="button" className="leaderboard-othersplaying-btn">
                                    <span className="leaderboard-othersplaying-btn-text">Play</span>
                                </button>
                            </div>
                        </div>
                    ))}
                    {/* <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div> */}
                </Carousel>
            ) : null}
        </div>
    )
}
