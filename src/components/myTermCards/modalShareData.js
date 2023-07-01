import { BsWhatsapp, BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const modalShareData = [
  {
    id: 1,
    link: "https://web.whatsapp.com/",
    name: "whatsapp",
    icon: <BsWhatsapp />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/shubham-kumar-a065a3263/",
    name: "linkedin",
    icon: <BsLinkedin />,
  },
  {
    id: 3,
    link: "https://www.facebook.com/",
    name: "facebook",
    icon: <BsFacebook />,
  },
  {
    id: 4,
    link: "https://twitter.com/",
    name: "twitter",
    icon: <BsTwitter />,
  },
  {
    id: 5,
    link: "https://gmail.com/",
    name: "email",
    icon: <HiMail />,
  },
];

export default modalShareData;
