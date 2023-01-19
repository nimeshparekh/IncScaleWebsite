import { Box, Typography } from "@mui/material";
import blackbanner from "../../assets/blackbanner.svg";
import Card1 from "../../assets/Card 1.png";
import Card2 from "../../assets/Card 2.png";
import Card3 from "../../assets/Card 3.png";
import card1 from "../../assets/card1.gif";
import card2 from "../../assets/card2.gif";
import card3 from "../../assets/card3.gif";
import orangearrow from "../../assets/orangearrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import "../../pages/Slider.css";
import useMediaQuery from "@mui/material/useMediaQuery";

function Slider() {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <Box sx={{ marginTop: "50px" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${blackbanner})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginBottom: "30px",
          alignItems: "center",
        }}
      >
        <Typography
          fontWeight={700}
          fontSize={{
            md: "48px",
            lg: "48px",
            sm: "48px",
            xs: "25px",
          }}
          lineHeight={{
            md: "60px",
            lg: "60px",
            sm: "40px",
            xs: "40px",
          }}
          variant="h2"
          color="white"
          sx={{
            marginTop: {
              md: "55px",
              lg: "55px",
              sm: "100px",
              xs: "40px",
            },
          }}
        >
          Delivering Value Across Your
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              md: "row",
              lg: "row",
              sm: "column",
              xs: "column",
            },
            marginTop: {
              md: "50px",
              lg: "0px",
              sm: "65px",
              xs: "50px",
            },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              marginTop: "73px",
              borderRadius: "10px",
              boxShadow: 3,
              width: "330px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              marginRight: {
                md: "24px",
                lg: "24px",
                sm: "0px",
                xs: "0px",
              },
            }}
          >
            <Box
              style={{
                backgroundImage: `url(${card1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                width: "200px",
                height: "200px",
                borderRadius: "10px",
                marginTop: "24px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "30.94px",
                // paddingBottom: "28.09px",
              }}
            >
              <Box
                style={{
                  backgroundImage: `url(${orangearrow})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center top",
                  width: "34px",
                  height: "45.97px",
                  // marginTop: "73px",
                }}
              />
              <Typography
                sx={{ marginLeft: "20px" }}
                fontWeight={700}
                fontSize={24}
                lineHeight={"32px"}
                variant="h2"
                color="rgba(208, 51, 47, 1)"
              >
                IT Development
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              // width: "330px",
              // height: "266.41px",
              backgroundColor: "white",
              marginTop: "73px",
              borderRadius: "10px",
              boxShadow: 3,
              width: "330px",
              // height: "266.41px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              marginRight: {
                md: "24px",
                lg: "24px",
                sm: "0px",
                xs: "0px",
              },
            }}
          >
            <Box
              style={{
                backgroundImage: `url(${card2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                width: "200px",
                height: "200px",
                borderRadius: "10px",
                marginTop: "24px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "30.94px",
                // paddingBottom: "28.09px",
              }}
            >
              <Box
                style={{
                  backgroundImage: `url(${orangearrow})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center top",
                  width: "34px",
                  height: "45.97px",
                  // marginTop: "73px",
                }}
              />
              <Typography
                sx={{ marginLeft: "20px" }}
                fontWeight={700}
                fontSize={24}
                lineHeight={"32px"}
                variant="h2"
                color="rgba(208, 51, 47, 1)"
              >
                Digital Marketing
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              // width: "330px",
              // height: "266.41px",
              backgroundColor: "white",
              marginTop: "73px",
              borderRadius: "10px",
              boxShadow: 3,
              width: "330px",
              // height: "266.41px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              marginRight: {
                md: "24px",
                lg: "24px",
                sm: "0px",
                xs: "0px",
              },
            }}
          >
            <Box
              style={{
                backgroundImage: `url(${card3})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                width: "200px",
                height: "200px",
                borderRadius: "10px",
                marginTop: "24px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "30.94px",
                // paddingBottom: "28.09px",
              }}
            >
              <Box
                style={{
                  backgroundImage: `url(${orangearrow})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center top",
                  width: "34px",
                  height: "45.97px",
                  // marginTop: "73px",
                }}
              />
              <Typography
                sx={{ marginLeft: "20px" }}
                fontWeight={700}
                fontSize={24}
                lineHeight={"32px"}
                variant="h2"
                color="rgba(208, 51, 47, 1)"
              >
                Fund Raising
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          // container
          className="s-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            width: "100%",
          }}
        >
          <Swiper
            className="mySwiper"
            modules={[Pagination, Navigation]}
            navigation
            loopFillGroupWithBlank={true}
            pagination={{ clickable: true }}
            slidesPerView={matches === false ? 1 : 3}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <Box
                height={{ md: "489px", lg: "489px", sm: "489px", xs: "400px" }}
                width={{ md: "364px", lg: "364px", sm: "364px", xs: "260px" }}
                sx={{
                  marginTop: { md: "0px", lg: "0px", sm: "0px", xs: "50px" },
                  paddingRight: "47.77px",
                }}
                component="img"
                src={Card1}
                alt="logo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Box
                height={{ md: "489px", lg: "489px", sm: "489px", xs: "400px" }}
                width={{ md: "364px", lg: "364px", sm: "364px", xs: "260px" }}
                sx={{
                  marginTop: { md: "0px", lg: "0px", sm: "0px", xs: "50px" },
                  paddingRight: "47.77px",
                }}
                component="img"
                src={Card2}
                alt="logo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Box
                height={{ md: "489px", lg: "489px", sm: "489px", xs: "400px" }}
                width={{ md: "364px", lg: "364px", sm: "364px", xs: "260px" }}
                sx={{
                  marginTop: { md: "0px", lg: "0px", sm: "0px", xs: "50px" },
                  paddingRight: "47.77px",
                }}
                component="img"
                src={Card3}
                alt="logo"
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}

export default Slider;
