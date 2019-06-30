import React from 'react';
import './Button.css';



class ButtonBar extends React.Component {
  state={
    query:"sunset",
  }

  searchQuery=e=>{
    this.setState({  //el segundo parámetro es un callback para que llame a tiempo a la busqueda
      query:e.target.value
    },()=>{
    //Conexión con app  
    this.props.searchQuery(this.state.query);
    });
    
  }

  render(){
    return (
        <section className="buttonbar">
        <button className="quotes"  value="Quotes" onClick={this.searchQuery}>Quotes</button>
        <button className="fashion" value="Fashion" onClick={this.searchQuery}>Fashion</button>
        <button className="compsci"  value="Computer Science" onClick={this.searchQuery}>Computer Science</button>
        <button className="career" value="Career Advice" onClick={this.searchQuery}>Career Advice</button>
        <button className="technology"  value="Technology" onClick={this.searchQuery}>Technology</button>
        <button className="pictures" value="Pictures" onClick={this.searchQuery}>Pictures</button>
        <button className="post"  value="Poster" onClick={this.searchQuery}>Poster</button>
        <button className="logo" value="Logo" onClick={this.searchQuery}>Logo</button>
        <button className="culture"  value="Culture" onClick={this.searchQuery}>Culture</button>
        <button className="entrepeneur" value="Entrepeneur" onClick={this.searchQuery}>Entrepreneur</button>
        <button className="style" value="Style" onClick={this.searchQuery}>Style</button>
        </section>
      );
  } 
      
  }


  export default ButtonBar;