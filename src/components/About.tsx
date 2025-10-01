import { ArrowRight } from 'lucide-react';
import profilePic from '../assets/images/yihun-alemayehu.jpg';
import resume from '../assets/cv/Yihun-Alemayehu-resume-genl-01.pdf';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-subtitle">Get to know me</p>
          <h2 className="section-title section-title-underline">About me</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="w-64 h-80 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src={profilePic}
                alt="Yihun Alemayehu" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-semibold mb-4">I'm Yihun Alemayehu, and I'm a <span className="text-blue-600">Flutter Developer</span></h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Highly experienced, solutions-oriented professional with 3+ years of remarkable background in overseeing all aspects of the Software Development Life Cycle, Full-stack web-development, Mobile app development, Graphics design and video editing. Proficient in utilizing a wide variety of programs and tools to provide high-quality and cost-effective applications/systems to boost organizational efficiency and productivity.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <p className="text-gray-500 mb-1">Name:</p>
                <p className="font-medium">Yihun Alemayehu</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Email:</p>
                <p className="font-medium">yankure01@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Phone:</p>
                <p className="font-medium">+251 982 394 038</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Location:</p>
                <p className="font-medium">Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <a href={resume} className="btn-primary">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;