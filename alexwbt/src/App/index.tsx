import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import LinkTree from "./LinkTree";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LinkTree />
    </ThemeProvider >
  );
};

export default App;
