import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import FaqSection from "../components/contact/FaqSection";

const About = () => {
  return (
    <div className="bg-[#e5e4e4]">
      <ContactHero />
      <ContactInfo />
      <FaqSection />
    </div>
  );
};

export default About;
