import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import  Approach  from "@/components/Approach";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import Companies from "@/components/Companies";
import CaseStudies from "@/components/CaseStudies";
import Work from "@/components/Work";


const Home = () => {
  // const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex flex-col bg-slate-50 scroll-smooth">
      <Navbar />
      <Hero />
      <Companies />
      <Work />
      {/* <Approach /> */}
      <CaseStudies />
      <Faq />
      <Pricing />
      <Footer />

    </div>
  );
};

export default Home;
