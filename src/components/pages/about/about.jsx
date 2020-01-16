import React, {Fragment, useState, useEffect}  from 'react';
import NKWGropOrgChart from './NKWGroupOrgChart.jpg';
import NKWGroupCapabilityState from './NKW-Group-Capability-Statement-2019.pdf';


import About_Who_are_we from './AboutUs_Who_we_are_1.png';


import nkw_group_capability_statement01 from './NKW-Group-Capability-Statement-2019.jpg';
import nkw_group_capability_statement02 from './NKW-Group-Capability-Statement-20192.jpg';
import nkw_group_capability_statement03 from './NKW-Group-Capability-Statement-20193.jpg';
import nkw_group_capability_statement04 from './NKW-Group-Capability-Statement-20194.jpg';
import nkw_group_capability_statement05 from './NKW-Group-Capability-Statement-20195.jpg';
import nkw_group_capability_statement06 from './NKW-Group-Capability-Statement-20196.jpg';
import nkw_group_capability_statement07 from './NKW-Group-Capability-Statement-20197.jpg';
import nkw_group_capability_statement08 from './NKW-Group-Capability-Statement-20198.jpg';
import nkw_group_capability_statement09 from './NKW-Group-Capability-Statement-20199.jpg';




import ServiceIcons from '../../layouts/icons_components/ServiceIcons/ServiceIcons';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import axios from 'axios';
import './about.scss';

// Import react material model



const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        marginBottom: "26px",
        height: 66.65,
        width: 227,
        color: 'white',
        background: '#F7941B',
        '&:hover' : {
            backgroundColor: '#e36110'
        }
    },
    button_link: {
        margin: '35px 32px',
        padding: '5px 6px',
        height: '46.98px',
        width: '270px',
        color: 'white',
        fontSize:'18px',
        textTransform: 'none',
        background: '#02368C',
        '&:hover' : {
            backgroundColor: '#02368C'
        }
    },
    input: {
        display: 'none',
    },
    card: {
      maxWidth: 345,
      height: 330,
      fontSize: '18px',
      textAlign: 'left',
    },
    cardtwo: {
        maxWidth: 345,
        marginLeft: '33px',
        width: '263.39px',
        height: '369.18px',
        textAlign: 'left',

    },
    media: {
      height:235,
    },
    mediatwo:{
        maxWidth: 345,
        height: 235,
        borderBottom: '4px solid #8CC740'
    }
  }));


// set Style for header

// const aboutHeader = {
//     border: "0px solid black",
//     backgroundImage: `url(${`http://localhost:5000/about/nkwofficethinkbanner-19x10.jpg`})`,
//     backgroundSize: `cover`,
//     textAlign: 'center',
//     height: '448px',
//     lineHeight: "5rem"
    
// }

// // set daynamet style
// const ourService =  {
//     maxWidth: "1080px",
//     backgroundImage: `url(${`http://localhost:5000/about/AboutUs_Image.png`})`,
//     backgroundSize: `cover`,
//     height: `353px`
// }


const About = () => {

    const classes = useStyles();


    
const [about, setAbout] = useState({
    about_page_header_bg_image: "",
    about_page_header_title: "",
    about_page_header_sub_title: "",
    about_page_nav1: "",
    about_page_nav2: "",
    about_page_nav3: "",
    about_page_nav4: "",
    about_page_section1: "",
    about_page_section2: "",
    about_page_section3_title: "",
    about_page_section3_p1: "",
    about_page_section3_p2: "",
    about_page_section3_p3: "",
    about_page_section3_img1: "",
    about_page_section3_img2: "",
    about_page_section4_t1: "",
    about_page_section4_t2: "",
    about_page_section4_t3: "",
    about_page_section4_p1: "",
    about_page_section4_p2: "",
    about_page_section4_p3: "",
    about_page_section5_img1: "",
    about_page_section5_img_title1: "",
    about_page_section5_img_sub_title1: "",
    about_page_section5_img2: "",
    about_page_section5_img_title2: "",
    about_page_section5_img_sub_title2: "",
    about_page_section5_img3: "",
    about_page_section5_img_title3: "",
    about_page_section5_img_sub_title3: "",
    about_page_section5_img4: "",
    about_page_section5_img_title4: "",
    about_page_section5_img_sub_title4: "",
    about_page_section5_button_text: "",
    about_page_section5_button_link: "/ourteam",
    about_page_section6_title: "",
    about_page_section6_p1: "",
    about_page_section6_p2: "",
    about_page_section6_p3: "",
    about_page_section6_p4: "",
    about_page_section6_img1: "",
    about_page_section6_img_title1: "",
    about_page_section6_img_sub_title1: "",
    about_page_section7_p1: "",
    about_page_section7_p2: "",
    about_page_section7_p3: "",
    about_page_section7_link3: "/videos",
    nkw_group_chart: "",
    nkw_group_capability_statement1: "",
    nkw_group_capability_statement2: "",
    nkw_group_capability_statement3: "",
    nkw_group_capability_statement4: "",
    nkw_group_capability_statement5: "",
    nkw_group_capability_statement6: "",
    nkw_group_capability_statement7: "",
    nkw_group_capability_statement8: "",
    nkw_group_capability_statement9: "",
    about_page_section3_left: "",
    about_page_section3_right: null,
    about_page_section6_editor_three: ""
    
});

//Temp comment out
    // const [about, setAbout] = useState({
    //     // setup all about data
    //     about_header_section: {
    //         main_title: '',
    //         main_title_img: '',
    //         nav_a: '',
    //         nav_b: '',
    //         nav_c: '',
    //         nav_d: '',
    //         short_intro: '',
    //         sub_title:''
    //     },
    //     service_details_info: {
    //         sdi_a: {
    //             des_s_a: '',
    //             img_logo_s_a: '',
    //             name_s_a: ''
    //         },
    //         sdi_b:{
    //             des_s_b: '',
    //             img_log_s_b: '',
    //             name_s_b: ''
    //         },
    //         sdi_c: {
    //             des_s_c: '',
    //             img_logo_s_c: '',
    //             name_s_b: ''
    //         },
    //         sdi_d: {
    //             des_s_d: '',
    //             img_logo_s_d: '',
    //             name_s_d: ''
    //         }
    //     },
    //     about_who_we_are: {
    //         title: '',
    //         img_one: '',
    //         img_two: '',
    //         title: '',
    //         p_a:'',
    //         p_b: '',
    //         p_c: ''
    //     },
    //     about_mission_vision_value: {
    //         mission: {
    //             mission_name: '',
    //             mission_des: ''
    //         },
    //         vision: {
    //             vision_name: '',
    //             vision_des:''
    //         },
    //         values: {
    //             values_name: '',
    //             values_des: ''
    //         }
    //     },
    //     ceo_message: {
    //         ceo_title: '',
    //         ceo_p_a: '',
    //         ceo_p_b: '',
    //         ceo_p_c: '',
    //         ceo_p_d: ''
    //     }

    // });

    const [ourteam, setOurteam] = useState([{}]);

    const [open, setOpen] = useState(false);
    const  [openCapability, setOpenCapability] = useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };

    const handleClickOpenCap = () => {
        setOpenCapability(true);
    }
    const hendleCloseOpenCap = () => {
        setOpenCapability(false);
    }



    useEffect(() => {
        axios.get('/api/about').then(res => {

            console.log(res.data[0]);
            setAbout(res.data[0]);
        })
    }, []);

// GET Our Team Data from api/ourteam

const aboutHeader = {
    border: "0px solid black",
    backgroundImage: `url(${about.about_page_header_bg_image})`,
    backgroundSize: `cover`,
    textAlign: 'center',
    height: '448px',
    lineHeight: "5rem"
    
}

// set daynamet style
const ourService =  {
    maxWidth: "1080px",
    backgroundImage: `url(${about.about_page_section2})`,
    backgroundSize: `cover`,
    height: `353px`
}

    useEffect(() => {

        const  ourteam =  [
            {
                ot_profile_img: 'http://ec2-3-104-77-170.ap-southeast-2.compute.amazonaws.com:5000/ourteam/MarlenBrunskill.jpg',
                ot_name: 'Marlen Brunskill',
                ot_job: 'CEO'
            },
            {
                ot_profile_img: 'http://ec2-3-104-77-170.ap-southeast-2.compute.amazonaws.com:5000/ourteam/OurTeamClark.png',
                ot_name: 'Paul Clark',
                ot_job: 'CFO'
            },
            {
                ot_profile_img: 'http://ec2-3-104-77-170.ap-southeast-2.compute.amazonaws.com:5000/ourteam/OurTeamFranklin.png',
                ot_name: 'Phil Franklin',
                ot_job: 'COO'
            },
            {
                ot_profile_img: 'http://ec2-3-104-77-170.ap-southeast-2.compute.amazonaws.com:5000/ourteam/OurTeamKolomaga.png',
                ot_name: 'Chris Kolomaga',
                ot_job: 'Financial Controller'   
            }

        ];
        setOurteam(ourteam);

        // axios.get('/api/ourteam').then(res => {
        //     console.log(res.data);
        //     setOurteam(res.data);
        // });
    }, [])


    // const {main_title, nav_a, nav_b, nav_c, nav_d, short_intro, sub_title} = about.about_header_section;
    // const {des_s_a, name_s_a, img_logo_s_a} = about.service_details_info.sdi_a;
    // const {des_s_b, name_s_b, img_logo_s_b} = about.service_details_info.sdi_b;
    // const {des_s_c, name_s_c, img_logo_s_c} = about.service_details_info.sdi_c;
    // const {des_s_d, name_s_d, img_logo_s_d} = about.service_details_info.sdi_d;
    // const {title, img_one, img_two, p_a, p_b, p_c} = about.about_who_we_are;
    // const {mission_name, mission_des} = about.about_mission_vision_value.mission;
    // const {vision_name, vision_des}  = about.about_mission_vision_value.vision;
    // const {values_name, values_des} = about.about_mission_vision_value.values;
    // const {ceo_title, ceo_p_a, ceo_p_b, ceo_p_c, ceo_p_d} = about.ceo_message;


    return (
        <Fragment>
            <div>
            {/* className="about_header" */}
                    <div style={aboutHeader}>
                        <div className="main_title">{about.about_page_header_title}</div>
                        <div className="sub_title">{about.about_page_header_sub_title}</div>
                    </div>
                    <div className="sub_navs">
                        <ul>
                            <li><a href="#whoweare">{about.about_page_nav1}</a></li>
                            <li> <a href="#nkwmission"> {about.about_page_nav2}</a></li>
                            <li><a href="#ourteam">{about.about_page_nav3}</a> </li>
                            <li><a href="#ceomessage">{about.about_page_nav4}</a></li>
                        </ul>
                    </div>
            </div>
            <div className="main_contents">

                    <div className="shortDec">

                            {about.about_page_section1}


                    </div>
                    {/* className="ourServices" */}
                    <div style={ourService}>

                    </div>
                    {/* <div className="service_section">
                        <div >
                                <ServiceIcons  icon={img_logo_s_a}title={name_s_a} des={des_s_a} bgcolor="trophy_icon_bg"/>
                        </div>

                        <div>
                               <ServiceIcons  icon={img_logo_s_b}   title={name_s_b} des={des_s_b}  bgcolor="people_icon_bg" />

                        </div>

                        <div>
                              <ServiceIcons  icon={img_logo_s_c} title={name_s_c} des={des_s_c} bgcolor="people_icon_bg" />

                        </div>

                        <div>
                             <ServiceIcons  icon={img_logo_s_d} title={name_s_d} des={des_s_d} bgcolor="cogs_icon_bg" />

                        </div>





                    </div> */}
                    <div className="who_we_are" id="whoweare">
                        <div className="left-dec"  style={{paddingRight: '45px'}}>
                            <h3>{about.about_page_section3_title}</h3>
                            <p> {about.about_page_section3_p1}</p>
                            <p>{about.about_page_section3_p2}</p>
                            <p>{about.about_page_section3_p3}</p>
                        </div>

                        <div className="right-contents">
                                    <img src={about.about_page_section3_img1}  alt="_about_img"  className="imgOne" width="100%" />
                                    <img src={about.about_page_section3_img2} alt="_about_img" width="100%" className="imgTwo"/>
                        </div>

                    </div>

                    <div className="our_mission_vision_values" id="nkwmission">
                            <div className="mission_div">
                                <h3 style={{padding:"0 25px", fontSize:"24px"}}>{about.about_page_section4_t1}</h3>
                                <p style={{padding:"0 25px"}}> {about.about_page_section4_p1}</p>
                            </div>
                            <div className="vision_div">
                                <h3 style={{padding:"0 25px", fontSize:"24px"}}>{about.about_page_section4_t2}</h3>
                                <p style={{padding: "0 25px"}}> {about.about_page_section4_p2}</p>

                            </div>
                            <div className="values_div">
                                <h3 style={{padding:"0 25px", fontSize:"24px"}}>{about.about_page_section4_t3}</h3>
                                <p style={{padding:"0 25px"}}> {about.about_page_section4_p3}</p>

                            </div>
                    

                   </div>

                    <div className="div_txt" id="ourteam"> Meet Our Team </div>
                    <div className="meet_our_team">
                        { ourteam.map(( ourteam, index)=> {
                             return (
                                 <Fragment>

                                <div className="card_a" >
                                <Card className={classes.card} 
                                
                                >
                                        <CardActionArea>
                                            <CardMedia
                                            className={classes.media}
                                            image={ourteam.ot_profile_img}
                                            title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                    {ourteam.ot_name}

                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:'18px'}}>
                                                     {ourteam.ot_job }
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        {/* <CardActions>
                                            <Button size="small" color="primary">
                                            Share
                                            </Button>
                                            <Button size="small" color="primary">
                                            Learn More
                                            </Button>
                                        </CardActions> */}
                                    </Card>
                                </div>

                                </Fragment>

                             )
                        })}

                    </div>

                    <div>
                        <Link to='/ourteam' style={{textDecoration: 'none'}}>
                            <Button variant="contained" color="secondary" className={classes.button}>
                                View Our Full Team
                            </Button>
                        </Link>
                    </div>


                    <div className="ceo_message_div" id="ceomessage">
                            <div className="ceo_title">{about.about_page_section6_title}</div>
                                <div className="ceo_main_contents">
                                    <div className="ceo_msg_left" >
                                         <p>{about.about_page_section6_p1}</p>
                                         <p style={{marginTop:"40px"}}> {about.about_page_section6_p2}</p>
                                    </div>
                                    <div className="ceo_img_right" >
                                    <Card className={classes.cardtwo}>
                                        <CardActionArea>
                                            <CardMedia
                                            className={classes.mediatwo}
                                            image={ourteam[0].ot_profile_img}
                                            title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"bold"}}>
                                                  {ourteam[0].ot_name}

                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                     {ourteam[0].ot_job }
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        {/* <CardActions>
                                            <Button size="small" color="primary">
                                            Share
                                            </Button>
                                            <Button size="small" color="primary">
                                            Learn More
                                            </Button>
                                        </CardActions> */}
                                    </Card>

                                    </div>
                                </div>

                                <div style={{ padding: '0 37px'}}>
                                    <p style={{fontSize:"18px", color:"#818287"}}>{about.about_page_section6_p3}</p>
                                    <p style={{fontSize:"18px", color:"#818287"}}>{about.about_page_section6_p4}</p>

                                  <div className="divider_bar">

                                     <Divider  />
                                  </div>


                                    <Dialog

                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="responsive-dialog-title"
                                    >
                                        <DialogTitle id="responsive-dialog-title">CORPORATE STRUCTURE</DialogTitle>
                                        <DialogContent>
                                        {/* <object   width="1200px" height="1000" data={NKWGropOrgChart}></object> */}
                                        <img src={NKWGropOrgChart} alt="coroporate structure" width="90%"/> 
 
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={handleClose} color="primary">

                                        </Button>
                                        <Button onClick={handleClose} color="primary" autoFocus>
                                            close
                                        </Button>
                                        </DialogActions>
                                    </Dialog>


                                    <Dialog

                                        open={openCapability}
                                        onClose={hendleCloseOpenCap}
                                        aria-labelledby="responsive-dialog-title"
                                    >
                                        <DialogTitle id="responsive-dialog-title">CORPORATE STRUCTURE</DialogTitle>
                                        <DialogContent>
                                        {/* <object   width="700px" height="1200" data={NKWGroupCapabilityState}></object> */}
                                        <img src={nkw_group_capability_statement01} width="100%" alt="" />
                                        <img src={nkw_group_capability_statement02} alt="" width="100%"/>
                                        <img src={nkw_group_capability_statement03} alt="" width="100%"/>
                                        <img src={nkw_group_capability_statement04} alt="" width="100%"/>
                                        <img src={nkw_group_capability_statement05} alt="" width="100%"/>
                                        <img src={nkw_group_capability_statement06} alt="" width="100%"/>
                                        <img src={nkw_group_capability_statement07} alt="" width="100%"/>
                                        <img src={nkw_group_capability_statement08} alt="" width="100%"/>
                                        <img src={nkw_group_capability_statement09} alt="" width="100%"/>




                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={hendleCloseOpenCap} color="primary">

                                        </Button>
                                        <Button onClick={hendleCloseOpenCap} color="primary" autoFocus>
                                            close
                                        </Button>
                                        </DialogActions>
                                    </Dialog>

                                </div>


                    </div>
                          <div className="LinkBotton" style={{marginTop:"-98px"}}>

                                 <ul  >
                                            <li><Button variant="contained" color="primary"  className={classes.button_link} onClick={handleClickOpen}>Corporate Structure</Button></li>
                                            <li><Button variant="contained" color="primary"  className={classes.button_link} onClick={handleClickOpenCap}>Capability Statement</Button></li>
                                            <Link to='/videos'><Button variant="contained" color="primary"  className={classes.button_link}>NKW Videos</Button></Link>

                                </ul>
                          </div>

            </div>


        </Fragment>
    )
}


export default About;