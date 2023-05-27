import AboutUs from "./AboutUs";
import CarouselPart from "./CarouselPart";
import ServiceArea from "./ServiceArea";

const Home = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-6">
      <CarouselPart />
      <AboutUs />
      <ServiceArea/>
    </div>
  );
};

export default Home;