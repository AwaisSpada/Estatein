import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const OutlinedButton = styled(props => (
  <MuiButton variant="outlined" disableRipple {...props} />
))(({ theme }) => ({
  color: theme.palette.text.primary,
  borderColor: theme.palette.background.paper,
  backgroundColor: theme.palette.background.default,
  fontWeight: 500,
  padding: "14px 20px",
  fontSize: "14px",
  borderRadius: "8px",
  [theme.breakpoints.up("laptop")]: {
    borderRadius: "10px",
    fontSize: "18px",
  },
}));
export default OutlinedButton;
