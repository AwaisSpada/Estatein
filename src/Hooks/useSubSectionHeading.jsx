import { useTheme, useMediaQuery } from "@mui/material";

const useSubSectionHeading = () => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("laptop"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("desktop"));

  const getVariant = () => {
    if (isLaptop) return "h4";
    else if (isDesktop) return "h3";
    else return "h5";
  };

  return getVariant;
};

export default useSubSectionHeading;
