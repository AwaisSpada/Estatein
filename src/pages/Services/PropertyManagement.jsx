import { Grid2, Stack, Typography } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import Sparkle from "../../components/Sparkle";
import SubSectionHeading from "../../components/SubSectionHeading";
import Paragraph from "../../components/Paragraph";
import management1 from "/management1.png";
import management2 from "/management2.png";
import management3 from "/management3.png";
import management4 from "/management4.png";
import OutlinedButton from "../../components/OutlinedButton";
const values = [
  {
    image: management1,
    heading: "Tenant Harmony",
    values:
      "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
  },
  {
    image: management2,
    heading: "Maintenance Ease",
    values:
      "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
  },
  {
    image: management3,
    heading: "Financial Peace of Mind",
    values:
      "Managing property finances can be complex. Our financial experts take care of rent collection",
  },
  {
    image: management4,
    heading: "Legal Guardian",
    values: "Stay compliant with property laws and regulations effortlessly.",
  },
];
const PropertyManagement = () => {
  return (
    <MarginBox sx={{ py: 4 }}>
      <Sparkle />
      <Stack gap={3}>
        <SubSectionHeading>Effortless Property Management</SubSectionHeading>
        <Paragraph>
          {
            "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
          }
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
                Experience Effortless Property Management
              </Typography>
              <OutlinedButton>Learn More</OutlinedButton>
            </Stack>
            <Paragraph>
              Ready to experience hassle-free property management? Explore our
              Property Management Service categories and let us handle the
              complexities while you enjoy the benefits of property ownership.
            </Paragraph>
          </Grid2>
        </Grid2>
      </Stack>
    </MarginBox>
  );
};

export default PropertyManagement;
