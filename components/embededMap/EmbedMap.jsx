'use client';

import { Box } from "../ui/box";

export default function MapEmbed() {
  return (
    <Box className=" w-[100%] h-[300px] sm:h-[400px] md:h-[100%] overflow-hidden rounded-lg shadow-lg">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.79151993860117!2d89.5483991817237!3d22.807927757102078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff855513719a15%3A0x1238fdb92e036604!2sKhanjahan%20Ali%20Rahmatullah%20Jame%20Masjid!5e1!3m2!1sen!2sbd!4v1760727291175!5m2!1sen!2sbd"
        width="100%" height="100%"
        allowFullScreen loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </Box>
  );
}

