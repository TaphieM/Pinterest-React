import React from 'react';
import ImagesContainer from './ImagesContainer';
import InfiniteScroll from 'react-infinite-scroll-component'
import Navbar from './Navbar';
import ButtonBar from './ButtonBar';


class App extends React.Component {
  constructor(props){
    super(props);
    this.divContent = React.createRef();
      this.state = {
      page: 1,
      images:[],
      error:null,
      search:""
    }  
    }
  

  async componentDidMount(){
    this.searchQuery()
  } 
  
  searchQuery = async (query="sunset") => { 

    try{
      const url =`https://api.unsplash.com/search/photos?page=1&per_page=20&query=${query}&client_id=1b299c0bd94221a0dd7f688c732451169af221cfa536cf9501b2745f49a54aa1`;
      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        page: 1,
        images: data.results,
        search: query,
      })
    } catch(error){
      this.setState({
        error:error,
      })  
    }
    
  }

  loadMore = async()=>{
    let newPage= this.state.page + 1
    let loadedImages= this.state.images

    try{
      const url =`https://api.unsplash.com/search/photos?page=${this.state.page}&per_page=20&query=${this.state.search}&client_id=1b299c0bd94221a0dd7f688c732451169af221cfa536cf9501b2745f49a54aa1`;
      const response = await fetch(url);
      const data = await response.json();
  
      this.setState({
        page: newPage,
        images: loadedImages.concat(data.results),
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

      <div>
      
      <Navbar searchQuery={this.searchQuery}/>
      <ButtonBar searchQuery={this.searchQuery}/>

      <div>
      <InfiniteScroll 
        style={{overflow:'none'}}
        dataLength={this.state.images.length}
        next={this.loadMore}
        hasMore={true}
        ><ImagesContainer img={this.state.images}/>
      </InfiniteScroll>
      {/* <button onClick={() => this.loadMore()}>Loadmore</button> */}
      </div>
      </div>
    );
  }
}

export default App;
