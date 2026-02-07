
import React from 'react';
import { Layers, Globe, MousePointer2, Smartphone, ShieldCheck, BarChart3 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="text-primary" size={32} />,
      title: "Web Ecosystems",
      desc: "Comprehensive web platforms built for reliability and global reach."
    },
    {
      icon: <Smartphone className="text-primary" size={32} />,
      title: "Mobile First",
      desc: "Native and cross-platform mobile experiences that engage users on the go."
    },
    {
      icon: <Layers className="text-primary" size={32} />,
      title: "UI/UX Strategy",
      desc: "User-centric design systems that balance aesthetics with intuitive flows."
    },
    {
      icon: <ShieldCheck className="text-primary" size={32} />,
      title: "Digital Security",
      desc: "Enterprise-grade protection for your data and user privacy."
    },
    {
      icon: <BarChart3 className="text-primary" size={32} />,
      title: "Growth Analytics",
      desc: "Data-driven insights to optimize your conversion funnel and ROI."
    },
    {
      icon: <MousePointer2 className="text-primary" size={32} />,
      title: "Managed Growth",
      desc: "Continuous optimization and support to keep you ahead of competition."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight mb-6">
            Comprehensive Digital <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-neutralGrey text-lg">
            We provide a holistic approach to your digital transformation, ensuring every touchpoint of your brand is cohesive and effective.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-premium hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
              <p className="text-neutralGrey leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
