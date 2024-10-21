import { Checkbox, FormControlLabel, Grid2, Stack } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import InputWithLabel from "../../components/InputWithLabel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Button from "../../components/Button";
import Sparkle from "../../components/Sparkle";
import SubSectionHeading from "../../components/SubSectionHeading";
import Paragraph from "../../components/Paragraph";
const PropertiesForm = () => {
  return (
    <MarginBox sx={{ paddingTop: "2rem" }}>
      <Sparkle />
      <Stack gap={2}>
        <SubSectionHeading>{"Let's Make it Happen"}</SubSectionHeading>
        <Paragraph>
          {
            "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
          }
        </Paragraph>
      </Stack>
      <form>
        <Grid2
          container
          columns={{ mobile: 1, laptop: 4 }}
          sx={{
            padding: { mobile: 2, laptop: 4 },
            marginBlock: { mobile: 2, laptop: 8 },
            border: "1px solid",
            borderColor: "background.paper",
            borderRadius: 2,
          }}
          spacing={4}
        >
          <Grid2 size={1}>
            <InputWithLabel
              label={"First Name"}
              placeholder={"Enter First Name"}
            />
          </Grid2>
          <Grid2 size={1}>
            <InputWithLabel
              label={"Last Name"}
              placeholder={"Enter Last Name"}
            />
          </Grid2>
          <Grid2 size={1}>
            <InputWithLabel label={"Email"} placeholder={"Enter Email"} />
          </Grid2>
          <Grid2 size={1}>
            <InputWithLabel
              label={"Phone Number"}
              placeholder={"Enter Phone Number"}
            />
          </Grid2>
          <Grid2 size={1}>
            <InputWithLabel
              label={"Preferred Location"}
              placeholder={"Select Location"}
              endAdornment={<KeyboardArrowDownIcon />}
            />
          </Grid2>
          <Grid2 size={1}>
            <InputWithLabel
              label={"Property Type"}
              placeholder={"Select Property Type"}
              endAdornment={<KeyboardArrowDownIcon />}
            />
          </Grid2>
          <Grid2 size={1}>
            <InputWithLabel
              label={"No. of Bedrooms"}
              placeholder={"Select no of Bedrooms"}
              endAdornment={<KeyboardArrowDownIcon />}
            />
          </Grid2>
          <Grid2 size={1}>
            <InputWithLabel
              label={"No. of Bathrooms"}
              placeholder={"Select no of Bathrooms"}
              endAdornment={<KeyboardArrowDownIcon />}
            />
          </Grid2>
          <Grid2 size={2}>
            <InputWithLabel
              label={"Budget"}
              placeholder={"Select Budget"}
              endAdornment={<KeyboardArrowDownIcon />}
            />
          </Grid2>
          <Grid2 size={1}>
            <InputWithLabel
              label={"Preferred Contact Method"}
              placeholder={"Enter Phone Number"}
              startAdornment={<PhoneIcon />}
              endAdornment={<CircleIcon color="primary" fontSize="small" />}
            />
          </Grid2>
          <Grid2 size={1}>
            <InputWithLabel
              placeholder={"Enter Email"}
              startAdornment={<EmailIcon />}
              endAdornment={
                <CircleOutlinedIcon color="primary" fontSize="small" />
              }
            />
          </Grid2>
          <InputWithLabel
            multiLine
            label="Message"
            placeholder={"Enter your message here..."}
          />
          <Stack
            width={"100%"}
            sx={{
              flexDirection: { laptop: "row" },
              justifyContent: "space-between",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="I agree with Terms of Use and Privacy Policy"
            />
            <Button
              sx={theme => ({
                [theme.breakpoints.down("laptop")]: {
                  width: "100%",
                },
              })}
            >
              Send Message
            </Button>
          </Stack>
        </Grid2>
      </form>
    </MarginBox>
  );
};

export default PropertiesForm;
