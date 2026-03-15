
import React from 'react';
import { Experience } from '../types';

interface Props {
  exp: Experience;
}

const ExperienceItem: React.FC<Props> = ({ exp }) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 group-last:bg-transparent"></div>
      <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-indigo-500 transition-colors"></div>
      
      <div className="space-y-2">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
            {exp.role}
          </h3>
          <span className="text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
            {exp.period}
          </span>
        </div>
        <div className="flex items-center text-slate-500 font-medium">
          <span>{exp.company}</span>
          <span className="mx-2 text-slate-300">•</span>
          <span>{exp.location}</span>
        </div>
        <ul className="mt-4 space-y-3">
          {exp.achievements.map((achievement, idx) => (
            <li key={idx} className="text-slate-600 leading-relaxed flex items-start">
              <span className="text-indigo-400 mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0"></span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
