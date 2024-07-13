
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { SliderData } from '../products/Products';

function Slider() {
    const [index, setIndex] = useState(0);
      
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
      
    return (
        <div className='container ' >
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {SliderData.map((slide, index) => (
                    
                    <Carousel.Item  >
                        <div className='d-flex justify-content-evenly align-items-center m-5'>
                            <div className="mb-3 ml-*10  mr-8"> 
                            <h1 className="display-4 fw-bold">{slide.title}</h1>
                                <p classname='fs-3'>{slide.desc}</p>
                                <p className='bg-light'>visit collections</p>
                            </div>
                            <div>
                                <img
                                    className=" mb-3 " 
                                  height={'350px'} 
                                    src={slide.cover}
                                    alt={slide.alt}
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                   
                ))}
            </Carousel>
        </div>
    );
}

export default Slider;

