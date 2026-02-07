
import React from 'react';
import { Users, Building2, UserCircle2 } from 'lucide-react';

const Community: React.FC = () => {
  const cards = [
    {
      icon: <Users className="text-primary" size={48} />,
      title: "Membership Organisations",
      desc: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
      icon: <Building2 className="text-primary" size={48} />,
      title: "National Associations",
      desc: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
      icon: <UserCircle2 className="text-primary" size={48} />,
      title: "Clubs And Groups",
      desc: "Our membership management software provides full automation of membership renewals and payments"
    }
  ];

  return (
    <section id="community" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
            Manage your entire community in a single system
          </h2>
          <p className="text-neutralGrey mt-4">Who is Nexora suitable for?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-soft text-center group hover:shadow-card hover:-translate-y-1 transition-all">
              <div className="inline-flex p-4 rounded-xl bg-primary/5 mb-4 group-hover:bg-primary transition-colors">
                {React.cloneElement(card.icon as React.ReactElement<any>, {
                  className: "group-hover:text-white transition-colors"
                })}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">{card.title}</h3>
              <p className="text-neutralGrey">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
