import { motion } from 'motion/react';
import { projects } from '../data';
import { ArrowUpRight } from 'lucide-react';

function ProjectCard({ project, index }: { project: any, index: number }) {
  // Use colors based on index for the gradients
  const gradients = [
    "from-zinc-800 to-zinc-900",
    "from-indigo-950 to-zinc-900",
    "from-zinc-900 to-black",
    "from-purple-900/40 to-zinc-900"
  ];
  const accents = [
    "text-purple-300",
    "text-blue-300",
    "text-zinc-500",
    "text-purple-300"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative aspect-[4/3] rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 p-1 flex flex-col"
    >
      <div className={`w-full h-full rounded-[20px] bg-gradient-to-br ${gradients[index % gradients.length]} overflow-hidden relative transition-transform duration-500`}>
        {index % 4 === 0 && (
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <div className="w-48 h-48 border-[1px] border-white/20 rounded-full"></div>
            <div className="absolute w-24 h-24 border-[1px] border-white/20 rounded-full"></div>
          </div>
        )}
        {index % 4 === 1 && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-blue-500/10 blur-3xl"></div>
        )}
        {index % 4 === 2 && (
          <div className="p-8 flex flex-col h-full justify-center text-center opacity-40">
             <div className="w-24 h-24 rounded-full border border-white/10 mx-auto animate-pulse"></div>
          </div>
        )}
        
        <img 
          src={project.image} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80" />
        
        <div className="absolute bottom-6 left-6 z-10">
          <p className={`text-xs ${accents[index % accents.length]} font-mono mb-1`}>{project.year} • {project.category.toUpperCase()}</p>
          <h3 className="text-xl font-medium text-white">{project.title}</h3>
        </div>

        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={18} className="text-white" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-zinc-500 tracking-widest uppercase mb-4">Selected Work</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
