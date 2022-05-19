import React, {FC} from "react";
import { makeStyles, Divider, Image, Subheadline, Button } from '@fluentui/react-components';
import { useHistory } from "react-router-dom";


interface ItemData {
  title: string;
  image: string;
}

interface ItemProps {
    data: ItemData,
    id?: string
}

const useTextStyles = makeStyles({
    spaceTopAndBottom: {
      marginTop: "8px",
      marginBottom: "8px",
    },
    centerContainer: {
      display: "flex",
      justifyContent: "space-around"
    },
    spaceBottom: {
      marginBottom: "8px"
    }
  })

const Item: FC<ItemProps> = ({data, id}) => {
    const classes = useTextStyles();
    const link = "/itemdetail?id="+id;
    const history = useHistory();
    return (
        <div>
          <Subheadline className={classes.spaceBottom} block>{data.title}</Subheadline>
          <div className={classes.centerContainer}>
            <Image src={data.image} height="150" />
          </div>
          <Divider className={classes.spaceTopAndBottom} />
          <Button className={classes.spaceTopAndBottom} onClick={()=>{
            history.push(link);
          }}>View Details</Button>
        </div>
    );
}

export default Item;
