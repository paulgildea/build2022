import React, { FC } from "react";
import { View, Escape, SectionProps } from "@fluent-blocks/react";
import { ThemeName } from "@fluent-blocks/schemas";
import basicIcons from "@fluent-blocks/basic-icons/basic-icons.svg";
import Revenue from "./escapes/Revenue";
import Shareable from "./escapes/Shareable";
import InventoryItem from "./escapes/InventoryItem";
import Toolbar from "./escapes/Toolbar";
import DescriptionListSideBySide from "./escapes/DecriptionListSideBySide";

interface HomeProps {
  theme: string;
}

const Home: FC<HomeProps> = ({ theme }) => {

  const d0 = {} as SectionProps;

  const d2 = {
    title: '',
    blocks: [
      {
        layout: {
          variant: 'grid',
          items: [
            {
              item: {
                card: {
                  title: 'Return Volume', body: [
                    {
                      media: {
                        label: 'line',
                        chart: {
                          type: 'line-area',
                          data: {
                            labels: [
                              "Jan", "Feb", "Mar", "Apr", "May"
                            ],
                            datasets: [
                              {
                                label: 'Returns',
                                data: [1866, 6600, 4100, 3012, 2930],
                              },
                              {
                                label: 'Inventory',
                                data: [2000, 3203, 3702, 5523, 5293],
                              }
                            ]
                          }
                        }
                      },
                      variant: 'textWidth'
                    },
                    <Escape contentMeetsAccessibilityAndDesignStandards>
                      <DescriptionListSideBySide />
                    </Escape>
                  ]
                }
              }, inlineSizeFactor: 2, blockSizeFactor: 2
            },
            {
              item: {
                card: {
                  title: 'Current Inventory', body: [
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
                  ]
                }
              }, inlineSizeFactor: 1, blockSizeFactor: 1
            },
            {
              item: {
                card: {
                  title: 'Customer Satisfaction', body: [
                    {
                      descriptionList: [
                        { title: 'CSTAT', description: '95%' },
                        { title: 'NSTAT', description: '90%' },
                        { title: 'TTS', description: '80%' }
                      ]
                    }
                  ]
                }
              },
            },
            {
              item: {
                card: {
                  title: 'Q4 Revenue', body: [
                    <Escape contentMeetsAccessibilityAndDesignStandards>
                      <Revenue amount='$76,098,003' />
                    </Escape>
                  ]
                },
                contextualVariant: 'layout'
              },
            },
            {
              item: {
                card: {
                  title: 'Top Seller', titleVisuallyHidden: true, body: [
                    <Escape contentMeetsAccessibilityAndDesignStandards>
                      <Shareable title='Top Seller' />
                    </Escape>
                  ]
                },
                contextualVariant: 'layout'
              },
            },
            {
              item: {
                card: {
                  title: 'Inventory Item', titleVisuallyHidden: true, body: [
                    <Escape contentMeetsAccessibilityAndDesignStandards>
                      <InventoryItem title="Cotton shirt launch"
                        date="5/25/2022"
                        description="The ‘’Cotton linen casual shirt’’ line is scheduled for launch on 05/25, please pull together the launch program."
                        priority="P1"
                        url="./launchShirt.png" />
                    </Escape>
                  ]
                },
                contextualVariant: 'layout'
              },
            },
            {
              item: {
                card: {
                  title: 'Reason for Return', body: [
                    {
                      media: {
                        label: 'chart',
                        chart: {
                          type: 'doughnut',
                          data: {
                            labels: [
                              "Incorrect fit",
                              "Defective",
                              "Wrong Item",
                              "Disliked",
                              "Wrong Size"
                            ],
                            datasets: [
                              {
                                label: 'Return Reason',
                                data: [1400, 5005, 320, 1909, 135]
                              },
                            ]
                          }
                        },
                      },
                      variant: 'textWidth'
                    }]
                }
              }, inlineSizeFactor: 1, blockSizeFactor: 1
            },
          ],
        },
      },
    ],
  } as SectionProps

  return (
    <div>
      <Toolbar />
      <View main={d2}
        accentScheme="teams"
        themeName={(theme === "contrast") ? "highContrast" as ThemeName : theme as ThemeName}
        iconSpriteUrl={basicIcons} />
    </div>
  );
}

export default Home;