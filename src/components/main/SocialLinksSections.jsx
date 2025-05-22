"use client";

import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaDiscord,
  FaInstagram, 
  FaYoutube
} from "react-icons/fa";

const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/build-with-paradox/",
      name: "GitHub",
      color: "#f5f5f5",
    },
    {
      icon: FaLinkedin,
      url: "https://linkedin.com/in/prashant-bhatt500/",
      name: "LinkedIn",
      color: "#0077B5",
    },
    {
      icon: FaGlobe,
      url: "https://buildwithparadox.com/",
      name: "Portfolio",
      color: "#34D399",
    },
    {
      icon: FaDiscord,
      url: "https://discord.com/invite/CeGW7mkB",
      name: "Discord",
      color: "#5865F2",
    },
    // {
    //   icon: FaYoutube,
    //   url: "https://youtube.com/@yourchannel",
    //   name: "YouTube",
    //   color: "#FF0033",
    // },
    // {
    //   icon: FaInstagram,
    //   url: "https://instagram.com/yourhandle",
    //   name: "Instagram",
    //   color: "#E1306C",
    // },
  ];
  

export default function SocialLinksSection() {
  return (
    <section className="my-20 px-4 lg:px-10">
      <p className="text-3xl font-bold mb-8 text-center text-white">Find me on</p>
      <div className="flex justify-center flex-wrap gap-6">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="bg-zinc-800 border border-zinc-700 transition-all duration-300 shadow-lg rounded-2xl w-16 h-16 flex items-center justify-center text-2xl text-gray-200 transform hover:scale-110"
              style={{
                color: "inherit",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = link.color;
                e.currentTarget.style.boxShadow = `0 0 12px ${link.color}`;
                e.currentTarget.style.borderColor = link.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.borderColor = "#3f3f46"; // zinc-700
              }}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </section>
  );
}
