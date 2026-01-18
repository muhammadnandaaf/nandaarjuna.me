export const About = () => {
  const skills = ["React.js", "TypeScript", "Vue.js", "Tailwind CSS", "Laravel", "Frontend Architecture"];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Technical Expertise</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            I am a Frontend Developer focused on creating clean, performant, and maintainable web applications. 
            With a strong background in **Frontend Architecture**
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map(skill => (
              <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-black text-indigo-600">10+</div>
              <div className="text-xs uppercase font-bold text-slate-400 mt-2 tracking-widest">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-indigo-600">Laravel</div>
              <div className="text-xs uppercase font-bold text-slate-400 mt-2 tracking-widest">Expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};