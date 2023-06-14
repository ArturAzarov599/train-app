import Button from "@mui/material/Button/Button";

const DeleteButton = ({ disabled, onClick }) => (
  <Button
    variant="contained"
    color="error"
    style={{ width: "100%" }}
    disabled={disabled}
    onClick={onClick}
  >
    delete
  </Button>
);

export default DeleteButton;
