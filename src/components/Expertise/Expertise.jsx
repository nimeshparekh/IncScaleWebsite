import { Box, Button, Typography } from "@mui/material";

import lines from "../../assets/lines.svg";
import laptop from "../../assets/laptop.svg";
import laptop2 from "../../assets/laptop2.svg";
import laptop3 from "../../assets/laptop3.svg";

function Expertise() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        alignItems: {
          lg: "baseline",
          md: "baseline",
          sm: "center",
          xs: "center",
        },
        marginTop: { lg: "0px", md: "0px", sm: "30px", xs: "30px" },
      }}
    >
      {/*Our Expertise */}
      <Box
        sx={{ marginLeft: { lg: "102px", md: "102px", sm: "0px", xs: "0px" } }}
      >
        <Typography
          fontWeight={700}
          fontSize={48}
          lineHeight={"60px"}
          variant="h2"
        >
          Our Expertise
        </Typography>
      </Box>
      {/*Lines */}
      <Box
        sx={{ marginLeft: { lg: "102px", md: "102px", sm: "0px", xs: "0px" } }}
      >
        <Box component="img" src={lines} alt="logo" />
      </Box>
      {/*Laptop */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "rgba(255, 63, 57, 1)",
              width: "30px",
              height: "30px",
              alignItems: "center",
              justifyContent: "center",
              display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
            }}
          >
            <Typography
              fontWeight={500}
              fontSize={20}
              lineHeight={"32px"}
              variant="h2"
              textAlign="center"
              color="white"
            >
              1
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: { lg: "50px", md: "50px", sm: "0px", xs: "0px" },
            }}
          >
            <Box component="img" src={laptop} alt="logo" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginLeft: { lg: "98px", md: "98px", sm: "0px", xs: "0px" },
              }}
            >
              <Typography
                fontWeight={700}
                fontSize={{ lg: "48px", md: "48px", sm: "35px", xs: "25px" }}
                lineHeight={{ lg: "60px", md: "60px", sm: "50px", xs: "40px" }}
                variant="h2"
              >
                Pitch Deck Building & Designing
              </Typography>
            </Box>
            <Box
              sx={{
                width: { lg: "608px", md: "608px", sm: "90%", xs: "90%" },
                height: { lg: "46px", md: "46px", sm: "40px", xs: "40px" },
                marginLeft: { lg: "98px", md: "98px", sm: "0px", xs: "0px" },
                marginTop: { lg: "36px", md: "36px", sm: "26px", xs: "26px" },
              }}
            >
              <Typography
                fontWeight={400}
                fontSize={18}
                lineHeight={"22.5px"}
                variant="h2"
              >
                Make your pitch deck stand out by using Team Expertise. Our Team
                will help you craft your story and get successful
                venture-funding.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: { lg: "0px", md: "0px", sm: "30px", xs: "30px" },
        }}
      >
        <Box
          sx={{
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "rgba(255, 63, 57, 1)",
              width: "30px",
              height: "30px",
              alignItems: "center",
              justifyContent: "center",
              display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
            }}
          >
            <Typography
              fontWeight={500}
              fontSize={20}
              lineHeight={"32px"}
              variant="h2"
              textAlign="center"
              color="white"
            >
              2
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: { lg: "50px", md: "50px", sm: "0px", xs: "0px" },
              display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
            }}
          >
            <Box component="img" src={laptop2} alt="logo" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginLeft: { lg: "98px", md: "98px", sm: "0px", xs: "0px" },
              }}
            >
              <Typography
                fontWeight={700}
                fontSize={{ lg: "48px", md: "48px", sm: "35px", xs: "25px" }}
                lineHeight={{ lg: "60px", md: "60px", sm: "50px", xs: "40px" }}
                variant="h2"
              >
                Financial Model
              </Typography>
            </Box>
            <Box
              sx={{
                width: { lg: "608px", md: "608px", sm: "90%", xs: "90%" },
                height: { lg: "46px", md: "46px", sm: "40px", xs: "40px" },
                marginLeft: { lg: "98px", md: "98px", sm: "0px", xs: "0px" },
                marginTop: { lg: "36px", md: "36px", sm: "26px", xs: "26px" },
              }}
            >
              <Typography
                fontWeight={400}
                fontSize={18}
                lineHeight={"22.5px"}
                variant="h2"
              >
                Built your customized complex financial model built today which
                can be used for any financing options i.e. Seed funding, VC
                Funding, and Government & Private Loans etc.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              marginLeft: { lg: "50px", md: "50px", sm: "0px", xs: "0px" },
            }}
          >
            <Box
              sx={{
                display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
              }}
              component="img"
              src={laptop2}
              alt="logo"
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: { lg: "0px", md: "0px", sm: "30px", xs: "30px" },
        }}
      >
        <Box
          sx={{
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "rgba(255, 63, 57, 1)",
              width: "30px",
              height: "30px",
              alignItems: "center",
              justifyContent: "center",
              display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
            }}
          >
            <Typography
              fontWeight={500}
              fontSize={20}
              lineHeight={"32px"}
              variant="h2"
              textAlign="center"
              color="white"
            >
              3
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: { lg: "50px", md: "50px", sm: "0px", xs: "0px" },
            }}
          >
            <Box component="img" src={laptop3} alt="logo" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginLeft: { lg: "98px", md: "98px", sm: "0px", xs: "0px" },
              }}
            >
              <Typography
                fontWeight={700}
                fontSize={{ lg: "48px", md: "48px", sm: "35px", xs: "25px" }}
                lineHeight={{ lg: "60px", md: "60px", sm: "50px", xs: "40px" }}
                variant="h2"
              >
                Business Plans
              </Typography>
            </Box>
            <Box
              sx={{
                width: { lg: "608px", md: "608px", sm: "90%", xs: "90%" },
                height: { lg: "46px", md: "46px", sm: "40px", xs: "40px" },
                marginLeft: { lg: "98px", md: "98px", sm: "0px", xs: "0px" },
                marginTop: { lg: "36px", md: "36px", sm: "26px", xs: "26px" },
              }}
            >
              <Typography
                fontWeight={400}
                fontSize={18}
                lineHeight={"22.5px"}
                variant="h2"
              >
                Make your business plan with us to stand out from crowd.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Expertise;
