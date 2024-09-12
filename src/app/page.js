import AboutUs from "@/components/home/about/AboutUs";
import Banner from "@/components/home/Banner";
import LandingPart from "@/components/home/LandingPart";
import Project from "@/components/home/project/Project";
import SubBrand from "@/components/home/subBrand/SubBrand";
import Testimonials from "@/components/home/Testimonials/Testimonials";


export default function Home() {
  return (
    <div className="">
     <LandingPart/>
     <AboutUs/>
     <SubBrand/>
     <Project/>
     <Banner/>
     <Testimonials/>
    </div>
  );
}
