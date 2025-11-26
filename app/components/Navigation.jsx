"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || "/";

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "DONATE", href: "/donate-food" },
    { label: "REQUEST", href: "/request-food" },
    { label: "DASHBOARD", href: "/dashboard" },
    { label: "ABOUT", href: "/about" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/" || pathname === "" || pathname === "/home";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-6 items-center text-xs xl:text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.href} className="relative">
            <a
              href={item.href}
              className={`hover:text-cyan-400 transition whitespace-nowrap inline-block px-1 py-1 ${
                isActive(item.href) ? "text-cyan-400 font-semibold" : "text-white"
              }`}
            >
              {item.label}
              {/* Animated underline */}
              <span
                aria-hidden
                style={{
                  display: "block",
                  height: 3,
                  background: "linear-gradient(90deg,#00d4ff,#00a3cc)",
                  transform: isActive(item.href) ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 260ms cubic-bezier(.2,.9,.3,1)",
                  marginTop: 6,
                }}
              />
            </a>
          </li>
        ))}
        <li>
          <a
            href="/auth"
            className="border border-cyan-400 px-3 py-1.5 rounded hover:bg-cyan-400 hover:text-black transition whitespace-nowrap"
          >
            LOGIN
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-md border border-zinc-800 rounded shadow-lg z-50 lg:hidden">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`block px-6 py-3 text-sm transition border-b border-zinc-700 last:border-b-0 ${
                    isActive(item.href) ? "bg-cyan-400/10 text-cyan-400 font-semibold" : "hover:bg-cyan-400/10 hover:text-cyan-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/auth"
                className="block px-6 py-3 text-sm border-t border-zinc-700 hover:bg-cyan-400/10 hover:text-cyan-400 transition font-semibold"
                onClick={() => setIsOpen(false)}
              >
                LOGIN
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
