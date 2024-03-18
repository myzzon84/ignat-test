import './subscription.scss';

const Subscription = () => {
    return (
        <section className='subscriptionWrapper'>
            <h2 className='h2'>Спіймай всі акції!</h2>
            <p className='desc'>
                Підписуйся на Email розсилку і отримуй інформацію про всі акції,
                які будуть з`влятись у нашому магазині. А у нас їх багато :D
            </p>
            <div className='inputWrapper'>
                <input type="email" name="email" id="email" className='input' placeholder='Введіть'/>
                <button className='button'>Підписатись</button>
            </div>
        </section>
    );
};

export default Subscription;
