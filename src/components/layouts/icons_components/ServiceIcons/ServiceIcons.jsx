import React,  {Fragment} from 'react';
import './ServiceIcons.scss';

const ServiceIcons = ({icon, title, des, bgcolor}) => {
    return ( 
        <Fragment>

            <div className="trophy_box">
                <div className={`${bgcolor}`}>
                <i class={icon}></i>
                </div>
                {/* <h4>{title}</h4>
                <p>{des}</p> */}
            </div>
            <div className="dec_box">
             
                <h4>{title}</h4><br/>
                <p>{des}</p>
            </div>
        </Fragment>
        
    );
};

export default ServiceIcons;