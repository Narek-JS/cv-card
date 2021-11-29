import { BsAwardFill, BsFillGeoAltFill, BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from 'react-icons/ai';
import { WORDS } from "./words";

export const INFO_ITEMS = [
    {
        name: WORDS.AGE,
        value: WORDS.MYAGE,
        icon: <BsAwardFill/>,
    },
    {
        name: WORDS.ADDRESS,
        value:WORDS.MY_ADDRESS,
        icon: <BsFillGeoAltFill />,
    },
    {
        name: WORDS.PHONE,
        value: WORDS.PHONE_NUMBER,
        icon: <BsTelephoneFill />,
    },
    {
        name: WORDS.EMAIL,
        value: WORDS.EMAIL_ADDRESS,
        icon: <AiOutlineMail />,
    },
];