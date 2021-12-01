import React from "react";

import "./Footer.css";

const Footer = () => {
  const links = ["about", "skincare", "makeup", "supplements", "contact"];
  return (
    <footer className="bg-black text-light  p-4 flex justify-between">
      <a className="text-2xl text-yellow font-krona">Welly</a>
      <div className="flex items-center">
        {links.map((link, index) => (
          <a key={`${link}-${index}`} href="#" className="ml-4">
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
