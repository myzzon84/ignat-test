import './hottestItems.scss';
import Slider from 'react-slick';
import hotItem1 from '../../images/hotItem1.png';
import hotItem2 from '../../images/hotItem2.png';
import hotItem3 from '../../images/hotItem3.png';
import sliderArrow1 from '../../images/sliderArrow1.svg';
import heart from '../../images/heart.svg';
import { useState } from 'react';

const HottestItems = () => {
    const [page, setPage] = useState(1);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: (
            <NextArrow
                page={page}
                setPage={setPage}
            />
        ),
        prevArrow: (
            <PrevArrow
                page={page}
                setPage={setPage}
            />
        ),
        beforeChange: (oldIndex, newIndex) => {
            setTimeout(() => {
                if (newIndex - oldIndex === 3) {
                    setPage(() => page + 1);
                }
                if (newIndex - oldIndex === -6) {
                    setPage(1);
                }
                if (newIndex - oldIndex === 6) {
                    setPage(3);
                }
                if (newIndex - oldIndex === -3) {
                    setPage(() => page - 1);
                }
            }, 500);
        },
    };

    const sliderItems = [
        {
            image: hotItem1,
            title: 'Термобілизна для бодібілдерів',
            category: 'Для чоловіків',
            info: '2 кольори',
            price: '4000 грн.',
        },
        {
            image: hotItem2,
            title: 'Майка для бодібілдерів',
            category: 'Для жінок',
            info: '6 кольорів',
            price: '1100 грн.',
        },
        {
            image: hotItem3,
            title: 'Ланцюжок для бодібілдерів',
            category: 'Аксесуари',
            info: '30 кг.',
            price: '2000 грн.',
        },
        {
            image: hotItem1,
            title: 'Термобілизна для бодібілдерів',
            category: 'Для чоловіків',
            info: '2 кольори',
            price: '4000 грн.',
        },
        {
            image: hotItem2,
            title: 'Майка для бодібілдерів',
            category: 'Для жінок',
            info: '6 кольорів',
            price: '1100 грн.',
        },
        {
            image: hotItem3,
            title: 'Ланцюжок для бодібілдерів',
            category: 'Аксесуари',
            info: '30 кг.',
            price: '2000 грн.',
        },
        {
            image: hotItem1,
            title: 'Термобілизна для бодібілдерів',
            category: 'Для чоловіків',
            info: '2 кольори',
            price: '4000 грн.',
        },
        {
            image: hotItem2,
            title: 'Майка для бодібілдерів',
            category: 'Для жінок',
            info: '6 кольорів',
            price: '1100 грн.',
        },
        {
            image: hotItem3,
            title: 'Ланцюжок для бодібілдерів',
            category: 'Аксесуари',
            info: '30 кг.',
            price: '2000 грн.',
        },
    ];

    return (
        <section className='hottestItemsWrapper'>
            <div className='header'>
                <h2 className='h2'>Найгарячіші товари</h2>
                <div className='sliderControls'>{`0${page} / 03`}</div>
            </div>
            <div className='slider-container'>
                <Slider {...settings}>
                    {sliderItems.map((item, i) => {
                        return (
                            <div
                                className='sliderItem'
                                key={i}
                            >
                                <div className='imageWrapper'>
                                    <img
                                        src={item.image}
                                        alt='image'
                                    />
                                </div>
                                <div className='itemTitle'>{item.title}</div>
                                <div className='itemCategory'>
                                    {item.category}
                                </div>
                                <div className='itemInfo'>{item.info}</div>
                                <div className='itemPrice'>{item.price}</div>
                                <div className="heart">
                                    <img src={heart} alt="heart" className='heartIcon'/>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </section>
    );
};

export const NextArrow = (props) => {
    const { onClick, page, setPage } = props;
    return (
        <div
            onClick={() => {
                onClick();
                setTimeout(() => {
                    if (page < 3) {
                        setPage(() => page + 1);
                    }
                    if (page === 3) {
                        setPage(1);
                    }
                }, 500);
            }}
        >
            <img
                src={sliderArrow1}
                alt='slider next arrow'
                className='nextArrow'
            />
        </div>
    );
};
export const PrevArrow = (props) => {
    const { onClick, page, setPage } = props;
    return (
        <div
            onClick={() => {
                onClick();
                setTimeout(() => {
                    if (page > 1) {
                        setPage(() => page - 1);
                    }
                    if (page === 1) {
                        setPage(3);
                    }
                }, 500);
            }}
        >
            <img
                src={sliderArrow1}
                alt='slider prev arrow'
                className='prevArrow'
            />
        </div>
    );
};

export default HottestItems;
