import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";
import Statistics from "@/components/statistics";
import Gallery from "@/components/gallery";
import BeforeAfter from "@/components/before-after";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";


export default function Home() {
  return (
    <>
      <JsonLd />

      <Navbar />

      <main>

        <Hero />

        <section className="section-padding">
          <Services />
        </section>

        <section className="section-padding bg-slate-50" id="leistungen">
          <WhyUs />
        </section>

        <section className="section-padding">
          <Statistics />
        </section>

        {/* <section className="section-padding bg-slate-50" id="einblick">
          <Gallery />
        </section> */}

        <section className="section-padding" id="einblick">
          <BeforeAfter />
        </section>

        <section className="section-padding bg-slate-50">
          <Testimonials />
        </section>

        <section className="section-padding" id="faq">
          <FAQ />
        </section>

        <section className="section-padding">
          <CTA />
        </section>

      </main>
      <section id="kontakt">
        <Footer />
      </section>
    </>
  );
}