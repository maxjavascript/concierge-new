import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MainHome = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [
        'https://masterpiecer-images.s3.yandex.net/600bea5eb3b5089:upscaled',
        'https://i.pinimg.com/236x/43/2a/11/432a11ab028455e44a66356ccfeb47d0.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDwpICyoHnb3nCWbCXe8uGHdnd-1EGncBBg&s',
        'https://smets.lu/cdn/shop/files/embroidery-crewneck-ysl-sweater-women-clothing-crewneck-sweaters-saint-laurent-smets-650010_750x1000_crop_center.jpg?v=1725066218',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Iae9-WFdPlTc1WHOGQoPwPfpNzfagLdtPQ&s',
    ]

    const handleSlideRight = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }

    const handleSlideLeft = () => {
        setCurrentIndex(
            prevIndex => (prevIndex - 1 + images.length) % images.length
        )
    }

    const categoryItems = [
        'одежда',
        'косметика',
        'электроника',
        'украшения',
        'сладости',
        'лекарства и БАДы',
    ]

    return (
        <div className='page__main'>
            <main className='page-main'>
                <h1 className='visually-hidden'>
                    Интернет-магазин AS Concierge
                </h1>
                {/* Slider */}
                <section className='section-hot-new'>
                    <a className='section-title' href='#'>
                        <h2 className='text text--h2'>hot new</h2>
                    </a>
                    <div className='slider-wrapper'>
                        <div
                            className='slider-item-1'
                            onClick={handleSlideRight}
                            style={{
                                backgroundImage: `url(${
                                    images[
                                        (currentIndex + images.length - 1) %
                                            images.length
                                    ]
                                })`,
                            }}
                        ></div>
                        <div
                            className='slider-item-2'
                            style={{
                                backgroundImage: `url(${images[currentIndex]})`,
                            }}
                        ></div>
                        <div
                            className='slider-item-3'
                            onClick={handleSlideLeft}
                            style={{
                                backgroundImage: `url(${
                                    images[(currentIndex + 1) % images.length]
                                })`,
                            }}
                        ></div>
                    </div>
                </section>

                {/* Category */}
                <section className='section-category'>
                    <Link className='section-title' to='/categories'>
                        <h2 className='text text--h2'>category</h2>
                    </Link>
                    <div className='category-list-wrapper'>
                        <ul className='category-list'>
                            {categoryItems.map((item, index) => (
                                <li key={index} className='category-item'>
                                    <a href='#'>
                                        <div className='category-image'></div>
                                        <h3 className='text text--h3'>
                                            {item}
                                        </h3>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default MainHome
