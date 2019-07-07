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
      const url =`https://api.unsplash.com/search/photos?page=1&per_page=1&query=${query}&client_id=1b299c0bd94221a0dd7f688c732451169af221cfa536cf9501b2745f49a54aa1`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(images.results);
  
      this.setState({
        page: 1,
        images: data.results,
      })
    } catch(error){
      this.setState({
        error:error,
      })  
    }
    
   }

  //  cargarMasImagenes = () => {
  //   let pageNew = this.state.page + 1
  //   let imagenesAntiguas = this.state.images
  //   fetch(`https://pixabay.com/api/?key=9828833-9a15a3dc938016b93df55afe1&q=${this.state.busqueda}&image_type=photo&lang=es&page=${pageNew}`)
  //     .then(response => response.json())
  //     .then(datos => {
  //       this.setState({
  //         resultadoBusqueda: imagenesAntiguas.concat(datos.hits),
  //         page: pageNew,
  //         cargando: false,
  //       })
  //     })
  // }



  render() {
    if(this.state.error){
      return`Error:${this.state.error.message}`
    }
    return (

      <div >
      
      <Navbar searchQuery={this.searchQuery}/>
      <ButtonBar searchQuery={this.searchQuery}/>

      <div>
      <ImagesContainer img={this.state.images}/>
      <button onClick={() => this.cargarMasImagenes()}>Loadmore</button>
      </div>

      </div>
    );
  }
}

export default App;
