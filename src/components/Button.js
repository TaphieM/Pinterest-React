import React from 'react';
import './Button.css';


class Button extends React.Component {

    newsearch=() => {
        this.props.newsearch();
      }

  
  render() {
    return (
      <button type="button" className={`genericbutton ${this.props.className}`} onClick={this.newsearch}>{this.props.name}</button>

    );
  }
}


export default Button;