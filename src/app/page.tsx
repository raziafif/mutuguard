import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FraudStats from "@/components/FraudStats";
import Solution from "@/components/Solution";
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
        <FraudStats />
        <Solution />
        <Features />
        <Mission />
        <Trust />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
