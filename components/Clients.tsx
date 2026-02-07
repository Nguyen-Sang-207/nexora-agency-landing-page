"use client";

import React from 'react';

const Clients: React.FC = () => {
  // Danh sách khách hàng với slug Simple Icons và màu sắc thương hiệu đặc trưng
  const clients = [
    { name: 'HubSpot', icon: 'hubspot', color: '#ff7a59' },
    { name: 'Slack', icon: 'slack', color: '#4a154b' },
    { name: 'Dropbox', icon: 'dropbox', color: '#0061ff' },
    { name: 'Zoom', icon: 'zoom', color: '#2d8cff' },
    { name: 'Shopify', icon: 'shopify', color: '#96bf48' },
    { name: 'Intercom', icon: 'intercom', color: '#000000' }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-secondary">Our Clients</h2>
        <p className="text-neutralGrey mt-2">We have been working with some Fortune 500+ clients</p>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {clients.map((client, i) => (
            <div
              key={i}
              className="group relative h-10 md:h-12 flex items-center justify-center cursor-pointer transition-all duration-500"
              style={{ '--brand-color': client.color } as React.CSSProperties}
            >
              <img
                src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${client.icon}.svg`}
                alt={client.name}
                className="max-w-full h-full object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                style={{
                  filter: 'grayscale(100%) brightness(0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%) brightness(1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%) brightness(0.5)';
                }}
                onError={(e) => {
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    e.currentTarget.style.display = 'none';
                    const span = document.createElement('span');
                    span.innerText = client.name;
                    span.className = 'text-xl font-bold text-secondary opacity-30 group-hover:opacity-100 transition-opacity';
                    parent.appendChild(span);
                  }
                }}
              />
              {/* Hiệu ứng bóng đổ màu sắc phía sau logo khi hover */}
              <div className="absolute inset-0 -z-10 bg-[var(--brand-color)] opacity-0 group-hover:opacity-10 blur-xl rounded-full transition-opacity duration-500 scale-150"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
