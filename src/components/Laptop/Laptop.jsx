import { Box, Button, Typography } from "@mui/material";
import trusted from "../../assets/trusted.svg";
import toparrow from "../../assets/toparrow.svg";
import bottomarrow from "../../assets/bottomarrow.svg";
import laptop from "../../assets/laptop.svg";

function Laptop() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // height: "500px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: { lg: "201px", md: "201px", sm: "150px", xs: "150px" },
          height: { lg: "177px", md: "177px", sm: "133px", xs: "133px" },
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
        component="img"
        src={toparrow}
        alt="logo"
      />
      <Box
        sx={{
          width: { lg: "201px", md: "201px", sm: "150px", xs: "150px" },
          height: { lg: "177px", md: "177px", sm: "133px", xs: "133px" },
          position: "absolute",
          bottom: "0px",
          right: "0px",
        }}
        component="img"
        src={bottomarrow}
        alt="logo"
        // backgroundPosition="bottom center"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { lg: "614px", md: "614px", sm: "80%", xs: "80%" },
              // height: { lg: "200px", md: "200px", sm: "80%", xs: "50%" },
              marginTop: { lg: "0px", md: "0px", sm: "80px", xs: "50px" },
              marginLeft: { lg: "100px", md: "100px", sm: "80px", xs: "50px" },
              alignItems: {
                lg: "baseline",
                md: "baseline",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Typography
              fontWeight={700}
              fontSize={{ lg: "48px", md: "48px", sm: "30px", xs: "20px" }}
              lineHeight={{ lg: "60px", md: "60px", sm: "40px", xs: "40px" }}
              variant="h2"
            >
              Pitch Decks Are What We Live And Breathe!
            </Typography>
          </Box>
          <Box
            sx={{
              width: "290px",
              height: "289px",
              // bottom: "0px",
              // right: "0px",
              marginLeft: {
                lg: "50px",
                md: "50px",
                sm: "0px",
                xs: "0px",
              },
              marginTop: {
                lg: "50px",
                md: "50px",
                sm: "0px",
                xs: "0px",
              },
            }}
            component="img"
            src={laptop}
            alt="logo"
            // backgroundPosition="bottom center"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: { lg: "150px", md: "150px", sm: "80px", xs: "80px" },
            alignItems: {
              lg: "baseline",
              md: "baseline",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: { lg: "256px", md: "256px", sm: "150px", xs: "150px" },
              height: { lg: "80px", md: "80", sm: "50px", xs: "50px" },
              marginLeft: { lg: "100px", md: "100", sm: "0px", xs: "0px" },
              color: "#FF3F39",
              borderColor: "#FF3F39",
              borderWidth: 2,
              fontWeight: 600,
              fontSize: { lg: "22px", md: "22px", sm: "18px", xs: "18px" },
              lineHeight: {
                lg: "27.5px",
                md: "27.5px",
                sm: "23px",
                xs: "23px",
              },
            }}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Laptop;
