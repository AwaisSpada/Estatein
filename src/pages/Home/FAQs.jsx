import { Stack, Typography } from "@mui/material";
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
import { Card } from "../../components/Paper";
import Sparkle from "../../components/Sparkle";
import SubSectionHeading from "../../components/SubSectionHeading";
import Paragraph from "../../components/Paragraph";
const faqs = [
  {
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
];

const FAQs = () => {
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
    <MarginBox sx={{ paddingBlock: "2rem" }}>
      <Sparkle />
      <Stack gap={2}>
        <SubSectionHeading>Frequently Asked Questions</SubSectionHeading>
        <Paragraph>
          {
            "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          }
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
            height: "100%",
          }}
        >
          {faqs.map(faq => (
            <SwiperSlide
              key={faq.question}
              style={{
                display: "flex",
                height: "100%",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  border: "2px solid",
                  borderColor: "background.paper",
                  backgroundColor: "background.default",
                  padding: "30px",
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "auto",
                  minHeight: "200px",
                }}
              >
                <Stack
                  gap={2}
                  sx={{
                    alignItems: { laptop: "flex-start" },
                    justifyContent: "space-between",
                  }}
                >
                  <Stack gap={2}>
                    <Typography variant="h5">{faq.question}</Typography>
                    <Typography variant="body2">{faq.answer}</Typography>
                  </Stack>
                  <OutlinedButton sx={{ backgroundColor: "background.paper" }}>
                    Read More
                  </OutlinedButton>
                </Stack>
              </Card>
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

export default FAQs;
