
import { DownloadCv } from '..';
import { Education } from './Education';
import { WrapperSkills } from './WrapperSkills';
import { WORDS } from '../../consts/words';

import classes from './style.module.css';

const Resume = () => {
    return (
        <div className={classes.rounder}>
            <div>
                <div className={classes.wrrapperTextRasume}>
                    <h2 className={classes.textRasume}>{WORDS.RESUME}</h2>
                </div>
                <WrapperSkills />
            </div>
            <div className={classes.padding50} />
            <Education />
            <div className={classes.wrapperDownloadCv} children={<DownloadCv  />} />
        </div>
    );
};

export default Resume;