import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './mountainCoffeeRoastersDetails.scss';





const  MountainCoffeeRoastersDetails = () => {

    // Get qpsDetails from api

    const [montainCoffee, setMountainCoffee] = useState({
        contact: {
            name:'',
            job: '',
            phone_a: '',
            email: '',
            location_a: '',
            location_b: ''
        },
        content: [],
        title: '',
        logo: '',
        header_background_img:'',
        editor_context:''

    });


    useEffect(() => {
        axios.get('/api/mountaincoffee').then(res => {
            console.log(res.data);
            setMountainCoffee(res.data[0]);
        });
    }, []);

    //setup local styles
    const _headerImage = {
        height: '7.5vh',
        padding: '6% 5%',
        backgroundImage: `url(${montainCoffee.header_background_img})`,
        backgroundSize: 'conver',
        border: '1px solid black',
        color: 'white',
        fontWeight: '900',
        lineHeigh:'1.3rem',
        borderBottom: '1.5px solid #F7941B'
    }

    return (
        <Fragment>
            <div className="expac_detail_header_mountain_coffee_roasters" style={_headerImage}>
                <h1>{montainCoffee.title}</h1>
            </div> 
            <div className="mountainCoffeeRoasters_detail_main">
                 <div className="left_contants">
                     <div className="left_img_logo"> 
                        <img src={montainCoffee.logo} alt=""  width="100%" /> 
                     </div>
                     <div className="contact_card_mountain_coffee"> 

                        <h2>Contact</h2>
                     
                        <p>{montainCoffee.contact.name} </p>
                        <p>{montainCoffee.contact.job}</p>  

                        <p>Ph:{montainCoffee.contact.phone_a}</p>
                        <p>E:{montainCoffee.contact.email}</p>
                        <p>Location</p>
                        <p>{montainCoffee.contact.location_a}</p>
                        <p>{montainCoffee.contact.location_b}</p>
                     </div>
                
                 </div>
                 <div className="right_contants_mountain_coffee_roasters">
                     <div dangerouslySetInnerHTML={{__html: montainCoffee.editor_context}} /> 
                        {/* <p>
                            {montainCoffee.content[0]}

                       </p> 

                       <p> 
                           {montainCoffee.content[1]}
                       </p>

                       <p>
                           {`BEWAPI COFFEE MILL LIMITED (BCM)`}<br/>
                            {montainCoffee.content[2]}
                        </p> 
                        
                        <p>
                            {montainCoffee.content[3]}<br/>
                            {montainCoffee.content[4]}<br/>
                            {montainCoffee.content[5]}<br/>
                            {montainCoffee.content[6]}<br/>
                            {montainCoffee.content[7]}<br/>
                            {montainCoffee.content[8]}<br/>
                            {montainCoffee.content[9]}<br/>
                            {montainCoffee.content[10]}<br/>
                            {montainCoffee.content[11]}<br/>
                        </p>
                        <p>
                            {montainCoffee.content[12]}<br/>
                        </p> */}
  
                 </div>
            </div>

        </Fragment>
    )
}

export default MountainCoffeeRoastersDetails;