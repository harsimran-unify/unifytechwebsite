import Header from "./components/Header";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <WhyChooseUs />
        <Process />
        <TechStack />
        <Industries />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
