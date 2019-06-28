import React, { Component } from 'react';
import Image from './Image';
import Navbar from './Navbar';
import ButtonBar from './ButtonBar';


class App extends Component {
  componentDidMount(){
    this.fetchPictures();
   }
  constructor(props){
    super(props);
    this.state={  
      data:false,
    }

  }



fetchPictures(){
  fetch("https://api.unsplash.com/search/photos?page=1&per_page=20&query=technology&client_id=1b299c0bd94221a0dd7f688c732451169af221cfa536cf9501b2745f49a54aa1")
    .then(response=>response.json())
    .then(datos=>{
    let dataArr= datos.results
    console.log(dataArr)
    this.setState({
      ...this.state,
      data: dataArr,
    })
  });
  
}

showPhotos(){
  const photos=this.state.data.map(item=>{
    return(
    <Image
    modal={this.openModal}
    url={item.urls.thumb}/>
    )
  })
  return photos
}
  

  render() {
    return (

      <div >
      
      <Navbar/>
      <ButtonBar/>
      
      <div className="container">
      {this.state.data && this.showPhotos()}
      </div>

      </div>
    );
  }
}

export default App;
