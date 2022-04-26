import React from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { Loader } from "@fluentui/react-northstar";
import { FluentProvider, PartialTheme, teamsDarkTheme, teamsHighContrastTheme, teamsLightTheme } from "@fluentui/react-components";
import { } from "@fluentui/react-components/unstable/";
import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import { useTeamsFx } from "./sample/lib/useTeamsFx";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from "./Tab";
import Home from "./Home";
import Inventory from "./Inventory";
import "./App.css";
import TabConfig from "./TabConfig";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { theme, loading, themeString } = useTeamsFx();

  let themeName: PartialTheme;
  switch (themeString) {
    case "light":
      themeName = teamsLightTheme;
      break;
    case "dark":
      themeName = teamsDarkTheme;
      break;
    case "highcontrast":
      themeName = teamsHighContrastTheme;
      break;
    default:
      themeName = teamsDarkTheme;
  }

  return (
    <FluentProvider theme={themeName}>
      <Router>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        {loading ? (
          <Loader style={{ margin: 100 }} />
        ) : (
          <>
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/termsofuse" component={TermsOfUse} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/tab" component={Tab} />
            <Route exact path="/config" component={TabConfig} />
          </>
        )}
      </Router>
    </FluentProvider>
  );
}
