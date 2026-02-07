"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Testimonial: React.FC = () => {
  const brands = [
    { name: 'Tesla', icon: 'tesla', color: '#cc0000' },
    { name: 'Microsoft', icon: 'microsoft', color: '#00a4ef' },
    { name: 'Google', icon: 'google', color: '#4285f4' },
    { name: 'Apple', icon: 'apple', color: '#000000' },
    { name: 'Amazon', icon: 'amazon', color: '#ff9900' }
  ];

  return (
    <section className="bg-silver py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-full max-w-[320px] aspect-square overflow-hidden rounded-2xl shadow-lg border-4 border-white bg-white">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80&crop=faces&facepad=2.5"
              alt="Tim Smith"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover object-top"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 space-y-6">
          <p className="text-neutralGrey text-lg md:text-xl leading-relaxed font-medium italic">
            "Nexora has completely transformed how we manage our member base. The automation features for renewals have saved us countless hours of manual work every month. Maecenas dignissim justo eget nulla rutrum molestie. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim."
          </p>
          <div>
            <h4 className="text-xl font-bold text-primary">Tim Smith</h4>
            <p className="text-neutralGrey">British Dragon Boat Racing Association</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-10 pt-4">
            {brands.map((brand, i) => (
              <div key={i} className="group relative flex items-center cursor-pointer">
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${brand.icon}.svg`}
                  alt={brand.name}
                  className="h-6 md:h-8 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                  style={{ filter: 'grayscale(100%)' }}
                  onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                  onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                  onError={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      e.currentTarget.style.display = 'none';
                      const span = document.createElement('span');
                      span.innerText = brand.name;
                      span.className = 'text-sm font-bold text-secondary opacity-30';
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            ))}
            <button className="flex items-center gap-2 text-primary font-bold hover:translate-x-1 transition-transform group ml-auto md:ml-0">
              Meet all customers <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
