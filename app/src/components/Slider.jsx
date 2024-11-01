import React, { useEffect } from 'react'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'

const Slider = () => {
    const images = {
        1: 'https://i1.sndcdn.com/artworks-QFHYrTn6syUI0hdl-zvh18A-t500x500.jpg',
        2: 'https://i1.sndcdn.com/artworks-QFHYrTn6syUI0hdl-zvh18A-t500x500.jpg',
        3: 'https://i1.sndcdn.com/artworks-QFHYrTn6syUI0hdl-zvh18A-t500x500.jpg',
        4: 'https://i1.sndcdn.com/artworks-QFHYrTn6syUI0hdl-zvh18A-t500x500.jpg',
        5: 'https://i1.sndcdn.com/artworks-QFHYrTn6syUI0hdl-zvh18A-t500x500.jpg',
    }

    useEffect(() => {
        UIkit.slider('.uk-slider', { center: true })
    }, [])

    return (
        <div
            className='uk-position-relative uk-visible-toggle uk-light'
            tabIndex='-1'
            uk-slider='center: true'
        >
            <div className='uk-slider-items uk-grid'>
                {Object.entries(images).map(([key, url]) => (
                    <div key={key} className='uk-width-3-4'>
                        <div className='uk-panel'>
                            <img
                                src={url}
                                width='900'
                                height='600'
                                loading='lazy'
                                alt={`Слайд ${key}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <a
                className='uk-position-center-left uk-position-small uk-hidden-hover'
                href='#'
                uk-slidenav-previous=''
                uk-slider-item='previous'
            ></a>
            <a
                className='uk-position-center-right uk-position-small uk-hidden-hover'
                href='#'
                uk-slidenav-next=''
                uk-slider-item='next'
            ></a>
        </div>
    )
}

export default Slider
