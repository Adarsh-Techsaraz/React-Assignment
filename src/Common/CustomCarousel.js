import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CustomCarousel({imageUrl}) {
  return (
    <div class="model-img-container">
        <Carousel autoPlay>
            {imageUrl.map(values=>(
                <img class="card-img-top" src={values} alt="Card image"/>
            ))}
        </Carousel>
                    
    </div>

  )
}
