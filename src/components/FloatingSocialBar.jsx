import React from 'react';
import { FaMapMarkerAlt, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const FloatingSocialBar = () => {
  return (
    <div className="fixed top-1/3 right-4 flex flex-col gap-4 z-50">
      {/* Location */}
      <a
        href="https://www.google.com/maps/place/Badi+masjid/@25.7591561,82.6824561,17z/data=!3m1!4b1!4m6!3m5!1s0x39903bd6939608df:0x93fe253f6cd9d439!8m2!3d25.7591513!4d82.685031!16s%2Fg%2F1ttpf8yx?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-theme p-2 rounded-full shadow-lg hover:bg-slate-600 text-slate-200 hover:text-white transition"
      >
        <FaMapMarkerAlt size={20} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/zivoraofficials/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-theme p-2 rounded-full shadow-lg hover:bg-slate-600 text-slate-200 hover:text-white transition"
      >
        <FaInstagram size={20} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61576072876326"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-theme p-2 rounded-full shadow-lg hover:bg-slate-600 text-slate-200 hover:text-white transition"
      >
        <FaFacebookF size={20} />
      </a>

      {/* WhatsApp (now consistent with others) */}
      <a
        href="https://wa.me/919721080912"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-theme p-2 rounded-full shadow-lg hover:bg-green-600 text-slate-200 hover:text-white transition"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};

export default FloatingSocialBar;
