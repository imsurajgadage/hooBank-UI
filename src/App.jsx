import "./App.css";
import Billing from "./components/Billing";
import Bussiness from "./components/Bussiness";
import CTA from "./components/CTA";
import CardDeal from "./components/CardDeal";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import style from "./style";
function App() {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Stats /> <Bussiness /> <Billing /> <CardDeal /> <Testimonials />{" "}
          <Clients /> <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
