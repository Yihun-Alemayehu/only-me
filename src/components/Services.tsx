import { Code, Palette, Smartphone } from 'lucide-react';
import { useEffect } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Mobile App Development",
    description: "From idea to launch, bringing your vision to life with powerful, user-friendly mobile applications for iOS & Android.",
    icon: <Smartphone className="h-10 w-10" />
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Creating impactful business logos, website designs, mobile application designs, and graphic design solutions.",
    icon: <Palette className="h-10 w-10" />
  },
  
  {
    id: 3,
    title: "Web Development",
    description: "Building responsive websites from the ground up using the latest technologies to create fast, scalable, and user-friendly sites.",
    icon: <Code className="h-10 w-10" />
  }
  
];

const Services = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      card.classList.remove('fade-in');
      (card as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-subtitle">What I offer</p>
          <h2 className="section-title section-title-underline">My services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card opacity-0">
              <div className="service-card-icon">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;