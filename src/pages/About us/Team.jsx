import { Box, Grid2, Stack, Typography } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import Sparkle from "../../components/Sparkle";
import SubSectionHeading from "../../components/SubSectionHeading";
import Paragraph from "../../components/Paragraph";
import emp1 from "/emp1.png";
import emp2 from "/emp2.png";
import emp3 from "/emp3.png";
import emp4 from "/emp4.png";
import { SendSharp } from "@mui/icons-material";
const employees = [
  {
    name: "Max Mitchell",
    position: "Founder",
    image: emp1,
  },
  {
    name: "Sarah Johnson",
    position: "Chief Real Estate Officer",
    image: emp2,
  },
  {
    name: "David Brown",
    position: "Head of Property Management",
    image: emp3,
  },
  {
    name: "Michael Turner",
    position: "Legal Counsel",
    image: emp4,
  },
];

const Team = () => {
  return (
    <MarginBox sx={{ pt: 4 }}>
      <Sparkle />
      <Stack gap={2}>
        <SubSectionHeading>Meet the Estatein Team</SubSectionHeading>
        <Paragraph>
          At Estatein, our success is driven by the dedication and expertise of
          our team. Get to know the people behind our mission to make your real
          estate dreams a reality.
        </Paragraph>
        <Grid2 container columns={{ mobile: 1, laptop: 4 }} spacing={1}>
          {employees.map((employee, index) => (
            <Grid2
              key={index}
              sx={{ border: "1px solid", borderColor: "background.paper" }}
              size={1}
            >
              <Box>
                <img src={employee.image} width="100%" />
              </Box>
              <Stack padding={2} alignItems={"center"}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {employee.name}
                </Typography>
                <Paragraph>{employee.position}</Paragraph>
                <Stack
                  flexDirection="row"
                  justifyContent="space-between"
                  sx={{
                    borderRadius: "999px",
                    border: "1px solid",
                    borderColor: "background.paper",
                    px: 2,
                    py: 1,
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Typography>Say Hello 👋</Typography>
                  <Stack
                    sx={{
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      p: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <SendSharp />
                  </Stack>
                </Stack>
              </Stack>
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </MarginBox>
  );
};

export default Team;
