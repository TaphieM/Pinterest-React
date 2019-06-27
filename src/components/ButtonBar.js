import React from 'react';
import Button from './Button';
import './Button.css';



class ButtonBar extends React.Component {
  render(){
    return (
        <section className="buttonbar">
        <Button className="quotes" name="Quotes" />
        <Button className="fashion" name="Fashion"/>
        <Button className="compsci" name="Computer Science" />
        <Button className="career" name="Career Advice" />
        <Button className="technology" name="Technology" />
        <Button className="pictures" name="Pictures" />
        <Button className="post" name="Poster" />
        <Button className="logo" name="Logo" />
        <Button className="culture" name="Culture" />
        <Button className="entrepeneur" name="Entrepeneur" />
        <Button className="style" name="Style" />
        </section>
      );
  }
      
  }


  export default ButtonBar;