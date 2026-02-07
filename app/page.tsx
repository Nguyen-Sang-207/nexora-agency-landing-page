
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Community from '@/components/Community';
import InfoSection from '@/components/InfoSection';
import Stats from '@/components/Stats';
import Testimonial from '@/components/Testimonial';
import Blog from '@/components/Blog';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="flex-grow">
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Clients />
        <Community />
      </section>
      <InfoSection
        id="about"
        title="The unseen of spending three years at Pixelgrade"
        description="We've spent the last decade perfecting the balance between intuitive design and technical robustness. Our journey began with a simple mission: to empower local businesses through high-quality digital solutions that don't compromise on performance."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        buttonText="Learn More"
        reverse={false}
        actionLink="/register"
      />
      <Stats />
      <InfoSection
        id="product"
        title="How to design your site footer like we did"
        description="Design isn't just about how it looks; it's about how it works. A well-structured footer can be the difference between a bounce and a conversion. We follow industry best practices to ensure your site's architecture is as efficient as it is beautiful."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        buttonText="Learn More"
        reverse={true}
        actionLink="/register"
      />
      <Testimonial />
      <section id="blog">
        <Blog />
      </section>
      <ContactForm />
    </main>
  );
}
