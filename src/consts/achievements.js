import IMG_University from '../assets/images/codeTimeLogo.png'
import { currentFullDate } from '../utiles/date';
 
export const ACHIEVEMENTS = [
    {
        contentStyle:{ background: 'nune', border:'2px solid rgba(46,202,127)' },
        contentArrowStyle: { borderRight: '7px solid  rgba(46,202,127)' },
        iconStyle:{ background: '#FFFFFF', color: '#fff' },
        name: 'CodeTime',
        date: "31.10.2021 - " + currentFullDate(),
        info: 'I am working in codeTime company as javaScript, React developer',
        icon: <img src={IMG_University} style={{width:'100%'}} />,
    }
];