import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import pcsImage01 from './PCS_Entry_Page_Images.png';
import pcsImage02 from './PCS_Entry_Page_Images2.png';
import pcsImage03 from './PCS_Entry_Page_Images3.png';
import pcsImage04 from './PCS_Entry_Page_Images4.png';
import './pacificCargoService.scss';





const  PacificCargoService = () => {

    // Get ExpacDetails from api



    const [PCS, setPCS] = useState({
        title: '',
        logo: '',
        editor_context: '',
        website: '',
        contact: [ 
            { 
                name: '',
                job: '',
                phone_a: '',
                phone_b: '',
                email: ''
            }
        ],
        company: [
            {
                location: '',
                po_box: '',
                company_phone: ''
            }
        ],
   
        imgs: [],
        context: {
            p:{
                p_a: '',
                p_b: '',
                p_c: '',
                p_d: '',
                p_e: '',
                p_f: '',
                p_g: '',
                p_h: '',
                p_i: '',
                p_j: '',
                p_k: '',
                p_l: ''
            },
            subtitle: [],
            sub_lists: {
                li_a: [],
                li_b: [],
                li_c: []
            },
        }
    });

   //Cards Init State
   const [cards, setCards] = useState([{
        card_title:'',
        card_editor_contents:''
   }]);

    useEffect(() => {
        axios.get('/api/pcs').then(res => {
            console.log(res.data[0]);
            setPCS(res.data[0]);
        }); 
    }, []);

    useEffect(() => {
        axios.get('/api/cards').then(res => {
            console.log(res.data);
            setCards(res.data);
        }); 
    }, []);


 
    


    return (
        <Fragment>
            <div className="pcs_detail_header">
                <h1>{PCS.title}</h1>
            </div> 
            <div className="pcs_detail_main">
                 <div className="left_contants">
                     <div className="left_img_logo"> 
                        <img src={PCS.logo} alt=""  width="100%" /> 
                     </div>
                     <div className="contact_card_a"> 


                        {cards.map((card, i) => (
                            <div style={{borderBottom: '2px solid black'}}>
                                {card.card_title}
                                <div dangerouslySetInnerHTML={{__html: card.card_editor_contents}} />
                            </div>
                        ))}
                        {/* <h2>Contact</h2>
                        {PCS.contact.map(contacts => {

                            return (
                                <Fragment>
                                    <div style={{borderBottom: '2px solid black'}}>

                                        <p><strong>{contacts.name}</strong></p>
                                        <p>{contacts.job}</p>
                                        <p>{contacts.phone_a}</p>
                                        <p>{contacts.phone_b}</p>
                                        <p>{contacts.email}</p>  
                                    </div>
                                    
                                </Fragment>
                                )

                        })}
                          <p><strong>{`Website`}</strong></p>
                        <p>{PCS.website}</p> */}

                     </div>
                     {/* <div className="contact_card_b"> 

                      <h2>Locations</h2>
            
                                <Fragment>
                                    <div style={{borderBottom: '2px solid orange'}}>
                                        <p><strong>POM Office Address:</strong></p>
                                        <p>{`Portion 3793`}</p>
                                        <p>{`Napanapa Road`}</p>
                                        <p>{`Port Moresby`}</p> 
                                        <p><strong>Postal Address:</strong></p>
                                        <p>{`PO Box 211`}</p>
                                        <p>{`Konedobu`}</p>
                                        <p>{`Port Moresby`}</p>
                                        <p><strong>Phone:</strong></p>
                                        <p>{`+675 7411 183`}</p>
                                       
                              
                                    </div>

                                    <div style={{borderBottom: '2px solid orange'}}>
                                        <p><strong>Lae Office Address:</strong></p>
                                        <p>{`Section 21, Lot 9`}</p>
                                        <p>{`Macdhui Street`}</p>
                                        <p>{`Lae`}</p> 
                                        <p><strong>Postal Address:</strong></p>
                                        <p>{`PO Box 1909`}</p>
                                        <p>{`Lae, Morobe`}</p>
                                        <p>{`Port Moresby`}</p>
                                        <p><strong>Phone:</strong></p>
                                        <p>{`+675 472 7855`}</p>
                                   
                                    </div>
                                    
                                    <div style={{borderBottom: '2px solid orange'}}>
                                        <p><strong>Kimbe Office Address:</strong></p>
                                        <p>{`Section 82, Lot 1`}</p>
                                        <p>{`Sigal Street`}</p>
                                        <p>{`Kimbe, West New Britain`}</p> 
                                       
                                        <p><strong>Phone:</strong></p>
                                        <p>{`+675 983 0004`}</p>
                                   
                                    </div>
                                    
                                    
                                </Fragment>
                  
                    </div>  */}
                 <div className="left_bar_img_garllay" style={{marginLeft: "-60px", marginTop: "36%"}}>
                     {PCS.imgs[0] && <img src={PCS.imgs[0]} alt="pcs_side_image_one"  width="95%"  /> }
                     {PCS.imgs[1] && <img src={PCS.imgs[1]} alt="pcs_side_imgae_two"  width="95%"/> }
                     {PCS.imgs[2] && <img src={PCS.imgs[2]} alt="pcs_side_imgae_three" width="95%"/>  }
                     {PCS.imgs[3] && <img src={PCS.imgs[3]} alt="pcs_side_imgae_three" width="95%" /> }
                    
                      
                </div>

                 </div>
                 <div className="right_contants">

                     <div dangerouslySetInnerHTML={{__html: PCS.editor_context }} />
                        {/* <p style={{color:'#707070', fontWeight:'700', fontSize:"20px"}}>
                            {PCS.context.subtitle[0]}
                        </p> 
                        <p style={{color:'#707070', fontSize:"20px"}}>{PCS.context.p.p_a}</p>

                        <p style={{color:'#707070', wordSpacing:"0.3rem", fontSize: "20px"}}>{PCS.context.subtitle[1]}</p> 
                        
                        <p style={{color:'#707070', wordSpacing:"0.3rem", fontSize: "20px"}}>{`Our ships agency operations provide transparent and accurate accounting of our services, based on efficient turnaround times and ongoing communication to ensure vessel owners’ requirements are always met.`}</p>
                        <p style={{color:'#707070', wordSpacing:"0.3rem", fontSize: "20px"}}>{PCS.context.p.p_c}</p>
                        <p style={{color:'#707070', wordSpacing:"0.3rem", fontSize: "20px"}}>{PCS.context.p.p_d}</p>

                        <div>
                            <p style={{color:'#707070', wordSpacing:"0.3rem", fontSize: "20px"}}>{PCS.context.subtitle[2]}</p>
                                <ul style={{textAlign: "left", lineHeight:"1.5rem", color: "#707070" , fontSize:"20px"}}>
                                   {PCS.context.sub_lists.li_a.map( li_a => {
                                       return (
                                           
                                           <li>{li_a}</li>
                                       )
                                   })}
                                </ul>
                        </div>

                        <div>
                            <p style={{color:'#707070', wordSpacing:"0.3rem", fontSize: "20px"}}>{PCS.context.subtitle[3]}</p>
                              <p style={{textAlign: "left", fontSize:"20px", padding: '0% 4%', color:'#707070', lineHeight:"1.7rem"}}>{PCS.context.p.p_e}</p>
                                <ul style={{textAlign: "left", lineHeight:"1.5rem", color: "#707070" , fontSize:"20px"}}>
                                   {PCS.context.sub_lists.li_b.map( li_b => {
                                       return (
                                           
                                           <li>{li_b}</li>
                                       )
                                   })}
                                </ul>
                        </div>
                        <br/><br/>

                        <div>
                            <h3 style={{textAlign:'left', padding: '0% 4%', fontSize:"20px" ,color:'#707070'}}>{PCS.context.subtitle[4]}</h3>
                            <p style={{fontSize: '20px', color:'#707070'}}>{PCS.context.p.p_f}</p>
                            <p style={{fontSize: '20px', color:'#707070'}}>{PCS.context.p.p_g}</p>
                            <p style={{fontSize: '20px', color:'#707070'}}>{PCS.context.p.p_h}</p>
                            <p style={{fontSize: '20px', color:'#707070'}}>{PCS.context.p.p_i}</p>

                        </div>
                            <br/><br/>
                        <div>
                            <h3 style={{textAlign:'left', padding: '0% 4%', color:'#707070'}}>{PCS.context.subtitle[5]}</h3>
                            <p style={{fontSize: '20px', color:'#707070'}}>{PCS.context.p.p_j}</p>

                        </div>

                             <br/><br/>
                        <div>
                            <h3 style={{textAlign:'left', fontSize:"20px" , padding: '0% 4%', color:'#707070'}}>{PCS.context.subtitle[6]}</h3>
                                <ul style={{textAlign: "left", fontSize:"20px", padding: '0% 4%', color:'#707070', lineHeight:"24px"}}>
                                   {PCS.context.sub_lists.li_c.map( li_c => {
                                       return (
                                           
                                           <li>{li_c}</li>
                                       )
                                   })}
                                </ul>
                        </div>

                        <br/><br/>
                        <div>
                            <h3 style={{textAlign:'left', padding: '0% 4%', color:'#707070'}}>{PCS.context.subtitle[7]}</h3>
                            <p style={{fontSize: '20px', color:'#707070'}}>{PCS.context.p.p_k}</p>

                        </div>

                        <div>
                            <p style={{fontSize: '20px', color:'#707070'}}>{PCS.context.p.p_l}</p>
                        </div>*/}

                 </div> 
                
            </div>

        </Fragment>
    )
}

export default  PacificCargoService ;