import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";


const Home = () => {
  // const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex flex-col bg-slate-50 scroll-smooth">

      <Faq />
      <Footer />

    </div>
  );
};

export default Home;
