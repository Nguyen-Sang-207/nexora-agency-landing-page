"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Features', href: 'features' },
    { name: 'About', href: 'about' },
    { name: 'Blog', href: 'blog' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    if (!isHome) {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        // Offset for fixed header
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const Logo = () => (
    <Link href="/" className="flex items-center space-x-2 cursor-pointer group">
      <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-6 transition-transform duration-300">
        <path d="M12 0L24 0L12 15L0 30L12 0Z" fill="#4CAF4F" />
        <path d="M23 0L35 0L23 15L11 30L23 0Z" fill="#263238" opacity="0.8" />
      </svg>
      <span className="text-2xl font-bold text-secondary">Nexora</span>
    </Link>
  );

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-silver/80 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="text-secondary font-medium hover:text-primary transition-colors text-sm uppercase tracking-wide"
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            href="/register"
            className="px-6 py-2.5 bg-primary text-white rounded-md font-medium flex items-center gap-2 hover:brightness-105 hover:-translate-y-0.5 transition-all active:scale-95 shadow-lg shadow-primary/20 hover:shadow-xl"
          >
            Register Now <ArrowRight size={18} />
          </Link>
        </div>

        <button className="lg:hidden text-secondary p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden fixed inset-0 w-full h-screen bg-white z-[60] transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b">
          <Logo />
          <button onClick={() => setIsOpen(false)} className="text-secondary"><X size={32} /></button>
        </div>
        <div className="flex flex-col items-center pt-12 space-y-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="text-2xl font-bold text-secondary hover:text-primary"
            >
              {link.name}
            </button>
          ))}
          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="px-8 py-4 bg-primary text-white rounded-md font-bold text-lg flex items-center gap-2 hover:brightness-105 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Register Now <ArrowRight size={22} />
          </Link>
        </div>
      </div>
    </header>
  );
};


export default Header;

