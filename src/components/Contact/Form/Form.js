import "./Form.css";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/joy/Button";

const Form = () => {
  return (
    <form  autoComplete="off">
      <TextField
        type="text"
        margin="normal"
        label="Full Name"
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        type="email"
        margin="normal"
        label="Email"
        variant="outlined"
        required
        fullWidth
      />
      <Textarea margin="normal" minRows={3} placeholder="Your Message…" />
      <Button
        type="submit"
        className="send-btn"
        variant="soft"
        endDecorator={<KeyboardArrowRight />}
        color="primary"
      >
        Send
      </Button>
    </form>
  );
};

export default Form;
