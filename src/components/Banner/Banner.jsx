import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import lines from "../../assets/lines.svg";
import threelines from "../../assets/threelines.svg";
import banner from "../../assets/banner.gif";

function Banner() {
  return (
    // <ThemeProvider theme={theme}>
    <Grid
      container
      mt={"95px"}
      // m={"auto"}
      style={{
        backgroundColor: "rgba(217,217,217,0.15)",
        overflow: "hidden",
      }}
    >
      <Grid item lg={6} md={12} sm={12} xs={12}>
        {/* Typography */}
        <Box
          sx={{
            // backgroundColor: "pink",
            paddingLeft: { md: "0px", lg: "108px", sm: "10px", xs: "10px" },
            paddingRight: { md: "0px", lg: "0px", sm: "10px", xs: "10px" },
            paddingTop: { md: "20px", lg: "70px", sm: "20px", xs: "20px" },
            display: "flex",
            alignItems: {
              md: "center",
              lg: "center",
              sm: "center",
              xs: "center",
            },
            justifyContent: {
              md: "center",
              lg: "left",
              sm: "center",
              xs: "center",
            },
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
              fontSize={{ md: "46px", lg: "46px", sm: "30px", xs: "30px" }}
              lineHeight={{
                md: "57.5px",
                lg: "57.5px",
                sm: "40px",
                xs: "40px",
              }}
              variant="h2"
            >
              Helping Founders To Scale Up World Class Startups From Zero
            </Typography>
          </Box>
        </Box>
        {/* Line Image */}
        <Box
          sx={{
            paddingLeft: { md: "0px", lg: "108px", sm: "0px", xs: "0px" },
            paddingTop: { lg: "20px", md: "20px", sm: "20px", xs: "20px" },
            display: "flex",
            alignItems: {
              md: "center",
              lg: "center",
              sm: "center",
              xs: "center",
            },
            justifyContent: {
              md: "center",
              lg: "left",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Box component="img" src={lines} alt="logo" />
        </Box>
        {/* Typography */}
        <Box
          sx={{
            paddingLeft: { md: "0px", lg: "108px", sm: "10px", xs: "10px" },
            paddingRight: { md: "0px", lg: "0px", sm: "10px", xs: "10px" },
            paddingTop: { md: "20px", lg: "50px", xs: "20px", sm: "20px" },
            display: "flex",
            alignItems: {
              md: "center",
              lg: "center",
              sm: "center",
              xs: "center",
            },
            justifyContent: {
              md: "center",
              lg: "left",
              sm: "center",
              xs: "center",
            },
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
              fontWeight={500}
              fontSize={20}
              lineHeight={"32px"}
              variant="h2"
            >
              You bring the Idea, we help you build it, grow it and finance it
            </Typography>
          </Box>
        </Box>
        {/* Button */}
        <Box
          sx={{
            paddingLeft: { md: "0px", lg: "108px", xs: "0px", sm: "0px" },
            paddingTop: { md: "20px", lg: "70px", xs: "30px", sm: "30px" },
            display: "flex",
            alignItems: {
              md: "center",
              lg: "center",
              sm: "center",
              xs: "center",
            },
            justifyContent: {
              md: "center",
              lg: "left",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Button
            variant="outlined"
            style={{
              // width: { md: "256px", lg: "256px", sm: "150px", xs: "150px" },
              // height: { md: "80px", lg: "80px", sm: "60px", xs: "60px" },
              color: "#FF3F39",
              borderColor: "#FF3F39",
              // marginLeft: "108px",
              // marginTop: "50px",
              fontWeight: "600",
              fontSize: { md: "22px", lg: "22px", sm: "15px", xs: "150px" },
              lineHeight: "27.5px",
              // maxWidth: { md: "256px", lg: "256px", sm: "150px", xs: "150px" },
              // maxHeight: { md: "80px", lg: "80px", sm: "60px", xs: "60px" },
              // minWidth: { md: "256px", lg: "256px", sm: "150px", xs: "150px" },
              // minHeight: { md: "80px", lg: "80px", sm: "60px", xs: "60px" },
              minWidth: "150px",
              minHeight: "60px",
              maxWidth: "256px",
              maxHeight: "80px",
            }}
            href="/"
            // size={"medium"}
          >
            Contact
          </Button>
        </Box>
        {/* Three Line Image */}
        <Box
          sx={{
            // paddingLeft: { md: "0px", lg: "0px", sm: "0px", xs: "0px" },
            paddingTop: { lg: "80px", md: "20px", sm: "20px", xs: "20px" },
            display: { md: "none", lg: "flex", sm: "none", xs: "none" },
            alignItems: {
              md: "center",
              lg: "center",
              sm: "center",
              xs: "center",
            },
            justifyContent: {
              md: "center",
              lg: "left",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Box component="img" src={threelines} alt="logo" />
        </Box>
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <Box
          // width={800}
          // height={600}
          sx={{
            // backgroundColor: "pink",
            paddingLeft: { md: "0px", lg: "108px", sm: "0px", xs: "0px" },
            // paddingTop: { lg: "20px", md: "20px", sm: "20px", xs: "20px" },
            display: "flex",
            alignItems: {
              md: "center",
              lg: "center",
              sm: "center",
              xs: "center",
            },
            justifyContent: {
              md: "center",
              lg: "left",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Box
            sx={{
              width: { md: "498px", lg: "498px", sm: "300px", xs: "200px" },
              height: { md: "498px", lg: "498px", sm: "300px", xs: "200px" },
            }}
            component="img"
            src={banner}
            alt="logo"
          />
        </Box>
      </Grid>
    </Grid>

    // </ThemeProvider>
  );
}

export default Banner;
