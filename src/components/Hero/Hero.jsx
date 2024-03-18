import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderArrow from '../../images/sliderArrow.png';
import './hero.scss';
import sliderImage from '../../images/Slider Image.jpg';

const Hero = () => {
    const sliderSettings = {
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: () => (
            <div className='wrapperDot'>
                <div className='sliderDot'></div>
            </div>
        ),
    };

    const slides = [sliderImage, sliderImage];

    return (
        <section className='heroWrapper'>
            <Slider
                {...sliderSettings}
                className=''
            >
                {slides.map((item, i) => {
                    return (
                        <div
                            className='slideWrapper'
                            key={i}
                        >
                            <img
                                src={item}
                                alt='slider image'
                                className='sliderImage'
                            />
                            <div className='left'>
                                <h1 className='h1'>Швидше. Вище. Сильніше.</h1>
                                <div className='desc'>Разом із Nike</div>
                            </div>
                            <div className='right'>
                                <div className='sales'>Знижки до 40%</div>
                                <div className='timeLeft'>
                                    Залишився лише тиждень
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </section>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className='sliderArrowLeft'
            onClick={onClick}
        >
            <img
                src={sliderArrow}
                alt='slider arrow'
            />
        </div>
    );
};
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className='sliderArrowRight'
            onClick={onClick}
        >
            <img
                src={sliderArrow}
                alt='slider arrow'
            />
        </div>
    );
};

export default Hero;
