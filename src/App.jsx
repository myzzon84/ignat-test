import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ToCatalog from "./components/ToCatalog/ToCatalog.jsx";
import HottestItems from "./components/HottestItems/HottestItems.jsx";
import Subscription from "./components/Subscription/Subscription.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './scss/style.scss';
import './scss/app.scss';
import './scss/fonts.scss';

function App() {

  return (
    <div className={`appWrapper`}>
      <Header/>
      <Hero/>
      <ToCatalog/>
      <HottestItems/>
      <Subscription/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default App
