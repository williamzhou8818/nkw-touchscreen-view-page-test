import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import './camp_management.scss';
import  camp_footer_img from './camp_footer.png';




const CampManagement = () => { 

    // Init CampManagement Data
    const [campManagement, setCampManagement] = useState({
        subtitle: [],
        title: '',
        header_background_img: '',
        cotegory_footer_img:'',
        context_editor_one: ''
    });
    
    //Get _id 
    const [id, setID] = useState('');

    useEffect(() => {
        axios.get('/api/campmanagement').then(res => {
            console.log(res.data[0]);
            setCampManagement(res.data[0]);
            setID(res.data[0]._id);
        })
    }, []);


    //_Local Style var
    const headerImge = {
        height:'7.5vh',
        padding:'6% 5%',
        border: '1px solid black',
        backgroundImage: `url(${campManagement.header_background_img})`,
        color: 'white',
        fontWeight: '900',
        lineHeight:'1.3rem',
        borderBottom:'1.5px solid #F7941B'
    }

    const styleObj = {
        
        lineHeight: '4px',
        height: '500px',
        padding:'20px 0'
        
      };

    return (
        <Fragment>
             <div className="expac_detail_header_camp" 
                  style={headerImge}
             >
                <h1  style={{fontSize: '4rem'}}>{campManagement.title}</h1>
            </div> 
            <div className="warper_camp_logistics">  
              <div className='main_context_warper_logistics'>
              <div className="pargrah_main_logistics" >
                        {/* <p
                            style={{
                                color:'#707070',
                                fontSize: `20px`,
                                wordSpacing:'0.4rem',
                                padding: `5% 0%`,
                            }}
                        >
                            {`NKW provides a comprehensive range of Camp Management Services for off-site and onsite requirements. These include ancillary services and; `}
                        </p>
                        <div style={{
                            color: 'green',
                            fontSize: '20px',
                            marginLeft: '5%',
                            textAlign: "left",
                            
                        }}>
                            <ul 
                                style={{lineHeight: '1.9rem', fontSize: '20px', color: '#707070', listStyleType: 'decimal'}}
                            >
                                <li><span style={{marginLeft: '25px'}}>{`Camp Catering`}</span></li>
                                <li><span style={{marginLeft: '25px'}}>{`Camp Administration`}</span></li>
                                <li><span style={{marginLeft: '25px'}}>{`Cleaning Services (For accommodation & offices)`}</span></li>
                                <li><span style={{marginLeft: '25px'}}>{`Laundry Services`}</span></li>
                                <li><span style={{marginLeft: '25px'}}>{`Grounds Upkeep and Maintenance`}</span></li>

                            </ul>
                        </div>
                    </div> 



                    <div className="section_title_logist" 
                        style={{
                          //  border: '1px solid orange',
                            marginTop: '100px',
                            paddingLeft:'8%',
                            wordSpacing:"0.2rem",
                        }}
                    >
                            <p 
                              style={{
                                borderLeft: '4px solid orange',
                                paddingLeft:'2%',
                                color: '#F7941B',
                                fontSize: "30px"
                            }}
                            >
                            {`Capable `} {`of Catering to over 3000 a day`}
                           </p>
                    </div> */}
    
                  <div  dangerouslySetInnerHTML={{__html: campManagement.context_editor_one}} style={styleObj}/>
                    
                 </div>
              </div>
                   

                    <div className="image_footer" style={{marginTop: "131.9px", padding: " 0 0 "}}>
                        <img src={camp_footer_img} alt="" />
                    </div>
                </div>
        </Fragment>
    )
}


export default CampManagement;