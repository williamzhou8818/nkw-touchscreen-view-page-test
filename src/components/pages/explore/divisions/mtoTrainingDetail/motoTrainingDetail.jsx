import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './motoTrainingDetail.scss';


import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    root: {
      width: '92%',
      paddingLeft: '4%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        color: "#707070",
        fontWeight: theme.typography.fontWeightRegular,
       
    },
  }));


const  MotoTrainingDetail = () => {
    
    const classes = useStyles();

    // Get MotoTrainingDetails from api

    const [motoTraining, setMotoTraning] = useState({
      contact:{ 
        phone_a: '',
        phone_b: '',
        website: '',
        email: ''
      },
      context:[],
      li_a: [],
      li_b: [],
      li_c: [],
      li_d: [],
      title: '',
      logo: '',
      header_background_img: '',
      editor_context: ''

    }) 

    useEffect(() => { 
        axios.get('/api/mtotraining').then(res => { 
            setMotoTraning(res.data[0]);
        })
    },[])

    return (
        <Fragment>
            <div className="division_header_mto">
                <h1>{motoTraining.title}</h1>
            </div> 
            <div className='warp_mto_train'>

                    <div className="expac_detail_main_mto_train">
                        <div className="left_contants">

                                <div className="left_img_logo"> 
                                    <img src={motoTraining.logo} alt=""  width="100%" /> 
                                </div>
                                <div className="contact_card_mto_training"> 

                                    <h2 style={{marginLeft: '4%'}}>Contact</h2>
                                    <p ><strong>Website</strong> <br/> {motoTraining.contact.website} </p>
                                    <p> <strong>Email</strong> <br/> {motoTraining.contact.email} </p>
                                    <p><strong>Phone</strong><br/> {motoTraining.contact.phone_a}<br/>{motoTraining.contact.phone_b}</p>  
                                </div>
                            </div>
                            <div className="right_contants">
                                    {/* <p>
                                        {motoTraining.context[0]}
                                </p> 
                                <p>
                                        {motoTraining.context[1]}
                                </p>
                                <p>
                                        {motoTraining.context[2]}
                                </p> */}
                                <div dangerouslySetInnerHTML={{__html: motoTraining.editor_context}} /> 

                            
                            </div>
                            <div>
                            </div>
                    </div>
                    <div > 
                    <div className={classes.root} style={{  margin:"0% 0%"}}>
                            <ExpansionPanel style={{ backgroundColor:'#e9f4db'}}>
                              <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                style={{ backgroundColor:'#e9f4db'}}
                              >
                                <Typography className={classes.heading}>{motoTraining.context[3]}</Typography>
                              </ExpansionPanelSummary>
                              <ExpansionPanelDetails >
                                <Typography>
                                    <div className="wrap_panel" style={{color: "#707070", fontSize: "20px"}}> 
                                          <div className="frist_list">
                                              <ul style={{textAlign: 'left'}}>
                                                  <li>{motoTraining.li_a[0]}</li>
                                                  <li>{motoTraining.li_a[1]}</li> 
                                                  <li>{motoTraining.li_a[2]}</li>
                                                  <li>{motoTraining.li_a[3]}</li>
                                              </ul>
                                          </div>
                                          <div className="second_list">
                                            <ul style={{textAlign: 'left'}}>
                                                  <li>{motoTraining.li_b[0]}</li>
                                                  <li>{motoTraining.li_b[1]}</li> 
                                                  <li>{`Training & Assessment`}</li>
                                                  <li>{motoTraining.li_b[3]}</li>
                                              </ul>
                                          </div>
                                          <div className="thrid_list">
                                              <ul style={{textAlign: 'left'}}>
                                                      <li>{motoTraining.li_c[0]}</li>
                                                      <li>{motoTraining.li_c[1]}</li> 
                                                      <li>{motoTraining.li_c[2]}</li>
                                                      <li>{motoTraining.li_c[3]} </li>
                                                  </ul>
                                          </div>
                                    </div>
                                </Typography>
                              </ExpansionPanelDetails>
                            </ExpansionPanel> <br/>
                            <ExpansionPanel style={{ backgroundColor:'#e9f4db'}}>
                              <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                style={{ backgroundColor:'#e9f4db'}}
                              >
                                <Typography className={classes.heading}>{motoTraining.context[4]}</Typography>
                              </ExpansionPanelSummary>
                              <ExpansionPanelDetails>
                                <Typography>
                                  <ul style={{textAlign: 'left', color: "#707070", fontSize: "20px" }} >
                                      <li>{motoTraining.li_d[0]}</li>
                                      <li>{motoTraining.li_d[1]}</li>
                                      <li>{motoTraining.li_d[2]}</li>
                                      <li>{motoTraining.li_d[3]}</li>
                                      <li>{motoTraining.li_d[4]}</li>
                                      <li>{motoTraining.li_d[5]}</li>
                                      <li>{motoTraining.li_d[6]}</li>
                                      <li>{motoTraining.li_d[7]}</li>


                                  </ul>
                                </Typography>
                              </ExpansionPanelDetails>
                            </ExpansionPanel>
                            {/* <ExpansionPanel disabled>
                              <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                              >
                                <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
                              </ExpansionPanelSummary>
                            </ExpansionPanel> */}
                          </div>
                    </div>
            </div>
                            

        </Fragment>
    )
}

export default MotoTrainingDetail;