import React, {FC} from "react";
import { makeStyles } from '@fluentui/react-components';

interface RevenueProps {
    amount: string;
    description?: string;
}

const useTextStyles = makeStyles({
    revenueText: {
      color: '#11862B',
      fontSize: '24px',
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: '0px'
    },
    revenueDescription: {
      fontSize: '14px',
      fontWeight: '400', 
      textAlign: 'center',
      marginTop: '0px',
      paddingTop: '0px'
    }
  })

const Revenue: FC<RevenueProps> = ({amount, description}) => {
    const classes = useTextStyles();
    return (
        <div>
            <p className={classes.revenueText}>{amount}</p>
            <p className={classes.revenueDescription}>{description || 'Revenue amount'}</p>
        </div>
    );
}

export default Revenue;
