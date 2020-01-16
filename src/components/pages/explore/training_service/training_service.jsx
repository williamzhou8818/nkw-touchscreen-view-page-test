import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import mto_traning_footer from './CategoryFooterImagesTraining.png';
import './training_service.scss';
import { textAlign } from '@material-ui/system';


const TrainingService = () => { 

    const [mtoTraining, setMtoTraining] = useState({
        subtitle:'',
        title: '',
        logo1: '',
        header_background_img: '',
        cotegory_footer_img: '',
        context_editor_one: '',

    });



   useEffect(() => {
    axios.get('/api/mtotrainingexpdetail').then(res => {
        setMtoTraining(res.data[0])
    });
   }, []);

   // set local styles

   const _headerImg ={ 
            height: '7.5vh',
            padding: '6% 5%',
            backgroundImage: `url(${mtoTraining.header_background_img})`,
            backgroundSize: 'conver',
            border: '1px solid black',
            color: 'white',
            fontWeight: '900',
            lineHeigh:'1.3rem',
            borderBottom: '1.5px solid #F7941B' 
   };

    return (
        <Fragment>
             <div className="expac_detail_header_mto" style={_headerImg}>
                <h1>{mtoTraining.title}</h1>
            </div> 
            <div className="warper_ato"> 
              <div className="main_context_warper_ato" >
              <div className="pargrah_main_mto">
                <div dangerouslySetInnerHTML={{__html: mtoTraining.context_editor_one}} /> 


            </div> 
            <div className="section_title_mto">
                    <p>{mtoTraining.subtitle}</p>
                    <hr />
            </div>
            <div > 
                 <div style={{
                     
                     padding: '6% 1%',
                     textAlign: 'left'
                }}>
                       <img src={mtoTraining.logo1} alt="" width="25%"/>
                 </div> 
            </div>
              </div>
           
            <div className="image_footer_mto">
                <img src={mtoTraining.cotegory_footer_img} alt=""  width="100%" height="506"/>
            </div>
            </div>
           
        </Fragment>
    )
}


export default TrainingService;