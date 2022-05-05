import React, {useEffect, useState} from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { FluentProvider, PartialTheme, teamsDarkTheme, teamsHighContrastTheme, teamsLightTheme, webDarkTheme, webHighContrastTheme, webLightTheme } from "@fluentui/react-components";
import { Spinner } from "@fluentui/react-components/unstable/";
import { HashRouter as Router, Redirect, Route } from "react-router-dom";

import { useTeamsFx } from "./sample/lib/useTeamsFx";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from "./Tab";
import Home from "./Home";
import Inventory from "./Inventory";
import "./App.css";
import TabConfig from "./TabConfig";
import {app, pages} from "@microsoft/teams-js";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  // const { theme, loading, themeString } = useTeamsFx();

  // let themeName: PartialTheme;
  // switch (themeString) {
  //   case "light":
  //     themeName = teamsLightTheme;
  //     break;
  //   case "dark":
  //     themeName = teamsDarkTheme;
  //     break;
  //   case "highcontrast":
  //     themeName = teamsHighContrastTheme;
  //     break;
  //   default:
  //     themeName = teamsDarkTheme;
  // }

  const [theme, setTheme] = useState(webLightTheme);
  const [themeString, setThemeString] = useState("default");
  
  useEffect(()=>{
    app.initialize().then(() => {
      app.registerOnThemeChangeHandler((theme) => {
        console.log("ThemeChange: ", theme);
        setThemeString(theme);
        if(theme === "default") {
          setTheme(webLightTheme);
        } else if (theme === "dark") {
          setTheme(webDarkTheme);
        } else if (theme === "contrast") {
          setTheme(webHighContrastTheme);
        }
      });
      app.getContext().then((context) => {
        const theme = context.app.theme;
        setThemeString(theme);
        if(theme === "default") {
          setTheme(webLightTheme);
        } else if (theme === "dark") {
          setTheme(webDarkTheme);
        } else if (theme === "contrast") {
          setTheme(webHighContrastTheme);
        }
      })
    })
  }, []);

  return (

    <FluentProvider theme={theme}>
      <Router>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/termsofuse" component={TermsOfUse} />
        <Route exact path="/home" render={(props) => <Home {...props} theme={themeString} />} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/tab" component={Tab} />
        <Route exact path="/config" component={TabConfig}  />
      </Router>
    </FluentProvider>
  );
}
