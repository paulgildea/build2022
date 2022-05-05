import React, { FC, useEffect } from "react";
import { useTeamsFx } from "../sample/lib/useTeamsFx";
import { TeamsFx } from "@microsoft/teamsfx";
import { useGraph } from "../sample/lib/useGraph";
import { Providers, ProviderState } from '@microsoft/mgt-element';
import { PersonCard } from "@microsoft/mgt-react";
import { TeamsFxProvider } from '@microsoft/mgt-teamsfx-provider';
import { app, shareDeepLink, chat, OpenSingleChatRequest, pages, ShareDeepLinkParameters, executeDeepLink, dialog, DialogSize, DialogDimension } from "@microsoft/teams-js";
import { makeStyles, Subheadline, Menu, MenuTrigger, Button, MenuPopover, MenuList, MenuItem, Avatar } from '@fluentui/react-components';
import { MoreHorizontal24Regular, ShareRegular, LinkRegular, ChatRegular } from "@fluentui/react-icons";
import { countReset } from "console";


interface ShareableProps {
  title: string;
}

const chatRequest: OpenSingleChatRequest = {
  user: "apowell@microsoft.com",
  message: "This is a test message please ignore. I'm seeing if links will unfurl automatically: https://aka.ms/fluentui",
}

const useTextStyles = makeStyles({
  salesText: {
    fontSize: '24px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '0px'
  },
  salesDescription: {
    fontSize: '14px',
    fontWeight: '400',
    textAlign: 'center',
    marginTop: '0px',
    paddingTop: '0px'
  },
  rightAlign: {
    float: 'right',
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  pushRight: {
    marginLeft: 'auto'
  },
  handCusor: {
    ':hover': {
      cursor: "pointer"
    }
  }
});


const Shareable: FC<ShareableProps> = ({ title }) => {
  const classes = useTextStyles();

  const { loading, error, data, reload } = useGraph(
    async (graph, teamsfx, scope) => {
      // Call graph api directly to get user profile information
      const profile = await graph.api("/me").get();

      // Initialize Graph Toolkit TeamsFx provider
      const provider = new TeamsFxProvider(teamsfx, scope);
      Providers.globalProvider = provider;
      Providers.globalProvider.setState(ProviderState.SignedIn);

      let photoUrl = "";
      try {
        const photo = await graph.api("/me/photo/$value").get();
        photoUrl = URL.createObjectURL(photo);
      } catch {
        // Could not fetch photo from user's profile, return empty string as placeholder.
      }
      return { profile, photoUrl };
    },
    { scope: ["User.Read"] }
  );

  return (
    <div>
      <div className={classes.flex}>
        <Subheadline>Top Seller</Subheadline>
        <Menu>
          <MenuTrigger>
            <Button className={classes.pushRight} icon={<Avatar image={{ src: 'alex.jpg' }} size={28} badge={{ status: 'available', 'aria-label': 'available' }} />} appearance="transparent" shape="circular" size="large"></Button>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem icon={<ChatRegular />} onClick={() => {
                chat.openChat(chatRequest);
              }}>Chat</MenuItem>
              <MenuItem icon={<ShareRegular />} onClick={() => {
                console.log(window.location.hostname);
                app.getContext().then((context) => {
                  dialog.open({
                    url: "https://localhost:53000/index.html#/inventory",
                    size: { width: DialogDimension.Medium, height: DialogDimension.Medium }
                  }, (e) => {
                    console.log(e);
                  });
                })
              }}>Share</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
        <Menu>
          <MenuTrigger>
            <Button icon={<MoreHorizontal24Regular />} appearance='subtle'></Button>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem icon={<ChatRegular />} onClick={() => {
                console.log(chatRequest);
                chat.openChat(chatRequest);
              }}>
                Chat
              </MenuItem>
              <MenuItem icon={<ShareRegular />} onClick={() => {
                app.getContext().then((context) => {
                  const host = context.app.host;
                  console.log("host:", host);
                  const result = pages.shareDeepLink({ subPageId: '123', subPageLabel: 'My link' });
                });

              }}>
                Share
              </MenuItem>
              <MenuItem icon={<LinkRegular />} onClick={() => {
                const host = encodeURIComponent("https://localhost:53000/index.html#inventory");
                console.log(host);
                const uri = encodeURI('https://teams.microsoft.com/l/stage/15eb4086-be34-4e7c-8487-bdacd2a8c28e/0?context={"contentURL":"' + host + '", "websiteUrl":"' + host + '"}');
                console.log(uri)
                app.openLink("https://teams.microsoft.com/l/entity/efa7b582-d152-4bbc-9554-62300f0c5a1f/_djb2_msteams_prefix_1999417726?webUrl=https%3a%2f%2flocalhost%3a53000%2findex.html%23%2fhome&label=My+link+in+Home&context=%7b%0d%0a++%22subEntityId%22%3a+%22123%22%2c%0d%0a++%22chatId%22%3a+%22efa7b582-d152-4bbc-9554-62300f0c5a1f%22%2c%0d%0a++%22contextType%22%3a+%22chat%22%0d%0a%7d&tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47");
              }}>
                Open Link ;
              </MenuItem>
              <MenuItem icon={<LinkRegular />} onClick={() => {

              }}>
                View More
              </MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>
      <Button onClick={reload}>Authorize</Button>
      <div>Data: {data?.photoUrl}</div>

      <img width="240" src="topItem.png" alt="Top Item sold" />
      <p className={classes.salesText}>20,987</p>
      <p className={classes.salesDescription}>Contoso Cotton Shirt Sales</p>
      <Button as="a" href="#/inventory">View Details</Button>
    </div>
  );
}

export default Shareable;
