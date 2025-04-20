
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Directions from "@/components/Directions";
import SpecialOffers from "@/components/SpecialOffers";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Directions />
      <SpecialOffers />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
