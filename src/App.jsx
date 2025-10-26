import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero3D />
        <Features />
        {/* About section */}
        <section id="about" className="bg-black py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Why AR/VR?</h2>
                <p className="mt-4 text-zinc-300">
                  Spatial computing unlocks new ways to learn, create, and connect. We explore
                  real-time engines, 3D on the web, and human-computer interaction — all with
                  a builder-first mindset. Whether you’re into design, code, or storytelling,
                  there’s a place here for you.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-500"></span> Unity, Unreal, and WebXR</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-500"></span> Shader art and procedural techniques</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-500"></span> Prototyping and playtesting culture</li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-extrabold text-violet-400">50+</div>
                    <div className="mt-1 text-xs text-zinc-400">Active members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-violet-400">20</div>
                    <div className="mt-1 text-xs text-zinc-400">Projects shipped</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-violet-400">8</div>
                    <div className="mt-1 text-xs text-zinc-400">Workshops/term</div>
                  </div>
                </div>
                <div className="mt-6 rounded-lg border border-white/10 bg-black p-4">
                  <p className="text-sm text-zinc-300">
                    "We’re here to learn by doing — and have fun while pushing what’s possible in 3D."
                  </p>
                  <p className="mt-2 text-xs text-zinc-500">Club Lead</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
