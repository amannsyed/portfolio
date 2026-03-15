
import React from 'react';
import { Mail, Github, Linkedin, BookOpen, Rocket, GraduationCap, MapPin } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ExperienceItem from './components/ExperienceItem';
import SkillsSection from './components/SkillsSection';
import { EXPERIENCES, EDUCATIONS, PROJECTS, PUBLICATIONS, VOLUNTEERING, PERSONAL_INFO, CERTIFICATIONS } from './constants';

const App: React.FC = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-fade').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navigation />
      
      <main>
        <Hero />

        <section id="about" className="py-24 px-6 bg-slate-50 section-fade scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              About
              <div className="h-px bg-slate-200 flex-grow"></div>
            </h2>
            <div className="prose prose-lg prose-slate max-w-none">
              {PERSONAL_INFO.about.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 px-6 section-fade">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              Experience
              <div className="h-px bg-slate-200 flex-grow"></div>
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <ExperienceItem key={idx} exp={exp} />
              ))}
            </div>
          </div>
        </section>

        <SkillsSection />

        <section id="projects" className="py-24 px-6 section-fade scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              Projects
              <div className="h-px bg-slate-200 flex-grow"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((project, idx) => (
                <div key={idx} className="p-6 bg-white border border-slate-100 rounded-2xl hover:shadow-xl hover:border-indigo-100 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <Rocket className="text-indigo-600" size={20} />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{project.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-slate-50 text-slate-500 rounded text-[10px] font-bold uppercase border border-slate-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="py-24 px-6 bg-slate-900 text-white section-fade scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              Research & Publications
              <div className="h-px bg-slate-800 flex-grow"></div>
            </h2>
            <div className="space-y-8">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-1 italic">{pub.authors}</p>
                      <div className="flex items-center gap-3 text-sm font-medium">
                        <span className="text-indigo-400">{pub.journal}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-500">{pub.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-24 px-6 section-fade">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
                <GraduationCap className="text-indigo-600" />
                Education
              </h2>
              <div className="space-y-10">
                {EDUCATIONS.map((edu, idx) => (
                  <div key={idx} className="space-y-2 group">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-lg group-hover:text-indigo-600 transition-colors">
                        {edu.degree}
                      </h3>
                      {edu.grade && (
                        <span className="text-xs font-bold px-2 py-1 bg-green-50 text-green-700 rounded uppercase">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 font-medium">{edu.institution}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {edu.courses.map(course => (
                        <span key={course} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-2 py-0.5 rounded">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-8">Certifications</h2>
                <ul className="space-y-4">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600 text-sm items-start">
                      <div className="mt-1 h-4 w-4 rounded-full bg-slate-100 border border-slate-200 flex-shrink-0 flex items-center justify-center">
                        <div className="h-1 w-1 bg-indigo-600 rounded-full"></div>
                      </div>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-8">Leadership & Volunteering</h2>
                <ul className="space-y-4">
                  {VOLUNTEERING.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600 text-sm items-start">
                      <div className="mt-1 h-4 w-4 rounded-full bg-slate-100 border border-slate-200 flex-shrink-0 flex items-center justify-center">
                        <div className="h-1 w-1 bg-indigo-600 rounded-full"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-sm">
              <p className="font-bold text-2xl text-slate-900 mb-3 tracking-tighter">Aman Syed</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {PERSONAL_INFO.footerText}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-10 sm:gap-24">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Connect</p>
                <div className="flex flex-col gap-3">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors inline-flex items-center gap-2">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors inline-flex items-center gap-2">
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Inquiries</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors inline-flex items-center gap-2">
                  <Mail className="shrink-0" size={14} /> 
                  <span>amansyed3342@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-50 gap-4">
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-indigo-400" /> {PERSONAL_INFO.location}
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-200"></span>
              <span className="text-green-500">Available for innovative projects</span>
            </div>
            
            <div className="text-slate-400 text-xs font-medium tracking-wide">
              © {new Date().getFullYear()} Aman Syed — Architecting the future of Intelligent Systems.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
