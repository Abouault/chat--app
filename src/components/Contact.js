import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types'

function Contact (props){
 const name = 'Terry Cruz'
const statonline = <span className="status-online"></span>
const statoffline = <span className="status-offline"></span> 

    return(
        <div className="Contact">
            <img className="avatar" src={props.avatar}></img>
            <div>
            <span className="name">{props.name}</span>
            <div className="status">
                <span>{props.online ? statonline : statoffline}</span>
                <p className="status-text">{props.online ? "online" : "offline"}</p>
            </div>
            </div>
        </div>
    );
}

export default Contact;