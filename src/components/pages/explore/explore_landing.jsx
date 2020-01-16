import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import {Route, NavLink, Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';


import './explore_landing.scss';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      margin: '0',
      padding: '0',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));


const ExploreLanding = () => {

    const classes = useStyles();
    


    // GET DATA Explor Landing contants data from api

    useEffect(() => {
        axios.get('/api/explorelanding').then(res => {
            console.log(res.data);
            setExploreLanding(res.data);
            
        });
    }, []);

    const [exploreLanding, setExploreLanding] = useState([
        {
            exp_landing_img: '',
            exp_landing_title: '',
            exp_links: ''
        }
    ]);

    return (
        <Fragment>
            <div className="explore_header">
                   <p style={{marginTop:"58px"}}>
                        { ` NKW Group has developed into a leading provider of diverse range of short and
                         long-term special project.`} <br/>
                         <br/><br/>
                         {`By embracing possibility, building innovation and driving change, we are focused 
                         on creating success together for our partner and clients.` }
                   </p>
                
            </div>
            <div className="explore_contants">
               
                <div className={classes.root} >
                    <GridList cellHeight={302}   className={classes.gridList} >
                        
                        {exploreLanding.map(exp_land => (
                            <GridListTile key={exp_land.exp_landing_title}>
                                    <Link   to={`/explore/${exp_land.exp_links}`} activeClassName="active">
                                     <img src={exp_land.exp_landing_img} alt={exp_land.exp_landing_img} width="100%" height="100%"/>
                                     </Link>
                                <GridListTileBar style={{fontWeight:'bold'}}
                                 title={exp_land.exp_landing_title}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </Fragment>
    )

}


export default ExploreLanding;