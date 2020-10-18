import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types'
import { render } from '@testing-library/react';


class Contact extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        online : this.props.online,
    }
}
changeStatus = () => {
    const newStatus = !this.state.online;
    this.setState ({online : newStatus})
}

render (){
    return (
        <div className="Contact">
            <img className="avatar" src={this.props.avatar}></img>
            <div>
            <span className="name">{this.props.name}</span>
            <div className="status" onClick= {this.changeStatus} >
                <span className={this.state.online ? "status-online" : "status-offline"}></span>
                <p className="status-text">{this.props.online ? "online" : "offline"}</p>
            </div>
            </div>
        </div>
    )
}
}


export default Contact; 
