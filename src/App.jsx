import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection";
import LocationSection from "./Components/LocationSection/LocationSection";
import NumberExpress from "./Components/NumberExpress/NumberExpress";
import OurCustomer from "./Components/OurCustomer/OurCustomer";

function App() {
  return (
    <>
      <HeroSection />
      <LocationSection />
      <NumberExpress />
      <div className="flex flex-col h-screen">
        <OurCustomer className="flex-grow" />
        <Footer className="flex-grow" />
      </div>
    </>
  );
}

export default App;
