import './reviews.scss';
import Slider from 'react-slick';
import userAva from '../../images/userAva.png';
import starBlack from '../../images/starBlack.svg';
import starWhite from '../../images/starWhite.svg';
import { NextArrow, PrevArrow } from '../HottestItems/HottestItems';
import { useState } from 'react';

const Reviews = () => {
    const [page, setPage] = useState(1);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (oldIndex, newIndex) => {
            setTimeout(() => {
                if (newIndex - oldIndex === 4) {
                    setPage(() => page + 1);
                }
                if (newIndex - oldIndex === -8) {
                    setPage(1);
                }
                if (newIndex - oldIndex === 8) {
                    setPage(3);
                }
                if (newIndex - oldIndex === -4) {
                    setPage(() => page - 1);
                }
            }, 500);
        },
    };

    const users = new Array(8).fill({
        userAva: userAva,
        star: 4,
        userName: 'Жора Ремінгтон',
        text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...',
    });
    console.log(users);

    const stars = new Array(5).fill('');

    return (
        <section className='reviewsWrapper'>
            <div className='titleBlock'>
                <h2 className='h2'>Відгуги наших клієнтів</h2>
                <div className='count'>{`0${page} / 02`}</div>
            </div>

            <div className='sliderWrapper'>
                <Slider {...settings}>
                    {users.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className='reviewItem'
                            >
                                <div className='header'>
                                    <div className='avatar'>
                                        <img
                                            src={item.userAva}
                                            alt='avatar'
                                        />
                                    </div>
                                    <div className='content'>
                                        <div className='stars'>
                                            {stars.map((star, index) => {
                                                return (
                                                    <img
                                                        src={`${
                                                            index < item.star
                                                                ? starBlack
                                                                : starWhite
                                                        }`}
                                                        alt='star'
                                                        className='star'
                                                        key={index}
                                                    />
                                                );
                                            })}
                                        </div>
                                        <div className='userName'>
                                            {item.userName}
                                        </div>
                                    </div>
                                </div>
                                <div className='reviewText'>
                                    Дуже задоволений якістю обслуговування і
                                    самою продукцією. Купували термобілизну у
                                    подарунок, друзі...
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </section>
    );
};

export default Reviews;
