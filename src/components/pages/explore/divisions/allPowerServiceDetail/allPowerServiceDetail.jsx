import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './allPowerServiceDetail.scss';





const  AllPowerServiceDetail = () => {

    // Get ExpacDetails from api

    const [aps, setAps] = useState({
        contact: {
            name: '',
            job: ''
        },
        sub_nav: [],
        title: '',
        logo: '',
        header_background_img:'',
        editor_context: ''
    });

    useEffect(() => {
        axios.get('/api/aps').then(res => {
            console.log(res.data[0]);
            setAps(res.data[0]);
        })
    }, []);

    // local styles
    const _headerImg = {
        height: '7.5vh',
        padding: '6% 5%',
        backgroundImage: `url(${aps.header_background_img})`,
        backgroundSize: 'conver',
        border: '1px solid black',
        color: 'white',
        fontWeight: '900',
        lineHeigh:'1.3rem',
        borderBottom: '1.5px solid #F7941B'
    }

    return (
        <Fragment>
            <div className="aps_detail_header" style={_headerImg}>
                <h1>{aps.title}</h1>
            </div>
            <div className="aps_sub_nav_bar">
                    <ul style={{display: 'flex',
                                listStyle:'none', 
                                backgroundColor:'#707070',
                                width: '100%',
                                height: "43px",
                                fontSize: '18px', 
                                alignItems: 'center',
                                alignContent: 'center',
                                justifyContent: 'space-around',
                                margin:"auto",
                                padding: 'auto'
                                }} >
                        <li>
                            <a href="#principleArea">

                               {aps.sub_nav[0]}
                            </a>
                        </li>
                        <li>
                            <a href="#powergeneration">

                                {aps.sub_nav[1]}
                            </a>
                        </li>
                        <li>
                            <a href="#electrical">

                                {aps.sub_nav[2]}
                            </a>
                        </li>
                        <li>
                            <a href="#hvac">

                                {aps.sub_nav[3]}
                            </a>
                        </li>
                    </ul>
            </div>
            <div className="expac_detail_main_aps"
                    style={{color:"#707070", fontSize:"28px", lineHeight:"1.4rem"}}
            >
                 <div className="left_contants">
                     <div className="left_img_logo">
                        <img src={aps.logo} alt=""  width="100%" />
                     </div>
                     <div className="contact_card_aps">

                        <h2>Contact</h2>
                        <p><span style={{fontWeight:"500"}}>{aps.contact.name}</span><br/>
                           {aps.contact.job}</p>
                     </div>
                 </div>
                 <div className="right_contants">

                      <div dangerouslySetInnerHTML={{__html:aps.editor_context}} />
                     {/* {aps.context.p.map((p, i) =>  {
                        let   index = i;
                        if(index <= 1) {

                            return (
                                <p>
                                    {aps.context.p[i]}
                                </p>

                            )
                        }
                     })}
                     <p> {`
                          As of July 2018 the company has 40 full time employees and 10 service vehicles. Current labour force also includes
                          an additional 15 casual electricians working on various construction projects around Lae and Kimbe.
                     `}</p>
                     <p  id="principleArea"> <span style={{fontWeight: "600"}}>{aps.context.subtitle[0]}</span><br/>

                        <ul style={{margin: "-2px"}}>
                            <li>
                                {aps.context.sub_li_a[0]}
                            </li>
                            <li>
                                {aps.context.sub_li_a[1]}
                            </li>
                            <li>
                                {aps.context.sub_li_a[2]}
                            </li>

                        </ul>
                     </p>

                     <p id="powergeneration"><span style={{fontWeight: "600"}}>{aps.context.subtitle[1]}</span> <br/>
                        <ul style={{margin: "-2px"}}>
                           {aps.context.sub_li_b.map( sub_li_b => {
                               return (

                                    <li>
                                        {sub_li_b}
                                    </li>
                               )
                           })}

                        </ul>
                     </p>

                    <p id="electrical"> <span style={{fontWeight: "600"}}>{aps.context.subtitle[2]}</span><br/>
                        <ul style={{margin: "-2px"}}>
                            <li>{`RCD Testing`}</li>
                            <li>{`Earth Testing`}</li>
                            <li>{`All types of Domestic, Industrial and commercial installation and maintenance`}</li>

                            <li>{`24/7 Call-out service`}</li>
                            <li>{`Infra-Red Thermal Imaging Inspections of Electrical equipment`}</li>
                            <li>{`New Building & Renovation Construction Electrical Fit Out`}</li>
                   
                         </ul>
                    </p>

                    <p id="hvac">
                        <span style={{fontWeight: "600"}}>

                            {aps.context.subtitle[3]}<br/>
                        </span>
                        <ul style={{margin: "-2px"}}>
                            {aps.context.sub_li_d.map(sub_li_d => {
                                return (
                                    <li>{sub_li_d}</li>
                                )
                            })}
                        </ul>
                    </p>

                    <p>
                        <ul>

                        {aps.context.p[2]}
                        </ul>
                    </p> */}

                 </div>
            </div>

        </Fragment>
    )
}

export default AllPowerServiceDetail;