import { Stack } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import PropertiesSwipper from "../../components/PropertiesSwipper";
import Sparkle from "../../components/Sparkle";
import Paragraph from "../../components/Paragraph";
import SubSectionHeading from "../../components/SubSectionHeading";

const FeaturedProperties = () => {
  return (
    <MarginBox sx={{ paddingTop: "2rem" }}>
      <Sparkle />
      <Stack gap={2}>
        <SubSectionHeading>Featured Properties</SubSectionHeading>
        <Paragraph>
          Explore our handpicked selection of featured properties. Each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein.
        </Paragraph>
        <PropertiesSwipper />
      </Stack>
    </MarginBox>
  );
};

export default FeaturedProperties;
