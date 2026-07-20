import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-[#08080a] min-h-screen text-zinc-100 font-sans relative overflow-hidden">
      {/* Background Mesh Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
