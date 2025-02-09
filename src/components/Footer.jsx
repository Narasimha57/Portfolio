import React from 'react';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Instagram size={24} />,
      href: "https://www.instagram.com/nara_simhaa_?igsh=M3RoeG9zaG12Nmd3",
      label: "Instagram"
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/narasimha-g-0667b4243",
      label: "LinkedIn"
    },
    {
      icon: <Github size={24} />,
      href: "https://github.com/Narasimha57",
      label: "GitHub"
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:narasimhagonela@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-white to-yellow-50 text-black-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors duration-300 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-black-900">
            © {new Date().getFullYear()} Narasimha Gonela. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;