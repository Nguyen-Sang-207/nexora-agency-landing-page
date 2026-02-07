"use client";

import React from 'react';
import { Instagram, Twitter, Youtube, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Footer: React.FC = () => {
  const router = useRouter();

  const scrollTo = (id: string) => {
    router.push(`/#${id}`);
  };

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <Link href="/" className="flex items-center space-x-2 cursor-pointer group">
            <svg width="30" height="25" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-6 transition-transform">
              <path d="M12 0L24 0L12 15L0 30L12 0Z" fill="#4CAF4F" />
              <path d="M23 0L35 0L23 15L11 30L23 0Z" fill="white" opacity="0.8" />
            </svg>
            <span className="text-3xl font-bold tracking-tight">Nexora</span>
          </Link>
          <div className="space-y-2 opacity-80">
            <p>Copyright © 2026 Nexora.</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Follow us on Instagram" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Follow us on Twitter" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Subscribe to our YouTube channel" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold">Company</h3>
          <ul className="space-y-4 opacity-70">
            <li><button onClick={() => scrollTo('about')} className="hover:text-primary transition-colors text-left w-full">About us</button></li>
            <li><button onClick={() => scrollTo('blog')} className="hover:text-primary transition-colors text-left w-full">Blog</button></li>
            <li><button onClick={() => scrollTo('contact')} className="hover:text-primary transition-colors text-left w-full">Pricing</button></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold">Support</h3>
          <ul className="space-y-4 opacity-70">
            <li><a href="#" className="hover:text-primary transition-colors">Help center</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of service</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Legal</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold">Stay up to date</h3>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address for newsletter"
              className="w-full bg-white/10 border-none rounded-lg px-4 py-4 pr-14 text-white placeholder:text-white/40 focus:ring-1 focus:ring-primary outline-none transition-all"
            />
            <button aria-label="Subscribe to newsletter" className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/10">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
