import React, { FC } from "react";
import { chat, OpenSingleChatRequest } from "@microsoft/teams-js";
import { makeStyles, Subheadline, Menu, MenuTrigger, Button, MenuPopover, MenuList, MenuItem, Avatar, Image, Body, Badge, tokens, mergeClasses as mc, shorthands } from '@fluentui/react-components';
import { LinkRegular, ChatRegular, MeetNowRegular, CopyRegular } from "@fluentui/react-icons";
import { useHistory } from "react-router-dom";

interface InventoryItemProps {
  title: string;
  date: string;
  description: string;
  url: string;
  priority: string;
}

const chatRequest: OpenSingleChatRequest = {
  user: "alisa@kuojianlu.onmicrosoft.com",
  message: "Hey! I wanted to follow up on this item. You have time to chat about it? 😊 https://contosomsac7920btab.z22.web.core.windows.net/index.html#/inventory?id=",
}

const getId = () => {
  const id = Math.floor(Math.random() * 100) + 1;
  return id.toString() + "  ";
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
  flexRight: {
    display: "flex",
    alignItems: "end"
  },
  pushRight: {
    marginLeft: 'auto'
  },
  handCusor: {
    ':hover': {
      cursor: "pointer"
    }
  },
  mute: {
    color: tokens.colorNeutralForeground4,

  },
  bottomSpacing: {
    marginBottom: "8px"
  },
  highPri: {
    backgroundColor: "#CC4A3110",
    color: "#CC4A31",
    ...shorthands.borderColor("#CC4A3110"),
    marginRight: "auto"
  },
  center: {
    display: "flex",
    justifyContent: "space-around"
  },
  linkRight: {
    marginLeft: "auto"
  }
});

const InventoryItem: FC<InventoryItemProps> = ({ title, date, description, url, priority }) => {
  const classes = useTextStyles();
  const history = useHistory();

  return (
    <div>
      <div className={classes.flex}>
        <Badge className={classes.highPri} appearance="filled" size="extra-large">{priority}</Badge>
        <Subheadline block>{title}</Subheadline>
        <Menu>
          <MenuTrigger>
            <Button className={classes.pushRight} icon={<Avatar name="Alisa Liu" color="gold" size={28} badge={{ status: 'available', 'aria-label': 'available' }} />} appearance="subtle" shape="circular" size="large" />
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem icon={<ChatRegular />} onClick={() => {
                chatRequest.message += getId();
                chat.openChat(chatRequest);
              }}>Follow Up</MenuItem>
              <MenuItem icon={<MeetNowRegular />} onClick={() => {
              }}>Schedule Meeting</MenuItem>
              <MenuItem icon={<CopyRegular />}>Copy Link</MenuItem>
              <MenuItem icon={<LinkRegular />} onClick={() => {
                console.log("Current History: ", history.location);
                history.push("/itemdetail?id=1");
                console.log("New history", history.location);
              }}>View Details</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>
      <div className={classes.center}>
        <Image src={url} width="240" />
      </div>
      <Body className={mc(classes.mute, classes.bottomSpacing)} block>Due {date}</Body>
      <Body className={classes.bottomSpacing} block>{description}</Body>
    </div>
  );
}

export default InventoryItem;