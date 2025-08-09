"use client";

import { useState, useEffect } from "react";
import { Home, Calendar, Mail, Info, Heart } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  targetId: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

function NavItem({ icon, label, targetId, onClick }: NavItemProps) {
  return (
    <a
      href={`#${targetId}`}
      onClick={(e) => onClick(e, targetId)}
      className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition-colors duration-300"
    >
      {icon}
      <span className="text-xs">{label}</span>
    </a>
  );
}

export default function NavbarBawah() {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hovering, setHovering] = useState(false);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50 && !hovering) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hovering]);

  // Smooth scroll handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed bottom-0 left-0 w-full bg-white shadow-md border-t z-50 transition-transform duration-300 ${
        hideNavbar ? "translate-y-full" : "translate-y-0"
      }`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="flex justify-around items-center py-2">
        <NavItem
          icon={<Home size={20} />}
          label="Beranda"
          targetId="beranda"
          onClick={handleNavClick}
        />
        <NavItem
          icon={<Heart size={20} />}
          label="Couple"
          targetId="couple"
          onClick={handleNavClick}
        />
        <NavItem
          icon={<Calendar size={20} />}
          label="Acara"
          targetId="acara"
          onClick={handleNavClick}
        />
        <NavItem
          icon={<Mail size={20} />}
          label="Ucapan"
          targetId="ucapan"
          onClick={handleNavClick}
        />
        <NavItem
          icon={<Info size={20} />}
          label="Info"
          targetId="info"
          onClick={handleNavClick}
        />
      </div>
    </nav>
  );
}
