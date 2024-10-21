import HeroSectionHeading from "../../components/HeroSectionHeading";
import MarginBox from "../../components/MarginedBox";
import Paragraph from "../../components/Paragraph";

const HeroSection = () => {
  return (
    <MarginBox
      sx={{
        paddingBlock: {
          mobile: 4,
          laptop: 10,
        },
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <HeroSectionHeading>
        Elevate Your Real Estate Experience
      </HeroSectionHeading>
      <Paragraph>
        Welcome to Estatein, where your real estate aspirations meet expert
        guidance. Explore our comprehensive range of services, each designed to
        cater to your unique needs and dreams.
      </Paragraph>
    </MarginBox>
  );
};

export default HeroSection;
