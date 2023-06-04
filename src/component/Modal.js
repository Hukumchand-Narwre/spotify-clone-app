import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const MyModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isModalShown = localStorage.getItem("isModalShown");
    if (!isModalShown) {
      setOpen(true);
      localStorage.setItem("isModalShown", true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            border: "none",
          }}
        >
          <Typography variant="h6" component="h2">
            Please make sure before using this website you have Spotify web App
            installed
          </Typography>
          <Typography sx={{ mt: 2 }}>
            This App act as a controller for your spotify App so basic
            requirement for this website to function is spotify web app should
            be installed on your device
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;
