import { useTheme, useMediaQuery } from "@mui/material";

export default function useHeroResponsiveTypography() {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("laptop"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("desktop"));

  const getVariant = () => {
    if (isDesktop) return "h2";
    if (isLaptop) return "h3";
    return "h4";
  };

  return getVariant;
}
