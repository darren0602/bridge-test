import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

function ScrollToTopButton() {
  const theme = useTheme();
  const [showGoTop, setShowGoTop] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    });
  }, []);

  return (
    <IconButton
      size={isMobile ? "medium" : "large"}
      sx={{
        position: "fixed",
        bottom: 5,
        right: 5,
        display: showGoTop ? "block" : "none",
      }}
      onClick={goToTop}
    >
      <ArrowUpwardIcon fontSize={isMobile ? "medium" : "large"} />
    </IconButton>
  );
}

export default ScrollToTopButton;
