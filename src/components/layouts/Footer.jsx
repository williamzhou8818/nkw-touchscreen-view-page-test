import React, {Fragment} from 'react';
import facebooIcon from './facebook-f-brands.svg';
import './Footer.scss';


const Footer = () => {
    return (
        <Fragment>
            <div className="footerContanter">
                <div className="mainContant">

                    <div className="leftText"> 
                    
                            <p>www.nkwgroup.com.pg</p>

                    </div>
                    <div className="rightText"> 
                         <p> <i className="fab fa-facebook"></i> /nkwgroupoffical</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;