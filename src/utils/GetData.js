//Función para acceder a la información que necesitamos de la API

const url='https://api.unsplash.com/search/photos';
const APIKey='1b299c0bd94221a0dd7f688c732451169af221cfa536cf9501b2745f49a54aa';

export const GetData = async (query="sunset") => { 
    try{
      const route =`${url}?page=1&per_page=20&query=${query}&client_id=${APIKey}`;
      const response = await fetch(route);
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

