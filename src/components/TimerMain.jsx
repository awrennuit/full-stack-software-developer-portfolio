import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TimerForm from './TimerForm';
import Timer from './Timer';
import ToggleThemeDark from './TimerThemeDark';
import ToggleThemeLight from './TimerThemeLight';
import Header from './Header';

export default function TimerMain() {
  const [showTimer, setShowTimer] = useState(false);

  const [theme, setTheme] = useState({
    palette: {
      mode: `dark`,
      theme: `timer-dark-mode`,
    },
  });

  const toggleTheme = () => {
    let newPaletteType = theme.palette.mode === `light` ? `dark` : `light`;
    let newPaletteTheme =
      theme.palette.theme === `timer-light-mode`
        ? `timer-dark-mode`
        : `timer-light-mode`;
    setTheme({
      palette: {
        mode: newPaletteType,
        theme: newPaletteTheme,
      },
    });
  };

  const muiTheme = createTheme(theme);

  const showTimerComponent = (bool) => {
    setShowTimer(bool);
  };

  // if(theme.palette.type === `dark`){
  return (
    <div className={theme.palette.theme}>
      <Header />
      {theme.palette.mode === `dark` ? (
        <ToggleThemeDark onToggleTheme={toggleTheme} />
      ) : (
        <ToggleThemeLight onToggleTheme={toggleTheme} />
      )}
      <ThemeProvider theme={muiTheme}>
        {!showTimer ? (
          <TimerForm timer={showTimerComponent} />
        ) : (
          <Timer timer={showTimerComponent} />
        )}
      </ThemeProvider>
    </div>
  );
  // }
  // else {
  //   return (
  //     <div className={theme.palette.theme, "timer-container"}>
  //       <Router>
  //         <ToggleThemeLight onToggleTheme={toggleTheme} />
  //         <MuiThemeProvider theme={muiTheme}>
  //           <Route exact path="/set-timer" component={TimerForm} />
  //           <Route path="/timer" component={Timer} />
  //         </MuiThemeProvider>
  //       </Router>
  //     </div>
  //   );
  // }
}
