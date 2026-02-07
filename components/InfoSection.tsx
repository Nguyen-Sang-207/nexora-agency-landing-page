"use client";

import Link from 'next/link';
import Image from 'next/image';

interface InfoSectionProps {
  id?: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  reverse?: boolean;
  actionLink?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ id, title, description, image, buttonText, reverse, actionLink }) => {

  return (
    <section id={id} className="py-20 md:py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
          <div className="w-full md:w-1/2 group">
            <div className="relative h-[400px] w-full">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl shadow-premium transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
              {title}
            </h2>
            <p className="text-neutralGrey text-lg leading-relaxed">
              {description}
            </p>
            {actionLink ? (
              <Link
                href={actionLink}
                className="inline-block px-8 py-3 bg-primary text-white rounded-md font-medium hover:brightness-105 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                {buttonText}
              </Link>
            ) : (
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:brightness-105 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
