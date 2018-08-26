import React, { Component } from 'react';

export default class ButtonCustomizado extends Component {

	render() {
		return (
			<div className="pure-control-group">                                  
                <label></label> 
                <button type={this.props.submit} className="pure-button pure-button-primary">{this.props.label}</button>                                    
            </div>
		);
	}
	
}