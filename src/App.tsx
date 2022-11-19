import { Header } from './components/ui/header/Header'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './components/pages/main/MainPage'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Footer } from './components/ui/footer/Footer';
import { useStaticItems } from './hooks/useStaticItems';
import { PricingPage } from './components/pages/pricing/PricingPage';
import { NotFoundPage } from './components/pages/notFound/NotFoundPage';
import { AboutUsPage } from './components/pages/aboutUs/AboutUsPage';

function App() {
  useStaticItems('prices');

  return (
    <div className='container flexCol h-full px-1 xl:max-w-7xl text-grey transition-colors tracking-widest'>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/aboutUs' element={<AboutUsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
