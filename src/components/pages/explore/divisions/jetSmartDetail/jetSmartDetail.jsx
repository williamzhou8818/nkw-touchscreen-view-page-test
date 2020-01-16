import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './jetSmartDetail.scss';





const  JetSmartDetail = () => {

    // Get ExpacDetails from api

const [jet, setJet] = useState({
    contact: {
        phone_a: '',
        phone_b: '',
        email: ''
    },
   subtitle: [],
   title:'',
   logo:'',
   header_background_img: '',
   editor_context:''

    // title: '',
    // logo: '',
    // contact: {
    //     phone_a: '',
    //     phone_b: '',
    //     email: ''
    // },
    // context: {
    //     p: [],
    //     subtitle: [],
    //     sub_li_a: []
    // }
});

useEffect(() => {
    axios.get('/api/jet').then(res => {
        setJet(res.data[0]);
        console.log(res.data[0]);

    })
},[])


// setup _local Styles
const _headerImg = {
    height: '7.5vh',
    padding: '6% 5%',
    backgroundImage: `url(${jet.header_background_img})`,
    backgroundSize: 'conver',
    border: '1px solid black',
    color: 'white',
    fontWeight: '900',
    lineHeigh:'1.3rem',
    borderBottom: '1.5px solid #F7941B'
} 

    return (
        <Fragment>
            <div className="jet_detail_header" style={_headerImg}>
                <h1>{jet.title}</h1>
            </div> 
            <div className="jet_detail_main">
                 <div className="left_contants">
                     <div className="left_img_logo"> 
                        <img src={jet.logo} alt=""  width="100%" /> 
                     </div>
                     <div className="contact_card_jet"> 

                        <h2>Contact</h2>
                        <p>Phone <br/>{jet.contact.phone_a}<br/>+617 {jet.contact.phone_b}</p>
                        <p>Email <br/> {jet.contact.email} </p>  
                     </div>
                 </div>
                 <div className="right_contants" 
                        style={{color: "#707070", textAlign:"left", fontSize:"20px"}}>

                    <div dangerouslySetInnerHTML={{__html: jet.editor_context}} />
                        {/* <p>
                            {`Jet Smart Travel Services Limited (JST) is a wholly owned subsidiary of NKW Holdings Limited.`}
                       </p> 
                       <p>
                             {jet.context.p[1]}
                       </p>
                       <p>
                            {jet.context.p[2]}
                       </p>

                       <p style={{fontWeight:"600"}}> {jet.context.subtitle[0]} </p>
                        <ul style={{lineHeight:"2rem", fontSize:"20px"}}>
                            {jet.context.sub_li_a.map((jet_li, i) => {
                                return(

                                    <li>{jet_li}</li>
                                )
                            })}
                        </ul>
                        <p>
                            {jet.context.p[3]}
                       </p> */}
                 </div>
            </div>

        </Fragment>
    )
}

export default JetSmartDetail;