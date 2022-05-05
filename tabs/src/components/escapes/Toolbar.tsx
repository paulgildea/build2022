import React, {FC} from "react";
import { makeStyles, shorthands, Divider, tokens, Button } from '@fluentui/react-components';
import { Input } from "@fluentui/react-components/unstable";
import { ShareRegular, ArrowExportLtrRegular, FilterRegular, SearchRegular } from '@fluentui/react-icons';
import {useMediaQuery} from "react-responsive";

interface ToolbarProps {
    
}

const useTextStyles = makeStyles({
   toolbar: {
     backgroundColor: tokens.colorNeutralBackground3,
     height: "48px",
     boxShadow: tokens.shadow8,
     position: "sticky",
     top: "0px",
     display: 'flex',
     alignItems: 'center',
   },
   pullLeft: {
     paddingLeft: '0px'
   },
   push: {
     marginLeft: "auto",
   },
   bump: {
     marginRight: "16px",
   },
   bumpLeft: {
     marginLeft: "16px",
   }
  })

const Toolbar: FC<ToolbarProps> = ({}) => {
    const classes = useTextStyles();
    const showSearch = useMediaQuery({query: '(min-width: 800px'});
    const meetingSidePanel = useMediaQuery({query: '(max-width: 280px'});

    return (
      <>
        {
          meetingSidePanel ? null : <div className={classes.toolbar}>
          <Button appearance="transparent" icon={<ArrowExportLtrRegular/>}>Export</Button>
          <Button className={classes.pullLeft} appearance="transparent" icon={<ShareRegular/>}>Share</Button>
          <Button className={classes.push} appearance="transparent" icon={<FilterRegular/>}>Filter</Button>
          {showSearch ? <Input className={classes.bump} placeholder="Find" appearance="filledLighter" /> : <Button className={classes.bump} appearance="transparent" icon={<SearchRegular/>}></Button>}
      </div>
        }
        </>
    );
}

export default Toolbar;
