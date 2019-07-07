//props=noticias así lo conecto con App
import React from 'react';
import './ImagesContainer.css';
import Image from './Image';
import MasonryLayout from './MasonryLayout';


class ImagesContainer extends React.Component{
    render(){
        return(
    <section className="imageContainer">
    <MasonryLayout columns={5} gap={19}>
        {this.props.img.map(item => (   
        <Image 
        //  modal={this.openModal}
        img={item.urls.thumb}
        alt={item.alt_description}
        tags={item.tags[0].title}
        key={item.id}
        item={item}  
        /> 
        ))
        }
    </MasonryLayout>
    </section>
        )
    }
}



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