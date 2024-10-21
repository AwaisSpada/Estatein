import { Box, Stack, Typography } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { useRef, useState } from "react";
import OutlinedButton from "../../components/OutlinedButton";
import star from "/star.png";
import client1 from "/client1.png";
import client2 from "/client2.png";
import client3 from "/client3.png";
import Sparkle from "../../components/Sparkle";
import Paragraph from "../../components/Paragraph";
import SubSectionHeading from "../../components/SubSectionHeading";

const clientReviews = [
  {
    name: "Wade Warren",
    location: "USA, California",
    review: "Exceptional Service!",
    comment:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    image: client1,
  },
  {
    name: "Emma Thomson",
    location: "USA, Florida",
    review: "Efficient and Reliable",
    comment:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    image: client2,
  },
  {
    name: "John Mans",
    location: "USA, Nevada",
    review: "Trusted Advisors",
    comment:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    image: client3,
  },
];

const Reviews = () => {
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
    <MarginBox sx={{ paddingTop: "2rem" }}>
      <Sparkle />
      <Stack gap={2}>
        <SubSectionHeading>What Our Clients Say</SubSectionHeading>
        <Paragraph>
          Read the success stories and heartfelt testimonials from our valued
          clients. Discover why they chose Estatein for their real estate needs.
        </Paragraph>
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
          {clientReviews.map(clientReview => (
            <SwiperSlide
              key={clientReview.name}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  width: "100%",
                  border: "2px solid",
                  borderColor: "background.paper",
                  borderRadius: 5,
                  p: "30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "auto",
                  maxHeight: "100%",
                }}
              >
                <Stack gap={2}>
                  <Stack gap={1} alignItems="center" direction="row">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </Stack>
                  <Typography variant="h5">{clientReview.review}</Typography>
                  <Typography variant="body2">
                    {clientReview.comment}
                  </Typography>
                  <Stack direction="row" gap={1}>
                    <Box>
                      <img src={clientReview.image} />
                    </Box>
                    <Stack gap={1}>
                      <Typography varaint="body2">
                        {clientReview.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {clientReview.location}
                      </Typography>
                    </Stack>
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
          <Typography>01 of 10</Typography>
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
    </MarginBox>
  );
};

export default Reviews;
