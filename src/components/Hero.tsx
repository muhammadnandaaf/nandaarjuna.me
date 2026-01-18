export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-left">
            <p className="text-primary-orange font-bold tracking-[0.5em] uppercase text-[10px] mb-4">
              Fullstack Web & Data Science
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase">
              MUHAMMAD <br /> 
              <span className="text-deep-navy">NANDAARJUNA F.</span>
            </h1>
            <p className="max-w-md text-slate-400 border-l border-primary-orange pl-4 text-sm leading-relaxed">
                Informatics Graduate skilled in data-to-insight ML workflows and full-stack web development. Proficient in the Python data stack (Pandas, Scikit-learn, TensorFlow) for building end-to-end AI solutions. 
                Expert in modern web development using the Next.js framework with React for the frontend, backed by Node.js/Express.js and MongoDB/PostgreSQL. 
                Combines analytical depth with robust development skills to build data-driven, scalable web applications for digital transformation.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative group w-64 h-80 md:w-80 md:h-105">
              <div className="absolute inset-0 border border-primary-orange translate-x-3 translate-y-3 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <div className="relative w-full h-full bg-dark-charcoal grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden">
                <img src="/pp.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};