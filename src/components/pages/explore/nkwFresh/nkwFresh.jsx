import React, {Fragment, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import nkwFreshFooterImage from  './CategoryFooterImages_Fresh.png';
import axios from 'axios';
import './nkwFresh.scss';
import { sanitize } from 'express-validator';




const NKWFresh = () => { 

    const  [nkwFresh, setNkWFresh] = useState({
        subtitle:'',
        title:'',
        logo1:'',
        logo2: '',
        header_background_img:'',
        cotegory_footer_img: '',
        context_editor_one: '',
        context_editor_two:''
    })
    
    
    useEffect(()=> { 
        axios.get('/api/nkwfreshexpdetail').then(res => {
             setNkWFresh(res.data[0])
        });
    },[])

    //Local header image
    const _headerImg =  {
        height: '7.5vh',
        padding: '6% 5%',
        backgroundImage: `url(${nkwFresh.header_background_img})`,
        backgroundSize: 'conver',
        border: '1px solid black',
        color: 'white',
        fontWeight: '900',
        lineHeigh:'1.3rem',
        borderBottom: '1.5px solid #F7941B'
    }
    

    return (
        <Fragment>
             <div className="expac_detail_header_nkwfresh">
                <h1>{nkwFresh.title}</h1>
            </div> 
            <div  className='warp_nkw_fresh'>
                <div className='main_context_warper_nkwfresh'>
                <div className="pargrah_main_nkw_fresh" style={{color: '#707070', marginTop: "30px", fontSize: "20px" }}>
                    {/* <p>{`NKW Fresh sources fresh produce from local smallholder vegetable farmers, creating a logistics chain for rural farmers that allows their produce access to markets throughout PNG. NKW Fresh utilises cold storage facilities in both Wau and Lae, allowing distribution of quality product to other markets, including supermarkets and catering companies. `}</p>
                    <p>{`NKW has established a positive relationship with local farmers, dealing directly with these smallholders rather than traders, making NKW Fresh the largest buyer in the local fresh food business, buying over 60 metric tonnes of fresh produce from farmers each month.`}</p> */}
                    <div dangerouslySetInnerHTML={{__html: nkwFresh.context_editor_one}} />   
                </div>  
                    <div className="section_title" style={{marginTop:`33px`}}>
                            <p style={{fontSize:`30px`}}>{nkwFresh.subtitle}</p>
                            <hr />
                    </div>
                    <div className="logo_section_nkwfresh" style={{padding: "5% 1%", margin: "3% 3%"}}> 

                        <div >
                            <Link to='/explore/divisions/nkwdetail'>
                            <img src={nkwFresh.logo1} alt="" width="100%"/>
                            </Link>
                        </div> 
                        <div>
                            <Link to='/explore/divisions/mountaincoffeeroasters'>
                                <img  src={nkwFresh.logo2} alt="" width="100%"/>
                            </Link>

                        </div>
                    </div>

                </div>
         
            <div className="image_footer_nkwfresh" >
                <img src={nkwFresh.cotegory_footer_img} alt="" />
            </div>
            </div>
            
        </Fragment>
    )
}


export default NKWFresh;