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
import wlines from "../../assets/wlines.svg";
import talk from "../../assets/talk.svg";
import bird from "../../assets/bird.svg";
import ioi from "../../assets/iov.svg";
import cgv from "../../assets/cgv.svg";
import one from "../../assets/one.svg";
import hmall from "../../assets/hmall.svg";
import coupang from "../../assets/coupang.svg";
import jap from "../../assets/jap.svg";
import pink from "../../assets/pink.svg";
import lotte from "../../assets/lotte.svg";
import naver from "../../assets/naver.svg";
import dqum from "../../assets/dqum.svg";
import G from "../../assets/G.svg";
import blueponytail from "../../assets/blueponytail.svg";

function Trusted() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FF3F39",
      }}
    >
      <Grid
        container
        direction="row"
        // mt={"95px"}
        // m={"auto"}
        style={{
          // backgroundColor: "rgba(217,217,217,0.15)",
          overflow: "hidden",
        }}
        spacing={10}
      >
        <Grid
          item
          lg={5}
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: {
                md: "0px",
                lg: "0px",
                sm: "50px",
                xs: "50px",
              },
            }}
          >
            <Typography
              fontWeight={700}
              fontSize={{ md: "48px", lg: "48px", sm: "35px", xs: "35px" }}
              lineHeight={{
                md: "56px",
                lg: "56px",
                sm: "40px",
                xs: "40px",
              }}
              variant="h2"
              color="white"
              sx={{ paddingLeft: "90px" }}
            >
              Trusted By Top Startups
            </Typography>
            <Box
              sx={{ width: "213px", marginTop: "20px" }}
              component="img"
              src={wlines}
              alt="logo"
            />
          </Box>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "row",
                sm: "row",
                xs: "column",
              },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box component="img" src={talk} alt="logo" />
              <Box component="img" src={bird} alt="logo" />
              <Box component="img" src={blueponytail} alt="logo" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box component="img" src={ioi} alt="logo" />
              <Box component="img" src={cgv} alt="logo" />
              <Box component="img" src={one} alt="logo" />
              <Box component="img" src={hmall} alt="logo" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box component="img" src={coupang} alt="logo" />
              <Box component="img" src={jap} alt="logo" />
              <Box component="img" src={pink} alt="logo" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box component="img" src={lotte} alt="logo" />
              <Box component="img" src={naver} alt="logo" />
              <Box component="img" src={dqum} alt="logo" />
              <Box component="img" src={G} alt="logo" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Trusted;
