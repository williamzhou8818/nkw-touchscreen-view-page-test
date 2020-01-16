import React, { Fragment } from 'react';
import './Card.css';

const Card = ({name, job}) => { 
    return ( 
        <Fragment>
            <div className="contact_card_update">
                   <h2>Contact</h2>
                        <p style={{color:"#707070"}}>{name}</p>
                        <p style={{color:"#707070"}}>{job}</p>
            </div>
        </Fragment>
    )
}


export  default  Card;