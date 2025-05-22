import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [Year, setYear] = useState();
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white pt-10 pb-6 text-black border-t border-gray-300">
      <div className="nike-container max-w-6xl mx-auto px-4">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-black uppercase tracking-wide">About Zivora</h3>
            <p className="text-gray-700">
              Zivora is a premium lifestyle brand offering handcrafted sneakers, apparel, and accessories. Our goal is to blend fashion with comfort and sustainability.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-black uppercase tracking-wide">Contact</h3>
            <ul className="space-y-1 text-gray-700">
              {/* <li>Email: support@zivora.com</li> */}
              <li>Phone: +91 9721080912</li>
              <li>Badi Masjid Gali,Khetasarai-jaunpur</li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-black uppercase tracking-wide">Policies</h3>
            <ul className="space-y-1 text-gray-700">
              <li>Shipping & Returns</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-10 pt-4 text-center text-gray-600 text-xs">
          <p>
            © {Year} <span className="text-black font-semibold">Zivora</span>. All rights reserved. Crafted with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
