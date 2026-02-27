import Hero from "./components/index/Hero";
import DashboardShowcase from "./components/index/DashboardShowcase";
import AppShowcase from "./components/index/AppShowcase";
import StatsBar from "./components/index/StatsBar";
import Features from "./components/index/Features";
import WhySection from "./components/index/WhySection";
import ContactSection from "./components/index/ContactSection";
import CTA from "./components/index/CTA";
import Footer from "./components/index/Footer";
import Nav from "./components/index/Nav";
import GlobalStyles from "./components/index/GlobalStyles";
import { B } from "./constants";

const LandingPage = () => {
  return (
    <div className="lp">
      <GlobalStyles />
      <Nav />
      <main>
        <Hero B={B} />
        <DashboardShowcase B={B} />
        <StatsBar B={B} />
        <AppShowcase B={B} />
        <Features B={B} />
        <WhySection B={B} />
        <ContactSection B={B} />
        <CTA B={B} />
      </main>
      <Footer B={B} />
    </div>
  );
};

export default LandingPage;
