"use client"
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Companies from "@/components/Companies";
import Work from "@/components/Work";
import '../styles/global.scss';
import Benefits from "@/components/Benefits";
import Hero2 from "@/components/Hero2";
import Testimonials from "@/components/Testimonials";
import { Toaster } from "@/components/ui/toaster";
import CTA2 from "@/components/CTA2";
import Features from "@/components/Features";
import CTA3 from "@/components/CTA3";
import Services2 from "@/components/Services2";


const Home = () => {
  return (
    <div className="flex flex-col bg-slate-50 scroll-smooth">
      <Navbar />
      <Hero2 />
      <Companies />
      <Features />
      <Services2 />
      <Work /> 
      <CTA3 />
      <div id="benefits"></div>
      <Benefits />
      <Testimonials />
      <div id="faq"></div>
      <Faq />
      <div className="flex w-full justify-center"><CTA2 /></div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home;
