import { Box, Stack } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import aboutUsHero from "/AboutUsHero.png";
import HeroSectionHeading from "../../components/HeroSectionHeading";
import Paragraph from "../../components/Paragraph";
import HeroSectionCards from "../Home/HeroSectionCards";

const HeroSection = () => {
  return (
    <MarginBox sx={{ paddingBlock: { mobile: 4, laptop: 6 } }}>
      <Stack
        sx={{
          flexDirection: { mobile: "column-reverse", laptop: "row" },
          gap: {
            mobile: 3,
            laptop: 10,
          },
        }}
      >
        <Stack sx={{ justifyContent: "center" }} gap={2}>
          <HeroSectionHeading>Our Journey</HeroSectionHeading>
          <Paragraph>
            {
              "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
            }
          </Paragraph>
          <HeroSectionCards />
        </Stack>
        <Box
          sx={{
            border: "2px solid",
            borderColor: "background.paper",
            borderRadius: 4,
            width: { mobile: "100%", desktop: "755px" },
            height: { laptop: "435px", desktop: "536px" },
          }}
        >
          <img src={aboutUsHero} width="100%" height="100%" />
        </Box>
      </Stack>
    </MarginBox>
  );
};

export default HeroSection;
