import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCallButton from "./components/FloatingCallButton";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;
