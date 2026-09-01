import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ConstructionBanner from "@/components/ConstructionBanner";
import Offer from "@/components/Offer";
import FinalCTA from "@/components/FinalCTA";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <Services />
        <Testimonials />
        <ConstructionBanner />
        <Offer />
        <FinalCTA />
        <Booking source="home" />
      </main>
      <Footer />
    </>
  );
}
