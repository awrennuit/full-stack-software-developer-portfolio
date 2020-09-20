import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TimerForm from "../TimerForm/TimerForm";
import Timer from "../Timer/Timer";
import ToggleThemeDark from "../TimerThemeDark/TimerThemeDark";
import ToggleThemeLight from "../TimerThemeLight/TimerThemeLight";
import Header from "../Header/Header";

export default function TimerMain() {
  const [showTimer, setShowTimer] = useState(false);

  const [theme, setTheme] = useState({
    palette: {
      type: `dark`,
      theme: `timer-dark-mode`,
    },
  });

  const toggleTheme = () => {
    let newPaletteType = theme.palette.type === `light` ? `dark` : `light`;
    let newPaletteTheme =
      theme.palette.theme === `timer-light-mode`
        ? `timer-dark-mode`
        : `timer-light-mode`;
    setTheme({
      palette: {
        type: newPaletteType,
        theme: newPaletteTheme,
      },
    });
  };

  const muiTheme = createMuiTheme(theme);

  const showTimerComponent = (bool) => {
    setShowTimer(bool);
  };

  // if(theme.palette.type === `dark`){
  return (
    <div className={theme.palette.theme}>
      <Header />
      {theme.palette.type === `dark` ? (
        <ToggleThemeDark onToggleTheme={toggleTheme} />
      ) : (
        <ToggleThemeLight onToggleTheme={toggleTheme} />
      )}
      <MuiThemeProvider theme={muiTheme}>
        {!showTimer ? (
          <TimerForm timer={showTimerComponent} />
        ) : (
          <Timer timer={showTimerComponent} />
        )}
      </MuiThemeProvider>
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
