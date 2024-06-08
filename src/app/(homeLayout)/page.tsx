import Advantages from "@/components/home/Advantages";
import Banner from "@/components/home/Banner";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import Testimonial from "@/components/home/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Advantages></Advantages>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
    </div>
  );
};

export default HomePage;
