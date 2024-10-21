import { Box, Stack } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import HeroImage from "/HeroImage.png";
import OutlinedButton from "../../components/OutlinedButton";
import Button from "../../components/Button";
import HeroSectionCards from "./HeroSectionCards";
import SubContainer from "/Sub Container.png";
import Paragraph from "../../components/Paragraph";
import HeroSectionHeading from "../../components/HeroSectionHeading";
const HeroSection = () => {
  return (
    <MarginBox sx={{ paddingRight: { laptop: 0 } }}>
      <Stack
        sx={{
          flexDirection: { laptop: "row-reverse" },
          paddingTop: { mobile: "1.5rem", laptop: 0 },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            maxWidth: {
              mobile: "100%",
              laptop: "690px",
              desktop: "920px",
            },
            height: {
              mobile: "302px",
              laptop: "622px",
              desktop: "814px",
            },
            flex: 1,
          }}
        >
          <img src={HeroImage} width="100%" height="100%" />
        </Box>
        <Stack
          gap={3}
          sx={{
            justifyContent: "center",
            paddingRight: { laptop: "2rem" },
            flex: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                paddingTop: {
                  mobile: "70px",
                  laptop: 0,
                },
              }}
            >
              <HeroSectionHeading>
                Discover your Dream
                <br />
                Property with Estatein
              </HeroSectionHeading>
            </Box>
            <Box
              sx={theme => ({
                position: "absolute",
                width: {
                  mobile: "117px",
                  laptop: "129px",
                  desktop: "175px",
                },
                height: {
                  mobile: "117px",
                  laptop: "129px",
                  desktop: "175px",
                },
                [theme.breakpoints.down("laptop")]: {
                  top: "-70px",
                  left: 0,
                },
                [theme.breakpoints.up("laptop")]: {
                  top: 0,
                  right: "-100px",
                },
                [theme.breakpoints.up("desktop")]: {
                  // top: "20px",
                  right: "-100px",
                },
              })}
            >
              <img src={SubContainer} width="100%" height="100%" />
            </Box>
          </Box>
          <Paragraph>
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </Paragraph>
          <Stack
            sx={{ flexDirection: { mobile: "column", laptop: "row" } }}
            gap={2}
          >
            <OutlinedButton>Learn More</OutlinedButton>
            <Button>Browse Properties</Button>
          </Stack>
          <HeroSectionCards />
        </Stack>
      </Stack>
    </MarginBox>
  );
};

export default HeroSection;
