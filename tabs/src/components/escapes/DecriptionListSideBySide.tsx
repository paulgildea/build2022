import React, { FC } from "react";
import { makeStyles } from '@fluentui/react-components';
import { DescriptionList, DescriptionListProps } from "@fluent-blocks/react"

interface ItemData {
  title: string;
  image: string;
}

interface DescriptionListSideBySideProps {
  data?: ItemData,
}

const useTextStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "auto auto"
  }
})

const ReturnProps: DescriptionListProps = {
  descriptionList: [
    {
      title: "Maximum Number Returns",
      description: "6,600"
    },
    {
      title: "Month of Maximum Returns",
      description: "February"
    },
    {
      title: "Current Return Count",
      description: "2,930"
    }
  ]
};

const InventoryProps: DescriptionListProps = {
  descriptionList: [
    {
      title: "Maximum Number Inventory",
      description: "5,500"
    },
    {
      title: "Month of Maximum Inventory",
      description: "April"
    },
    {
      title: "Current Inventory Count",
      description: "5,293"
    }
  ]
}

const DescriptionListSideBySide: FC<DescriptionListSideBySideProps> = ({ data }) => {
  const classes = useTextStyles();

  return (
    <div className={classes.grid}>
      <DescriptionList {...ReturnProps} />
      <DescriptionList {...InventoryProps} />
    </div>
  );
}

export default DescriptionListSideBySide;
