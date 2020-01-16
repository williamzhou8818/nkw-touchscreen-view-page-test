import React, {Fragment, useState, useEffect} from  'react';
import { withRouter, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {Route, NavLink, Link} from 'react-router-dom';
import  moment from 'moment';
import Moment from 'react-moment';
import 'moment-timezone';
import axios from 'axios';
import NKW_HEADER_LOGO from './NKW_Header.png';
import './Header.scss';
import { clearImmediate } from 'timers';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(0),
      backgroundColor: '#0064B0',
      flex: 1,
      letterSpacing: '7px',
      fontSize: '30px',
      height: '66px',
      width: '100%',
      borderRight: '2px solid white',
      borderRadius: '0'
    },
    button_two: {
        margin: theme.spacing(0),
        borderRight: '2px solid white',
        backgroundColor: '#EF5702',
        letterSpacing: '7px',
        fontSize: '30px',
        height: '66px',
        width: '100%',
        borderRadius: '0'

    },
    button_three: {
        margin: theme.spacing(0),

        backgroundColor: '#8ABC2C',
        flex: 1,
        letterSpacing: '7px',
        fontSize: '30px',
        height: '66px',
        width: '100%',
        borderRadius: '0'

    },
    input: {
      display: 'none',
    },
  }));

const Header = ({ match, location, history } ) => {

    const classes = useStyles();

    const [header, setHeader] = useState({
        logo_img: '',
        nav_one: '',
        nav_two: '',
        nav_three: ''
    })

    useEffect(()=> {
        axios.get('/api/header').then(res => {
            console.log(res.data)
            setHeader(res.data[0]);

        });
        
    }, []);


     console.log(   moment().format('LLL').toLocaleUpperCase());


    return (
        <Fragment>
            {/* {
                  setTimeout(() => {
            
                    window.location.replace("http://localhost:3001/");

        
                    console.log('This is will run after 1 second')
                }, 5000)
            } */}
            {/* <div>You are now at {location.pathname}</div> */}
            <div className='header_logo'>
                <Link to='/'>
                    <img src={header.logo_img} alt='NKW_LOGO ' style={{width: '100%', height: '100%'}}/>
                </Link>
            </div>
            <div className='timebar'> 
                <div className="left_allow_link"> 

             {

                 // Hard codeing link for now
               (location.pathname == '/explore/divisions/nkwdetail' || 
                location.pathname == '/explore/divisions/expacdetail' || 
                location.pathname == '/explore/divisions/qpsdetail' || 
                location.pathname == '/explore/divisions/hiddenvalley' ||
                location.pathname == '/explore/divisions/nkwcatering' || 
                location.pathname == '/explore/divisions/mountaincoffeeroasters' || 
                location.pathname == '/explore/divisions/pngcommvehic' || 
                location.pathname == '/explore/divisions/allpowerservice' || 
                location.pathname == '/explore/divisions/jetsmart' || 
                location.pathname == '/explore/divisions/mototrain' ||
                location.pathname == '/explore/divisions/pcs' || 
                location.pathname == '/explore/divisions/nkwbuilding' || 
                location.pathname == '/explore/divisions/hvc' ||
                location.pathname == '/explore/divisions/pngconcrete' ||
                location.pathname == '/explore/divisions/expacau'               
                ) && 
                <Link to='/explore/divisions'>
                    <i class="fas fa-arrow-left"></i> 
                </Link>
               
             }
             {
                 ( location.pathname == '/explore/divisions') && 
                 <Link to='/explore'>
                      <i class="fas fa-arrow-left"></i> 
                 </Link>
             }


{

// Hard codeing link for now
(location.pathname == '/explore/construction' ||
location.pathname == '/explore/catering' ||
location.pathname == '/explore/logistics' ||
location.pathname == '/explore/nkwfresh' ||
location.pathname == '/explore/procure' ||
location.pathname == '/explore/trainingservice' ||
location.pathname == '/explore/campmanagement' 

) && 
<Link to='/explore'>
   <i class="fas fa-arrow-left"></i> 
</Link>

}

                    
                </div>
                <div className="times"  style={{textAlign:"center"}}>
                    {         
                     
                            moment(new Date()).format('hh:mma DD MMM YYYY').toLocaleUpperCase()
  
                    }
                </div>
              
            </div>
            <div  className="header__nav">
                <div className='nav_one'>

                    <NavLink  to='/about' exact={true}  >
                        <Button variant="contained" color="primary" className={classes.button}>
                            {header.nav_one}
                        </Button>

                    </NavLink>
                   
                </div>
                <div className='nav_two' >

                <NavLink to='/explore' >
                    <Button variant="contained" color="primary" className={classes.button_two}>
                           {header.nav_two}
                    </Button>

                </NavLink>
                </div>
                <div className='nav_three'>

                    <NavLink to='/contact'>
                        <Button variant="contained" color="primary" className={classes.button_three}>
                             {header.nav_three}
                        </Button>

                    </NavLink>
                    </div>
            </div>
            {/* <div className="header__nav">
                    <div className="about_link"> 
                        <NavLink to='/about' exact>
                         
                            {nav_one}
                        </NavLink>

                    </div>

                    <div className="explore_link">
                        <NavLink to='/explore' exact>
                          
                                {nav_two}
                    
                        </NavLink>

                    </div>
                    <div className="contact_link"> 
                        <NavLink to='/contact'>
                            {nav_three}
                        </NavLink>
                       
                    </div>

                
            </div> */}
           
        </Fragment>
    )
}


export default withRouter(Header);