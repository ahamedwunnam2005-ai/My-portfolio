
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SectionHeading from './components/SectionHeading';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import ChatAssistant from './components/ChatAssistant';
import { PORTFOLIO_DATA } from './constants';

const App: React.FC = () => {
  // User provided profile image from GitHub
  const profileImage = "https://github.com/ahamedwunnam2005-ai/Portfolio-assets/blob/main/canva.jpg?raw=true";

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.pageYOffset > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleResumeDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Resume download functionality would be linked to your PDF file here. Currently redirecting to a placeholder.");
  };

  return (
    <div className="min-h-screen relative selection:bg-blue-100 selection:text-blue-900">
      <Navbar onNavItemClick={scrollToSection} />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6 animate-pulse">
                Software Engineering Student
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight mb-6">
                Building the <span className="gradient-text">Future</span> of Code
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Hi, I'm {PORTFOLIO_DATA.name}. I'm passionate about engineering software that makes a difference. Currently a Level 200 student at GCTU.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-500/25 hover:bg-blue-700 hover:-translate-y-1 active:scale-95 transition-all"
                >
                  View Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold shadow-lg hover:bg-slate-50 hover:-translate-y-1 active:scale-95 transition-all"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative z-10">
                <div className="absolute inset-0 bg-blue-600 rounded-full rotate-6 -z-10 opacity-10 blur-xl"></div>
                <img 
                  src={profileImage} 
                  alt={PORTFOLIO_DATA.name} 
                  className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-slate-500/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeading title="Student Profile" subtitle="Academic background and personal mission in technology." />
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">About Me</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {PORTFOLIO_DATA.bio}
              </p>
              <div className="space-y-6">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-50 hover:border-blue-100 hover:bg-slate-50 transition-all group">
                    <div className="mt-1 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                      <p className="text-sm text-blue-600 font-medium">{edu.institution} | {edu.period}</p>
                      <p className="text-sm text-slate-500 mt-1">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">Level</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">200</div>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg text-center">
                  <div className="text-3xl font-bold text-white mb-1">5+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Core Skills</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-600 p-6 rounded-2xl shadow-lg shadow-blue-500/20 text-center">
                  <div className="text-3xl font-bold text-white mb-1">4.0</div>
                  <div className="text-xs font-bold text-blue-100 uppercase tracking-widest">Dedication</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Projects" 
            subtitle="Explore some of the technical challenges I've tackled during my studies." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeading title="Experience" subtitle="My professional and academic journey." />
          <div className="max-w-4xl mx-auto space-y-12">
            {PORTFOLIO_DATA.experience.map((exp) => (
              <div key={exp.id} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-200">
                <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-blue-600 border-2 border-white"></div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-blue-600 font-semibold">{exp.organization}</p>
                  </div>
                  <span className="px-4 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-slate-600 flex gap-3">
                      <span className="text-blue-500 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeading title="Technical Toolkit" subtitle="Technologies and skills I am actively developing." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PORTFOLIO_DATA.skills.map(skill => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <SectionHeading title="Resume & CV" />
            <div className="text-white opacity-80 mb-10 max-w-xl mx-auto -mt-6">
              Download my latest resume to learn more about my technical background, academic achievements, and project history.
            </div>
            
            <a 
              href="#" 
              onClick={handleResumeDownload}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download PDF CV
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeading title="Let's Connect" subtitle="Reach out for collaborations, project discussions, or just to say hi!" />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Email</h4>
                <p className="text-slate-500 text-sm mb-4">Direct professional inquiries</p>
                <span className="text-blue-600 font-semibold text-sm break-all">{PORTFOLIO_DATA.email}</span>
              </a>

              <a 
                href={PORTFOLIO_DATA.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">GitHub</h4>
                <p className="text-slate-500 text-sm mb-4">View my source code</p>
                <span className="text-blue-600 font-semibold text-sm">ahamedwunnam2005-ai</span>
              </a>

              <a 
                href={PORTFOLIO_DATA.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-900 transition-all">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">LinkedIn</h4>
                <p className="text-slate-500 text-sm mb-4">Professional networking</p>
                <span className="text-blue-600 font-semibold text-sm">Ahamed Salim</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <button 
              onClick={() => scrollToSection('home')}
              className="font-serif text-2xl font-bold mb-2 block hover:text-blue-500 transition-colors"
            >
              <span className="text-blue-600">.</span>{PORTFOLIO_DATA.name.split(' ').pop()}
            </button>
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with Precision.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact</button>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 left-6 z-40 p-3 bg-white text-slate-900 rounded-full shadow-2xl border border-slate-100 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'} hover:bg-blue-600 hover:text-white`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
      </button>

      <ChatAssistant />
    </div>
  );
};

export default App;
