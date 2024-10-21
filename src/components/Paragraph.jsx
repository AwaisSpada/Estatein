import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const Paragraph = ({ children }) => {
  return (
    <Typography variant={"body1"} color="text.secondary">
      {children}
    </Typography>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
