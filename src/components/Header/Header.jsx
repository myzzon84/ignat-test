import './header.scss';

import mainLogo from '../../images/Logo.png';
import searchIcon from '../../images/searchIcon.svg';
import heartIcon from '../../images/heart.svg';
import bagIcon from '../../images/bag.svg';

const Header = () => {
    return (
        <header className={`headerWrapper`}>
            <div className={`blackLine`}>
                <div className={`leftBlock`}>
                    <span className={`telephone`}>098 900 09 09</span>
                    <span>
                        <a href='#'>Допомога</a>
                    </span>
                </div>
                <div className={`rightBlock`}>
                    <a href='#'>Увійти / Зареєструватися</a>
                </div>
            </div>
            <div className={`bottomBlock`}>
                <div className={`mainLogo`}>
                    <img
                        src={mainLogo}
                        alt='Main Logo'
                        onClick={() => console.log('Main page')}
                    />
                </div>
                <nav>
                    <ul className={`navList`}>
                        {[
                            'новинки',
                            'чоловіки',
                            'жінки',
                            'аксесуари',
                            'акції',
                        ].map((item, i) => {
                            return (
                                <li key={i}>
                                    <a href='page'>{item}</a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className='rightBlock'>
                    <div className='inputWrapper'>
                        <input
                            type='text'
                            className='input'
                        />
                        <img src={searchIcon} alt="Search Icon" className='searchIcon'/>
                    </div>
                    <img src={heartIcon} alt="heart icon" className='heartIcon'/>
                    <img src={bagIcon} alt="bag icon" className='bagIcon'/>
                </div>
            </div>
        </header>
    );
};

export default Header;
