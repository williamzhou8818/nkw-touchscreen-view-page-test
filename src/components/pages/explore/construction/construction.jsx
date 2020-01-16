import React, {Fragment, useState, useEffect} from 'react';
import FooterImage from './CategoryFooterImages_Building.png'
import './construction.scss';
import axios from 'axios';


const Construction = () => { 

    const [construction, setConstruction] = useState({
        subtitle: [],
        title: '',
        logo1: '',
        logo2: '',
        header_background_img: '',
        cotegory_footer_img: '',
        context_editor_one: '',
        context_editor_two: '',
        context_editor_three: '',
        context_editor_four: '',
        context_editor_five:''

    });

    useEffect(() => {
        axios.get('/api/nkwbc').then(res => {
            console.log(res.data[0]);
            setConstruction(res.data[0]);
        })
    }, []); 


    //_Local Styles
    const _headerImage = { 
        height: '7.5vh',
        padding: '6% 5%',
        backgroundImage: `url(${construction.header_background_img})`,
        backgroundSize: 'conver',
        border: '1px solid black',
        color: 'white',
        fontWeight: '900',
        lineHeigh:'1.3rem',
        borderBottom: '1.5px solid #F7941B'
    }

    return (
        <Fragment>
             <div className="construction_detail_header" style={_headerImage}>
                <h1>{construction.title}</h1>
            </div> 


            <div style={{overflow:"scroll", height:'59.94vh', overflowX: 'hidden', margin:"-5px 0",  padding:"-0px 60px" }}>
            <div className="pargrah_main">
   
                <div style={{color:"#707070", fontSize:"20px", padding: "3% 37px"}}
                     dangerouslySetInnerHTML={{__html: construction.context_editor_one }} />
            </div> 
            <div style={{display: 'flex', padding: '0 4%'}}>
                <div style={{textAlign:'left', fontSize: "20px" , color:"#707070",  flex: "1"}}>      
                    {/* <p style={{fontWeight: 'bold', fontSize:"20px", color:"#707070"}}>Complete Construction Services: </p>  */}
                    {/* <ul style={{lineHeight:"2.3rem", marginTop: "-39px"}}>
`                       <li>New, renovate or rebuild</li>
                        <li>{`Warehouses, camp accommodation, `}<br/>
                             { `offices, houses and Civil Works` }</li>
                        <li>Equipment Hire</li> 
                        <li>Maintenance and camp management</li>
                        <li>Project management and labour hire</li>
                    </ul> */}
                    <div style={{lineHeight:"2.3rem", marginTop: "-39px"}}
                         dangerouslySetInnerHTML={{__html: construction.context_editor_two}}> 
                    </div>

                </div>
                <div style={{textAlign:'left', fontSize: "20px" , color:"#707070",  flex: "1"}}>      
                    {/* <p style={{fontWeight: 'bold', fontSize:"20px", color:"#707070"}}> Remote Site Operations:</p> 
                    <ul style={{lineHeight:"2.3rem", marginTop: "-37px"}}>
`                       <li>Manus: 1 x 1,000 man camp</li>
                        <li>1 x 300 Man Camp</li>
                        <li>1 x 70 Man Camp</li> 
                        <li>{`Lae: Service Provider to the WAFI Project`}<br/>
                           {`at 11 mile`}</li>
                        <li>Catering and HousKeeping</li>
                        <li>Facilities (Office for 80 personal)</li>
                    </ul> */}

                    <div 
                       style={{lineHeight:"2.3rem", marginTop: "-37px"}} 
                       dangerouslySetInnerHTML={{__html: construction.context_editor_three}} />

                </div>
            </div>
            <div className="pargrah_main" style={{padding: "0 40px"}}>
                {/* <p style={{color:"#707070", fontSize:"20px"}}>
                    <span style={{fontWeight: "700"}}>
                            {`
                                    Experience in Camp Construction and Catering:                                        
                            `}
                    </span>
                    <li>{`
                        NKW Group have been building camps in Papua New Guinea For over 5 years. We Know the terrain
                        and the culture and have our own CA team to ensure Land Owners are given direct attention before
                        issues escalate, as we know they can.
                    `}</li>
                    <br/>
                        {`Contact Us to benefit from our comprehensive range of building, construction, mining campsite and
                          infrastructure services.
                        `}
                  
                </p> */}
                <div
                     style={{color:"#707070", fontSize:"20px"}}
                    dangerouslySetInnerHTML={{__html: construction.context_editor_four}} />
            </div> 
            <div className="section_title">
                    <p style={{fontSize:"33px"}}>{construction.subtitle}</p>
                    <hr />
            </div>
            <div className="construction_logo_section"> 
                 <div>
                       <img src={construction.logo1} alt="" width="100%"/>
                 </div> 
                 <div>
                     <img src={construction.logo2} alt="" width="100%"/>

                 </div>
            </div>
            <div style={{
                   color: "#707070",
                   textAlign:"left",
                   fontSize:"20px",
                   padding: "0 4%"}}>
               {/* <h2 style={{
                   color: "#F7941B",
                   textAlign:"left",
                   fontSize:"20px",
                   padding: "0 4%"
               }}>NKW Group Industrial Project Services</h2>
               <p 
                style={{
                    color:"#707070",
                    textAlign:"left",
                    fontSize: "20px",
                    padding: "0 4%",
                    lineHeigh: "2.1rem"
                }}
               >{`
                  
                  Operating under the brand ‘Mine Spec’ N KW offer commercial services to the mining industry. We have been providing tailored service solutions to our customers since 2004 under this brand. Mine Spec understand that customers are the core of our business and make it our responsibility to ensure they are offered the highest levels of customer service plus the benefits of competitive and reliable service options throughout the region. Contact Us to find out how we can help with your industrial project.

               `}</p><br/>
               <p 
                 style={{
                    color:"#707070",
                    textAlign:"left",
                    fontSize: "20px",
                    padding: "0 4%",
                    lineHeigh: "2.1rem",
                    
                }}
               >{`Contact Us`} to find out how we can help with your industrial project</p> */}

                <div dangerouslySetInnerHTML={{__html: construction.context_editor_four}} />


            </div>
            <div className="image_footer">
                <img style={{marginLeft: "-60px"}} src={FooterImage} alt="" width="100%"/>
            </div>
            </div> 
        
        </Fragment>
    )
}


export default Construction;