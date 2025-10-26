import { Cpu, Users, Calendar, Code } from 'lucide-react';

const items = [
  {
    icon: Cpu,
    title: 'Hands-on Labs',
    desc: 'Weekly build sessions on Unity, WebXR, shaders, and spatial computing.',
  },
  {
    icon: Users,
    title: 'Collaborative Projects',
    desc: 'Team up for hackathons and ship portfolio-ready immersive demos.',
  },
  {
    icon: Calendar,
    title: 'Talks & Workshops',
    desc: 'Industry speakers and deep dives into cutting-edge AR/VR tooling.',
  },
  {
    icon: Code,
    title: 'Open Source',
    desc: 'Contribute to our libraries and community-driven 3D experiences.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Built by creators, for creators
          </h2>
          <p className="mt-3 text-zinc-300">
            A modern club experience with a focus on craft, community, and
            shipping cool things. No fluff — just pixels, polygons, and people.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 p-5 transition-transform will-change-transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600/20 text-violet-400 ring-1 ring-inset ring-violet-500/20">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-300">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
