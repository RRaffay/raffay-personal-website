import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./styles/blogPageStyle.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#000000",
      contrastText: "#fff",
    },
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BlogPost(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={handleOpen} color="neutral">
          <span className="blog-post-name"> {props.title} </span>
        </Button>
      </ThemeProvider>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h1">
            <span className="blog-post-name">{props.title}</span>
          </Typography>
          <br />
          <Typography id="modal-modal-title" variant="h6" component="h1">
            <span className="blog-post-date"> &nbsp;{props.date} </span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span className="blog-post-content"> {props.content} </span>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
