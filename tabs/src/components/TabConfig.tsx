import React, {useEffect} from "react";
import "./App.css";
import {app, pages} from "@microsoft/teams-js";

/**
 * The 'Config' component is used to display your group tabs
 * user configuration options.  Here you will allow the user to
 * make their choices and once they are done you will need to validate
 * their choices and communicate that to Teams to enable the save button.
 */
function TabConfig(props: any){
    // Initialize the Microsoft Teams SDK
    /**
     * When the user clicks "Save", save the url for your config/sured tab.
     * This allows for the addition of query string parameters based on
     * the settings selected by the user.
     */
    useEffect(()=>{
      app.initialize().then(()=> {
        pages.config.registerOnSaveHandler((saveEvent) => {
          const baseUrl = `https://${window.location.hostname}:${window.location.port}`;
          pages.config.setConfig({
            suggestedDisplayName: "Contoso Retail 22",
            entityId: "Contoso Retail 22",
            contentUrl: baseUrl + "/index.html#/home",
            websiteUrl: baseUrl + "/index.html#/home",
          });
          saveEvent.notifySuccess();
        });
        pages.config.setValidityState(true);
      })
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
      </div>
    );
}

export default TabConfig;
