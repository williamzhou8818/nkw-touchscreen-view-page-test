import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './nkwBuildingDetail.scss';





const  NkwBuildingDetail = () => {

    // Get ExpacDetails from api

 const [nkwBuilding, setNKWBuilding] = useState({

    contact: {
        phone_b: '',
        phone_a: '',
        email: ''
    },
    context: {
        p: {
            p_a: '',
            p_b: ''
        },
        sub_lists: {
            li_a: [],
            li_b: [],
            li_c: []
        },
        sub_title: [],
        title: '',
        logo:'',
        header_background_img: '',
        

    },

    editor_context:''
    // title: '',
    // logo: '',
    // contact:{
    //     phone_a: '',
    //     phoen_b: '',
    //     email: ''
    // },
    // context: {
    //     p: {
    //         p_a: '',
    //         p_b: ''
    //     },
    //     sub_title: [],
    //     sub_lists: {
    //         li_a: [],
    //         li_b: [],
    //         li_c: []
    //     }
    // }

 })

useEffect(()=>  {

    axios.get('/api/nkwbuilding').then(res => {

        console.log(res.data[0]);
        setNKWBuilding(res.data[0]);
    })


},[]);


    return (
        <Fragment>
            <div className="expac_detail_header_building">
                <h1>{nkwBuilding.title}</h1>
            </div> 
            <div className="nkw_building_construction_detail_main">
                 <div className="left_contants">
                     <div className="left_img_logo"> 
                        <img src={nkwBuilding.logo} alt=""  width="100%" /> 
                     </div>
                     <div className="contact_card_nkwbuilding"> 

                        <h2>Contact</h2>
                        <p>Phone <br/>
                            {nkwBuilding.contact.phone_a} <br/>
                            {`+617 3268 2033`}
                        </p>
                        <p>Email <br/>
                            {nkwBuilding.contact.email}
                        </p>  
                     </div>
                 </div>
                 <div className="right_contants">

                     <div dangerouslySetInnerHTML={{__html: nkwBuilding.editor_context}} />
                        {/* <p style={{color: '#707070', fontSize: '1.4rem'}}>
                            {nkwBuilding.context.p.p_a}
                       </p> 
                        <p style={{fontSize: '1.4rem', color:'#707070', fontWeight:"600"}}>{nkwBuilding.context.sub_title[0]}</p>
                        <div style={{textAlign: "left", fontSize: "20px", color:"#707070", lineHeight: "2.3rem", marginTop:"-28px"}}>
                            <ul style={{width: "480px"}}> 
                                {nkwBuilding.context.sub_lists.li_a.map(li_a => { 
                                        
                                        return (

                                            <li>
                                                {li_a}
                                            </li>
                                        )

                                  })
                                }
                            </ul>
                        </div> 


                        <p style={{fontSize: '1.4rem', color:'#707070', fontWeight:"600"}}>{nkwBuilding.context.sub_title[1]}</p>
                        <div style={{textAlign: "left", fontSize: "20px", color:"#707070", lineHeight: "2.3rem" , marginTop:"-28px"}}>
                            <ul > 
                                {nkwBuilding.context.sub_lists.li_b.map(li_b => { 
                                        
                                        return (

                                            <li>
                                                {li_b}
                                            </li>
                                        )

                                  })
                                }
                            </ul>
                        </div> 
                        <p style={{fontSize: '1.4rem', color:'#707070', fontWeight:"600"}}>{nkwBuilding.context.sub_title[2]}</p>
                        <div style={{textAlign: "left", fontSize: "20px", color:"#707070", lineHeight: "2.3rem",  marginTop:"-28px"}}>
                            <ul> 
                                {nkwBuilding.context.sub_lists.li_c.map(li_c => { 
                                        
                                        return (

                                            <li>
                                                {li_c}
                                            </li>
                                        )

                                  })
                                }
                            </ul>
                        </div> 

                        <div>
                           <p style={{fontSize:"20",color:'#707070', fontWeight:"400"}}> {nkwBuilding.context.p.p_b} </p>
                        </div>
                         */}
                    

                 </div>
            </div>

        </Fragment>
    )
}

export default NkwBuildingDetail;