import React, { FC } from "react";
import { makeStyles, Headline, Menu, MenuTrigger, Button, MenuPopover, MenuList, MenuItem } from '@fluentui/react-components';
import { MoreHorizontal24Regular, ShareRegular, LinkRegular } from "@fluentui/react-icons";

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
  }
})

const Revenue: FC<ShareableProps> = ({ title }) => {
  const classes = useTextStyles();


  return (
    <div>
      <Headline>{title}</Headline>
      <Menu>
        <MenuTrigger>
          <Button className={classes.rightAlign} icon={<MoreHorizontal24Regular />} appearance='subtle'>
          </Button>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem icon={<ShareRegular />} onClick={() => {
              
            }}>
              Share
            </MenuItem>
            <MenuItem icon={<LinkRegular />}>
              Copy Link
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    <img width="240" src="topItem.png" alt="Top Item sold"/>
    <p className={classes.salesText}>20,987</p>
    <p className={classes.salesDescription}>Contoso Cotton Shirt Sales</p>
    </div>
  );
}

export default Revenue;
