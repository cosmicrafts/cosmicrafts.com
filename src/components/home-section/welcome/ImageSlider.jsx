
import React, { useEffect } from 'react';
import hoverEffect from 'hover-effect';
import { champAshe, champAhri, champGaren, distortion } from '../../../assets/images';

const ImageSlider = () => {
    useEffect(() => {
        const sliderContainer = document.getElementById('image-slider-container');

            // Ensure the container has a height for the hover effect
            if (sliderContainer && sliderContainer.offsetHeight === 0) {
                sliderContainer.style.height = '768px';
            }
        
        
        const sliderImgs = sliderContainer.querySelectorAll('img');
        let animates = [];

        sliderImgs.forEach((img, index) => {
            const nextImgIndex = (index + 1) % sliderImgs.length;
            const nextImg = sliderImgs[nextImgIndex].getAttribute('src');
            let animation = new hoverEffect({
                parent: sliderContainer,
                intensity: 0.5,
                image1: img.getAttribute('src'),
                image2: nextImg,
                displacementImage: distortion,
                hover: false,
            });
            animates.push(animation);
        });

        sliderImgs.forEach(img => img.remove());

        let currentItem = 0;

        const autoImageSlide = () => {
            let prevItem = currentItem;
            currentItem = (currentItem + 1) % animates.length;

            if (!document.hidden) {
                animates[prevItem].next();
            }

            setTimeout(() => {
                const canvases = document.querySelectorAll('#image-slider-container > canvas');
                sliderContainer.appendChild(canvases[0]);
                animates[prevItem].previous();
            }, 3000);
        };

        const intervalId = setInterval(autoImageSlide, 3000);

        return () => {
            clearInterval(intervalId);
            const canvases = document.querySelectorAll('#image-slider-container > canvas');
            canvases.forEach(canvas => canvas.remove());
        };
    }, []);

    return (
        <div id="image-slider-container" className="welcome__img__slide">
            {[champAshe, champAhri, champGaren].map((item, index) => (
                <img src={item} key={index} style={{ display: 'none' }}/>
            ))}
        </div>
    );
};

export default ImageSlider;
