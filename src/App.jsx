import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />

      <a
        href="https://wa.me/917874746565"
        className="whatsapp-btn"
        target="_blank"
      >
        WhatsApp
      </a>

      <Footer />
    </>
  );
}

export default App;