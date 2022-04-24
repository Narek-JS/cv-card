import { useContext, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WORDS } from '../../consts/words';
import { CheckResumeRouteContext } from '../../context/checkResumeRoute';
import { Container } from '../Container';

import classes from './style.module.css';

const Header = () => {
    const { pathname } = useLocation();
    const { checkResumeRoute } = useContext(CheckResumeRouteContext);

    const fullName = useMemo(() => (
        <div>
            <span className={classes.Name}>{WORDS.FIRST_NAME}</span>
            <span className={classes.lastName}>{WORDS.LAST_NAME}</span>
        </div>
    ),[]);
    
    return (
        <header className={classes.HomeHeader}>
            <Container>
                <div className={classes.divInHeader}>
                    <Link to="/" className={classes.linkToHome} children={fullName} />
                    <nav>
                        <Link to="/" className={classes.linkToHome} > 
                            <span className={`${classes.HomeText} ${pathname === '/' ? classes.row: ''}` } >{WORDS.HOME}</span>                        
                        </Link>
                        <Link to='/resume' className={classes.linkToResume}>
                            <span 
                                className={`
                                    ${classes.ResumeText} 
                                    ${pathname === '/resume' ? classes.row: ''}
                                    ${checkResumeRoute ? classes.activeLink: ''}
                                `} 
                            >{WORDS.RESUME}</span>
                        </Link>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export { Header };