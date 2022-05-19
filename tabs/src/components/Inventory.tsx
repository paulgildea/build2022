import React, { FC } from "react";
import { Headline, makeStyles, mergeClasses as xc, tokens } from "@fluentui/react-components";
import { View, Escape, } from "@fluent-blocks/react";
import { ThemeName } from "@fluent-blocks/schemas";
import inventory from "../data/items.data.json";
import Item from "./escapes/Item";

interface InventoryProps {
  theme: string;
}

const useStyles = makeStyles({
  mainPage: {
    backgroundImage: "url('InventoryBG.png')",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: "100% auto",
  },
  mainHeader: {
    paddingTop: "30px",
    paddingLeft: "40px",
    color: tokens.colorNeutralForegroundInverted,
    fontWeight: 'bold'
  }
});

const Inventory: FC<InventoryProps> = ({ theme }) => {
  const classes = useStyles();
  return (
    <div className={xc("inv", classes.mainPage)} >
      <Headline className={classes.mainHeader} block>Inventory</Headline> 
      <View main={{
        title: '',
        blocks: [
          {
            layout: {
              variant: 'grid',
              items: inventory.map((item, index) => {
                index++;
                return {
                  item: {
                    card: {
                      title: item.title, titleVisuallyHidden: true, body: [
                        <Escape contentMeetsAccessibilityAndDesignStandards>
                          <Item data={item} id={index.toString()} />
                        </Escape>
                      ]
                    },
                    contextualVariant: 'layout'
                  },
                }
              }) as any
            }
          }
        ]
      }

      }
        accentScheme="web"
        themeName={(theme === "contrast") ? "highContrast" as ThemeName : theme as ThemeName} />
    </div>
  );
}

export default Inventory;
