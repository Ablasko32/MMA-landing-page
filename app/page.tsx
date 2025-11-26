import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Schedule } from "@/components/Schedule";
import { Testimonials } from "@/components/Testimonials";
import { Carousel } from "@/components/ui/ImageCarusel";

export default function Home() {
  return (
    <main className="bg-black w-full  text-white  ">
      <Navbar />
      <div className="flex flex-col  gap-10 ">
        <div className="w-full min-h-dvh">
          <Hero />
        </div>
        <Features />
        <section id="carusel" className="mb-8 max-w-full h-fit  ">
          <h2 className="font-subtitle text-center text-4xl! mb-14">
            Upoznajte naš klub
          </h2>
          <Carousel
            slides={[
              { title: "aaaa", src: "./bg-boxer.jpg" },
              { title: "aaaa", src: "./bg-boxer.jpg" },
              { title: "aaaa", src: "./bg-boxer.jpg" },
            ]}
          />
        </section>
        <Testimonials />
        <Schedule />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
