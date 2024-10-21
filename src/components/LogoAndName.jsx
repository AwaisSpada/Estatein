import { Box, Stack, Typography } from "@mui/material";
import Logo from "/Logo.png";

const LogoAndName = () => {
  return (
    <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
      <Box
        sx={{
          width: {
            mobile: "28px",
            laptop: "48px",
          },
          height: {
            mobile: "28px",
            laptop: "48px",
          },
        }}
      >
        <img src={Logo} width="100%" height="100%" />
      </Box>
      <Typography variant="h6">Estatein</Typography>
    </Stack>
  );
};

export default LogoAndName;
