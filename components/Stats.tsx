
import React from 'react';
import { Users, Building, Calendar, CreditCard } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { icon: <Users size={32} />, label: 'Members', value: '2,245,341' },
    { icon: <Building size={32} />, label: 'Clubs', value: '46,328' },
    { icon: <Calendar size={32} />, label: 'Event Bookings', value: '828,867' },
    { icon: <CreditCard size={32} />, label: 'Payments', value: '1,926,436' },
  ];

  return (
    <section className="bg-silver py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
            Helping a local <br />
            <span className="text-primary font-bold">business reinvent itself</span>
          </h2>
          <p className="text-neutralGrey mt-4 text-lg">We reached here with our hard work and dedication</p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="text-primary p-2 bg-primary/5 rounded-lg">{stat.icon}</div>
              <div>
                <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                <p className="text-neutralGrey text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
