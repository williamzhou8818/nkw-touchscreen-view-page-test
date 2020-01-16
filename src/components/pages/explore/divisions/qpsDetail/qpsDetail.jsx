import React, {Fragment, useState, useEffect} from 'react';

import QPS_Slider from './qps_slider.png';
import QPS_Gallery_Images1 from  './QPS_Gallery_Images.png';
import QPS_Gallery_Images2 from  './QPS_Gallery_Images2.png';
import QPS_Gallery_Images3 from  './QPS_Gallery_Images3.png';
import QPS_Gallery_Images4 from  './QPS_Gallery_Images4.png';
import QPS_Gallery_Images5 from  './QPS_Gallery_Images5.png';
import QPS_Gallery_Images6 from  './QPS_Gallery_Images6.png';
import QPS_Gallery_Images7 from  './QPS_Gallery_Images7.png';
import QPS_Gallery_Images8 from  './QPS_Gallery_Images8.png';
import QPS_Gallery_Images9 from  './QPS_Gallery_Images9.png';
import QPS_Gallery_Images10 from  './QPS_Gallery_Images10.png';


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import axios from 'axios';
import './qpsDetail.scss';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);




  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop: "400px"
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      color: "orange",
      fontWeight: "bold",
      fontSize: "30px",
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
    img: {
      width: '100%',
      display: 'block',
      overflow: 'hidden',
      width: '100%',
    },
  }));
  


const  QPSDetail = () => { 

    const tutorialSteps = [
        {
          label: 'GALLERY',
          imgPath:
          QPS_Gallery_Images1,
        },
        {
            label: 'GALLERY',
            imgPath:
            QPS_Gallery_Images2,
        },
        {
            label: 'GALLERY',
            imgPath:
            QPS_Gallery_Images4,
        },
        {
            label: 'GALLERY',
            imgPath:
            QPS_Gallery_Images5,
        },
        {
            label: 'GALLERY',
            imgPath:
            QPS_Gallery_Images6,
        },
        {
            label: 'GALLERY',
            imgPath:
            QPS_Gallery_Images8,
        },
        {
            label: 'GALLERY',
            imgPath:
            QPS_Gallery_Images9,
        },
        {
            label: 'GALLERY',
            imgPath:
            QPS_Gallery_Images10,
        },
        {
            label: 'GALLERY',
            imgPath:
            QPS_Gallery_Images3,
        },
      ];

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
  
    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
  
    const handleStepChange = step => {
      setActiveStep(step);
    };

    // Get qpsDetails from api

    const [qpsDetail, setqpsDetail] = useState({
        content:[],
        title:'',
        logo: '',
        header_background_img: '',
        gallery: [{
            img: '', 
            img_title: ''
        }],
        editor_context: ''
    });


    useEffect(() => {
        axios.get('/api/qps').then(res => {
            console.log(res.data);
            setqpsDetail(res.data[0]);
        });
    }, []);

    return (
        <Fragment>
            <div className="expac_detail_header_qps">
                <h1>{qpsDetail.title}</h1>
            </div> 
            <div className="warp_qps">
                <div className="qps_detail_main">
                    <div className="left_contants">
                        <div className="left_img_logo"> 
                            <img src={qpsDetail.logo} alt=""  width="100%" /> 
                        </div>
                        <a href="#galley" >

                            <div className="contact_card_two_qps" style={{marginTop: "140px"}}> 

                                <h4 style={{color:"#707070", margin: " 10px 5px"}}>GALLERY</h4>
                            </div>
                        </a>
                    </div>
                    <div className="right_contants">

                        <div dangerouslySetInnerHTML={{__html: qpsDetail.editor_context}} />
                        {/* <p>
                            
                                {qpsDetail.content[0]}
                        </p>
                        
                        <p>
                                {qpsDetail.content[1]}
                        </p> 
                        <p>
                                {qpsDetail.content[2]}
                        </p> 
                        <p>
                                {qpsDetail.content[3]}
                        </p> 
                        <p>
                                {qpsDetail.content[4]}
                        </p> 
                        <p>
                                {qpsDetail.content[5]}
                        </p> 
                        <p>
                            {`
                            QED specializes in remote and challenging environments such as Papua New Guinea, the Philippines, Solomon Islands and now Central Asia in Kyrgyzstan and Kazakhstan.
                            `}
                        </p>
                        <p>
                            {`
                               The QED Operational Head Office is strategically
                               combined with our engineering and support facillitites
                               located at San Pedro City, Laguna, Manila to support
                               Philippines and Group Opearations. A similar facility has 
                               been constructed at 11 Mile in Lae, Papua New Guinea
                               and a functional facility established in Bishkek,
                               Kyrgyzstan.

                            `}
                        </p>
                        <p>
                                {qpsDetail.content[6]} 
                        </p> */}
                    </div>
                        
                    </div>
                        
                        {/* <div className="img_gallery" id="galley">
                             <h1 style={{color: 'orange', textAlign: 'left', padding: '5% 6%' }}>GALLERY</h1>
                        </div>  */}
                        <div style={{padding: '18% 4%'}}>
                        <div className={classes.root} id="galley">
                            <Paper square elevation={0} className={classes.header}>
                                <Typography style={{fontWeight:'600', fontSize: "30px"}}>{tutorialSteps[activeStep].label}</Typography>
                            </Paper>
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                                interval={5000}
                            >
                                {/* {tutorialSteps.map((step, index) =>} */}
                                {qpsDetail.gallery.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                    <img className={classes.img} src={step.img} alt={step.img_title} />
                                    ) : null}
                                </div>
                                ))}
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                variant="text"
                                activeStep={activeStep}
                                nextButton={
                                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                    Next
                                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                </Button>
                                }
                                backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                    Back
                                </Button>
                                }
                             />
                        </div>
                        </div>
            </div>
           
              

        </Fragment>
    )
}

export default QPSDetail;