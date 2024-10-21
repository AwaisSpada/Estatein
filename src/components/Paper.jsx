import { Paper as MuiPaper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Paper = styled(props => <MuiPaper elevation={0} {...props} />)(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontFamily: "Urbanist",
    border: "1px solid",
    borderColor: theme.palette.background.paper,
    height: "100%",
  })
);

export const Card = styled(props => <MuiPaper elevation={0} {...props} />)(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: "12px",
    padding: "16px",
    [theme.breakpoints.up("laptop")]: {
      padding: "16px 24px",
    },
    fontSize: "18px",
    fontWeight: 500,
    fontFamily: "Urbanist",
    border: "1px solid",
    borderColor: theme.palette.background.paper,
    height: "100%",
  })
);
export default Paper;
