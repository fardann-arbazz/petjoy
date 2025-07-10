import { useState } from "react";
import SplashScreen from "../components/splash-screen";
import Navbar from "../components/navbar";
import Hero from "../components/hero-section";
import Services from "../components/services-section";
import Products from "../components/product-showcase";
import Testimonials from "../components/testimonials";
import Contact from "../components/contact";
import Footer from "../components/footer";
import AboutSection from "../components/about";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <SplashScreen onComplete={() => setShowSplash(false)} />

      {!showSplash && (
        <div className="font-poppins">
          <Navbar />
          <Hero />
          <AboutSection />
          <Services />
          <Products />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
