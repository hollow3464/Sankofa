import { useRef } from 'react'
import './slider.css'
import {data} from './data'
import { useState } from 'react';
import { useEffect } from 'react';
import Onboarding from '../InicioDialog/Onboarding';

function Slider() {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const listNode = listRef.current;
      const imgNode = listNode.querySelectorAll("li > img")[currentIndex]

      if(imgNode){
        imgNode.scrollIntoView({
            behavior: "smooth"
        })
      }
    }, [currentIndex]);

    const scrollToImage = (direction) =>{
        if(direction == 'prev'){
            setCurrentIndex(curr => {
                const isFirtSlide = currentIndex === 0;
                return isFirtSlide ? 0 : currentIndex -1;
            });
        }
        else {
            const isLastSlide = currentIndex === data.length - 1;
            isLastSlide ? null : setCurrentIndex(curr=> curr + 1);
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
  return (
    <div className="main-container">
        <div className="slider-container">
            <div className='leftArrow' onClick={() => {scrollToImage('prev')}}>Prev</div>
            <div className='rightArrow' onClick={() => {scrollToImage('next')}}>Next</div>
            <div className="container-images">
                <ul ref={listRef}>
                    {data.map((item) =>{
                        return(<>
                            <li key={item.id} className='hola'>
                                    <img src={item.imgUrl} className="onboarding-image" />
                                    <div className="onboarding-content">
                                        <h1>Bienvenido(a)</h1>
                                        <p> ¡Vamos juntos a descubrirlo!</p>
                                    </div>
                            </li>
                        </>)
                    })}
                </ul>
            </div>
            <div className='dots-container'>
                {
                    data.map((_, idx) => (
                        <div className={`dot-container-item  ${idx === currentIndex? "active" : ""}`} key={idx}
                            onClick={() => goToSlide(idx)}
                        >
                            &#9865;
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Slider