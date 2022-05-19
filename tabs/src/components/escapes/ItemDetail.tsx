import React, { FC } from "react";
import { makeStyles, Image, Subheadline, Headline,  Body, tokens, mergeClasses as xc } from '@fluentui/react-components';
import { View, Escape, Media } from "@fluent-blocks/react";
import { ThemeName } from "@fluent-blocks/schemas";
import { useLocation } from "react-router-dom";
import itemData from "../../data/items.data.json";

interface ItemDetailProps {
  theme: string
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
  },
  flex: {
    display: "flex",
    flexDirection: 'row',
    "@media only screen and (max-width: 320px)": {
      flexDirection: 'column',
    }
  },
  flexWrap: {
    display: "flex",
    flexWrap: "wrap",
  },
  twoColumnGrid: {
    display: 'grid',
    gridTemplateColumns: "auto auto",
    columnGap: "16px",
    rowGap: "16px"
  },
  marginRight: {
    marginRight: "8px"
  },
  marginRightAuto: {
    marginRight: "auto"
  },
  table: {
    width: "100%",
    textAlign: "left",
    marginTop: "8px"
  }
});

const getData = (search: string) => {
  const params = new URLSearchParams(search).get("id");
  let id = params ? parseInt(params, 10) : 1;
  const data = itemData[--id];
  return data;
};

const ItemDetails: FC<ItemDetailProps> = ({ theme }) => {

  const location = useLocation();
  const data = getData(location.search);

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
              items: [
                {
                  item: {
                    card: {
                      title: data.title, titleVisuallyHidden: true, body: [
                        <Escape contentMeetsAccessibilityAndDesignStandards>
                          <div className={classes.flex}>
                            <Image className={classes.marginRight} src={data.image} width="240" />
                            <div>
                              <Headline>{data.title}</Headline>
                              <Body block>{data.description}</Body>
                              <table className={classes.table}>
                                <thead>
                                  <tr>
                                    <th>Material</th>
                                    <th>Width</th>
                                    <th>Height</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{data.material}</td>
                                    <td>{data.width}</td>
                                    <td>{data.height}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>

                        </Escape>
                      ]
                    },
                    contextualVariant: 'layout'
                  }, inlineSizeFactor: 2, blockSizeFactor: 2
                },
                {
                  item: {
                    card: {
                      title: "Description", titleVisuallyHidden: true, body: [
                        <Escape contentMeetsAccessibilityAndDesignStandards>
                          <div className={classes.flex}>
                            <div className={classes.marginRight}>
                              {/* <DonutChart data={{chartData: stockData, chartTitle: "Stock"}} innerRadius={72}/> */}
                              <Media label="mychart" chart={{
                                  "type": "doughnut",
                                  "data": {
                                    "labels": [
                                      "Jan",
                                      "Feb",
                                      "March",
                                      "April",
                                      "May"
                                    ],
                                    "datasets": [
                                      {
                                        "label": "Laptops",
                                        "data": [
                                          1860,
                                          7700,
                                          4100,
                                          3012,
                                          2930
                                        ]
                                      },
                                      {
                                        "label": "Watches",
                                        "data": [
                                          1200,
                                          3600,
                                          2480,
                                          5049,
                                          4596
                                        ]
                                      }
                                    ]
                                  }
                                }
                              } />
                            </div>
                            <div className={classes.twoColumnGrid} >
                              <div>
                                <Subheadline block>Manufacturer</Subheadline>
                                <Body>{data.manufacturer}</Body>
                              </div>
                              <div>
                                <Subheadline block>Dimension</Subheadline>
                                <Body>{data.dimension}</Body>
                              </div>
                              <div>
                                <Subheadline block>Launch Date</Subheadline>
                                <Body>{data.dueDate}</Body>
                              </div>
                              <div>
                                <Subheadline block>Stock</Subheadline>
                                <Body>{data.stock}</Body>
                              </div>
                              <div>
                                <Subheadline block>Country of Origin</Subheadline>
                                <Body>{data.countryoforigin}</Body>
                              </div>
                            </div>
                          </div>
                        </Escape>
                      ]
                    },
                    contextualVariant: 'layout'
                  }, inlineSizeFactor: 2, blockSizeFactor: 2
                },
                {
                  item: {
                    card: {
                      title: "Sales", body: [
                        {
                          media: {
                            label: 'line',
                            chart: {
                              type: 'line-area',
                              data: {
                                labels: [
                                  "Mar 01", "Mar 02", "Mar 03", "Mar 04", "Apr 01", "Apr 02", "Apr 03", "Apr 04"//, "May 01", "May 02", "May 03", "May 04",  
                                ],
                                datasets: [{
                                  label: 'Sales',
                                  data: [15693, 15609, 15800, 15509, 15689, 15985, 16001, 15939],//, 15872, 15802, 15878, 15923]
                                }]
                              }
                            }
                          },
                          variant: 'textWidth'
                        }
                      ]
                    },
                    contextualVariant: 'layout'
                  }, inlineSizeFactor: 2, blockSizeFactor: 2
                },
                {
                  item: {
                    card: {
                      title: "Inventory", body: [
                        {
                          media: {
                            label: 'line',
                            chart: {
                              type: 'line',
                              data: {
                                labels: [
                                  "Mar 01", "Mar 02", "Mar 03", "Mar 04", "Apr 01", "Apr 02", "Apr 03", "Apr 04"
                                ],
                                datasets: [{
                                  label: 'Inventory',
                                  data: [16289, 16307, 16409, 16330, 16299, 16332, 16399, 16423],
                                }]
                              }
                            }
                          },
                          variant: 'textWidth'
                        }
                      ]
                    },
                    contextualVariant: 'layout'
                  }, inlineSizeFactor: 2, blockSizeFactor: 2
                },
              ]
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

export default ItemDetails;
