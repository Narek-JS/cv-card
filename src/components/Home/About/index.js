import { Fragment } from 'react';
import { useMemo } from 'react';
import { DownloadCv } from '../..';
import { WORDS } from '../../../consts/words';
import classes from './style.module.css';

const About = () => {

    const title = useMemo(() => {
        const f = text => text[0].toUpperCase() +text.slice(1,text.length);
        return(
            <div className={classes.wrapperTextAboutMe}>
                <span className={classes.textAbout} >{f(WORDS.ABOUT)}</span>
                <div className={classes.paddingLeft5}></div>
                <span className={classes.textMe}>{f(WORDS.ME)}</span>
            </div>
        );
    }, []);
    
    const textAboutMe = useMemo(() => {
        const firstPice = WORDS.AVOUT_ME.split('__')[0];
        const secondPice = WORDS.AVOUT_ME.split('__')[1];
        return (
            <Fragment>
                <p className={classes.textAboutMe} >{firstPice} </p>
                <div className={classes.padding10} />
                <p className={classes.textAboutMe}>{secondPice}</p>
                <div className={classes.padding20} />
            </Fragment>
        )
    },[]);

    return (
        <div className={classes.wrapperAbout} >
            {title}
            <div className={classes.padding20}></div>
            <div>
                {textAboutMe}
                <DownloadCv />
            </div>
        </div>
    );
};

export { About };