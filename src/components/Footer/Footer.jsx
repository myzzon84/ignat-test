import './footer.scss';
import telegramIcon from '../../images/telegram.svg';
import instagramIcon from '../../images/instagram.svg';
import viberIcon from '../../images/viber.svg';

const Footer = () => {
    const contacts = [
        'Контакт - центр',
        '098 900 09 09',
        'Пн - Пт 09:00 - 21:00',
        'Пн - Пт 09:00 - 21:00',
    ];

    const buyers = [
        'Покупцям',
        'Оплата і доставка',
        'Повернення',
        'Питання та відповіді',
    ];

    const personal = [
        'Особистий кабінет',
        'Мої дані',
        'Історія замовлень',
        'Улюблені',
        'Розсилки',
    ];

    const about = [
        'Про компанію',
        'Про нас',
        'Новини',
        'Стати партнером',
        'Угода користувача',
    ];

    const socialLinks = [instagramIcon, viberIcon, telegramIcon];

    const footerMenu = ['новинки', 'чоловіки', 'жінки', 'аксесуари', 'акції'];

    return (
        <footer className='footerWrapper'>
            <hr className='hr' />
            <div className='topBlock'>
                <div className='first'>
                    <ContentComponent
                        array={contacts}
                        first={true}
                    />
                    <ul className='socialLink'>
                        {socialLinks.map((item, i) => {
                            return (
                                <li
                                    key={i}
                                    className='socialItem'
                                >
                                    <img
                                        src={item}
                                        alt='social'
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='second'>
                    <ContentComponent array={buyers} />
                </div>
                <div className='third'>
                    <ContentComponent array={personal} />
                </div>
                <div className='fourth'>
                    <ContentComponent array={about} />
                </div>
            </div>
            <div className='bottomBlock'>
                <nav>
                    <ul className='footerMenu'>
                        {footerMenu.map((item, i) => {
                            return (
                                <li className='footerMenuItem' key={i}>
                                    <a href='#'>{item}</a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className='copyright'>
                © 2022 — 2023 IGNAT. Усі права захищені.
                </div>
            </div>
        </footer>
    );
};

const ContentComponent = (props) => {
    const { array, first } = props;
    return (
        <ul className='contentComponent'>
            {array.map((item, i) => {
                return first ? (
                    <li
                        key={i}
                        className={`${i === 0 ? 'titleText' : 'infoText'}`}
                    >
                        {item}
                    </li>
                ) : (
                    <li
                        key={i}
                        className={`${i === 0 ? 'titleText' : 'infoText'}`}
                    >
                        {i === 0 ? item : <a href='social'>{item}</a>}
                    </li>
                );
            })}
        </ul>
    );
};

export default Footer;
