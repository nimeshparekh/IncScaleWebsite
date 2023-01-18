import Banner from "../components/Banner/Banner";
import Girl from "../components/Girl/Girl";
import Slider from "../components/Slider/Slider";
import Customer from "../components/CustomerStories/Customer";
import Laptop from "../components/Laptop/Laptop";
import Expertise from "../components/Expertise/Expertise";
import Contact from "../components/Contact/Contact";
import Trusted from "../components/Trusted/Trusted";
import footerlogo from "../assets/footerlogo.svg";
import { Box, Button, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Home() {
  // const breakpoints = {
  //   values: {
  //     xs: 0,
  //     sm: 600, // Phone
  //     md: 900, // Tablet/Laptop
  //     lg: 1200, // Desktop
  //     xl: 1536,
  //   },
  // };

  return (
    <>
      <Banner />
      <Girl />
      <Slider />
      <Trusted />
      <Customer />
      <Laptop />
      <Expertise />
      <Contact />
      <Box
        sx={{
          backgroundColor: "#000",
          // height: "300px",
          display: "flex",
          flexDirection: {
            lg: "row",
            md: "row",
            sm: "row",
            xs: "column",
          },
          justifyContent: {
            lg: "space-around",
            md: "space-around",
            sm: "space-around",
            xs: "normal",
          },
          alignItems: {
            lg: "center",
            md: "center",
            sm: "center",
            xs: "center",
          },
        }}
      >
        {/*Logo*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <Box
            sx={{
              marginTop: "40px",
            }}
          >
            <Box
              sx={{ width: "200px", height: "80px" }}
              component="img"
              src={footerlogo}
              alt="logo"
            />
            <Typography
              fontWeight={400}
              fontSize={16}
              lineHeight={"28px"}
              variant="h2"
              color="white"
              sx={{
                textAlign: {
                  xxl: "start",
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "center",
                },
              }}
            >
              +91 96647 05783
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: "20px",
                alignItems: {
                  xxl: "start",
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "center",
                },
                justifyContent: {
                  xxl: "start",
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "center",
                },
              }}
            >
              <FacebookIcon
                sx={{
                  width: "27px",
                  height: "36px",
                  color: "white",
                  marginRight: "20px",
                }}
              />
              <TwitterIcon
                sx={{
                  width: "27px",
                  height: "36px",
                  color: "white",
                  marginRight: "20px",
                }}
              />
              <InstagramIcon
                sx={{ width: "27px", height: "36px", color: "white" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: {
                  xxl: "start",
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "center",
                },
                justifyContent: {
                  xxl: "start",
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "center",
                },
              }}
            >
              <Button
                sx={{
                  marginTop: "20px",
                  borderRadius: 30,
                  borderColor: "white",
                  color: "white",
                }}
                variant="outlined"
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={18}
            lineHeight={"22.5px"}
            variant="h2"
            color="#FF3F39"
            sx={{
              marginTop: {
                lg: "64px",
                md: "64px",
                sm: "64px",
                xs: "40px",
              },
            }}
          >
            Product
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "30px" }}
          >
            LandingPage
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "10px" }}
          >
            Popup Builder
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "10px" }}
          >
            Web-design
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "10px" }}
          >
            Content
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "10px" }}
          >
            Integration
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            fontWeight={700}
            fontSize={18}
            lineHeight={"22.5px"}
            variant="h2"
            color="#FF3F39"
            sx={{ marginTop: "64px" }}
          >
            Resources
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "30px" }}
          >
            Academy
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "10px" }}
          >
            Blog
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "10px" }}
          >
            Themes
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "10px" }}
          >
            Hosting
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "10px" }}
          >
            Developers
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "10px" }}
          >
            Support
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            fontWeight={700}
            fontSize={18}
            lineHeight={"22.5px"}
            variant="h2"
            color="#FF3F39"
            sx={{ marginTop: "64px" }}
          >
            Company
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "30px" }}
          >
            About Us
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "10px" }}
          >
            Careers
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "10px" }}
          >
            FAQs
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{ marginTop: "10px" }}
          >
            Teams
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            lineHeight={"17.5px"}
            variant="h2"
            color="white"
            sx={{
              marginTop: "10px",
              marginBottom: {
                lg: "0px",
                md: "0px",
                sm: "10px",
                xs: "10px",
              },
            }}
          >
            Contact Us
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Home;
