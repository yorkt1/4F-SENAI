
import React, { useState, useEffect } from 'react';
import './index.css';

const images = [
    './images/banner.png',
    './images/banner-dois.png',
];

function Index() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Troca de imagem a cada 4 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, []);

    return (
        <div className='carousel'>
            <button className='button-banner'>
                {images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        className={`banner-css ${currentIndex === index ? 'visible' : ''}`} 
                        alt={`Banner ${index + 1}`} 
                    />
                ))}
            </button>
        </div>
    );
}

export default Index;

