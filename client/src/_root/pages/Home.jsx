import Carousel from "../../components/shared/Carousel";
import Categories from "../../components/shared/Categories";
import Contact from "../../components/shared/Contact";
import FeaturedProducts from "../../components/shared/FeaturedProducts";

const Home = () => {
  return (
    <section>
      <Carousel />
      <FeaturedProducts type={"THE SPIRIT OF GUCCI GIFT"} />
      <Categories />
      <Contact />
    </section>
  );
};

export default Home;
