
import { DownloadCv } from '..';
import { Education } from './Education';
import { WrapperSkills } from './WrapperSkills';
import { WORDS } from '../../consts/words';
import { Achievements } from './Achievements';

import classes from './style.module.css';
import { useContext, useEffect } from 'react';
import { CheckResumeRouteContext } from '../../context/checkResumeRoute';

const Resume = () => {
    const { setValue } = useContext(CheckResumeRouteContext);
    
    useEffect(() => {
        setValue(false);
    }, [])

    return (
        <div className={classes.rounder}>
            <div>
                <div className={classes.wrrapperTextRasume}>
                    <h2 className={classes.textRasume}>{WORDS.RESUME}</h2>
                </div>
                <WrapperSkills />
            </div>
            <div className={classes.padding50} />
            <Achievements />
            <Education />
            <div className={classes.wrapperDownloadCv} children={<DownloadCv  />} />
        </div>
    );
};

export default Resume;