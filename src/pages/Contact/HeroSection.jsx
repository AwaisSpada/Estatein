import MarginBox from "../../components/MarginedBox";
import HeroSectionHeading from "../../components/HeroSectionHeading";
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
      <HeroSectionHeading>Get in Touch with Estatein</HeroSectionHeading>
      <Paragraph>
        {
          "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
        }
      </Paragraph>
    </MarginBox>
  );
};

export default HeroSection;
