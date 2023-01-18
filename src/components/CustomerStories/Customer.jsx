import { Avatar, Box, Grid, Typography } from "@mui/material";
import halfcircle from "../../assets/halfcircle.svg";
import righttriplearrow from "../../assets/righttriplearrow.svg";
import stars from "../../assets/stars.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import lines from "../../assets/lines.svg";
import earth from "../../assets/earth.svg";
import hand from "../../assets/hand.svg";
import handtick from "../../assets/handtick.svg";
import bank from "../../assets/bank.svg";

import "../../pages/Slider.css";

function Customer() {
  return (
    <Box
      sx={{
        // backgroundColor: "pink",
        marginBottom: "50px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: {
            md: "baseline",
            lg: "baseline",
            sm: "center",
            xs: "center",
          },
          justifyContent: {
            md: "baseline",
            lg: "baseline",
            sm: "center",
            xs: "center",
          },
        }}
      >
        <Box
          sx={{
            display: {
              md: "flex",
              lg: "flex",
              sm: "flex",
              xs: "none",
            },
            marginLeft: { md: "50px", lg: "50px", sm: "10px", xs: "10px" },
          }}
        >
          <Box
            style={{
              backgroundImage: `url(${halfcircle})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "63.47px",
              width: "63.47px",
              marginTop: "65.35px",
            }}
          />
        </Box>

        {/*Typography*/}
        <Box
          width={{ lg: "428px" }}
          sx={{
            marginTop: {
              md: "100px",
              lg: "100px",
              sm: "50px",
              xs: "50px",
            },
            display: "flex",
          }}
        >
          <Box
            sx={{
              textAlign: {
                md: "center",
                lg: "start",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Typography
              fontWeight={700}
              fontSize={{
                md: "48px",
                lg: "48px",
                sm: "40px",
                xs: "40px",
              }}
              lineHeight={{
                md: "58px",
                lg: "58px",
                sm: "50px",
                xs: "50px",
              }}
              variant="h2"
            >
              Customer Stories
            </Typography>
          </Box>
        </Box>
        {/*Arrow*/}
        <Box
          sx={{
            display: {
              lg: "flex",
              md: "flex",
              sm: "none",
              xs: "none",
            },
            flex: "auto",
            justifyContent: "flex-end",
            marginTop: "110px",
          }}
        >
          <Box
            style={{
              backgroundImage: `url(${righttriplearrow})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              // backgroundPosition: "end top",
              height: "63.47px",
              width: "195px",
            }}
          />
        </Box>
      </Box>
      {/*Slider */}
      <Box className="hello-container">
        <Swiper
          style={{ "--swiper-pagination-bullet-size": "16px" }}
          className="test"
          modules={[Pagination, Navigation]}
          // navigation
          loopFillGroupWithBlank={true}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // slidesPerView={matches === false ? 1 : 3}
          slidesPerView={1}
          centeredSlides={true}
          // spaceBetween={20}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
        >
          <SwiperSlide>
            <Box
              sx={{
                width: "768px",
                height: "300px",
                backgroundColor: "white",
                marginBottom: "20px",
                marginLeft: "20px",
                borderRadius: "30px",
                // alignItems: "center",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                // justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "630px",
                  height: "83px",
                  marginTop: "52px",
                  marginLeft: "72px",
                }}
              >
                <Typography
                  fontWeight={400}
                  fontSize={16}
                  lineHeight={"28px"}
                  variant="h2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Commodo amet posuere porta vitae mi accumsan. Ultricies
                  mauris, habitasse nec mauris sagittis imperdiet lobortis
                  porttitor lorem ipsim.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "41px",
                  marginLeft: "72px",
                  alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                <Avatar alt="Remy Sharp">I</Avatar>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "30px",
                  }}
                >
                  <Typography
                    fontWeight={500}
                    fontSize={20}
                    lineHeight={"28px"}
                    variant="h2"
                    color="#FF3F39"
                  >
                    Hello World
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Typography
                      fontWeight={400}
                      fontSize={16}
                      lineHeight={"28px"}
                      variant="h2"
                      color="rgba(255,63,57,0.7)"
                    >
                      Developer
                    </Typography>
                    <Typography
                      sx={{ marginLeft: "50px" }}
                      fontWeight={400}
                      fontSize={18}
                      lineHeight={"32px"}
                      variant="h2"
                      color="#FF3F39"
                    >
                      4.5
                    </Typography>
                    <Box
                      sx={{ marginLeft: "20px" }}
                      component="img"
                      src={stars}
                      alt="logo"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "768px",
                height: "300px",
                backgroundColor: "white",
                marginBottom: "20px",
                marginLeft: "20px",
                borderRadius: "30px",
                // alignItems: "center",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                // justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "630px",
                  height: "83px",
                  marginTop: "52px",
                  marginLeft: "72px",
                }}
              >
                <Typography
                  fontWeight={400}
                  fontSize={16}
                  lineHeight={"28px"}
                  variant="h2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Commodo amet posuere porta vitae mi accumsan. Ultricies
                  mauris, habitasse nec mauris sagittis imperdiet lobortis
                  porttitor lorem ipsim.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "41px",
                  marginLeft: "72px",
                  alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                <Avatar alt="Remy Sharp">I</Avatar>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "30px",
                  }}
                >
                  <Typography
                    fontWeight={500}
                    fontSize={20}
                    lineHeight={"28px"}
                    variant="h2"
                    color="#FF3F39"
                  >
                    Hello World
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Typography
                      fontWeight={400}
                      fontSize={16}
                      lineHeight={"28px"}
                      variant="h2"
                      color="rgba(255,63,57,0.7)"
                    >
                      Developer
                    </Typography>
                    <Typography
                      sx={{ marginLeft: "50px" }}
                      fontWeight={400}
                      fontSize={18}
                      lineHeight={"32px"}
                      variant="h2"
                      color="#FF3F39"
                    >
                      4.5
                    </Typography>
                    <Box
                      sx={{ marginLeft: "20px" }}
                      component="img"
                      src={stars}
                      alt="logo"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "768px",
                height: "300px",
                backgroundColor: "white",
                marginBottom: "20px",
                marginLeft: "20px",
                borderRadius: "30px",
                // alignItems: "center",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                // justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "630px",
                  height: "83px",
                  marginTop: "52px",
                  marginLeft: "72px",
                }}
              >
                <Typography
                  fontWeight={400}
                  fontSize={16}
                  lineHeight={"28px"}
                  variant="h2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Commodo amet posuere porta vitae mi accumsan. Ultricies
                  mauris, habitasse nec mauris sagittis imperdiet lobortis
                  porttitor lorem ipsim.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "41px",
                  marginLeft: "72px",
                  alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                <Avatar alt="Remy Sharp">I</Avatar>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "30px",
                  }}
                >
                  <Typography
                    fontWeight={500}
                    fontSize={20}
                    lineHeight={"28px"}
                    variant="h2"
                    color="#FF3F39"
                  >
                    Hello World
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Typography
                      fontWeight={400}
                      fontSize={16}
                      lineHeight={"28px"}
                      variant="h2"
                      color="rgba(255,63,57,0.7)"
                    >
                      Developer
                    </Typography>
                    <Typography
                      sx={{ marginLeft: "50px" }}
                      fontWeight={400}
                      fontSize={18}
                      lineHeight={"32px"}
                      variant="h2"
                      color="#FF3F39"
                    >
                      4.5
                    </Typography>
                    <Box
                      sx={{ marginLeft: "20px" }}
                      component="img"
                      src={stars}
                      alt="logo"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      {/*Why Us*/}
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "65px",
          flexDirection: "column",
        }}
      >
        <Typography
          fontWeight={700}
          fontSize={{
            md: "48px",
            lg: "48px",
            sm: "40px",
            xs: "40px",
          }}
          lineHeight={{
            md: "60px",
            lg: "60px",
            sm: "50px",
            xs: "50px",
          }}
          variant="h2"
        >
          Why Us
        </Typography>
        <Box
          sx={{ width: "213px", marginTop: "5px" }}
          component="img"
          src={lines}
          alt="logo"
        />
        <Grid
          container
          direction={"row"}
          spacing={10}
          // mt={"1px"}
          pt={"20px"}
          paddingLeft={"20px"}
          paddingRight={"20px"}
          alignItems={"center"}
          justifyContent={"center"}
          // style={{ backgroundColor: "rgba(217,217,217,0.15)" }}
        >
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  width: "146.23px",
                  height: "146.23px",
                  marginTop: "5px",
                }}
                component="img"
                src={earth}
                alt="logo"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{ marginLeft: "15px" }}
                  fontWeight={700}
                  fontSize={48}
                  lineHeight={"104px"}
                  variant="h2"
                >
                  3
                </Typography>
                <Typography
                  // sx={{ marginLeft: "15px" }}
                  fontWeight={400}
                  fontSize={20}
                  // lineHeight={"104px"}
                  variant="h2"
                >
                  Country presences
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  width: "146.23px",
                  height: "146.23px",
                  marginTop: "5px",
                }}
                component="img"
                src={hand}
                alt="logo"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{ marginLeft: "15px" }}
                  fontWeight={700}
                  fontSize={48}
                  lineHeight={"104px"}
                  variant="h2"
                >
                  25+
                </Typography>
                <Typography
                  // sx={{ marginLeft: "15px" }}
                  fontWeight={400}
                  fontSize={20}
                  // lineHeight={"104px"}
                  variant="h2"
                >
                  IT Product Delivered
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  width: "146.23px",
                  height: "146.23px",
                  marginTop: "5px",
                }}
                component="img"
                src={earth}
                alt="logo"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{ marginLeft: "15px" }}
                  fontWeight={700}
                  fontSize={48}
                  lineHeight={"104px"}
                  variant="h2"
                >
                  107
                </Typography>
                <Typography
                  // sx={{ marginLeft: "15px" }}
                  fontWeight={400}
                  fontSize={20}
                  // lineHeight={"104px"}
                  variant="h2"
                >
                  Funding Raised for start-ups
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  width: "146.23px",
                  height: "146.23px",
                  marginTop: "5px",
                }}
                component="img"
                src={handtick}
                alt="logo"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{ marginLeft: "15px" }}
                  fontWeight={700}
                  fontSize={48}
                  lineHeight={"104px"}
                  variant="h2"
                >
                  100M+
                </Typography>
                <Typography
                  // sx={{ marginLeft: "15px" }}
                  fontWeight={400}
                  fontSize={20}
                  // lineHeight={"104px"}
                  variant="h2"
                >
                  Completed Work
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  width: "146.23px",
                  height: "146.23px",
                  marginTop: "5px",
                }}
                component="img"
                src={bank}
                alt="logo"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{ marginLeft: "15px" }}
                  fontWeight={700}
                  fontSize={48}
                  lineHeight={"104px"}
                  variant="h2"
                >
                  300M+
                </Typography>
                <Typography
                  // sx={{ marginLeft: "15px" }}
                  fontWeight={400}
                  fontSize={20}
                  // lineHeight={"104px"}
                  variant="h2"
                >
                  Funding via Loans for Start-ups & MSME’s
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Customer;
