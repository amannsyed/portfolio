
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          Expertise
          <div className="h-px bg-slate-200 flex-grow"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-100 hover:border-indigo-200 hover:text-indigo-600 transition-all cursor-default hover:shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
