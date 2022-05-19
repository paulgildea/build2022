import React, { useEffect, useState } from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { FluentProvider, webDarkTheme, webHighContrastTheme, webLightTheme } from "@fluentui/react-components";

import { HashRouter as Router, Redirect, Route } from "react-router-dom";

import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from "./Tab";
import Home from "./Home";
import Inventory from "./Inventory";
import "./App.css";
import TabConfig from "./TabConfig";
import { app } from "@microsoft/teams-js";
import ItemDetail from "./escapes/ItemDetail";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {

  const params = new URLSearchParams(document.location.search.substring(1));
  const themeParam = params.get("theme");
  const meetingId = params.get("meeting");

  console.log("themeParam: ", themeParam);
  console.log("meetingId: ", meetingId);

  const themeState = meetingId ? webDarkTheme : webLightTheme;
  const themeStringState = meetingId ? "dark" : "default";

  const [theme, setTheme] = useState(themeState);
  const [themeString, setThemeString] = useState(themeStringState);

  useEffect(() => {
    app.initialize().then(() => {
      app.registerOnThemeChangeHandler((theme) => {
        console.log("ThemeChange: ", theme);
        setThemeString(theme);
        if (theme === "default") {
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
        if (theme === "default") {
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
        <Route exact path="/inventory" render={(props) => <Inventory {...props} theme={themeString} />} />
        <Route exact path="/itemdetail" render={(props) => <ItemDetail {...props} theme={themeString} />} />
        <Route exact path="/tab" component={Tab} />
        <Route exact path="/config" component={TabConfig} />
      </Router>
    </FluentProvider>
  );
}
