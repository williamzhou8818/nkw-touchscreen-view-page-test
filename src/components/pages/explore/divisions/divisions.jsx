import React, {Fragment, useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';
import './divisions.scss';


const Divisions = () => {

    const [divisionLogo, setDivisionLogo]  =  useState([{}]);
    
    useEffect(() => {
        axios.get('/api/disvisions').then(res => {
           console.log(res.data.disvisions);
           setDivisionLogo(res.data.disvisions)
        });
    }, []) 

    return (
        <Fragment> 
            <div className="divisions_header ">
                <div className="divisions_sub_title"> 
                    <p>NKW Group Divisions</p> 
                    <p> NKW Group has developed into a leading provider of diverse, short and long-term special projdects and services</p>
                </div>
            </div>
            <div className="divisions_group_list"> 
                {
                    divisionLogo.map((data => { 
                        // console.log(data.logo)
                        return (
                            <div className="divLogo">
                            <Link to={`/explore/divisions/${data.links}`} >
                                <img src={data.logo} alt=""   width="100.99%" />
                            </Link>
                       </div>
                        )
                        
                       
                    }))
                }
                    {/* { 
                        divisionLogo.map( logo => {
                            return (
                                <div className="divLogo">
                                    <Link to={`/explore/divisions/${logo.links}`} >
                                        <img src={logo.logo} alt=""   width="100.99%" />
                                    </Link>
                                </div>
                            )
                        })
                    } */}
                {/* <div  className="section_two_title"><h1>Why We Stand Out</h1></div>
                 <div className="why_we_stand_out"> 
                            <div>
                                <p><i class="fas fa-map-marker-alt"></i></p>
                                <p><strong>Remote Specialists</strong></p>
                                <p >Delivering project on time and budget in remote areas is what we are known for.</p>
                            </div>
                            <div>
                                <p><i class="far fa-eye"></i></p>
                                <p><strong>Reduce Your Risk</strong></p>
                                <p>Reduce your risk profile by keeping you informed, and us accountable and transparent.</p>
                            </div>
                            <div>
                                <p><i class="fas fa-share-alt"></i></p>
                                <p><strong>Flexible</strong></p>
                                <p>Get more of what you want, how you want it with our flexible in our service delivery.</p>
                            </div>
                            <div>
                                <p><i class="fas fa-leaf"></i></p>
                                <p><strong>Promoting Natural</strong></p>
                                <p>We promote the use of natural resources in an efficient, effective and ethical way.</p>
                            </div>
                            <div>
                                 <p><i class="fas fa-search"></i></p>
                                <p><strong>Detail Oriented</strong></p>
                                <p>Benefit from our detailed analysis of project documentation and focus on safety.</p>
                            </div>
                            <div>
                                <p><i class="fas fa-heart"></i></p>
                                <p><strong>Community Values</strong></p>
                                <p>Community responsibility and support is at the very heart of everything we do.</p>
                            </div>

                 </div> */}
                     
                    
              </div>

             
           
        </Fragment>

    )
}

export  default Divisions;