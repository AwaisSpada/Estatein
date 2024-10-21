import { Grid2, Stack, Typography } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import Sparkle from "../../components/Sparkle";
import SubSectionHeading from "../../components/SubSectionHeading";
import Paragraph from "../../components/Paragraph";
import value1 from "/value1.png";
import value2 from "/value2.png";
import value3 from "/value3.png";
import value4 from "/value4.png";
const values = [
  {
    image: value1,
    heading: "Trust",
    values:
      "Trust is the cornerstone of every successful real estate transaction.",
  },
  {
    image: value2,
    heading: "Excellence",
    values:
      "We set the bar high for ourselves. From the properties we list to the services we provide.",
  },
  {
    image: value3,
    heading: "Client-Centric",
    values:
      "Your dreams and needs are at the center of our universe. We listen, understand.",
  },
  {
    image: value4,
    heading: "Our Commitment",
    values:
      "We are dedicated to providing you with the highest level of service, professionalism.",
  },
];

const Values = () => {
  return (
    <MarginBox
      sx={{
        display: "flex",
        flexDirection: { mobile: "column", laptop: "row" },
        gap: 2,
      }}
    >
      <Stack sx={{ flex: 1, justifyContent: "center" }}>
        <Sparkle />
        <SubSectionHeading>Our Values</SubSectionHeading>
        <Paragraph>
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </Paragraph>
      </Stack>
      <Grid2
        container
        columns={{ mobile: 1, laptop: 2 }}
        sx={{
          flex: 1,
          border: "10px solid",
          borderColor: "background.paper",
          borderRadius: 3,
          padding: 4,
        }}
        spacing={2}
      >
        {values.map(value => (
          <Grid2 size={1} key={value.heading}>
            <Stack direction="row" gap={1} alignItems="center" sx={{ mb: 1 }}>
              <img src={value.image} width="50px" height="50px" />
              <Typography variant="h6">{value.heading}</Typography>
            </Stack>
            <Paragraph>{value.values}</Paragraph>
          </Grid2>
        ))}
      </Grid2>
    </MarginBox>
  );
};

export default Values;
