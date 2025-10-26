import { Github, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="join" className="w-full bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-white font-semibold">AR/VR Club</h4>
            <p className="mt-2 text-sm text-zinc-400">
              Where builders meet to prototype, playtest, and publish immersive experiences.
            </p>
          </div>
          <div>
            <h5 className="text-zinc-200 font-medium">Get in touch</h5>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-violet-400" />
                <a className="hover:text-white" href="mailto:club@example.com">club@example.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4 text-violet-400" />
                <a className="hover:text-white" href="https://github.com" target="_blank" rel="noreferrer">github.com/arvrclub</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-violet-400" />
                <span>Campus Innovation Lab</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-zinc-200 font-medium">Join us</h5>
            <p className="mt-3 text-sm text-zinc-400">
              Open membership. No experience required — curiosity recommended.
            </p>
            <a
              href="#home"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500"
            >
              Apply Now
            </a>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} AR/VR Club. All rights reserved.</p>
          <p>Built with love for spatial computing.</p>
        </div>
      </div>
    </footer>
  );
}
