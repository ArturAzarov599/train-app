import Button from "@mui/material/Button/Button";

const CreateButton = ({ onClick }) => (
  <Button
    variant="outlined"
    color="success"
    style={{ width: "100%" }}
    onClick={onClick}
  >
    create
  </Button>
);

export default CreateButton;
