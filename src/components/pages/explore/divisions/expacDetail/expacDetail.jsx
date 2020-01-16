import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './expacDetail.scss';





const  ExpacDetail = () => {

    // Get ExpacDetails from api

    const [expacDetail, setExpacDetail] = useState({
        contact: {
            name: '',
            jobs: '',
            phone_a: '',
            phone_b: ''
        },
        title: '',
        logo: '',
        header_background_img: '',
        editor_context_one: '',
        editor_context_two: '',
        editor_context_three: ''
       
    });


    useEffect(() => {
        axios.get('/api/expacpng').then(res => {
            console.log(res.data);
            setExpacDetail(res.data[0]);
        });
    }, []);

    return (
        <Fragment>
            <div className="expac_detail_header_expacdetail">
                <h1>{expacDetail.title}</h1>
            </div> 
            <div className="expac_detail_main_context">
                 <div className="left_contants">
                     <div className="left_img_logo"> 
                        <img src={expacDetail.logo} alt=""  width="100%" /> 
                     </div>
                     <div className="contact_card_expac_detail"> 

                        <h2>Contact</h2>
                        <p>{expacDetail.contact.name}</p>
                        <p>Phone: {expacDetail.contact.phone_a} </p>
                        <p>Email: {expacDetail.contact.phone_b} </p>  
                     </div>
                 </div>
                 <div className="right_contants_expacdetail">
                     <div dangerouslySetInnerHTML={{__html: expacDetail.editor_context_one}} />
                        {/* <p>
                            
                            {`EXPAC expertly manage the purchasing and product sourcing requirements for companies located in Papua New Guinea and the Pacific Islands. EXPAC’s high service levels, short lead times and extensive product sourcing capacity, is why corporations, small and medium businesses, mining companies and plantations all trust EXPAC with their purchasing requirements.`} <br/><br/>
                            {`EXPAC is known for its expertise in sourcing the right product at the right price with expedient delivery, which sets them apart from other procurement companies. A combination of price, reliability, expertise and a strategic imperative to source the most appropriate products for their clients, ensures clients continue to trust EXPAC with their requirements.`}
                       </p>  */}

                       <div className="right_middle_ul_li_expacdetail">

                           <div dangerouslySetInnerHTML={{__html: expacDetail.editor_context_two}} />
                            {/* <h4>{`EXPAC can source a wide range of products including:`}</h4> 
                            <ul> 
                                <li>{`Mining vehicle spare parts: such as tyres, gearboxes and mechanical parts`}</li> 
                                <li>{`Water tanks, forklift, car parts, tractor parts `}</li> 
                                <li>{`Computer equipment, electrical equipment and furniture`}</li> 
                                <li>{`Plumbing and building supplies`}</li> 
                                <li>{`A wide range of consumables`}</li> 
                                <li>{`Food products from our Dry Stores and Freezer Stores`} </li> 
                                <li>{`And much more`}</li>
                            </ul> */}

                       </div>
                       <div dangerouslySetInnerHTML={{__html: expacDetail.editor_context_three}} /> 
                       {/* <p>{`A broad range of customers, from mining companies, sugar plantations, other corporations and small/medium sized businesses in PNG and the Islands, rely on EXPAC for their requirements. EXPAC’s purchasing power, coupled with unrivalled expediting, gives our clients the edge over their competitors.`}</p>
                       <p> {`EXPAC staff are skilled in procuring orders and ensuring a timely, efficient, and appropriate delivery process. Knowledge of customs processes and procedures, flights, sea freight etc., is part of the process of ensuring customers receive orders as soon as possible. Many products are sourced from within Australia (95%) and additionally Japan, USA, China, Singapore, Europe, South Korea and the UK. EXPAC typically manages the customer relationship and seeks multiple quotes instantly for each piece of client product requirement through its sales team.`}</p> */}

                 </div>
            </div>

        </Fragment>
    )
}

export default ExpacDetail;