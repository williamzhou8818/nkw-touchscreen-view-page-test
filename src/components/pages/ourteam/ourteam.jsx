import React, {Fragment,  useState, useEffect} from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import './ourteam.scss';


import Container from '@material-ui/core/Container';
import { flexbox } from '../../../../../client/node_modules/@material-ui/system';


const useStyles = makeStyles(theme => ({
   
    card: {
      width: 220,
      height: 348,
      textAlign: "left",
      margin: '1% 1%'
    },
    media: {
      height:220,
      borderBottom: '4px solid #4F990F'
    },
  }));

const OurTeam = () => {

    const classes = useStyles();

    const [ourteam, setOurteam] = useState([{}]);

   // GET Our Team Data from api/ourteam 
   useEffect(() => {
    const  ourteam =  [
        {
            ot_profile_img: 'http://localhost:5000/ourteam/MarlenBrunskill.jpg',
            ot_name: 'Marlen Brunskill',
            ot_job: 'CEO'
        },
        {
            ot_profile_img: 'http://localhost:5000/ourteam/OurTeamClark.png',
            ot_name: 'Paul Clark',
            ot_job: 'CFO'
        },
        {
            ot_profile_img: 'http://localhost:5000/ourteam/OurTeamFranklin.png',
            ot_name: 'Phil Franklin',
            ot_job: 'COO'
        },
        {
            ot_profile_img: 'http://localhost:5000/ourteam/OurTeamKolomaga.png',
            ot_name: 'Chris Kolomaga',
            ot_job: 'Financial Controller'   
        },
        {
            ot_profile_img: 'http://localhost:5000/ourteam/OurTeamWartovo.png',
            ot_name: 'Levi Wartovo',
            ot_job: 'Director & Board Member Representing Kuembu Landowners'   
        },
        {
            ot_profile_img: 'http://localhost:5000/ourteam/OurTeamSawong.png',
            ot_name: 'Don Sawong',
            ot_job: 'Independent Board Member Director - Retired Judge'  
        },
        {
            ot_profile_img: 'http://localhost:5000/ourteam/OurTeamKupa.png',
            ot_name: 'Nathan Kupa',
            ot_job: 'Director & Board Member - Representing Nauti Landowners'  
        },
        {
            ot_profile_img: 'http://localhost:5000/ourteam/OurTeamKawa.png',
            ot_name: 'Samson Kawa',
            ot_job: 'Director & Board Member Representing Winnima'  
        },
        {
            ot_profile_img: 'http://localhost:5000/ourteam/OurTeamKiki.png',
            ot_name: 'Robin Kiki',
            ot_job: 'Director & Board Member - Representing Morobe Provincial Government' 
        },
        {
            ot_profile_img: 'http://localhost:5000/ourteam/OurTeamYanga.png',
            ot_name: 'Tali Chris Yanga',
            ot_job: 'Director and Board Member - Representing Morobe Provincial Government' 
        },
        {
            ot_profile_img: 'http://localhost:5000/ourteam/OurTeamNorum.png',
            ot_name: 'James Norum',
            ot_job: 'Director and Board Member Representing Mineral Resources Authority' 
        }

    ];
    setOurteam(ourteam);

    // axios.get('/api/ourteam').then(res => {
    //     console.log(res.data);
    //     setOurteam(res.data);
    // });
}, []) 
    return (
        <Fragment>
            <div className="our_team_header">
                <h1 style={{paddingTop:"60px"}}>Our Team</h1>
                <p>We respect our people, they are our most valuable asset</p>
            </div>
            <div >
            <Container   className="our_team_card_list" style={{margin:'0px 2.3%', overflow:"scroll", overflowX:"hidden"}}>
            <div className="meet_our_team_ourteam">
            { ourteam.map(( ourteam, index)=> {
                             return (
                                 <Fragment>

                                <Card className={classes.card} >
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
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                     {ourteam.ot_job }     
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
            
                                    </Card>
                              
                                </Fragment>

                    )
                    })}
                   
                </div>
            </Container>

            </div>

        </Fragment>
    )

}


export default OurTeam;