import { Stack } from "@mui/material";
import MarginBox from "./MarginedBox";
import Button from "./Button";
import Hr from "./Hr";
import SubSectionHeading from "./SubSectionHeading";
import Paragraph from "../components/Paragraph";

const RealEstateJourney = () => {
  return (
    <>
      <Hr />
      <MarginBox sx={{ paddingBlock: { mobile: "2rem", laptop: "4rem" } }}>
        <Stack sx={{ flexDirection: { laptop: "row" } }} gap={2}>
          <Stack sx={{ flex: 1 }} gap={2}>
            <SubSectionHeading>
              Start Your Real Estate Journey Today
            </SubSectionHeading>
            <Paragraph>
              {
                "Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance."
              }
            </Paragraph>
          </Stack>
          <Stack
            sx={{ width: { mobile: "100%", laptop: "30%" } }}
            justifyContent="center"
            alignItems={"flex-end"}
          >
            <Button
              sx={theme => ({
                [theme.breakpoints.down("laptop")]: {
                  width: "100%",
                },
              })}
            >
              Explore Properties
            </Button>
          </Stack>
        </Stack>
      </MarginBox>
    </>
  );
};

export default RealEstateJourney;
