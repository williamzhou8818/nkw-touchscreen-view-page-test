import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import HVC_LOGO from './NKW_Logos_HVC.png';
import './hvcDetail.scss';



let p_a = `

    HVC commenced in 2007 to provide wet hire, operation and full maintenance of a construction
    fleet for use at the Hidden Valley Mine.

`;

let p_b = `
    Wet hire of Contractors Plant (construction and civil plant). The services include wet hire, 
    operation and full maintenance of a construction fleet to Morobe Consolidated Goldfields Ltd (MCG) 
    for use at Hidden Valley.
`;

let p_c = `
Year-round high rainfall causing washouts, 2300-meter elevation, limited infrastructure.
`;

let p_d = `
60 pieces dedicated Machinery based on site (Dump trucks, Wheel Loaders / Graders etc.).
`;



const  HVCDetail = () => {

    // Get ExpacDetails from api

const [hvc, setHVC] = useState({
    contact: {
        name:'',
        jobs:'',
        phone_a: '',
        phone_b: '',
        email: ''
    },
    content: [],
    title:'',
    header_background_img: '',
    logo: '',
    editor_context: ''
});

useEffect(() => {
    axios.get('/api/hvc').then(res => {
        setHVC(res.data[0]);
        console.log(res.data[0]);

    })
},[])

// _local Style 
const headerImge = {
    height:'7.5vh',
    padding:'6% 5%',
    border: '1px solid black',
    backgroundImage: `url(${hvc.header_background_img})`,
    color: 'white',
    fontWeight: '900',
    lineHeight:'1.3rem',
    borderBottom:'1.5px solid #F7941B'
}



    return (
        <Fragment>
            <div className="expac_detail_header" style={headerImge}>
                <h1 style={{fontSize: '70px', letterSpacing:  '1.6px'}}>{hvc.title}</h1>
            </div> 
            <div className="hvc_detail_main">
                 <div className="left_contants">
                     <div className="left_img_logo"> 
                        <img src={hvc.logo} alt=""  width="100%" /> 
                     </div>
                     <div className="contact_card_hvc"> 

                        <h2>Contact</h2>
                        <p><strong>{hvc.contact.name}</strong></p>
                        <p>{hvc.contact.jobs}</p> 
                        <p>Phone <br/>{hvc.contact.phone_a}<br/>{hvc.contact.phone_b}</p>
                        <p>Email: <br/> {hvc.contact.email} </p>  
                     </div>
                 </div>
                 <div className="right_contants" style={{color:"#707070", marginTop: "10px"}}>

                     <div dangerouslySetInnerHTML={{__html: hvc.editor_context}} />
                        {/* <p>
                           {`HVC commenced in 2007 to provide wet hire, operation and full maintenance of a construction
                             fleet for use at the Hidden Valley Mine.`}
                       </p> 
                      
                       <p>
                       <span>SERVICE PROVIDED</span><br/>
                             {`Wet hire of Contractors Plant (construction and civil plant). The services include wet hire, 
                                operation and full maintenance of a construction fleet to Morobe Consolidated Goldfields Ltd (MCG) 
                                for use at Hidden Valley.`}
                       </p>
                       <p>
                           <span>CHALLENGES</span><br/>
                            {`Year-round high rainfall causing washouts, 2300-meter elevation, limited infrastructure.`}
                       </p>
                       <p>
                           <span>FLEET</span><br/>
                            {`60 pieces dedicated Machinery based on site (Dump trucks, Wheel Loaders / Graders etc.).
`}
                       </p> */}

        
                 </div>
            </div>

        </Fragment>
    )
}

export default HVCDetail;