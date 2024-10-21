import { Box as MuiBox } from "@mui/material";
import { styled } from "@mui/material/styles";

const MarginBox = styled(props => <MuiBox {...props} />)(({ theme }) => ({
  [theme.breakpoints.down("laptop")]: {
    paddingInline: theme.spacing(2),
  },

  [theme.breakpoints.up("laptop")]: {
    paddingInline: theme.spacing(10),
  },
  [theme.breakpoints.up("desktop")]: {
    paddingInline: theme.spacing(20),
  },
}));

export default MarginBox;
