import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const Button = styled(props => (
  <MuiButton variant="contained" disableRipple {...props} />
))(({ theme }) => ({
  fontWeight: 500,
  padding: "14px 20px",
  fontSize: "14px",
  borderRadius: "8px",
  textTransform: "capitalize",
  [theme.breakpoints.up("laptop")]: {
    borderRadius: "10px",
    fontSize: "18px",
  },
}));
export default Button;
