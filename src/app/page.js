import AboutUs from "@/components/home/about/AboutUs";
import Banner from "@/components/home/Banner";
import ContactUs from "@/components/home/contact-us/ContactUs";
import LandingPart from "@/components/home/LandingPart";
import PartnernshipCompanies from "@/components/home/Products/PartnernshipCompanies";
import ProductSection from "@/components/home/Products/ProductSection";
import Project from "@/components/home/project/Project";
import SubBrand from "@/components/home/subBrand/SubBrand";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import BGImag from '../../public/assets/bg-business.png';

export default function Home() {
  return (
    <div
      className="bg-center"
      style={{ backgroundImage: `url(${BGImag.src})` }}
    >
      <section id="home">
        <LandingPart />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="sub-brand">
        <SubBrand />
      </section>

      <section id="products">
        <ProductSection />
      </section>

      <section id="project">
        <Project className="bg-white" />
      </section>

      <Banner />

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <ContactUs />
      </section>

      <PartnernshipCompanies />
    </div>
  );
}
