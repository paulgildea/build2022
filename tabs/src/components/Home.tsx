import React from "react";
import { Welcome } from "./sample/Welcome";
import { useTeamsFx } from "./sample/lib/useTeamsFx";
import { FluentProvider, teamsLightTheme, Button, makeStyles, Theme, createLightTheme, BrandVariants } from "@fluentui/react-components";
import { View, Escape, MediaEntity } from "@fluent-blocks/react";
import { ThemeName } from "@fluent-blocks/schemas";
import basicIcons from "@fluent-blocks/basic-icons/basic-icons.svg";
import Revenue from "./escapes/Revenue";



const pinkBrand: BrandVariants = {
  10: "#ffe9eb",
  20: "#ffd2d9",
  30: "#fcbccb",
  40: "#f5a6be",
  50: "#ec91b4",
  60: "#e07dac",
  70: "#d369a4",
  80: "#c3579d",
  90: "#b14696",
  100: "#9d378f",
  110: "#882a87",
  120: "#721f7d",
  130: "#5b1771",
  140: "#431262",
  150: "#2c0e4e",
  160: "#190a33"
};

const lightCustom: Theme = createLightTheme(pinkBrand);

export default function Home() {
  const { themeString } = useTeamsFx();
  console.log(themeString);
  return (
    <div className={themeString === "default" ? "light" : "dark"}>
      <FluentProvider theme={lightCustom}>
      <View accentScheme="web" themeName={(themeString === "contrast") ? "highContrast" as ThemeName : themeString as ThemeName} iconSpriteUrl={basicIcons} main={{
        title: '',
        blocks: [
          {
            layout: {
              variant: 'grid',
              items: [
                {
                  item: {
                    card: [
                      { paragraph: 'Current Inventory', level: 1 },
                      {
                        paragraph: [
                        
                          { text: 'Last Udpated: Thursday, Feb 17 at 11:11 AM (PT)', variant: 'normal' }]
                      },
                      {
                        media: {
                          label: 'chart',
                          chart: {
                            type: 'bar-horizontal',
                            data: {
                              labels: [
                                "Womens",
                                "Mens",
                                "Accessories",
                                "Handbags",
                                "Sales"
                              ],
                              datasets: [
                                {
                                  label: 'Sales',
                                  data: [35122, 45342, 40958, 29450, 39183, 39100]
                                },
                              ]
                            }
                          },
                        },
                        variant: 'textWidth'
                      },
                    ]
                  }, inlineSizeFactor: 1, blockSizeFactor: 1
                },
                {
                  item: {
                    card: [
                      { paragraph: 'Reason for Return', level: 1 },
                      { paragraph: 'Last Udpated: Thursday, Feb 17 at 11:11 AM (PT)' },
                      {
                        media: {
                          label: 'chart',
                          chart: {
                            type: 'doughnut',
                            data: {
                              labels: [
                                "Incorrec fit",
                                "Defective",
                                "Wrong Item",
                                "Arrived Late",
                                "No Reason"
                              ],
                              datasets: [
                                {
                                  label: 'Momentum Series',
                                  data: [1400, 5005, 320, 1909, 135]
                                },
                              ]
                            }
                          },
                        },
                        variant: 'textWidth'
                      }]
                  }, inlineSizeFactor: 2, blockSizeFactor: 2
                },
                {
                  item: {
                    card: [
                      { paragraph: 'Customer Statisfaction', level: 1 },
                      {
                        descriptionList: [
                          { title: 'CSTAT', description: '95%' },
                          { title: 'NSTAT', description: '90%' },
                          { title: 'TTS', description: '80%' }
                        ]
                      }
                    ]
                  },
                },
                {
                  item: {
                    card: [
                      { paragraph: 'Q4 Revenue', level: 1 },
                      <Escape contentMeetsAccessibilityAndDesignStandards>
                        <Revenue amount='$76,098,003' />
                      </Escape>
                    ],
                    contextualVariant: 'layout'
                  },
                },
                {
                  item: {
                    card: [
                      { paragraph: 'Return Volume', level: 1 },
                      {
                        media: {
                          label: 'line',
                          chart: {
                            type: 'line-area',
                            data: {
                              labels: [
                                "Jan", "Feb", "Mar", "Apr", "May"
                              ],
                              datasets: [{
                                label: 'Returns',
                                data: [1866, 7700, 4100, 3012, 2930]
                              }]
                            }
                          }
                        },
                        variant: 'textWidth'
                      }
                    ]
                  }
                },
              ],
            },
          },
        ],
      }} />
      </FluentProvider>
    </div>
  );
}
