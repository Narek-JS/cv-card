
import { useMemo } from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { WORDS } from "../../../consts/words";
import classes from './style.module.css';

const Main = () => {
    
    const fullName = useMemo(() => (
        <h2 
            children={`${WORDS.FIRST_NAME} ${WORDS.LAST_NAME}`} 
            className={classes.myName}
        />
    ), []);

    return (
        <div className={classes.aboveSection}>
            <div className={classes.divInSection}>
                <div className={classes.wrrapperMyImg}>
                    <div className={classes.myImg}></div>
                </div>
                <div className={classes.textCenter}>
                    {fullName}
                    <div className={classes.pd2} />
                    <p className={classes.myDegree}>{WORDS.POSSITION}</p>
                    <div className={classes.pd4} />
                    <div>
                        <a  href={WORDS.LINKDIN_URL}
                            target="_blank" 
                            className={classes.linkToLinkdin}
                            children={<AiFillLinkedin />}
                        />
                        <a  href={WORDS.GITHUB_URL}
                            target="_blank" 
                            className={classes.linkToGithubn}
                            children={<AiOutlineGithub />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Main };