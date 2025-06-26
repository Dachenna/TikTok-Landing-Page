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
      id: 1,
      name: "Home",
      href: "#home",
    },
    {
      id: 2,
      name: "Create",
      href: "#create",
    },
    {
      id: 3,
      name: "Trends",
      href: "#trends",
    },
    {
      id: 4,
      name: "Collections",
      href: "#collections",
    },
  ];

  return (
    <div>
      {/**Navigation section */}
      <nav className="fixed top-0 w-full z-30 bg-gradient-to-bl from-[#2d3a4f] to-[#290439] backdrop-blur-lg border-b border-gray-600 shadow-md">

        <div className="max-w-6xl mx-auto px-2">
          <div className="flex justify-between items-center h-14">
            <a href="#" className="font-mono text-2xl font-semibold text-white">
             Toka
            </a>
          </div>

          {/**Hambuger Icon */}
          <div className="w-10 h-8 absolute  text-white top-6 right-2 cursor-pointer z-30 md:hidden"
            onClick={() => setMenuOpen(prev => !prev)}>
              &#9776;
          </div>

            {/**Navigation menu */}
            
            <div className="hidden md:flex justify-center  space-x-6">
              {navItems.map(index => (
                <div  key={index.id} className="relative -top-9 group">
                  <a 
                    href={index.href} 
                    className="text-gray-300 hover:text-cyan-500 transition-colors"
                  >
                    {index.name}
                  </a>
                </div>
              ))}
            </div>

        </div>

      </nav>
    </div>
  );
};
