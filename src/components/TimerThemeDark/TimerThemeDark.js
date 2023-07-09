import Button from '@mui/material/Button';

const ToggleThemeDark = ({ onToggleTheme }) => (
  <Button
    variant="outlined"
    onClick={onToggleTheme}
    size="small"
    style={{ float: 'right', margin: '30px' }}
  >
    Light Mode
  </Button>
);

export default ToggleThemeDark;
