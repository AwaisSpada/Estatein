import { Typography, Grid2 } from "@mui/material";

const links1 = [
  {
    name: "Home",
    links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQ's"],
  },
  { name: "Properties", links: ["Portfolio", "Categories"] },
  { name: "Contact Us", links: ["Contact form", "Our Offices"] },
];

const links2 = [
  {
    name: "About Us",
    links: [
      "Our Story",
      "Our Works",
      "How It Works",
      "Our Team",
      "Our Clients",
    ],
  },
  {
    name: "Services",
    links: [
      "Valuation Mastery",
      "Strategic Marketing",
      "Negotiation Wizardry",
      "Closing Success",
      "Property Management",
    ],
  },
];

const FooterLinks = () => {
  return (
    <Grid2
      container
      spacing={4}
      sx={{
        width: { mobile: "100%", laptop: "70%" },
        paddingBlock: { mobile: "3rem", laptop: 0 },
      }}
      columns={5}
    >
      <Grid2 container size={{ mobile: 2.5, laptop: 3 }} columns={3}>
        {links1.map(mainLink => (
          <Grid2 size={{ mobile: 2.5, laptop: 1 }} key={mainLink.name}>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", marginBottom: 1 }}
            >
              {mainLink.name}
            </Typography>
            {mainLink.links.map(link => (
              <Typography
                sx={{ color: "text.primary" }}
                variant="body1"
                key={link}
              >
                {link}
              </Typography>
            ))}
          </Grid2>
        ))}
      </Grid2>

      <Grid2 container size={{ mobile: 2.5, laptop: 2 }} columns={2}>
        {links2.map(mainLink => (
          <Grid2 size={{ mobile: 2.5, laptop: 1 }} key={mainLink.name}>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", marginBottom: 1 }}
            >
              {mainLink.name}
            </Typography>
            {mainLink.links.map(link => (
              <Typography
                sx={{ color: "text.primary" }}
                variant="body1"
                key={link}
              >
                {link}
              </Typography>
            ))}
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
};

export default FooterLinks;
