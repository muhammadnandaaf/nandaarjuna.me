export const Contact = () => {
  return (
    <section className="py-24 bg-slate-900 text-white rounded-[40px] mx-6 mb-12">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-black mb-6">Let's build something great together.</h2>
        <p className="text-slate-400 mb-10 text-lg">
          Currently looking for new opportunities as a Frontend or Fullstack Developer.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="muhammadnandaaf@gmail.com" className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition">
            Email Me
          </a>
          <a href="https://linkedin.com/in/nandaarjuna" target="_blank" className="border border-slate-700 px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};