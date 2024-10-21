import { Checkbox, FormControlLabel, Grid2, Stack } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import InputWithLabel from "../../components/InputWithLabel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "../../components/Button";
import Sparkle from "../../components/Sparkle";
import SubSectionHeading from "../../components/SubSectionHeading";
import Paragraph from "../../components/Paragraph";
const ContactUsForm = () => {
  return (
    <MarginBox sx={{ paddingTop: "2rem" }}>
      <Sparkle />
      <Stack gap={2}>
        <SubSectionHeading>{"Let's Connect"}</SubSectionHeading>
        <Paragraph>
          {
            "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need. "
          }
        </Paragraph>
      </Stack>
      <form>
        <Grid2
          container
          columns={{ mobile: 1, laptop: 3 }}
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
              label={"Inquiry Type"}
              placeholder={"Select Inquiry Type"}
              endAdornment={<KeyboardArrowDownIcon />}
            />
          </Grid2>
          <Grid2 size={1}>
            <InputWithLabel
              label={"How did you hear about us?"}
              placeholder={"Select "}
              endAdornment={<KeyboardArrowDownIcon />}
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

export default ContactUsForm;
