import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import useHeroResponsiveTypography from "../Hooks/useHeroResponsiveTypography";

const HeroSectionHeading = ({ children }) => {
  const getVariant = useHeroResponsiveTypography(); // Call the hook to get the typography variant

  return <Typography variant={getVariant()}>{children}</Typography>;
};

HeroSectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroSectionHeading;
