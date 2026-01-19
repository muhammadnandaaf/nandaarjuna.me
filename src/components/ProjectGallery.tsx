import { useState, useEffect } from 'react';
import { projectsData, type Project } from '../types/project';

export const ProjectGallery = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'data'>('web');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = projectsData.filter(p => p.category === activeTab);

  const getTechLogo = (tech: string) => {
    const iconMap: { [key: string]: string } = {
      // AI & ML
      "Python": "python",
      "PyTorch": "pytorch",
      "TensorFlow": "tensorflow",
      "Keras": "keras",
      "Hugging Face": "huggingface",
      "OpenCV": "opencv",
      "Scikit-learn": "scikitlearn",
      "MLflow": "mlflow",
      
      // Backend & ERP (Odoo ditambahkan di sini)
      "Odoo 17": "odoo",
      "FastAPI": "fastapi",
      "FAISS": "meta",
      "Pandas": "pandas",
      "NumPy": "numpy",
      
      // BI, Database & Deployment
      "PostgreSQL": "postgresql",
      "MySQL": "mysql",
      "Metabase": "metabase",
      "Streamlit": "streamlit",
      "Docker": "docker",
      "Prometheus": "prometheus",
      "Grafana": "grafana",
      
      // Frontend & Libraries
      "JavaScript (ES6+)": "javascript",
      "Bootstrap 5": "bootstrap",
      "SweetAlert2": "sweetalert2",
      "React.js": "react",
      "React + Vite": "vite",
      "Tailwind CSS": "tailwindcss",
      
      // Database & PHP
      "Laravel": "laravel"
    };
    
    const iconSlug = iconMap[tech] || tech.toLowerCase().replace(/\s+/g, '');
    return `https://cdn.simpleicons.org/${iconSlug}`;
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handleEsc);
    // Ini bagian paling penting agar tidak lag
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="py-24 px-10">
      {/* Navigation - English Display */}
      <div className="flex justify-center gap-12 mb-16 border-b border-white/5 pb-6">
        {['web', 'data'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as 'web' | 'data')}
            className={`text-[11px] font-black uppercase tracking-[0.4em] transition-all ${
              activeTab === tab ? 'text-primary-orange' : 'text-slate-600 hover:text-slate-400'
            }`}
          >
            {tab === 'web' ? 'Web Development' : 'Data Science & ML'}
          </button>
        ))}
      </div>

      {/* Cover Card */}
      <div className="relative w-full overflow-hidden">
        {/* Container Scroll Manual */}
        <div className="flex gap-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-10">
          {filtered.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelected(project)}
              className="min-w-75 md:min-w-112.5 snap-center group cursor-pointer"
            >
              {/* Image & Content ... */}
              <div className="aspect-16/10 bg-dark-charcoal border border-white/10 overflow-hidden mb-6 rounded-2xl">
                <img src={project.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={project.title} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase">{project.title}</h3>

                {/* TECH STACK DENGAN LOGO */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.techStack.map(tech => (
                  <div key={tech} className="flex items-center gap-2 bg-white/5 border border-white/10 px-2 py-1.5 rounded-md group/icon hover:border-primary-orange transition-all">
                    <img 
                      src={getTechLogo(tech)} 
                      alt={tech} 
                      className="w-4 h-4 object-contain"
                      onError={(e) => (e.currentTarget.style.display = 'none')} 
                    />
                    <span className="text-[8px] font-bold text-slate-500 group-hover/icon:text-white uppercase tracking-widest">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Modal */}
      {selected && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-pure-black/95 backdrop-blur-xl transition-all duration-300 opacity-100">
        <div className="max-w-6xl w-full bg-dark-charcoal border border-white/10 relative overflow-y-auto max-h-[90vh] scrollbar-hide rounded-4xl shadow-2xl transition-all duration-500 scale-100 opacity-100 ease-out">  
                  
            {/* Close Button */}
            <button 
            onClick={() => setSelected(null)} 
            className="absolute top-8 right-10 z-30 text-slate-500 hover:text-primary-orange font-black tracking-[0.2em] text-[10px] uppercase transition-colors"
          >
            Close [Esc]
          </button>

            {/* Grid Container: Menggunakan items-center agar teks di kanan sejajar tengah dengan gambar di kiri */}
            <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12 items-center">
              
              {/* AREA GAMBAR: Dibuat Flex untuk Center Sempurna */}
              <div className="flex items-center justify-center w-full overflow-hidden bg-transparent"> 
              {/* bg-transparent: Menghilangkan sisa warna kotak di belakang gambar */}
              <img 
                src={selected.detailImage} 
                alt={selected.title}
                className="max-w-full h-auto max-h-[70vh] object-contain block shadow-none" 
                // shadow-none: Menghilangkan bayangan jika ada agar benar-benar menyatu
              />
            </div>

              {/* AREA TEKS */}
              <div className="flex flex-col justify-center">
                <span className="text-primary-orange text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
                  Project Overview
                </span>
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
                  {selected.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {selected.description}
                </p>

                <div className="space-y-6">
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest border-b border-white/10 pb-2 inline-block">
                    Key Capabilities
                  </h4>
                  <ul className="space-y-3">
                    {selected.features.map((f, i) => (
                      <li key={i} className="text-slate-500 text-xs flex gap-3 items-center uppercase italic">
                        <span className="text-primary-orange font-black">/</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={selected.githubUrl}
                  target="_blank"
                  className="mt-10 block w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest text-center hover:bg-primary-orange transition-all"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};