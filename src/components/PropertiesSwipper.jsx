import { Box, Stack, Typography } from "@mui/material";
import Button from "../components/Button";
import property1 from "/property1.png";
import property2 from "/property2.png";
import property3 from "/property3.png";
import bedroomIcon from "/bedroomIcon.svg";
import bathroomIcon from "/bathroomIcon.svg";
import villaIcon from "/VillaIcon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import OutlinedButton from "../components/OutlinedButton";

const RoomDetailsIconComponent = props => {
  return (
    <Stack
      direction="row"
      gap={1}
      sx={{
        borderRadius: "999px",
        py: 1,
        px: 2,
        backgroundColor: "background.paper",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "20px", height: "20px" }}>
        <img src={props.image} width="100%" height="100%" />
      </Box>
      <Typography variant="body2">{`${props.count} ${props.name}`}</Typography>
    </Stack>
  );
};

RoomDetailsIconComponent.propTypes = {
  image: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const propertiesContent = [
  {
    name: "Seaside Serenity Villa",
    image: property1,
    info: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    bedrooms: "4",
    bathrooms: "3",
    price: "550,000",
  },
  {
    name: "Metropolitan Haven",
    image: property2,
    info: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
    bedrooms: "2",
    bathrooms: "2",
    price: "550,000",
  },
  {
    name: "Rustic Retreat Cottage",
    image: property3,
    info: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    bedrooms: "3",
    bathrooms: "3",
    price: "550,000",
  },
];

const PropertiesSwipper = () => {
  SwiperCore.use([Navigation]); // Enable navigation and pagination
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <Stack gap={2}>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        onSwiper={swiper => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={swiper => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          1440: {
            slidesPerView: 3,
          },
        }}
        style={{
          width: "100%",
        }}
      >
        {propertiesContent.map(property => (
          <SwiperSlide
            key={property.name}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: "100%",
                border: "2px solid",
                borderColor: "background.paper",
                borderRadius: 5,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "auto",
                maxHeight: "100%",
              }}
            >
              <Stack gap={3}>
                <Box>
                  <img src={property.image} width="100%" alt={property.name} />
                </Box>
                <Typography variant="h5">{property.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {property.info}
                </Typography>
                <Stack direction="row" gap={1} sx={{ flexWrap: "wrap" }}>
                  <RoomDetailsIconComponent
                    image={bedroomIcon}
                    count={property.bedrooms}
                    name="Bedrooms"
                  />
                  <RoomDetailsIconComponent
                    image={bathroomIcon}
                    count={property.bathrooms}
                    name="Bathrooms"
                  />
                  <RoomDetailsIconComponent
                    image={villaIcon}
                    count=""
                    name="Villa"
                  />
                </Stack>
                <Stack direction="row" gap={4} sx={{ alignItems: "center" }}>
                  <Typography variant="h5">${property.price}</Typography>
                  <Button sx={{ flex: 1, fontSize: "14px" }}>
                    View Property Details
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography>01 of 60</Typography>
        <Stack direction="row" gap={2}>
          <OutlinedButton
            sx={{
              borderRadius: { mobile: "50%", laptop: "50%" },
              p: { mobile: 0, laptop: 0 },
              width: "44px",
              height: "44px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "auto",
            }}
            disabled={isBeginning}
            onClick={handlePrev}
          >
            <ArrowBackSharpIcon />
          </OutlinedButton>
          <OutlinedButton
            disabled={isEnd}
            onClick={handleNext}
            sx={{
              borderRadius: { mobile: "50%", laptop: "50%" },
              p: { mobile: 0, laptop: 0 },
              width: "44px",
              height: "44px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "auto",
            }}
          >
            <ArrowForwardSharpIcon width="100%" height="100%" />
          </OutlinedButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PropertiesSwipper;
