import { motion } from 'motion/react';
import { services } from '../data';

export default function Services() {
  return (
    <section id="expertise" className="py-24 px-6 md:px-12 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-zinc-500 tracking-widest uppercase mb-4">Capabilities</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 p-8 flex flex-col hover:bg-white/10 transition-colors"
            >
              <span className="text-purple-300 font-mono text-sm mb-6">{service.id}</span>
              <h4 className="text-2xl font-medium mb-4 text-white">
                {service.title}
              </h4>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
