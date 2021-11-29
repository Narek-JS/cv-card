import { useMemo } from 'react';
import { WORDS } from '../../../consts/words';
import { EDUCATION } from '../../../consts/education';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import classes from './style.module.css';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {

    const verticals = useMemo(() => {
        return EDUCATION.map((element, i) => (
                <VerticalTimelineElement
                    key={i}
                    contentStyle={element.contentStyle}
                    contentArrowStyle={element.contentArrowStyle}
                    iconStyle={element.iconStyle}
                    date={element.date}
                    icon={element.icon}
                >
                    <h3>{element.name}</h3>
                    <div className={classes.padding15} />
                    <div className={classes.flex}>
                        <div>
                            <div className={classes.rounderDiv}/>
                        </div>
                        <div className={classes.paddingLeft10}/>
                        <span className={classes.textAboutEducation} children={element.info} />
                    </div>
                </VerticalTimelineElement>
            )
        );
    }, []); 

    return (
        <div className={classes.divEducation} >
            <h2> {WORDS.EDUCATION} </h2>
            <div className={classes.padding20} />
            <VerticalTimeline children={verticals} />
        </div>
    );
};

export { Education };