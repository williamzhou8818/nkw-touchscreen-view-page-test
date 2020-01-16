import React, {Fragment, useState, useEffect} from 'react';
import Headers_Logistics_Footer from './CategoryFooterImages_Logistics.png';
import {Link} from  'react-router-dom';
import axios from 'axios';
import './logistics.scss';



const Logistics = () => { 

    const [logistics, setlogistics] = useState({
        subtitle: [],
        title: '',
        logo1: '',
        logo2: '',
        logo3: '',
        header_background_img: '',
        cotegory_footer_img: '',
        context_editor_one: '',
        context_editor_two: '',
        context_editor_three: ''
    });

    useEffect(() => {
        axios.get('/api/logisticstranport')
            .then(res => { 
                console.log(res.data[0]);
                setlogistics(res.data[0])
            })
    },[])

    const _headerImge = { 
        height: '7.5vh',
        padding: '6% 5%',
        backgroundImage: `url(${logistics.header_background_img})`,
        backgroundSize: 'cover',
        border: '1px solid black',
        color: 'white',
        fontWeight: '900',
        lineHeight: '24px',
        borderBottom: '1.5px solid #F79418'
    }

    return (
        <Fragment>
             <div className="expac_logistics_header" style={_headerImge}>
                <h1>{logistics.title}</h1>
            </div> 
            

            <div className="warper_logistics">  
              <div className='main_context_warper_logistics'>
              <div className="pargrah_main_logistics" >
                        <p
                            style={{
                                color:'gray',
                                fontSize: `20px`,
                                wordSpacing:'0.5rem',
                                padding: `5% 0%`,
                            }}
                        > 
                            <strong>
                                <div dangerouslySetInnerHTML={{__html: logistics.context_editor_one}} />
                            </strong> 
                        </p>
                        <div style={{
                            color: 'green',
                            borderLeft:'3px solid  green',
                            fontSize: '20px',
                            marginLeft: '2%',
                            textAlign: "left",
                            padding:'0% 5%'
                            
                        }}>
                          
                            {/* <ul 
                                style={{lineHeight: '1.9rem', fontSize: '20px'}}
                            >
                                <li>{logistics.context.li_all[0]}</li>
                                <li>{logistics.context.li_all[1]}</li>
                                <li>{logistics.context.li_all[2]}</li>
                            </ul> */}
                            <div  dangerouslySetInnerHTML={{__html: logistics.context_editor_two}} />
                        </div>
                    </div> 



                    <div className="section_title_logist">
                            <p style={{marginLeft: "-28px" }}>{logistics.subtitle[0]}</p>
                            <hr  style={{marginLeft: "-5px" }} />
                    </div>
                    <div> 
                        <div
                            style={{ 
                                display: 'flex',
                                marginBottom: '5%',
                                marginLeft: '0%'

                            }}
                         >
                            <Link to='/explore/divisions/hiddenvalley' style={{ marginRight: '9%'}}>
                                <img src={logistics.logo1} alt="" width="200px" height="200px"    />
                            </Link>
                            <Link to='/explore/divisions/pcs' style={{marginRight: '9%'}} >
                                <img src={logistics.logo2} alt="" width="200px" height="200px" />
                            </Link>
                            <Link to='/explore/divisions/pngcommvehic' style={{marginRight: '9%'}} >
                                <img src={logistics.logo3} alt="" width="200px" height="200px"/>
                            </Link>


                        </div>
                    </div>
{/* 
                    <p style={{textAlign:'left', color: '#F7941B', padding: '0% 0%', fontWeight:'500', fontSize:'1.3rem'}}
                    >
                    {logistics.context.sub_title[2]}</p>
                    <p style={{ textAlign:'left', color: '#707070', padding: '0% 0%', fontSize:'1.3rem'}}
                    >{logistics.context.p[1]}</p>


                    <p style={{textAlign:'left', color: '#F7941B', padding: '0% 0%', fontWeight:'500', fontSize:'1.3rem'}}
                    >
                    {logistics.context.sub_title[3]}</p>
                    <p style={{ textAlign:'left', color: '#707070', padding: '0% 0%', fontSize:'1.3rem'}}
                    >{logistics.context.p[2]}</p>

                    <p style={{ textAlign:'left', color: '#707070', padding: '2% 0%', fontSize:'1.3rem'}}><span style={{fontWeight:"600"}}>{logistics.context.sub_title[4]}</span><br/>
                        <ul style={{lineHeight: '2rem', marginTop: "-4px"}}>
                            <li>{logistics.context.li_all[3]}</li>
                            <li>{logistics.context.li_all[4]}</li>
                        </ul>
                    </p>


                    <p style={{textAlign:'left', color: '#707070', padding: '0% 0%', fontWeight:'500', fontSize:'1.3rem'}} 
                    >{logistics.context.sub_title[5]}
                    </p>
                        <div  style={{textAlign:'left', color: '#707070', padding: '0% 0%', fontSize:'1.2rem', marginTop: "-8px"}} >Year-round high rainfall causing washouts, 2300m elevation, limited infrastructure
                        </div>
                     
                     <br/>
                    <p style={{textAlign:'left', color: '#707070', padding: '0% 0%', fontWeight:'500', fontSize:'1.3rem'}} 
                    >{logistics.context.sub_title[6]} 
                    </p>

                    <ul style={{textAlign:'left',color: '#707070', padding: '0% 2%', lineHeight: '1.7rem', fontSize:"20px", marginTop: "-9px"}}> 
                        <li>{logistics.context.li_all[5]}</li>
                        <li>{logistics.context.li_all[6]}</li>
                        <li>{logistics.context.li_all[7]}</li>
                        <li>{logistics.context.li_all[8]}</li>

                    </ul>
                    <p  style={{textAlign:'left',color: '#707070', padding: '0% 0%', lineHeight: '1.7rem',  fontSize:"20px"}}
                    ><span  style={{textDecoration: "underline" , fontWeight: "500" }}> {`Contact us`} </span> to find out how we can help with your industrial project.</p>  

                    <br/><br/>
                    
                    <p style={{textAlign:'left', color: '#F7941B', padding: '0% 0%', fontWeight:'500', fontSize:'1.3rem'}} 
                    >{logistics.context.sub_title[7]}</p>
                    <p style={{textAlign:'left', color: '#707070', padding: '0% 0%', fontSize:'1.3rem', marginTop: "-10px"}} >{`
                       Operating under the brand ‘Mine Spec’ NKW offer commercial services to the mining industry. We have been providing tailored service solutions to our customers since 2004 under this brand. Mine Spec understand that customers are the core of our business and make it our responsibility to ensure they are offered the highest levels of customer service plus the benefits of competitive and reliable service options throughout the region. 
                            
                    `}</p>
                    
                    <p  style={{textAlign:'left',color: '#707070', padding: '0% 0%', lineHeight: '1.7rem',  fontSize:"20px"}}
                    >Contact Us to find out how we can help with your industrial project.</p>  */}

                    <div
                       style={{textAlign:'left', color: '#F7941B', padding: '0% 0%', fontWeight:'500', fontSize:'1.3rem'}} 
                       dangerouslySetInnerHTML={{__html: logistics.context_editor_three}} /> 
              </div>
                   

                    <div className="image_footer" className="image_footer ">
                        <img style={{marginLeft: "-60px" }} src={Headers_Logistics_Footer} alt="" />
                    </div>
                
            </div> 
        
        </Fragment>
    )
}


export default Logistics;