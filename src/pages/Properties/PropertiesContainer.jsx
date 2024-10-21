import { Stack, Typography } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import PropertiesSwipper from "../../components/PropertiesSwipper";
import Sparkle from "../../components/Sparkle";
import SubSectionHeading from "../../components/SubSectionHeading";
const PropertiesContainer = () => {
  return (
    <MarginBox sx={{ paddingTop: "2rem" }}>
      <Sparkle />
      <Stack gap={2}>
        <SubSectionHeading>Discover a World of Possibilities</SubSectionHeading>
        <Typography variant="body1" color="text.secondary">
          Our portfolio of properties is as diverse as your dreams. Explore the
          following categories to find the perfect property that resonates with
          your vision of home
        </Typography>
        <PropertiesSwipper />
      </Stack>
    </MarginBox>
  );
};

export default PropertiesContainer;
