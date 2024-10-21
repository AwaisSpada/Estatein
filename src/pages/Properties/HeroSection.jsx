import { Stack } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import HeroSectionHeading from "../../components/HeroSectionHeading";
import Paragraph from "../../components/Paragraph";
import Hr from "../../components/Hr";
const HeroSection = () => {
  return (
    <>
      <MarginBox
        sx={{
          paddingBlock: {
            mobile: 4,
            laptop: 8,
          },
        }}
      >
        <Stack gap={2}>
          <HeroSectionHeading>Find Your Dream Property</HeroSectionHeading>
          <Paragraph>
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey.
          </Paragraph>
        </Stack>
      </MarginBox>
      <Hr />
    </>
  );
};

export default HeroSection;
