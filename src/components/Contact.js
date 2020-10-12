import React from 'react';
import './Contact.css';

function Contact (){
const name = 'Terry Cruz'
const online = true;
const statonline = <span className="status-online"></span>
const statoffline = <span className="status-offline"></span>

    return(
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/women/5.jpg"></img>
            <div>
            <span className="name">{name}</span>
            <div className="status">
                <span>{online ? statonline : statoffline}</span>
                <p className="status-text">{online ? "online" : "offline"}</p>
            </div>
            </div>
        </div>
    );
}

export default Contact;