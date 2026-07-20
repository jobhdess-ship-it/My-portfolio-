import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pb-12 md:px-12 pt-32 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-purple-400 font-mono text-sm mb-4 tracking-widest uppercase"
          >
            Freelance Web Developer
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[4rem] leading-[1.1] md:text-[6rem] lg:text-[7rem] font-display font-semibold tracking-tight mb-8"
          >
            Building interactive <br />
            <span className="text-zinc-500 italic">web experiences</span> from scratch.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed mb-10">
              Specializing in high-performance web applications, leveraging modern HTML, CSS, and JavaScript.
            </p>
            <a 
              href="#work" 
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full py-3 px-6 hover:bg-white/10 text-white transition-all duration-300 w-fit"
            >
              <span>Selected Works</span>
              <ArrowDownRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
