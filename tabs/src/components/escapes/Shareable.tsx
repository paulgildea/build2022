import React, { FC } from "react";
import { sharing } from "@microsoft/teams-js";
import { makeStyles, Subheadline, Menu, MenuTrigger, Button, MenuPopover, MenuList, MenuItem } from '@fluentui/react-components';
import { MoreHorizontal24Regular, ShareRegular, LinkRegular, ChatRegular } from "@fluentui/react-icons";

import { useHistory } from "react-router-dom";

interface ShareableProps {
  title: string;
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
  },
  center: {
    display: "flex",
    justifyContent: 'space-around'
  }
});


const Shareable: FC<ShareableProps> = ({ title }) => {
  const classes = useTextStyles();
  const history = useHistory();

  return (
    <div>
      <div className={classes.flex}>
        <Subheadline>Top Seller</Subheadline>
        <Menu>
          <MenuTrigger>
            <Button className={classes.pushRight} icon={<MoreHorizontal24Regular />} appearance='subtle'></Button>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem icon={<ChatRegular />} onClick={() => {
              }}>
                Chat
              </MenuItem>
              <MenuItem icon={<ShareRegular />} onClick={() => {

                console.log("Sharing: ", sharing.isSupported());
                sharing.shareWebContent({
                  content: [
                    {
                      type: 'URL',
                      url: 'https://contosomsac7920btab.z22.web.core.windows.net/index.html#/inventory?id=8',
                      preview: true
                    }
                  ]
                }).catch((reason) =>{
                  console.log("Reason", reason);
                })
              }}>
                Share
              </MenuItem>
              <MenuItem icon={<LinkRegular />} onClick={() => {
              }}>
                Open Link
              </MenuItem>
              <MenuItem icon={<LinkRegular />} onClick={() => {
              }}>
                View More
              </MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>

      <div className={classes.center}>
        <img width="240" src="topItem.png" alt="Top Item sold" />
      </div>
      <p className={classes.salesText}>20,987</p>
      <p className={classes.salesDescription}>Contoso Cotton Shirt Sales</p>
      <div className={classes.center}>
        <Button onClick={() => {
          history.push("itemDetail?id=5");
        }}>View Details</Button>
      </div>
    </div>
  );
}

export default Shareable;
