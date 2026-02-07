
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Blog: React.FC = () => {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
      title: "Creating Streamlined Safeguarding Processes with OneRen"
    },
    {
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&q=80",
      title: "What are your safeguarding responsibilities and how can you manage them?"
    },
    {
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
      title: "Revamping the Membership Model with Triathlon Australia"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">Caring is the new marketing</h2>
        <p className="text-neutralGrey mt-4 max-w-2xl mx-auto leading-relaxed">
          The Nexora blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, and learn from experts.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-y-24 md:gap-8 pb-12">
          {posts.map((post, idx) => (
            <div key={idx} className="relative flex flex-col items-center group cursor-pointer">
              <div className="relative w-full h-64 overflow-hidden rounded-xl shadow-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-12 w-[88%] bg-silver p-6 rounded-lg shadow-card text-center border border-gray-100 transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-lg font-bold text-neutralGrey mb-4 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <button className="flex items-center justify-center gap-2 w-full text-primary font-bold hover:gap-3 transition-all">
                  Readmore <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
