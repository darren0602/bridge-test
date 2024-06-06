import { Box, Typography, styled } from "@mui/material";
import React from "react";

const CenteredBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  margin: "0 auto",
});

function Footer() {
  return (
    <CenteredBox>
      <Typography fontWeight="bold">© www.mathinenglish.com</Typography>
    </CenteredBox>
  );
}

export default Footer;
