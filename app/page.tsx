import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Carousel } from "@/components/ui/ImageCarusel";

export default function Home() {
  return (
    <main className="bg-black w-full   text-white  ">
      <Navbar />
      <div className="flex flex-col items-center gap-10 ">
        <div className="h-screen w-full">
          <div className="pt-18 lg:pt-10 relative  w-full ">
            <Hero />
          </div>
        </div>
        <Features />
        <section className="mb-14 max-w-full ">
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
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
