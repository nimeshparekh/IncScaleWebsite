import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zl008gn",
        "template_h3yoy5l",
        form.current,
        "gokRuVgKHhXgqp-F5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <Grid
        direction="row"
        spacing={0}
        container
        mt={"100px"}
        sx={{ marginBottom: "20px", overflow: "hidden" }}
        columnSpacing={0}
        rowSpacing={0}
        // style={{ backgroundColor: "rgba(217,217,217,0.15)" }}
      >
        <Grid
          item
          lg={6}
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {
              lg: "baseline",
              md: "baseline",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Box
            sx={{
              width: {
                lg: "498px",
                md: "498px",
                sm: "90%",
                xs: "90%",
              },
              height: "550px",
              backgroundColor: "rgba(52, 52, 52, 1)",
              marginLeft: { lg: "128px", md: "128px", sm: "0px", xs: "0px" },
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                width: "402px",
                marginLeft: {
                  lg: "57px",
                  md: "57px",
                  sm: "100px",
                  xs: "100px",
                },
                marginTop: "81px",
                alignItems: "center",
              }}
            >
              <Typography
                fontWeight={700}
                fontSize={18}
                lineHeight={"22.5px"}
                variant="h2"
                color="white"
              >
                Contact Information
              </Typography>
            </Box>
            <Box
              sx={{
                width: "402px",
                marginLeft: {
                  lg: "50px",
                  md: "50px",
                  sm: "90px",
                  xs: "90px",
                },
                marginTop: "45px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <LocationOnIcon
                sx={{ width: "27px", height: "36px", color: "white" }}
              />
              <Typography
                fontWeight={500}
                fontSize={14}
                lineHeight={"17.5px"}
                variant="h2"
                color="white"
                sx={{ marginLeft: "30px" }}
              >
                Jagatpur Road, Gota, Ahmedabad
              </Typography>
            </Box>
            <Box
              sx={{
                width: "402px",
                marginLeft: {
                  lg: "50px",
                  md: "50px",
                  sm: "90px",
                  xs: "90px",
                },
                marginTop: "45px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <EmailIcon
                sx={{ width: "27px", height: "36px", color: "white" }}
              />
              <Typography
                fontWeight={500}
                fontSize={14}
                lineHeight={"17.5px"}
                variant="h2"
                color="white"
                sx={{ marginLeft: "30px" }}
              >
                info@incscale.in
              </Typography>
            </Box>
            <Box
              sx={{
                width: "402px",
                marginLeft: {
                  lg: "50px",
                  md: "50px",
                  sm: "90px",
                  xs: "90px",
                },
                marginTop: "45px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <PhoneIcon
                sx={{ width: "27px", height: "36px", color: "white" }}
              />
              <Typography
                fontWeight={500}
                fontSize={14}
                lineHeight={"17.5px"}
                variant="h2"
                color="white"
                sx={{ marginLeft: "30px" }}
              >
                +91 96647 05783
              </Typography>
            </Box>
            <Box
              sx={{
                width: "402px",
                marginLeft: {
                  lg: "50px",
                  md: "50px",
                  sm: "90px",
                  xs: "90px",
                },
                marginTop: "45px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <FacebookIcon
                sx={{ width: "27px", height: "36px", color: "white" }}
              />
              <TwitterIcon
                sx={{
                  width: "27px",
                  height: "36px",
                  color: "white",
                  marginLeft: "27px",
                }}
              />
              <InstagramIcon
                sx={{
                  width: "27px",
                  height: "36px",
                  color: "white",
                  marginLeft: "27px",
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {
              lg: "baseline",
              md: "baseline",
              sm: "center",
              xs: "center",
            },
            marginLeft: {
              lg: "-48px",
              md: "0px",
              sm: "0px",
              xs: "0px",
            },
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(255, 237, 237, 0.9)",
              width: {
                lg: "500px",
                md: "500px",
                sm: "90%",
                xs: "90%",
              },
              // height: "400px",
              marginTop: "36px",
              paddingBottom: "36px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: "104px",
                marginLeft: "34px",
              }}
            >
              <Typography
                fontWeight={700}
                fontSize={24}
                lineHeight={"30px"}
                variant="h2"
              >
                Send a
              </Typography>
              <Typography
                sx={{ marginLeft: "9px" }}
                fontWeight={700}
                fontSize={24}
                lineHeight={"30px"}
                variant="h2"
                color="rgba(255, 63, 57, 1)"
              >
                Message
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "32px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  // marginTop: "32px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    marginLeft: "34px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    fontWeight={600}
                    fontSize={14}
                    lineHeight={"17.5px"}
                    variant="h2"
                  >
                    Your name
                  </Typography>
                  <FormControl
                    variant="standard"
                    // sx={{ m: 1, mt: 3, width: "25ch" }}
                  >
                    <Input
                      name="user_name"
                      // id="standard-adornment-weight"
                      aria-describedby="standard-weight-helper-text"
                      placeholder="Enter your name"
                      inputProps={{ style: { fontSize: 15 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 15 } }}
                      // color="rgba(54, 54, 54, 1)"
                      // sx={{ borderColor: "rgba(54, 54, 54, 1)" }}
                      // className={classes.root}
                    />
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    marginLeft: "34px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    fontWeight={600}
                    fontSize={14}
                    lineHeight={"17.5px"}
                    variant="h2"
                  >
                    Mobile Number
                  </Typography>
                  <FormControl variant="standard">
                    <Input
                      name="mobile_number"
                      aria-describedby="standard-weight-helper-text"
                      placeholder="Enter mobile number"
                      inputProps={{ style: { fontSize: 15 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 15 } }}
                    />
                  </FormControl>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "32px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    marginLeft: "34px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    fontWeight={600}
                    fontSize={14}
                    lineHeight={"17.5px"}
                    variant="h2"
                  >
                    Services
                  </Typography>
                  <FormControl
                    variant="standard"
                    // sx={{ m: 1, mt: 3, width: "25ch" }}
                  >
                    <Input
                      name="services"
                      // id="standard-adornment-weight"
                      aria-describedby="standard-weight-helper-text"
                      placeholder="Enter your services"
                      inputProps={{ style: { fontSize: 15 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 15 } }}
                      // color="rgba(54, 54, 54, 1)"
                      // sx={{ borderColor: "rgba(54, 54, 54, 1)" }}
                      // className={classes.root}
                    />
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    marginLeft: "34px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    fontWeight={600}
                    fontSize={14}
                    lineHeight={"17.5px"}
                    variant="h2"
                  >
                    Email Address
                  </Typography>
                  <FormControl
                    variant="standard"
                    // sx={{ m: 1, mt: 3, width: "25ch" }}
                  >
                    <Input
                      name="user_email"
                      // id="standard-adornment-weight"
                      aria-describedby="standard-weight-helper-text"
                      placeholder="Enter email-address"
                      inputProps={{ style: { fontSize: 15 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 15 } }}
                      // color="rgba(54, 54, 54, 1)"
                      // sx={{ borderColor: "rgba(54, 54, 54, 1)" }}
                      // className={classes.root}
                    />
                  </FormControl>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "32px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    marginLeft: "34px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    fontWeight={600}
                    fontSize={14}
                    lineHeight={"17.5px"}
                    variant="h2"
                  >
                    Write your message here...
                  </Typography>
                  <FormControl
                    variant="standard"
                    sx={{
                      width: {
                        lg: "375px",
                        md: "375px",
                        sm: "300px",
                        xs: "300px",
                      },
                    }}
                  >
                    <Input
                      name="message"
                      // id="standard-adornment-weight"
                      aria-describedby="standard-weight-helper-text"
                      placeholder="Write your message"
                      inputProps={{ style: { fontSize: 15 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 15 } }}
                      // color="rgba(54, 54, 54, 1)"
                      // sx={{ borderColor: "rgba(54, 54, 54, 1)" }}
                      // className={classes.root}
                    />
                  </FormControl>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "32px",
                  display: "flex",
                  flexDirection: "column",
                  width: "158px",
                  height: "40px",
                  marginLeft: "32px",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#FF3F39",
                    // padding: "18px 36px",
                    // fontSize: "18px",
                  }}
                  onClick={sendEmail}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}

export default Contact;
