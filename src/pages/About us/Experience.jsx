import { Box, Grid2, Stack, Typography } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import Paragraph from "../../components/Paragraph";
import SubSectionHeading from "../../components/SubSectionHeading";
import Sparkle from "../../components/Sparkle";

const experiences = [
  {
    heading: "Discover a World of Possibilities",
    content:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,",
  },
  {
    heading: "Narrowing Down Your Choices",
    content:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    heading: "Personalized Guidance",
    content:
      "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
];

const Experience = () => {
  return (
    <MarginBox>
      <Sparkle />
      <Stack gap={2}>
        <SubSectionHeading>
          Navigating the Estatein Experience
        </SubSectionHeading>
        <Paragraph>
          {
            "At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
          }
        </Paragraph>
        <Grid2 container columns={{ mobile: 1, laptop: 3 }} spacing={2}>
          {experiences.map((experience, index) => (
            <Grid2
              key={index}
              sx={{ border: "1px solid", borderColor: "background.paper" }}
              size={1}
            >
              <Typography
                variant="h6"
                sx={{
                  borderBottom: "1px solid",
                  borderColor: "background.paper",
                  p: 2,
                }}
              >
                Step {index + 1}
              </Typography>
              <Box padding={3}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {experience.heading}
                </Typography>
                <Paragraph>{experience.content}</Paragraph>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </MarginBox>
  );
};

export default Experience;
