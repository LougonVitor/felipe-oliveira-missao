import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Proposals from "@/components/Proposals";
import PartyMission from "@/components/PartyMission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Proposals />
        <PartyMission />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
