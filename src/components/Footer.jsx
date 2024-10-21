import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MarginBox from "./MarginedBox";
import LogoAndName from "./LogoAndName";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import FooterLinks from "./FooterLinks";
import Paper from "./Paper";
import Facebook from "/facebook.svg";
import LinkedIn from "/linkedin.svg";
import Youtube from "/youtube.svg";
import Twitter from "/twitter.svg";

const socialIcons = [
  { src: Facebook, alt: "Facebook" },
  { src: LinkedIn, alt: "LinkedIn" },
  { src: Youtube, alt: "YouTube" },
  { src: Twitter, alt: "Twitter" },
];

const Footer = () => {
  return (
    <>
      <MarginBox
        sx={theme => ({
          borderTop: "2px solid",
          borderColor: theme.palette.background.paper,
          [theme.breakpoints.down("laptop")]: {
            paddingBlock: theme.spacing(2),
          },

          [theme.breakpoints.up("laptop")]: {
            paddingBlock: theme.spacing(10),
          },
          [theme.breakpoints.up("desktop")]: {
            paddingBlock: theme.spacing(13),
          },
          paddingBlock: theme.spacing(),
        })}
      >
        <Stack
          direction={{ mobile: "column", laptop: "row" }}
          gap={2}
          sx={{ justifyContent: "space-between" }}
        >
          <Stack gap={4}>
            <LogoAndName />
            <TextField
              fullWidth
              placeholder="Enter your email"
              variant="outlined"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Stack>
          <FooterLinks />
        </Stack>
      </MarginBox>
      <Paper sx={{ paddingBlock: "16px" }}>
        <MarginBox>
          <Stack
            gap={2}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { mobile: "column-reverse", laptop: "row" },
            }}
          >
            <Stack
              direction="row"
              gap={2}
              sx={{
                flexDirection: { mobile: "column", laptop: "row" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="body1">
                @2023 Estatein. All Rights reserved
              </Typography>
              <Typography variant="body1">Terms and Conditions</Typography>
            </Stack>
            <Stack spacing={2} direction="row">
              {socialIcons.map((icon, index) => (
                <Stack
                  key={index}
                  sx={theme => ({
                    backgroundColor: theme.palette.background.default,
                    borderRadius: "999px",
                    padding: "14px",
                    justifyContent: "center",
                    alignItems: "center",
                  })}
                >
                  <img src={icon.src} alt={icon.alt} />
                </Stack>
              ))}
            </Stack>
          </Stack>
        </MarginBox>
      </Paper>
    </>
  );
};

export default Footer;
