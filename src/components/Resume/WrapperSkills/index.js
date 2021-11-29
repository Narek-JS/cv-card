import { useMemo } from 'react';
import { Skill } from '../Skill';
import { SKILLS } from '../../../consts/skills';
import { WORDS } from '../../../consts/words';

import classes from './style.module.css';

const WrapperSkills = () => {
    const title = useMemo(() => (
        <div className={classes.wrapperCodingSkillsText} >
            <span className={classes.codingText} >{WORDS.CODING}</span>
            <div className={classes.paddingLeft5} />
            <span className={classes.skillsText} >{WORDS.SKILLS}</span>
        </div>
    ), []);
    
    const skills = useMemo(() => {
        return SKILLS.map((skill, i) => {
            return (
                <div key={i}>
                    <Skill skill={skill.name} width={skill.percent} />
                    <div className={classes.padding15} />
                </div>
            )
        });
    }, []);
    return (
        <div className={classes.wrapperSkills} >
            {title}
            <div className={classes.padding20} />
            <div className={classes.divGrid} children={skills} />
        </div>
    );
};

export { WrapperSkills };