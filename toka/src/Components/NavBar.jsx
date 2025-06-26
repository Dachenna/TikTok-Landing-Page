import {useEffect } from "react";
import { Logo } from "./Logo";

export const NavBar = ({menuOpen, setMenuOpen}) => {

  // This effect is used to toggle/stop the body's overflow style based on the menu state
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  //this is the navigation bar component
  const navItems = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Create",
      href: "#create",
    },
    {
      name: "Trends",
      href: "#trends",
    },
    {
      name: "Collections",
      href: "#collections",
    },
  ];

  return (
    <div>
      <nav className="fixed top-0 w-full z-30 bg-[rgba(210, 120, 210, 0.8)] backdrop-blur-lg border-b border-gray-600 shadow-md">

        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="font-mono text-2xl font-semibold text-white">
             Toka
            </a>
          </div>
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen(prev => !prev)}></div>

        </div>

      </nav>
    </div>
  );
};
