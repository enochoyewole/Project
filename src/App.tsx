// Main App component - brings together all the page sections
import NavigationBar from './components/Navbar';
import HeroSection from './components/Hero';
import ShopWithConfidence from './components/ShopWithConfidence';
import TakePaySection from './components/TakePaySection';
import ShopWithCredpalSection from './components/ShopWithCredpalSection';
import CredpalSavings from './components/CredpalSavings';
import GrowFasterSection from './components/GrowFasterSection';
import ShopLikePro from './components/ShopLikePro';
import FooterSection from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <HeroSection />
      <ShopWithConfidence />
      <TakePaySection />
      <ShopWithCredpalSection />
      <CredpalSavings />
      <ShopLikePro />
      <GrowFasterSection />
      <FooterSection />
    </div>
  );
}

export default App;
