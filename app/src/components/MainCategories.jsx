import React from 'react'
import { Link } from 'react-router-dom'

const MainCategories = () => {
    const ClothesItems = [
        { name: 'куртки', link: '/products' },
        { name: 'футболки', link: '/products' },
        { name: 'рубашки', link: '/products' },
        { name: 'брюки', link: '/products' },
        { name: 'джинсы', link: '/products' },
        { name: 'пижамы', link: '/products' },
        { name: 'пиджаки', link: '/products' },
        { name: 'платья', link: '/products' },
        { name: 'худи', link: '/products' },
        { name: 'майки', link: '/products' },
        { name: 'белье', link: '/products' },
        { name: 'шорты', link: '/products' },
        { name: 'юбки', link: '/products' },
        { name: 'свитеры', link: '/products' },
        { name: 'сумки', link: '/products' },
        { name: 'обувь', link: '/products' },
        { name: 'спортивные костюмы', link: '/products' },
        { name: 'аксессуары', link: '/products' },
    ]

    const TopBrandsItems = [
        { name: '#TOPBRANDS', link: '/products' },
        { name: '#TOPBRANDS', link: '/products' },
        { name: '#TOPBRANDS', link: '/products' },
        { name: '#TOPBRANDS', link: '/products' },
        { name: '#TOPBRANDS', link: '/products' },
        { name: '#TOPBRANDS', link: '/products' },
    ]

    return (
        <div className='page__main'>
            <main className='page-main'>
                <Link className='breadcrumbs' to='/'>
                    <span className='text text--breadcrumbs'>
                        {'<'} на главную
                    </span>
                </Link>
                <h1 className='visually-hidden'>Категории новинок</h1>
                <div className='categories-wrapper'>
                    <ul className='categories-list'>
                        <li className='categories-item'>
                            <div className='category-title'>
                                <h2 className='text text--h2'>Clothes</h2>
                            </div>
                            <div className='category-list-wrapper'>
                                <ul className='category-list'>
                                    {ClothesItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className='category-item'
                                        >
                                            <Link to={item.link}>
                                                <div className='category-card-mini'>
                                                    <div className='category-card-text-wrapper'>
                                                        <h3 className='text text--h3-new'>
                                                            {item.name}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li className='categories-item'>
                            <div className='category-title'>
                                <h2 className='text text--h2'>TOP brands</h2>
                            </div>
                            <div className='category-list-wrapper'>
                                <ul className='category-list'>
                                    {TopBrandsItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className='category-item'
                                        >
                                            <Link to={item.link}>
                                                <div className='category-card'></div>
                                                <h3 className='text text--h3-new'>
                                                    {item.name}
                                                </h3>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default MainCategories
