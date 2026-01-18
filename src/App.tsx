import { Hero } from './components/Hero';
import { ProjectGallery } from './components/ProjectGallery';
import { CertificationSection } from './components/CertificationSection'; // Import baru

export default function App() {

  const socials = [
    { name: 'GitHub', url: 'https://github.com/muhammadnandaaf', slug: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/nandaarjuna', slug: 'linkedin' },
    { name: 'Instagram', url: 'https://instagram.com/nandarjuna_', slug: 'instagram' },
    { name: 'WhatsApp', url: 'https://wa.me/6283818561221', slug: 'whatsapp' }
  ];

  return (
    <div className="min-h-screen bg-pure-black">
      {/* HERO SECTION */}
      <Hero />
      {/* Gallery */}
      <ProjectGallery />
      {/* Certificate */}
      <CertificationSection />

      <footer className="pt-10 pb-24 bg-pure-black text-center border-t border-white/5">
        <h2 className="text-white text-3xl font-black uppercase tracking-tighter mb-12">Let's Connect</h2>
        
        {/* SOCIAL LINKS DENGAN LOGO BERWARNA */}
        <div className="flex justify-center gap-8 mb-16">
          {socials.map((social) => (
            <a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary-orange transition-all">
                <img 
                  // LOGIKA PENGGANTI LOGO LINKEDIN DI SINI
                  src={social.slug === 'linkedin' 
                    ? "https://www.svgrepo.com/show/448234/linkedin.svg" 
                    : `https://cdn.simpleicons.org/${social.slug}`} 
                  alt={social.name}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    // Backup jika masih error
                    e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png";
                  }}
                />
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
                {social.name}
              </span>
            </a>
          ))}
        </div>

        <a 
          href="mailto:muhammadnandaaf@gmail.com"
          className="inline-block bg-primary-orange text-black px-16 py-5 font-black text-sm uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 rounded-full"
        >
          Start a Project
        </a>
        
        <p className="mt-20 text-[9px] text-slate-700 uppercase tracking-[0.5em]">
          © 2026 MUHAMMAD NANDAARJUNA F. — ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}