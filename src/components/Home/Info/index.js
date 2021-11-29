
import { Fragment, useMemo } from 'react';
import { INFO_ITEMS } from '../../../consts/infoItems';
import classes from './style.module.css';

const Info = () => {

    const informatin = useMemo(() => {
        return INFO_ITEMS.map((item, i) => (
            <Fragment key={i}>
                <div className={classes.wrapperLogoAndText}>
                    <p className={classes.logoAndText} > {item.icon} {item.name}</p>
                    <p> {item.value} </p>
                </div>
                <div className={classes.padding10}></div>
            </Fragment>
        ));
    }, []);
    
    return <div> {informatin} </div>  
};
export { Info };
