
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import Link from 'next/link';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="bg-silver py-24 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <h2 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h2>

        <Link
          href="/register"
          className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-white rounded-md font-bold text-lg hover:brightness-105 hover:-translate-y-0.5 transition-all shadow-xl shadow-primary/20 hover:shadow-2xl active:scale-95"
        >
          Get a Demo <ArrowRight size={22} />
        </Link>

        <div className="pt-8 text-neutralGrey flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 font-medium"><CheckCircle2 size={18} className="text-primary" /> 14-day free trial</div>
          <div className="flex items-center gap-2 font-medium"><CheckCircle2 size={18} className="text-primary" /> No credit card required</div>
          <div className="flex items-center gap-2 font-medium"><CheckCircle2 size={18} className="text-primary" /> Expert setup</div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
