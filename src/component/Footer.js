import React from 'react';
import '../index';
import { IoLogoInstagram, IoMdMail, IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io";

const Links = () => (
  <div className="bottom-layout">
    <a href="https://chat.whatsapp.com/KLBaI4SmMnQ7A88kKwwBRk" target="black"><IoLogoWhatsapp/></a>
    <a href="https://www.instagram.com/sajaksenja_2019" target="blank"><IoLogoInstagram/></a>
    <a href="https://www.youtube.com/channel/UC_dU_UaDCKeXzy2YCi4gtCA" target="blank"><IoLogoYoutube/></a>
    <a href="mailto:pecintasenja17@gmail.com"><IoMdMail/></a>
  </div>
);

export default Links;
