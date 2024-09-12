import AboutUs from "@/components/home/about/AboutUs";
import LandingPart from "@/components/home/LandingPart";
import ProductSection from "@/components/home/Products/ProductSection";
import ProjectSection from "@/components/home/ProjectSection";
import SubBrand from "@/components/home/subBrand/SubBrand";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <LandingPart/>
     <AboutUs/>
     <SubBrand/>
     <Testimonials/>
    </div>
  );
}
