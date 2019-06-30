//props=noticias así lo conecto con App
import React from 'react';
import Image from './Image';


const ImagesContainer = ({images}) =>(
    <div className="row">
        {images.map(item => (

         <Image 
        //  modal={this.openModal}
         key={item.urls.full}
         item={item}  
         
         /> 
        ))

        }

    </div>

)


// showPhotos(){
//   const photos=this.state.data.map(item=>{
//     return(
//     <Image
//     modal={this.openModal}
//     url={item.urls.thumb}/>
//     )
//   })
//   return photos
// }
  
       


export default ImagesContainer;