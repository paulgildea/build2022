import React from "react";
import { Welcome } from "./sample/Welcome";
import { useTeamsFx } from "./sample/lib/useTeamsFx";
import {FluentProvider, Button, teamsLightTheme, Headline} from "@fluentui/react-components";

export default function Inventory() {
  const { themeString } = useTeamsFx();
  return (
    <div className={themeString === "default" ? "" : "dark"}>
      <FluentProvider theme={teamsLightTheme}>
        <Headline>Inventory</Headline>
        <Button appearance="primary">Hello v9</Button>
      </FluentProvider>
    </div>
  );
}
