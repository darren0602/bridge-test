import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { useFormikContext } from "formik";
import Zoom from "@mui/material/Zoom";

const StyledButtonBox = styled(Box)(({ theme }) => ({
  "& .MuiButton-root": {
    width: "100%",
    borderTopLeftRadius: theme.shape.borderRadius[0],
    borderTopRightRadius: theme.shape.borderRadius[0],
    borderBottomLeftRadius: theme.shape.borderRadius[0],
    borderBottomRightRadius: theme.shape.borderRadius[0],
    textTransform: "none",
    backgroundColor: theme.palette.colors.brand.primary,
    "&:hover": {
      backgroundColor: theme.palette.colors.brand.primary,
    },
    "&:disabled": {
      backgroundColor: theme.palette.colors.ui.disabled,
    },
  },
}));

const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.colors.ui.white,
  borderRadius: theme.shape.borderRadius[0],
  boxShadow: 24,
  outline: "none",
}));

const CloseIconButton = styled(IconButton)(({ theme }) => ({
  height: "25px",
  width: "25px",
  color: theme.palette.colors.brand.secondary,
}));

export default function DialogModal({
  showModal,
  title,
  message,
  setShowModal,
  onConfirm,
  buttonText,
  disabled,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { resetForm } = useFormikContext();

  const handleConfirm = () => {
    onConfirm();
    setShowModal(false);
    resetForm();
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <Modal open={showModal} onClose={handleCancel}>
      <ModalBox
        sx={{
          padding: isMobile ? "30px" : "40px",
          width: isMobile ? "350px" : "450px",
        }}
      >
        <Zoom in={showModal}>
          <Grid container>
            <Grid container justifyContent="flex-end">
              <CloseIconButton onClick={handleCancel}>
                <CloseIcon sx={{ stroke: "black", strokeWidth: 2 }} />
              </CloseIconButton>
            </Grid>
            <Grid item xs={12} paddingTop="20px" paddingBottom="10px">
              <Typography variant="h5" textAlign="center" fontWeight="bold">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ textAlign: "center" }}>{message}</Typography>
            </Grid>

            <Grid container item xs={12} columnSpacing={3} paddingTop="100px">
              <Grid item xs={6}>
                <StyledButtonBox>
                  <Button
                    variant="contain"
                    disabled={disabled}
                    onClick={handleCancel}
                  >
                    <Typography sx={{ color: "white" }} variant="h6">
                      {disabled ? "Loading" : buttonText}
                    </Typography>
                  </Button>
                </StyledButtonBox>
              </Grid>
              <Grid item xs={6}>
                <StyledButtonBox>
                  <Button
                    variant="contain"
                    disabled={disabled}
                    onClick={handleConfirm}
                  >
                    <Typography sx={{ color: "white" }} variant="h6">
                      Try Again
                    </Typography>
                  </Button>
                </StyledButtonBox>
              </Grid>
            </Grid>
          </Grid>
        </Zoom>
      </ModalBox>
    </Modal>
  );
}

DialogModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  disabled: PropTypes.bool,
};
