import Button from "@mui/material/Button/Button";

const ViewButton = ({ disabled, onClick }) => (
  <Button
    variant="contained"
    color="primary"
    disabled={disabled}
    style={{ width: "100%" }}
    onClick={onClick}
  >
    view
  </Button>
);

export default ViewButton;
