import Container from "@/components/shared/Container";
import Footer from "../../components/shared/Footer";
import InforContent from "./components/InforContent";
import Introduce from "./components/Introduce";
import SkillContent from "./components/SkillContent";
import Slider from "./components/Slider";


const HomePage = () => {


  return (
    <>
      <Slider />

      <Container title={"Toeic"}>
        <Introduce />

        <SkillContent />

        <InforContent />

      </Container>

      <Footer />
    </>
  );
};

export default HomePage;
