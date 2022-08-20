import Button from "@material-ui/core/Button";

export const ToggleThemeLight = ({ onToggleTheme }) => (
  <Button
    variant="outlined"
    onClick={onToggleTheme}
    size="small"
    style={{ float: "right", margin: "30px" }}
  >
    Dark Mode
  </Button>
);

export default ToggleThemeLight;
