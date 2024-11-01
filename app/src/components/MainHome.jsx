import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from './Slider'

const MainHome = () => {
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
                <section className='section-hot-new'>
                    <a className='section-title' href='#'>
                        <h2 className='text text--h2'>hot new</h2>
                    </a>
                    {/* Слайдер */}
                    <div className='Slider'>
                        <Slider />
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
