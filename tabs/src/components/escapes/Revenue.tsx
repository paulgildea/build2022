import React, {FC} from "react";
import { makeStyles, shorthands, Divider } from '@fluentui/react-components';
import {Triangle12Filled } from '@fluentui/react-icons';

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
    },
    revenuePastRevenue: {
      fontSize: '18px',
      fontWeight: '400',
      ...shorthands.margin(0),
    },
    revenuePastText: {
      fontSize: '12px',
      fontWeight: '400',
      textTransform: 'uppercase',
      ...shorthands.margin(0),
      marginInlineStart: '8px',
    },
    dividerMargins: {
      marginTop: '4px',
      marginBottom: '4px',
    },
    iconMargin: {
      marginRight: '4px',
      marginBottom: '4px'
    }
  })

const Revenue: FC<RevenueProps> = ({amount, description}) => {
    const classes = useTextStyles();
    return (
        <div>
            <p className={classes.revenueText}><Triangle12Filled className={classes.iconMargin}/>{amount}</p>
            <p className={classes.revenueDescription}>{description || 'Revenue amount'}</p>
            <div><span className={classes.revenuePastRevenue}>$50,343,098</span><span className={classes.revenuePastText}>Q3</span></div>
            <Divider className={classes.dividerMargins} />
            <div><span className={classes.revenuePastRevenue}>$15,290,086</span><span className={classes.revenuePastText}>Q2</span></div>
            <Divider className={classes.dividerMargins} />
            <div><span className={classes.revenuePastRevenue}>$1,176,342</span><span className={classes.revenuePastText}>Q1</span></div>
        </div>
    );
}

export default Revenue;
