import classes from './style.module.css';

const Skill = (props) => {
    const { skill, width } = props;
    
    return (
        <div>
            <p className={classes.skillText} children={skill} />
            <div className={classes.padding5} />
            <div className={classes.divShadow}>
                <div className={classes.divInShadow} style={{width:width}} />  
            </div> 
        </div>
    );
};

export { Skill };