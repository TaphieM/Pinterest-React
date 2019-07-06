import React from 'react';
import ImagesContainer from './ImagesContainer';
import Navbar from './Navbar';
import ButtonBar from './ButtonBar';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 1,
      images:[],
      error:null,
    }  
  }
  

  async componentDidMount(){
    this.searchQuery()
  } 
  
  searchQuery = async (query="sunset") => { 

    try{
      const url =`https://api.unsplash.com/search/photos?page=1&per_page=20&query=${query}&client_id=1b299c0bd94221a0dd7f688c732451169af221cfa536cf9501b2745f49a54aa1`;
      const response = await fetch(url);
      const images = await response.json();
      // console.log(images.results);
  
      this.setState({
        page: 1,
        images: images.results,
      })
    } catch(error){
      this.setState({
        error:error,
      })
    }
    
   }


  render() {
    if(this.state.error){
      return`Error:${this.state.error.message}`
    }
    return (

      <div >
      
      <Navbar searchQuery={this.searchQuery}/>
      <ButtonBar searchQuery={this.searchQuery}/>

      <div>
      <ImagesContainer images={this.state.images}/>
      </div>

      </div>
    );
  }
}

export default App;
