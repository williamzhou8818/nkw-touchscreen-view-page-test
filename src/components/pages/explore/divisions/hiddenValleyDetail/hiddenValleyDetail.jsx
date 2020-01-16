import React, {Fragment, useState, useEffect} from 'react';

import axios from 'axios';
import './hiddenValleyDetail.scss';

import Card from '../../../../layouts/Card/Card';





const  HiddenValleyDetail = () => {




    // Get qpsDetails from api

    const [hiddenValleyDetail, setHiddenValleyDetail] = useState({
        title: '',
        sub_title: '', 
        logo: '',
        content: [],
        contact:{
            name: '',
            job: ''
        },
        editor_context:''
    });


    useEffect(() => {
        axios.get('/api/hiddenvalley').then(res => {
            console.log(res.data);
            setHiddenValleyDetail(res.data[0]);
        });
    }, []);

    return (
        <Fragment>
            <div className="expac_detail_header_hidden_valley_tran_log">
                <h1>{hiddenValleyDetail.title}</h1>
                   <h1>{hiddenValleyDetail.sub_title}</h1>
            </div> 
            <div className="hiddenValley_detail_main">
                 <div className="left_contants">
                     <div className="left_img_logo"> 
                        <img src={hiddenValleyDetail.logo} alt=""  width="100%" /> 
                     </div>
                     <div  style={{width: "94%"}}> 
                        <Card name={hiddenValleyDetail.contact.name} job={hiddenValleyDetail.contact.job} /> 
                       
                     </div>
                   
                 </div>
                 <div className="right_contants" >
                   <div dangerouslySetInnerHTML={{__html: hiddenValleyDetail.editor_context}} />
                        {/* <p style={{fontSize: "20px"}}>
                         {hiddenValleyDetail.content[0]}
                       </p> 
                       <p >
                         {hiddenValleyDetail.content[1]}
                       </p>
                       <p style={{fontSize:'1.4rem', color: 'rgb(117, 117, 117)', marginTop: "-26px"}}>
                         {hiddenValleyDetail.content[2]}
                       </p> 
                       <p>
                       {hiddenValleyDetail.content[3]}
                      </p> 
                      <p style={{fontSize:'1.4rem', color: 'rgb(117, 117, 117)', marginTop: "-26px"}}>
                       {hiddenValleyDetail.content[4]}
                      </p> 
                      <p>
                       {hiddenValleyDetail.content[5]}
                      </p> 
                      <p style={{fontSize:'1.4rem', color: 'rgb(117, 117, 117)' , marginTop: "-26px"}}>
                       {hiddenValleyDetail.content[6]}
                      </p> 
                       
                        <p > 
                            {hiddenValleyDetail.content[7]}
                        </p>
                        <ul  style={{marginTop: "-26px"}}>

                            <li>
                              {hiddenValleyDetail.content[8]}  
                            </li>
                            <li>
                              {hiddenValleyDetail.content[9]}  
                            </li>
                        
                            <li>
                              {hiddenValleyDetail.content[10]}  
                            </li>
                            <li>
                              {hiddenValleyDetail.content[11]}  
                            </li>
                            <li>
                              {hiddenValleyDetail.content[12]}  
                            </li>
                            <li>
                              {hiddenValleyDetail.content[13]}  
                            </li>
                            <li>
                              {hiddenValleyDetail.content[14]}  
                            </li>
                        
                            <li>
                              {hiddenValleyDetail.content[15]}  
                            </li>
                            <li>
                              {hiddenValleyDetail.content[16]}  
                            </li>
                            <li>
                              {hiddenValleyDetail.content[17]}  
                            </li>
                         
                        
                        
                        </ul>
                        
                    */}


                 </div>
            </div>

        </Fragment>
    )
}

export default HiddenValleyDetail;