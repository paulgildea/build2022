import React from "react";
import { useTeamsFx } from "./sample/lib/useTeamsFx";
import { makeStyles, shorthands } from "@fluentui/react-components";
import { View, Escape, MediaEntity } from "@fluent-blocks/react";
import { ThemeName } from "@fluent-blocks/schemas";
import basicIcons from "@fluent-blocks/basic-icons/basic-icons.svg";
import Revenue from "./escapes/Revenue";
import Shareable from "./escapes/Shareable";
import { Graph } from "./sample/Graph";

const useStyles = makeStyles({
  reset: {
    ...shorthands.margin(0),
    ...shorthands.padding(0),
  }
})



export default function Home() {
  const { themeString } = useTeamsFx();
  const classes = useStyles();

  return (
    <div>
      <View main={{
        title: '',
        blocks: [
          {
            layout: {
              variant: 'grid',
              items: [
                {
                  item: {
                    card: {title: 'Current Inventory', body: [
                      {
                        paragraph: [

                          { text: 'Thursday, Feb 17 at 11:11 AM (PT)', variant: 'normal' }]
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
                    ]}
                  }, inlineSizeFactor: 1, blockSizeFactor: 1
                },
                {
                  item: {
                    card: {title: 'Reason for Return', body: [
                      { paragraph: 'Thursday, Feb 17 at 11:11 AM (PT)' },
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
                      }]}
                  }, inlineSizeFactor: 2, blockSizeFactor: 2
                },
                {
                  item: {
                    card: {title: 'Customer Satisfaction', body: [
                      {
                        descriptionList: [
                          { title: 'CSTAT', description: '95%' },
                          { title: 'NSTAT', description: '90%' },
                          { title: 'TTS', description: '80%' }
                        ]
                      }
                    ]}
                  },
                },
                {
                  item: {
                    card: {title: 'Q4 Revenue', body: [
                      <Escape contentMeetsAccessibilityAndDesignStandards>
                        <Revenue amount='$76,098,003' />
                      </Escape>
                    ]},
                    contextualVariant: 'layout'
                  },
                },
                {
                  item: {
                    card: {title: 'Return Volume', body: [
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
                    ]}
                  }
                },
                {
                  item: {
                    card: {title: 'Top Seller', titleVisuallyHidden: true, body: [
                      <Escape contentMeetsAccessibilityAndDesignStandards>
                        <Shareable title='Top Seller' />
                      </Escape>
                    ]},
                    contextualVariant: 'layout'
                  },
                },
              ],
            },
          },
        ],
      }} accentScheme="web" themeName={(themeString === "contrast") ? "highContrast" as ThemeName : themeString as ThemeName} iconSpriteUrl={basicIcons} />
    </div>
  );
}
