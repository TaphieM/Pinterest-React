//props=noticias así lo conecto con App
import React from 'react';
import './ImagesContainer.css';
import Image from './Image';
import MasonryLayout from './MasonryLayout';

const ImagesContainer = ({images}) =>(
    <section className="imageContainer">
    <MasonryLayout columns={5} gap={19}>
        {images.map(item => (

         <Image 
        //  modal={this.openModal}
         key={item.id}
         item={item}  
         
         /> 
        ))

        }
    </MasonryLayout>
    </section>

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