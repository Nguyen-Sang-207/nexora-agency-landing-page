
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="bg-silver pt-32 pb-16 md:py-48 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 md:order-1 text-center md:text-left animate-in slide-in-from-left duration-700">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-secondary">
            Lessons and insights <br />
            <span className="text-primary font-bold">from 8 years</span>
          </h1>
          <p className="text-neutralGrey text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            Where to grow your business as a photographer: site or social media? Nexora provides the tools to manage your members effortlessly.
          </p>
          <Link
            href="/register"
            className="inline-block px-10 py-4 bg-primary text-white rounded-md font-bold text-lg hover:brightness-105 hover:-translate-y-0.5 transition-all shadow-xl shadow-primary/20 hover:shadow-2xl active:scale-95"
          >
            Register Now
          </Link>
        </div>

        <div className="order-1 md:order-2 flex justify-center animate-in zoom-in duration-700">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
            alt="Hero Business Team"
            width={500}
            height={500}
            priority
            className="w-full max-w-[500px] h-auto rounded-3xl shadow-2xl border-4 border-white object-cover aspect-square"
          />
        </div>
      </div>

      <div className="mt-16 flex justify-center space-x-3">
        <div className="w-10 h-2.5 bg-primary rounded-full cursor-pointer"></div>
        <div className="w-2.5 h-2.5 bg-primary/20 rounded-full cursor-pointer hover:bg-primary/40 transition-colors"></div>
        <div className="w-2.5 h-2.5 bg-primary/20 rounded-full cursor-pointer hover:bg-primary/40 transition-colors"></div>
      </div>
    </section>
  );
};

export default Hero;
