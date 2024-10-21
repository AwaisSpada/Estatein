import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import useSubSectionHeading from "../Hooks/useSubSectionHeading";

const SubSectionHeading = ({ children }) => {
  const getVariant = useSubSectionHeading();

  return <Typography variant={getVariant()}>{children}</Typography>;
};

SubSectionHeading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubSectionHeading;
