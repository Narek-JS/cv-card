
// const Achievements = () => {
//     return (
//         <Fragment>

//         </Fragment>
//     );
// };

// export { Achievements }



import { useMemo } from 'react';
import { WORDS } from '../../../consts/words';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { ACHIEVEMENTS } from '../../../consts/achievements';

import classes from './style.module.css';
import 'react-vertical-timeline-component/style.min.css';

const Achievements = () => {

    const verticals = useMemo(() => {
        return ACHIEVEMENTS.map((element, index) => (
                <VerticalTimelineElement
                    key={index}
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
            <h2> {WORDS.ACHIEVEMENTS} </h2>
            <div className={classes.padding20} />
            <VerticalTimeline children={verticals} />
        </div>
    );
};

export { Achievements };