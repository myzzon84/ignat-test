import './toCatalog.scss';
import beardedMan from '../../images/beardedMan.jpg';

const ToCatalog = () => {
    return (
        <section className='toCatalogWrapper'>
            <div className='textBlock'>
                <h2 className='h2'>
                    Ми знаємо, що сподобається вашим “великим” друзям!
                </h2>
                <p className='desc'>
                    Обирай подарунок своїм друзями бодібілдерам із нашою новою
                    колекцію термобілизни “Big warm”
                </p>
                <a href="catalog" className='catalogLink'>До каталогу</a>
            </div>
            <div className='imageBlock'>
                <img
                    src={beardedMan}
                    alt='bearded man'
                />
            </div>
            
        </section>
    );
};

export default ToCatalog;
