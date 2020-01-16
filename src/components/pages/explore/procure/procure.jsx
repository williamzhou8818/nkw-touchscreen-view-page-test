import React, {Fragment, useState, useEffect} from 'react';
import ProcurementFooter from './procurement_footer.png';
import {Link} from  'react-router-dom';

import Image01 from './Procurement_Image.png';
import './procure.scss';
import axios from 'axios';

const Procure  = () => {

    const [ proc, setProc ] = useState({
        subtitle: [],
        title: '',
        logo1: '',
        logo2: '' ,
        header_background_img:'' ,
        cotegory_footer_img: '',
        context_editor_one: '',
    });


    useEffect(() => { 
      axios.get('/api/procurementexpdetail').then(res => {
         console.log(res.data[0]);
         setProc(res.data[0]);
      })
    }, [])


    //setup local styles
    
    const _headerImg = {
        height: '7.5vh',
        padding: '6% 5%',
        backgroundImage: `url(${proc.header_background_img})`,
        backgroundSize: 'conver',
        border: '1px solid black',
        color: 'white',
        fontWeight: '900',
        lineHeigh:'1.3rem',
        borderBottom: '1.5px solid #F7941B'
    }


    return (
    <Fragment>
        <div className="procurement_header" style={_headerImg}>
            <h1>{proc.title}</h1>
        </div> 
        <div className="warper_procurement"> 
                <div className="main_context_warper" >
                    <div className="pargrah_main_Procurement" >
                        <div className="leftContext">
                            <div dangerouslySetInnerHTML={{__html: proc.context_editor_one}} />

                        </div>
                        <div className="rightContext">
                                <img src={proc.logo2} alt="procuremnt_right_content"/>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div> 
                </div>


                <div className="section_title_logist" style={{ marginLeft: '0%'}}>
                            <p style={{marginLeft: "0%"}}>{`Divisions associated with Procurement`}</p>
                            <hr />
                            <Link to='/explore/divisions/hiddenvalley' >
                                <img src={proc.logo1} alt="" width="200px" height="200px"  style={{ margin: '3% 3%'}}  />
                            </Link>
                </div>
   
        <div className="image_footer">
            <img style={{marginLeft: "-55px"}} src={proc.cotegory_footer_img} alt="" />
        </div>
        </div>
   </Fragment>
    ) 
}

export default Procure;