import { ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import guadaye from '../assets/images/guadaye1.png';
import addisCart from '../assets/images/addis_cart.png';
import graceLink from '../assets/images/grace_link.png';
import resumeBuilder from '../assets/images/resume_builder.png';
import geniusnu from '../assets/images/geniusnu-1.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Geniusnu AI-powered English learning Mobile App",
    description: "Geniusnu is AI-powered english learning mobile app that leverages advanced artificial intelligence technology to provide personalized language learning experiences. The app offers realtime conversation with ai tutor called Annie, interactive lessons, and adaptive learning paths to help users improve their English skills effectively.",
    image: geniusnu,
    link: "https://apps.apple.com/us/app/geniusnu/id6752221023"
  },
  {
    id: 2,
    title: "Resume Builder Mobile App",
    description: "Resume Builder is a user-friendly mobile app that helps users create professional resumes quickly and easily. With customizable templates, intuitive editing tools, and export options, this app simplifies the resume creation process for job seekers.",
    image: resumeBuilder,
    link: "https://github.com/Yihun-Alemayehu/Resume-builder"
  },
  {
    id: 3,
    title: "Guadaye Home Rent Mobile App",
    description: "Guadaye is a cutting-edge mobile app that revolutionizes the home rental process. The app simplifies the complicated process of finding, viewing, and managing apartment-like accommodations by providing intuitive tools.",
    image: guadaye,
    link: "https://github.com/Yihun-Alemayehu/Guadaye-RentHub"
  },
  {
    id: 4,
    title: "Addis Cart E-commerce Mobile App",
    description: "Addis Cart is a powerful e-commerce app designed for the Addis market. This feature-packed app provides convenient shopping, browsing, payment processing, and order tracking capabilities for customers seeking a modern shopping experience.",
    image: addisCart,
    link: "https://github.com/Yihun-Alemayehu/Addis-Cart"
  },
  {
    id: 5,
    title: "Grace-Link Mobile App",
    description: "Grace Link is a progressive social media app designed to help communities connect and engage. This platform offers messaging features, media sharing, and a dedicated space for faith-based discussions, events, and community collaboration.",
    image: graceLink,
    link: "https://github.com/Yihun-Alemayehu/Grace-Link"
  }
];

const Projects = () => {
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

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.classList.remove('fade-in');
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-subtitle">Check out my work</p>
          <h2 className="section-title section-title-underline">My Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-lg overflow-hidden opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Details
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;