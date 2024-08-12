import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import  Approach  from "@/components/Approach";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";


const Home = () => {
  // const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex flex-col bg-slate-50 scroll-smooth">

      <Hero />
      {/* <Approach /> */}
      <Faq />
      <Pricing />
      <Footer />

    </div>
  );
};

export default Home;
