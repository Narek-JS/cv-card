import IMG_University from '../assets/images/University.png'
import IMG_Military from '../assets/images/Military.jpg';



export const EDUCATION = [
    {
        contentStyle:{ background: 'nune', border:'2px solid rgba(46,202,127)' },
        contentArrowStyle: { borderRight: '7px solid  rgba(46,202,127)' },
        iconStyle:{ background: '#FFFFFF', color: '#fff' },
        name:'Faculty of Radiophysics',
        date: "2017 - 2021",
        info: 'Bachelor of Science in the Faculty of Radiophysics of Yerevan State University',
        icon: <img src={IMG_University} style={{width:'100%'}} />,
    },
    {
        contentStyle:{ background: 'nune', border:'2px solid rgba(46,202,127)' },
        contentArrowStyle: { borderRight: '7px solid  rgba(46,202,127)' },
        iconStyle: { background: '#FFFFFF', color: '#fff' },
        name: 'Military service',
        date: "2019 - 2021",
        info: '',
        icon:<img src={IMG_Military} style={{width:'100%'}} />
    },
];