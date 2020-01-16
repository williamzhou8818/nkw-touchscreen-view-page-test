import React, {Fragment, useState, useEffect}  from 'react';
import NKW_ImgTwo from './nkw_fresh_divistion_img_two.png';
import NKWFresh_Entry_Page_Images from './NKWFresh_Entry_Page_Images.png';
import axios from 'axios'; 

import './nkwDetail.scss';




// Get NKW Single Data from api


const NKWDetail = () => { 

    const [nkwFresh, setNkwFresh] = useState({
        imgs: '',
        title: '',
        logo: '',
        header_background_img: '',
        phone_a: '',
        phone_b: '',
        email: '',
        context_editor_four: '',
        context_editor_one: '',
        context_editor_three: '',
        context_editor_two: ''



    //    title: '',
    //    logo: '',
    //    imgs:[],
    //    content: [],
    //    contact:[{}]
    });


    useEffect(() => {
        axios.get('/api/nkwfreshdetails').then(res => {
            console.log(res.data);
            setNkwFresh(res.data[0]);

        })
    }, []);

    // setup loacal styles
    const _headerImg = { 
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
    

    const _oneBigImg = {
        width: '',
        margin: '',
        border: '',
        height: '',
        padding: '',
        backgroundImage: `url(${nkwFresh.imgs[0]})`,
        backgroundSize: 'cover'
        
    }

    return (
        <Fragment>
            <div className="nkw_detail_header_divistion" style={_headerImg}> 
                     <h3>{nkwFresh.title}</h3>
            </div>
         <div className="main_contants">
         <div className="nkw_detail_middle_contants">
                <div className="left_logo">
                     <img src={nkwFresh.logo} alt=""  width="100%" height="auto"/>
                </div>
                <div className="right_contact_card_contaner">
                    <div className="contact_card">
                             <h4 style={{marginTop: "-4.3px"}}>Contact</h4>
                             <p>Phone: +67{nkwFresh.phone_a} or +61{nkwFresh.phone_b}</p>
                             <p>Email: {nkwFresh.email}</p> 
                    </div>
                </div>
            </div>
            <div className="pargarh_section">
                <div className="p_1">
                    {/* <p>{nkwFresh.content[0]}</p> */}
                    <div dangerouslySetInnerHTML={{__html: nkwFresh.context_editor_one}} />
                </div>
          
            </div>
            <div className="one_big_img" style={_oneBigImg}>
                {/* <img src={nkwFresh.section_img_one} alt="nkw_fresh_sec_image"  width="auto" height="100%"/> */}
            </div>  

            <div className="pargarh_section">

                {/* <div className="p_1">
                        <p>{nkwFresh.content[2]}</p>
                </div>
                <div className="p_1">
                        <p>{nkwFresh.content[3]}</p>
                </div>
                <div className="p_1">
                        <p>{nkwFresh.content[4]}</p>
                </div> */}
                    <div 
                     style={{padding: '0.3rem 4%'}}
                    dangerouslySetInnerHTML={{__html: nkwFresh.context_editor_two}} />

            </div>

            <div className="pargarh_section_2">
                    <img src={nkwFresh.imgs[1]} alt=""  width="46%" height="35%"/>
                    <div className="p_s_left_text">
                     <div dangerouslySetInnerHTML={{__html: nkwFresh.context_editor_three}} />

                    </div>
                       
            </div>

            <div className="pargarh_section">

            <div 
                 style={{padding: '0.3rem 4%'}}
                dangerouslySetInnerHTML={{__html: nkwFresh.context_editor_four}} />

            </div>
         </div> 

            

        </Fragment> 
    )
}


export default  NKWDetail;