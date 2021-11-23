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
        header: 'Richard Won $199 on 15-Aug',
        desc: ''
    },
    {
        id: 2, 
        header: 'Richard Won $299 on 16-Aug',
        desc: ''
    },
    {
        id: 3, 
        header: 'Richard Won $399 on 17-Aug',
        desc: ''
    },
    {
        id: 4, 
        header: 'Richard Won $499 on 18-Aug',
        desc: ''
    }
];


export default function OthersSavings(props) {
    
    return (
        <div id="top-savings-othersplaying-container">
            <div className="others-playing-header pl-1">See What Your Friends are Winning</div>
            {tempArray && tempArray.length > 0 ? (
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    partialVisbile='right'
                    slidesToSlide={1}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    transitionDuration={1000}
                    containerClass='carousel-container'
                    removeArrowOnDeviceType={['tablet', 'mobile']}
                    dotListClass='custom-dot-list-style'
                    itemClass='carousel-item-padding-40-px mt-2'
                    >
                    {tempArray.map((obj) => (
                        <div key={obj.id} className="top-savings-othersplaying-sec">
                            <div className="w-10 float-left clearfix text-center leaderboard-othersplaying-logo pr-1">
                                <img  alt="" src={defaultuser_src} className="top-savings-logo p-1" />
                            </div>
                            <div className="w-90 float-left clearfix leaderboard-othersplaying pl-4">
                                <div className="top-savings-othersplaying-header">{obj.header}</div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            ) : null}
        </div>
    )
}
