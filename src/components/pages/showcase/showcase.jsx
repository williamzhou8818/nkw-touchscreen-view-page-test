import React, {Fragment, useState, useEffect } from 'react';
import Banner from './2-StaticAdMiddle.png';
import axios from 'axios';
import './showcase.scss';

import {Link} from 'react-router-dom';

// have to improve slidere form video arrays

const ShowCase = () => { 
    
    const [showCase, setShowCase] = useState({
        video: '',
        middle_banner: '',
        footer_banner: '',
    });

    // GET DATA From api

    useEffect(() => {
        axios.get('/api/showcase').then(res => { 
            console.log(res.data[0]);
            setShowCase(res.data[0]);
        })
    },[])

    // const [video_one, video_two, video_three] = showCase.videos;
    // const [slider_one, slider_two, slider_three] = showCase.sliders;
    // const [bannerImg] = showCase;

    return ( 
        <Fragment>
            <div className='videos_showcase' >
                <video
                    width='100%' 
                    height="100%" 
                    src={showCase.video}
                    frameborder="0" 
                    autoPlay
                    loop
                   >
                    </video>
            </div>
            <div className="img_sliders_adv">
                    <img src={showCase.middle_banner} alt="nkw showcase video" />
            </div>
            <div className="bigBannerImage">
                  
                <Link to="/about">

                    <img  src={showCase.footer_banner} alt="" /> 
                </Link>
            </div> 
        </Fragment>
    )
}

export default ShowCase;