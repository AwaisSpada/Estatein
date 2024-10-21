import { Grid2, Stack, Typography } from "@mui/material";
import { Card } from "../../components/Paper";

const cardsContent = [
  { value: 200, content: "Happy Customers", col: 1 },
  { value: "10k", content: "Properties For Clients", col: 1 },
  { value: 16, content: "Years of Experience", col: 2 },
];
const HeroSectionCards = () => {
  return (
    <Grid2 container columns={{ mobile: 2, laptop: 3 }} spacing={1}>
      {cardsContent.map(card => (
        <Grid2 key={card.value} size={{ mobile: card.col, laptop: 1 }}>
          <Card sx={{ flex: 1 }}>
            <Stack
              sx={{ alignItems: { mobile: "center", laptop: "flex-start" } }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {card.value}+
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {card.content}
              </Typography>
            </Stack>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default HeroSectionCards;
