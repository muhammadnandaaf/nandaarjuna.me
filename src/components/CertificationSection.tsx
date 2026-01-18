// src/components/CertificationSection.tsx
import { certificatesData } from '../types/certificate';

export const CertificationSection = () => {

  return (
    <section className="py-16 px-10 bg-pure-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="text-primary-orange text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block text-center">
          Recognition & Learning
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-16 text-center">
          Certifications
        </h2>
      </div>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6">
        {certificatesData.map((cert) => (
          <a 
            key={cert.id}
            href={cert.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-70 md:min-w-95 shrink-0 snap-center group bg-dark-charcoal border border-white/10 p-8 rounded-3xl hover:border-primary-orange transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Hover Line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>

            <div className="flex justify-between items-start mb-8">
              <img src={cert.logoUrl} alt={cert.issuer} className="w-20 h-20 object-contain grayscale group-hover:grayscale-0" />
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-slate-600 group-hover:text-primary-orange tracking-widest uppercase italic mb-1">
                  {cert.issueDate}
                </span>
                <span className="text-[8px] px-2 py-0.5 border border-slate-700 text-slate-500 rounded uppercase font-bold">
                  PDF
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-black text-lg uppercase mb-2 group-hover:text-primary-orange transition-colors">
                {cert.title}
              </h4>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest truncate">
                {cert.issuer}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};