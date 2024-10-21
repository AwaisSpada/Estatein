import { Divider, Stack, Typography } from "@mui/material";
import MarginBox from "../../components/MarginedBox";
import Sparkle from "../../components/Sparkle";
import SubSectionHeading from "../../components/SubSectionHeading";
import Paragraph from "../../components/Paragraph";
import OutlinedButton from "../../components/OutlinedButton";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";

const clients = [
  {
    name: "ABC Corporation",
    since: "2018",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    review:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    name: "GreenTech Enterprises",
    since: "2019",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    review:
      "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
];

const Clients = () => {
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
    <MarginBox sx={{ pt: 4 }}>
      <Sparkle />
      <Stack gap={2}>
        <SubSectionHeading>Our Valued Clients</SubSectionHeading>
        <Paragraph>
          {
            "At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
          }
        </Paragraph>
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
                slidesPerView: 2,
              },
            }}
            style={{
              width: "100%",
            }}
          >
            {clients.map(client => (
              <SwiperSlide
                key={client.name}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Stack
                  gap={2}
                  sx={{
                    border: "8px solid",
                    borderColor: "background.paper",
                    borderRadius: 3,
                    p: 3,
                  }}
                >
                  <Stack
                    sx={{ flexDirection: { mobile: "column", laptop: "row" } }}
                    justifyContent="space-between"
                    gap={1}
                  >
                    <Stack>
                      <Paragraph>Since {client.since}</Paragraph>
                      <Typography variant="h5">{client.name}</Typography>
                    </Stack>
                    <OutlinedButton
                      sx={{ backgroundColor: "background.paper" }}
                    >
                      Visit Website
                    </OutlinedButton>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    divider={<Divider orientation="vertical" />}
                    gap={2}
                  >
                    <Stack flex={1}>
                      <Paragraph>Domain</Paragraph>
                      <Typography>{client.domain}</Typography>
                    </Stack>
                    <Stack flex={1}>
                      <Paragraph>Category</Paragraph>
                      <Typography>{client.category}</Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: "1px solid",
                      borderColor: "background.paper",
                    }}
                  >
                    <Paragraph>What They Said 🤗</Paragraph>
                    <Typography>{client.review}</Typography>
                  </Stack>
                </Stack>
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
      </Stack>
    </MarginBox>
  );
};

export default Clients;
