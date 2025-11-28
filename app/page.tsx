import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Images } from "@/components/Images";
import { Navbar } from "@/components/Navbar";
import { Schedule } from "@/components/Schedule";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-black w-full  text-white  ">
      <Navbar />
      <div className="flex flex-col  gap-10 md:gap-20 ">
        <div className="w-full min-h-dvh">
          <Hero />
        </div>
        <Features />
        <Images />
        <Testimonials />
        <Schedule />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
