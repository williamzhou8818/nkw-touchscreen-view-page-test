import React, {Fragment} from 'react';
import OurTeamMember from './ourteammember/contactourteam';
import './contact.scss';

const  Contact = () => { 

    return ( 
        <Fragment>
            <div className="contact_header">
                 <h1>Contact NKW Group</h1>
            </div>
            <div className="warp_scorll_contact">
            <div className="contact_contanter">
                <div className="contact-left">
                    <p style={{fontWeight:'600', fontSize:"30px"}}>Contact</p>
                    <p style={{fontWeight: "500",  color:"#707070"}}>Phone: </p>
                    <p style={{fontWeight: "400",  color:"#707070"}}>Papua New Guinea: +675 472 5161</p>
                    <p style={{fontWeight: "400",  color:"#707070"}}>Australia: +61 7 3268 4755</p>
                    <p style={{fontWeight:'600', color:"#707070"}}>Email</p>
                    <p style={{fontWeight: "400",  color:"#707070"}}>contact@png.com.au</p>
                    <p style={{fontWeight:'600', color:"#707070"}}>Website</p>
                    <p style={{fontWeight: "400",  color:"#707070"}}>www.nkwgroup.com</p>
                </div>
                <div className="contact-right">
                    <p  style={{fontWeight: "600",  fontSize:"30px"}}>Papua New Guinea</p>
                    <p  style={{fontWeight: "400",  color:"#707070", fontSize:"20px"}}>P.O. Box 4998 </p>
                    <p  style={{fontWeight: "400",  color:"#707070", fontSize:"20px"}}>Cnr. Mula & Abel Tasman Streets,</p>
                    <p  style={{fontWeight: "400",  color:"#707070", fontSize:"20px"}}>Lae, Morobe Province</p>
                    <p  style={{fontWeight: "400",  color:"#707070", fontSize:"20px"}}> Papua New Guinea</p>

                    <p style={{fontWeight: "600",  fontSize:"30px"}}>Australia</p>
                    <p style={{fontWeight: "400",  color:"#707070", fontSize:"20px"}}>30 Eagleview Place</p>
                    <p style={{fontWeight: "400",  color:"#707070" ,fontSize:"20px" }}>Eagle Fam, QLD 4009</p>
                    <p style={{fontWeight: "400",  color:"#707070", fontSize:"20px"}}>Australia</p>
                    
                </div>
            </div >
                <div style={{maxWidth:'1080px'}} > 
                    <OurTeamMember/>
                        
                </div> 
                    <div  className="quickMap" 
                        style={{ maxWidth: "1080px" , backgroundColor: "#F4F4F4"}}
                    >
                        <div  style={{padding: '0 6%', margin:" 0%", display: "flex"}}>
                                <ul style={{
                                           textAlign: "left",
                                           color: "#707070",
                                           margin:"0", 
                                           fontSize: "13px",
                                           lineHeight: "23px",
                                           paddingRight: "40px",
                                           paddingBottom: "60px"
                                 }}>
                                    <li>
                                        Project Management Services
                                    </li>
                                    <li>
                                        Camp Construction
                                    </li>
                                    <li>
                                        Camp Management
                                    </li>
                                    <li>
                                        Land Transport
                                    </li>
                                </ul>
                                <ul style={{
                                           textAlign: "left",
                                           color: "#707070",
                                           margin:"0", 
                                           fontSize: "13px",
                                           lineHeight: "23px",
                                           paddingRight: "40px",
                                           paddingBottom: "60px"

                                 }}>
                                    <li>
                                        Plant Hire
                                    </li>
                                    <li>
                                        Customs Clearing
                                    </li>
                                    <li>
                                        Personnel Transport
                                    </li>
                                    <li>
                                        Trucks & Vehicles
                                    </li>
                                </ul>
                                <ul style={{
                                           textAlign: "left",
                                           color: "#707070",
                                           margin:"0", 
                                           fontSize: "13px",
                                           lineHeight: "23px",
                                           paddingRight: "40px",
                                           paddingBottom: "60px"

                                 }}>
                                    <li>
                                        Freight Forwarding
                                    </li>
                                    <li>
                                        Logistics & Warehousing
                                    </li>
                                    <li>
                                        Commodity Exports
                                    </li>
                                    <li>
                                        Fresh Produce
                                    </li>
                                </ul>
                                <ul style={{
                                           textAlign: "left",
                                           color: "#707070",
                                           margin:"0", 
                                           fontSize: "13px",
                                           lineHeight: "23px",
                                           paddingRight: "40px",
                                           paddingBottom: "60px"

                                 }}>
                                    <li>
                                        Catering Services
                                    </li>
                                    <li>
                                        Travel Services
                                    </li>
                                    <li>
                                       Power Generation
                                    </li>
                                    <li>
                                       Electrical Services
                                    </li>
                                </ul>
                                
                                
                            </div>
                    </div>
                      
            </div>
            
           
        </Fragment>
    )
}
export default Contact;

