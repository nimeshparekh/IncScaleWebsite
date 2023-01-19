import Banner from "../components/Banner/Banner";
import Girl from "../components/Girl/Girl";
import Slider from "../components/Slider/Slider";
import Customer from "../components/CustomerStories/Customer";
import Laptop from "../components/Laptop/Laptop";
import Expertise from "../components/Expertise/Expertise";
import Contact from "../components/Contact/Contact";
import Trusted from "../components/Trusted/Trusted";
import Footer from "../components/Footer/Footer";

function Home() {
  // const breakpoints = {
  //   values: {
  //     xs: 0,
  //     sm: 600, // Phone
  //     md: 900, // Tablet/Laptop
  //     lg: 1200, // Desktop
  //     xl: 1536,
  //   },
  // };

  return (
    <>
      <Banner />
      <Girl />
      <Slider />
      <Trusted />
      <Customer />
      <Laptop />
      <Expertise />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
