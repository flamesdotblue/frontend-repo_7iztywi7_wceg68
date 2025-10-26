import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="home" className="relative isolate min-h-[76vh] w-full bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none flex min-h-[76vh] flex-col items-start justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Explore the Future in <span className="text-violet-400">AR/VR</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-300">
              We build immersive experiences, from interactive 3D worlds to spatial
              computing prototypes. Join a community pushing the limits of reality.
            </p>
            <div className="pointer-events-auto mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#join"
                className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Join the Club
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-black/50 px-4 py-2 text-sm font-semibold text-zinc-200 hover:text-white hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                See What We Do
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
