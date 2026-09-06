import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import Product from "./components/Product";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Product />
      <HowItWorks />
      <Stats />
      <Solutions />
      <Testimonials />
      <Pricing />
      <FAQ />
    </>
  );
}

export default App;