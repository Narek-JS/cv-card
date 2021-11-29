import classes from './style.module.css';
import cv from '../../assets/cv/Narek CV.pdf';
import { WORDS } from '../../consts/words';

const DownloadCv = () => {
 
    return  <a  
                href={cv} 
                download={WORDS.TEXTDOWNLOADCV}
                className={classes.downloadCv}
                children={WORDS.DOWNLOAD}
            />
};

export { DownloadCv };