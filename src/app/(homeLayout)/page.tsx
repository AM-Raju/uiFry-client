import Advantages from "@/components/home/Advantages";
import Banner from "@/components/home/Banner";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import GetStarted from "@/components/home/GetStarted";
import Testimonial from "@/components/home/Testimonial";

const HomePage = () => {
  return (
    <div className="!scroll-smooth">
      <Banner></Banner>
      <Features></Features>
      <Advantages></Advantages>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <GetStarted></GetStarted>
    </div>
  );
};

export default HomePage;
