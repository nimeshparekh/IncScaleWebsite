import { Box, Typography } from "@mui/material";
import React from "react";
import leftgirl from "../../assets/leftgirl.png";
import leftarrow from "../../assets/leftarrow.svg";
import rightgirl from "../../assets/rightgirl.png";
import rightarrow from "../../assets/rightarrow.svg";
import backgroundImage from "../../assets/background.png";
import hireLine from "../../assets/hireLine.svg";

function Girl() {
  return (
    <Box
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        // height: "200vh",
        overflow: "hidden",
      }}
    >
      {/* Typography */}
      <Box
        width={{ lg: "690px" }}
        sx={{
          // backgroundColor: "pink",
          paddingLeft: { md: "0px", lg: "108px", sm: "10px", xs: "10px" },
          paddingRight: { md: "0px", lg: "108px", sm: "10px", xs: "10px" },
          paddingTop: { md: "50px", lg: "70px", sm: "50px", xs: "50px" },
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
            fontSize={{
              md: "48px",
              lg: "48px",
              sm: "30px",
              xs: "30px",
            }}
            lineHeight={{
              md: "58px",
              lg: "58px",
              sm: "40px",
              xs: "40px",
            }}
            variant="h2"
          >
            Are You A Startup, Enterprise, Agency Or A Freelancer ?
          </Typography>
        </Box>
      </Box>
      {/* Typography */}
      <Box
        sx={{
          // backgroundColor: "pink",
          paddingLeft: { md: "0px", lg: "108px", sm: "10px", xs: "10px" },
          paddingRight: { md: "0px", lg: "108px", sm: "10px", xs: "10px" },
          paddingTop: { md: "40px", lg: "40px", sm: "30px", xs: "30px" },
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
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center",
            textAlign: {
              md: "center",
              lg: "start",
              sm: "center",
              xs: "center",
            },
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
          <Typography
            fontWeight={700}
            fontSize={{
              md: "40px",
              lg: "40px",
              sm: "35px",
              xs: "35px",
            }}
            lineHeight={"34px"}
            variant="h2"
            color="rgba(255, 63, 57, 1)"
          >
            Hire Us
          </Typography>
          <Box
            sx={{
              display: { md: "none", lg: "flex", sm: "none", xs: "none" },
              marginLeft: {
                md: "30px",
                lg: "30px",
                sm: "30px",
                xs: "30px",
              },
            }}
            component="img"
            src={hireLine}
            alt="logo"
          />
        </Box>
      </Box>
      {/* First Card */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            md: "column",
            lg: "row",
            sm: "column",
            xs: "column",
          },
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
          height={{ md: "344px", lg: "344px", sm: "344px", xs: "344px" }}
          width={{ md: "262px", lg: "262px", sm: "262px", xs: "262px" }}
          sx={{
            marginTop: { md: "73.69px", lg: "73.69px", sm: "50px", xs: "50px" },
            display: { md: "flex", lg: "flex", sm: "none", xs: "none" },
          }}
          component="img"
          src={leftgirl}
          alt="logo"
        />
        <Box
          height={{ md: "323px", lg: "323px", sm: "323px", xs: "323px" }}
          width={{ md: "625px", lg: "625px", sm: "95%", xs: "95%" }}
          sx={{
            display: "flex",
            marginTop: { md: "96.29px", lg: "96.29px", sm: "40px", xs: "40px" },
            backgroundColor: "pink",
            border: 1.5,
            borderColor: "rgba(255, 63, 57, 1)",
            alignItems: {
              md: "center",
              lg: "center",
              sm: "center",
              xs: "center",
            },
            justifyContent: {
              md: "center",
              lg: "center",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              alignItems: {
                md: "center",
                lg: "center",
                sm: "center",
                xs: "center",
              },
              justifyContent: {
                md: "center",
                lg: "center",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Box
              sx={{
                paddingRight: {
                  md: "48px",
                  lg: "48px",
                  sm: "30px",
                  xs: "30px",
                },
              }}
              component="img"
              src={leftarrow}
              alt="logo"
            />
            <Typography
              fontWeight={600}
              fontSize={{
                md: "32px",
                lg: "32px",
                sm: "25px",
                xs: "25px",
              }}
              lineHeight={{
                md: "42px",
                lg: "42px",
                sm: "35px",
                xs: "35px",
              }}
              variant="h2"
            >
              To develop stable and scalable technology & design products. We
              approach the work with lean and agile methodologies!
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Second Card */}
      <Box
        sx={{
          display: "flex",
          marginLeft: {
            md: "580",
            lg: "460px",
            sm: "0px",
            xs: "0px",
          },
          flexDirection: {
            md: "column",
            lg: "row",
            sm: "column",
            xs: "column",
          },
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
          height={{ md: "344px", lg: "344px", sm: "344px", xs: "344px" }}
          width={{ md: "262px", lg: "262px", sm: "262px", xs: "262px" }}
          sx={{
            marginTop: { md: "73.69px", lg: "73.69px", sm: "50px", xs: "50px" },
            display: { md: "none", lg: "none", sm: "none", xs: "none" },
          }}
          component="img"
          src={rightgirl}
          alt="logo"
        />
        <Box
          height={{ md: "323px", lg: "323px", sm: "323px", xs: "323px" }}
          width={{ md: "625px", lg: "625px", sm: "95%", xs: "95%" }}
          sx={{
            display: "flex",
            marginTop: { md: "96.29px", lg: "96.29px", sm: "40px", xs: "40px" },
            backgroundColor: "pink",
            border: 1.5,
            borderColor: "rgba(255, 63, 57, 1)",
            alignItems: {
              md: "center",
              lg: "center",
              sm: "center",
              xs: "center",
            },
            justifyContent: {
              md: "center",
              lg: "center",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              alignItems: {
                md: "center",
                lg: "center",
                sm: "center",
                xs: "center",
              },
              justifyContent: {
                md: "center",
                lg: "center",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Box
              sx={{
                paddingRight: {
                  md: "48px",
                  lg: "48px",
                  sm: "30px",
                  xs: "30px",
                },
              }}
              component="img"
              src={rightarrow}
              alt="logo"
            />
            <Typography
              fontWeight={600}
              fontSize={{
                md: "32px",
                lg: "32px",
                sm: "25px",
                xs: "25px",
              }}
              lineHeight={{
                md: "42px",
                lg: "42px",
                sm: "35px",
                xs: "35px",
              }}
              variant="h2"
            >
              To help you in preparing your fund raising documents.
            </Typography>
          </Box>
        </Box>
        <Box
          height={{ md: "344px", lg: "344px", sm: "344px", xs: "344px" }}
          width={{ md: "262px", lg: "262px", sm: "262px", xs: "262px" }}
          sx={{
            marginTop: { md: "73.69px", lg: "73.69px", sm: "50px", xs: "50px" },
            display: { md: "flex", lg: "flex", sm: "none", xs: "none" },
          }}
          component="img"
          src={rightgirl}
          alt="logo"
        />
      </Box>
      {/* <Box
        sx={{
          mb: "100px",
          display: {
            md: "none",
            lg: "flex",
            sm: "none",
            xs: "none",
          },
          flexDirection: {
            md: "column",
            lg: "row",
            sm: "column",
            xs: "column",
          },
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
          height={{ md: "323px", lg: "323px", sm: "323px", xs: "323px" }}
          width={{ md: "625px", lg: "625px", sm: "625px", xs: "625px" }}
          sx={{
            display: "flex",
            marginTop: "96.29px",
            marginLeft: "580px",
            backgroundColor: "pink",
            border: 1.5,
            borderColor: "rgba(255, 63, 57, 1)",
            alignItems: {
              md: "center",
              lg: "center",
              sm: "center",
              xs: "center",
            },
            justifyContent: {
              md: "center",
              lg: "center",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              alignItems: {
                md: "center",
                lg: "center",
                sm: "center",
                xs: "center",
              },
              justifyContent: {
                md: "center",
                lg: "center",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Box
              // height={{ md: "344px", lg: "344px", sm: "344px", xs: "344px" }}
              // width={{ md: "262px", lg: "262px", sm: "262px", xs: "262px" }}
              sx={{
                // marginTop: "73.69px",
                paddingRight: "47.77px",
              }}
              component="img"
              src={rightarrow}
              alt="logo"
            />
            <Typography
              fontWeight={600}
              fontSize={32}
              lineHeight={"42px"}
              variant="h2"
            >
              To Help You In Preparing Your Fund Raising Documents
            </Typography>
          </Box>
        </Box>
        <Box
          height={{ md: "344px", lg: "344px", sm: "344px", xs: "344px" }}
          width={{ md: "262px", lg: "262px", sm: "262px", xs: "262px" }}
          sx={{
            marginTop: "73.69px",
          }}
          component="img"
          src={rightgirl}
          alt="logo"
        />
      </Box>
      <Box
        sx={{
          mb: "100px",
          display: {
            md: "flex",
            lg: "none",
            sm: "flex",
            xs: "flex",
          },
          flexDirection: {
            md: "column",
            lg: "row",
            sm: "column",
            xs: "column",
          },
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
          height={{ md: "344px", lg: "344px", sm: "344px", xs: "344px" }}
          width={{ md: "262px", lg: "262px", sm: "262px", xs: "262px" }}
          sx={{
            marginTop: "73.69px",
          }}
          component="img"
          src={rightgirl}
          alt="logo"
        />
        <Box
          height={{ md: "323px", lg: "323px", sm: "323px", xs: "323px" }}
          width={{ md: "625px", lg: "625px", sm: "625px", xs: "625px" }}
          sx={{
            display: "flex",
            marginTop: "96.29px",
            backgroundColor: "pink",
            border: 1.5,
            borderColor: "rgba(255, 63, 57, 1)",
            alignItems: {
              md: "center",
              lg: "center",
              sm: "center",
              xs: "center",
            },
            justifyContent: {
              md: "center",
              lg: "center",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              alignItems: {
                md: "center",
                lg: "center",
                sm: "center",
                xs: "center",
              },
              justifyContent: {
                md: "center",
                lg: "center",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Box
              // height={{ md: "344px", lg: "344px", sm: "344px", xs: "344px" }}
              // width={{ md: "262px", lg: "262px", sm: "262px", xs: "262px" }}
              sx={{
                // marginTop: "73.69px",
                paddingRight: "47.77px",
              }}
              component="img"
              src={leftarrow}
              alt="logo"
            />
            <Typography
              fontWeight={600}
              fontSize={32}
              lineHeight={"42px"}
              variant="h2"
            >
              To Help You In Preparing Your Fund Raising Documents
            </Typography>
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
}

export default Girl;
