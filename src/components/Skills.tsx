import { useEffect } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "Flutter", percentage: 90 },
  { name: "NodeJS", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "CSS", percentage: 80 },
  { name: "ReactJS", percentage: 80 },
  { name: "PHP", percentage: 60 },
  { name: "UI/UX", percentage: 85 },
  { name: "Java", percentage: 60 },
];

const MySkills = () => {
  const halfLength = Math.ceil(skills.length / 2);
  const firstColumn = skills.slice(0, halfLength);
  const secondColumn = skills.slice(halfLength);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.skill-progress');
          progressBars.forEach(bar => {
            if (bar instanceof HTMLElement) {
              bar.style.setProperty('--percent', `${bar.dataset.percent}%`);
            }
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const skillSection = document.getElementById('skills-container');
    if (skillSection) {
      observer.observe(skillSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-subtitle">What I know</p>
          <h2 className="section-title section-title-underline">My skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12" id="skills-container">
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-6">My creative skills & experiences</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              As a skilled software Engineer, I have developed a unique set of creative skills that allow me to approach programming challenges in innovative ways. My experiences in data structures and algorithm have taught me the importance of thinking outside the box and exploring new possibilities. With my expertise, I can help businesses and organizations develop cutting-edge software solutions that will give them a competitive edge. By leveraging my creative skills and experiences in Technology, I can help you achieve your goals and take your projects to the next level.
            </p>
            <a href="#projects" className="btn-primary">Read more</a>
          </div>
          
          <div className="grid grid-cols-1 gap-4 fade-in fade-in-delay-1">
            {skills.map((skill, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    data-percent={`${skill.percentage}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;