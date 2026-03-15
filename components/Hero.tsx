
import React from 'react';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import PdfViewerModal from './PdfViewerModal';

const Hero: React.FC = () => {
  const [isPdfOpen, setIsPdfOpen] = React.useState(false);

  return (
    <section id="hero" className="pt-32 pb-20 px-6 scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-8 md:gap-16 lg:gap-32">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-indigo-600">
              {PERSONAL_INFO.role}
            </h2>
            <p className="text-lg text-slate-800 font-medium leading-relaxed mx-auto md:mx-0 max-w-xl">
              {PERSONAL_INFO.tagline}
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mx-auto md:mx-0 max-w-xl">
              {PERSONAL_INFO.subTagline}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <button 
                onClick={() => setIsPdfOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-100"
              >
                <FileText size={18} />
                View Resume
              </button>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-200"
              >
                <Mail size={18} />
                Contact
              </a>
              <div className="flex gap-2">
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-all"
                >
                  <Github size={18} />
                </a>
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:block">
             <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-indigo-50 border-2 border-indigo-100 rotate-2 overflow-hidden shadow-2xl group transition-transform hover:rotate-0 duration-500">
                <img 
                  src={PERSONAL_INFO.profileImageUrl} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             </div>
          </div>
        </div>
      </div>

      <PdfViewerModal 
        isOpen={isPdfOpen} 
        onClose={() => setIsPdfOpen(false)} 
        url={PERSONAL_INFO.resumeUrl} 
      />
    </section>
  );
};

export default Hero;
