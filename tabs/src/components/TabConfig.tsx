import React, { useEffect, useState } from "react";
import "./App.css";
import { app, pages } from "@microsoft/teams-js";

/**
 * The 'Config' component is used to display your group tabs
 * user configuration options.  Here you will allow the user to
 * make their choices and once they are done you will need to validate
 * their choices and communicate that to Teams to enable the save button.
 */
function TabConfig(props: any) {
  // Initialize the Microsoft Teams SDK
  /**
   * When the user clicks "Save", save the url for your config/sured tab.
   * This allows for the addition of query string parameters based on
   * the settings selected by the user.
   */

  const [themeName, setThemeName] = useState('unknonwn'); 
  useEffect(() => {
    app.initialize().then(() => {
      app.getContext().then((context) => {
        const theme = context.app.theme;
        setThemeName(theme);
        pages.config.registerOnSaveHandler((saveEvent) => {
          const baseUrl = `https://${window.location.hostname}:${window.location.port}`;
          pages.config.setConfig({
            suggestedDisplayName: "Contoso Retail 22",
            entityId: "Contoso Retail 22",
            contentUrl: baseUrl + "/index.html#/home?theme=" + theme,
            websiteUrl: baseUrl + "/index.html#/home?theme=" + theme,
          });
          saveEvent.notifySuccess();
        });
        pages.config.setValidityState(true);
      })
    });
  }, []);

  /**
   * After verifying that the settings for your tab are correctly
   * filled in by the user you need to set the state of the dialog
   * to be valid.  This will enable the save button in the configuration
   * dialog.
   */

  return (
    <div>
      <h1>Tab Configuration</h1>
      <div>
        This is where you will add your tab configuration options the user can choose when the tab
        is added to your team/group chat.
      </div>
      <div>Theme: {themeName}</div>
    </div>
  );
}

export default TabConfig;
