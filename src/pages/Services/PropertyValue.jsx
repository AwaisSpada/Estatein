import { Grid2, Stack, Typography } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import Sparkle from "../../components/Sparkle";
import SubSectionHeading from "../../components/SubSectionHeading";
import Paragraph from "../../components/Paragraph";
import serviceValue1 from "/serviceValue1.svg";
import serviceValue2 from "/serviceValue2.svg";
import serviceValue3 from "/serviceValue3.svg";
import serviceValue4 from "/serviceValue4.svg";
import OutlinedButton from "../../components/OutlinedButton";
const values = [
  {
    image: serviceValue1,
    heading: "Valuation Mastery",
    values:
      "Discover the true worth of your property with our expert valuation services.",
  },
  {
    image: serviceValue2,
    heading: "Strategic Marketing",
    values:
      "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
  },
  {
    image: serviceValue3,
    heading: "Negotiation Wizardry",
    values:
      "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
  },
  {
    image: serviceValue4,
    heading: "Closing Success",
    values:
      "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
  },
];
const PropertyValue = () => {
  return (
    <MarginBox sx={{ py: 4 }}>
      <Sparkle />
      <Stack gap={3}>
        <SubSectionHeading>Unlock Property Value</SubSectionHeading>
        <Paragraph>
          Selling your property should be a rewarding experience, and at
          Estatein, we make sure it is. Our Property Selling Service is designed
          to maximize the value of your property, ensuring you get the best deal
          possible. Explore the categories below to see how we can help you at
          every step of your selling journey
        </Paragraph>
        <Grid2 container columns={{ mobile: 1, laptop: 3 }} spacing={2}>
          {values.map(value => (
            <Grid2
              size={1}
              key={value.heading}
              sx={{
                border: "1px solid",
                borderColor: "background.paper",
                borderRadius: 3,
                p: 4,
              }}
            >
              <Stack direction="row" gap={1} alignItems="center" sx={{ mb: 1 }}>
                <img src={value.image} width="50px" height="50px" />
                <Typography variant="h6">{value.heading}</Typography>
              </Stack>
              <Paragraph>{value.values}</Paragraph>
            </Grid2>
          ))}
          <Grid2
            size={{ mobile: 1, laptop: 2 }}
            sx={{
              backgroundColor: "background.paper",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              p: 4,
              gap: 2,
              borderRadius: 3,
            }}
          >
            <Stack
              flexDirection={{ mobile: "column", laptop: "row" }}
              justifyContent="space-between"
              alignItems={{ mobile: "stretch", laptop: "center" }}
              gap={2}
            >
              <Typography variant="h5" fontWeight={{ laptop: 700 }}>
                Unlock the Value of Your Property Today
              </Typography>
              <OutlinedButton>Learn More</OutlinedButton>
            </Stack>
            <Paragraph>
              Ready to unlock the true value of your property? Explore our
              Property Selling Service categories and let us help you achieve
              the best deal possible for your valuable asset.
            </Paragraph>
          </Grid2>
        </Grid2>
      </Stack>
    </MarginBox>
  );
};

export default PropertyValue;
