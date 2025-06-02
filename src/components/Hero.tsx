import { ArrowRight } from 'lucide-react';
import profilePic from '../assets/images/yihun-alemayehu.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 min-h-screen flex items-center">
      <div className="container-custom">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-10 mt-10 md:mt-0">
            <p className="text-blue-600 font-medium mb-2 fade-in">Hello, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 fade-in fade-in-delay-1">
              Yihun Alemayehu
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-600 mb-6 fade-in fade-in-delay-2">
              And I'm a <span className="text-blue-600 font-medium">Flutter Developer</span>
            </h2>
            <div className="flex gap-4 fade-in fade-in-delay-3">
              <a href="#contact" className="btn-primary">
                Hire me
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#about" className="btn-secondary">
                Learn more
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center fade-in fade-in-delay-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <img
                  src={profilePic}
                  alt="Yihun Alemayehu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;