import Button from "@mui/material/Button/Button";

const UpdateButton = ({ disabled, onClick }) => (
  <Button
    variant="outlined"
    color="warning"
    style={{ width: "100%" }}
    disabled={disabled}
    onClick={onClick}
  >
    update
  </Button>
);

export default UpdateButton;
