import { About } from "./About";
import { Main } from "./Main";
import { Info } from "./Info";

import classes from './style.module.css';

const Home = () => {

    return (
        <div className={classes.rounder}> 
            <Main />
            <div className={classes.wrappereAboutInfo}>
                <About/>
                <Info/>
            </div>
        </div>
    );
};

export default Home;