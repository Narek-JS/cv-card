
import classes from './style.module.css';

const Container = ({ children }) => {

    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};

export { Container };