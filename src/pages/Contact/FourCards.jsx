import { Box, Grid2, Stack, Typography } from "@mui/material";
import Paper, { Card } from "../../components/Paper";
import email from "/email.svg";
import phone from "/phone.svg";
import location from "/location.svg";
import socials from "/socials.svg";
import RightUpwardArrowIcon from "/RightUpwardArrowIcon.svg";
import MarginBox from "../../components/MarginedBox";
const cardContent = [
  {
    icon: email,
    content: ["info@estatein.com"],
  },
  {
    icon: phone,
    content: ["+1 (123) 456-7890"],
  },
  {
    icon: location,
    content: ["Main Headquarters"],
  },
  {
    icon: socials,
    content: ["Instagram", "LinkedIn", "Facebook"],
  },
];

const FourCards = () => {
  return (
    <MarginBox sx={{ paddingInline: { laptop: 0 } }}>
      <Paper sx={{ padding: "8px", marginTop: { mobile: "2rem", laptop: 0 } }}>
        <Paper sx={{ backgroundColor: "background.default", padding: "8px" }}>
          <Grid2 container columns={4} spacing={1}>
            {cardContent.map(card => (
              <Grid2 size={{ mobile: 2, laptop: 1 }} key={card.content}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      position: "relative",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <Box>
                      <img src={card.icon} width="100%" />
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "16px",
                        height: "16px",
                      }}
                    >
                      <img src={RightUpwardArrowIcon} width="100%" />
                    </Box>
                  </Stack>
                  <Stack
                    gap={2}
                    flexWrap={"wrap"}
                    direction="row"
                    justifyContent="center"
                  >
                    {card.content.map(content => (
                      <Typography textAlign="center" key={content}>
                        {content}
                      </Typography>
                    ))}
                  </Stack>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Paper>
      </Paper>
    </MarginBox>
  );
};

export default FourCards;
