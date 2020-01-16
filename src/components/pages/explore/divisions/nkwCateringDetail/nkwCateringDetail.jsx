import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './nkwCateringDetail.scss';





const  NkwCateringDetail = () => {

    // Get qpsDetails from api

    const [nkwCatering, setNKWCateringDetail] = useState({
        contact: {
            name: String,
            job: String,
            phone_a: String,
            phone_b: String,
            email: String
        },
        content: [],
        title: '',
        logo: '',
        header_background_img: '',
        editor_context: ''
        
    });


    useEffect(() => {
        axios.get('/api/nkwcatering').then(res => {
            console.log(res.data);
            setNKWCateringDetail(res.data[0]);
        });
    }, []);


    //setup _Local styles
    const _headerImage = { 
        height: '7.5vh',
        padding: '6% 5%',
        backgroundImage: `url(${nkwCatering.header_background_img})`,
        backgroundSize: 'conver',
        border: '1px solid black',
        color: 'white',
        fontWeight: '900',
        lineHeigh:'1.3rem',
        borderBottom: '1.5px solid #F7941B'
    }

    return (
        <Fragment>
            <div className="nkwCatering_detail_header" style={_headerImage}>
                <h1>{nkwCatering.title}</h1>
            </div> 
            <div className="nkweCatering_detail_main">
                 <div className="left_contants">
                     <div className="left_img_logo"> 
                        <img src={nkwCatering.logo} alt="nkwCatering"  width="100%" /> 
                     </div>
                     <div className="contact_card_catering"> 

                        <h2>Contact</h2>
                        <p>{nkwCatering.contact.name}</p>
                        <p>{nkwCatering.contact.job}</p>
                
                        <p>Phone </p>
                        <p>{nkwCatering.contact.phone_a} </p>
                        <p>{nkwCatering.contact.phone_b}</p>  

                        <p>Email</p>
                        <p>{nkwCatering.contact.email}</p>
                     </div>
                   
                 </div>
                 <div className="right_contants" style={{fontSize:"20px", color:"#707070", textAlign:"left"}}>

                     <div dangerouslySetInnerHTML={{__html: nkwCatering.editor_context}} />
                       {/* <p >
                        
                            {nkwCatering.content[0]}
                       </p> 
                       <p>
                            {nkwCatering.content[1]}<br/>
                            {nkwCatering.content[2]}<br/>
                            {`Manus: 1,400 meals a day for the Australian Government`}<br/>
                            {nkwCatering.content[4]}<br/>
                            {nkwCatering.content[3]}<br/> 
                            
                       </p>
                       <p>
                         {nkwCatering.content[5]}
                       </p>
                        <ul style={{ lineHeight: '2.3rem', textAlign: "left"}}>
                            <li> 
                                {nkwCatering.content[6]}
                            </li>
                            <li> 
                                {nkwCatering.content[7]} 
                                <ol style={{listStyle: 'circle', textAlign:"left"}}>
                                   <li>{nkwCatering.content[8]}</li>
                                   <li>{nkwCatering.content[9]}</li>
                                </ol>
                            </li>
                            <li>
                                {nkwCatering.content[10]}
                            </li>
                            <li>
                                {nkwCatering.content[11]}
                            </li>
                            <li>
                                {nkwCatering.content[12]}
                            </li>
                            <li>
                                {nkwCatering.content[13]}
                            </li>
                            <li>
                                {nkwCatering.content[14]}
                            </li>
                        </ul>
                    */}
                 
                 </div>
            </div>

        </Fragment>
    )
}

export default NkwCateringDetail;