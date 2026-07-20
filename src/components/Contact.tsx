import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Let's Talk CTA */}
        <div className="rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 p-12 md:p-24 flex flex-col items-center text-center">
          <h2 className="text-sm font-mono text-purple-400 tracking-widest uppercase mb-8">Ready to start?</h2>
          <a 
            href="mailto:jobdessalegn@gmail.com"
            className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-display font-semibold tracking-tighter leading-none hover:text-purple-300 transition-colors"
          >
            Let's build <br /> together.
          </a>
          <div className="mt-12">
            <a href="mailto:jobdessalegn@gmail.com" className="bg-white/10 border border-white/20 backdrop-blur-xl px-8 py-4 rounded-full text-white hover:bg-white/20 transition-all text-lg font-medium">
              jobdessalegn@gmail.com
            </a>
          </div>
        </div>

        {/* Footer Bar */}
        <footer className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-2">Availability</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-zinc-300">Open for new projects</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-2">Current Location</span>
              <span className="text-sm text-zinc-300">Berlin, DE ({new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute:'2-digit' })})</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm font-mono text-zinc-500 flex-wrap">
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            <span className="opacity-20">/</span>
            <a href="#" className="hover:text-white transition-colors">X (Twitter)</a>
            <span className="opacity-20">/</span>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
