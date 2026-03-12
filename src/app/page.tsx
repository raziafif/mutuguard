import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Mission from "@/components/Mission";
import Trust from "@/components/Trust";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Mission />
        <Trust />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
