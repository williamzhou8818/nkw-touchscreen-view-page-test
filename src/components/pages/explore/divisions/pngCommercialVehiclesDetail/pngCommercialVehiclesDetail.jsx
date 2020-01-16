import React, {Fragment, useState, useEffect}from 'react';
import './pngCommercialVehiclesDetail.scss';
import axios from 'axios';


const PngCommercialVehiclesDetail = () => {

    let formatPhone = [];
    
    const [pngCommVehicles, setPNGCommVehicles] = useState({
        contact: {
            name: '',
            job: '',
            phone_a: '',
            email: '',
            location: ''
        },
        context:[],
        title: '',
        logo: '',
        header_background_img: '',
        editor_context: ''
    });



    useEffect(() => {
        axios.get('/api/pngcommericalvehicles').then(res => { 
            console.log(res.data[0]);
            setPNGCommVehicles(res.data[0]);
        })
    },[]) 


   // FormatPhone numnber 

   const formatPhoneNumber = (str) => {

       console.log(str);
       let cleaned = ('' + str).replace(/\D/g, '');
       console.log(cleaned);

    //    // check if the input of corrct
       let match = cleaned.match(/^(\d{4})(\d{4})$/);
       console.log(match);
       let formatphone;

       if (match) {
    //        // Remove the match extensin code
    //       // Change this to format for any coutry code.

    //       let intlCode = '+675';
       formatphone =  ['+675','','-', match[1],'','-',match[2]].join('');
             console.log(formatphone)
             formatPhone.push(formatphone);
         
        }
    
   }

   formatPhoneNumber(pngCommVehicles.contact.phone_a);
   
   

    return (
        <Fragment>
            <div className="expac_detail_header_png_commericial_vel">
                <h1>{pngCommVehicles.title}</h1>
            </div> 
            <div className="pngComericialVel_detail_main">
                 <div className="left_contants">
                     <div className="left_img_logo"> 
                        <img src={pngCommVehicles.logo} alt=""  width="100%" /> 
                     </div>
                     <div className="contact_card_png_commerical_vel"> 

                        <h2>Contact</h2>
                     
                        <p style={{color: "#707070", fontWeight:"600"}}>{pngCommVehicles.contact.name} </p>
                        <p style={{color: "#707070"}}>{pngCommVehicles.contact.job} </p>  
                        <p style={{color: "#707070"}}>{pngCommVehicles.contact.phone_a}</p>
                        <p style={{color: "#707070"}}>{pngCommVehicles.contact.email}</p>
                        <p style={{color: "#707070"}}>Location {''} <br/>
                         {pngCommVehicles.contact.location}</p>
                     </div>
                
                 </div>
                 <div className="right_contants" style={{fontSize:"20px", color:"#707070"}}>
                     <div dangerouslySetInnerHTML={{__html: pngCommVehicles.editor_context}} />
                 </div>
            </div>

        </Fragment>
    )
}

export default PngCommercialVehiclesDetail;