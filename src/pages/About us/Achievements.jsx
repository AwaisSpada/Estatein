import { Grid2, Stack, Typography } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import Paragraph from "../../components/Paragraph";
import Sparkle from "../../components/Sparkle";
import SubSectionHeading from "../../components/SubSectionHeading";

const achievements = [
  {
    heading: "3+ Years of Excellence",
    content:
      "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
  },
  {
    heading: "Happy Clients",
    content:
      "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    heading: "Industry Recognition",
    content:
      "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

const Achievements = () => {
  return (
    <MarginBox sx={{ paddingBlock: 4 }}>
      <Sparkle />
      <Stack gap={2}>
        <SubSectionHeading>Our Achievements</SubSectionHeading>
        <Paragraph>
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </Paragraph>
        <Grid2 spacing={2} container columns={{ mobile: 1, laptop: 3 }}>
          {achievements.map(achievement => (
            <Grid2
              size={1}
              key={achievement.heading}
              sx={{
                border: "8px solid",
                borderColor: "background.paper",
                borderRadius: 3,
                padding: 4,
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                {achievement.heading}
              </Typography>
              <Paragraph>{achievement.content}</Paragraph>
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </MarginBox>
  );
};

export default Achievements;
