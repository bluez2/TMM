import { Link } from 'react-router-dom'
import CrossMotif from './CrossMotif.jsx'

export default function Footer() {
  return (
    <footer className="bg-forestDeep text-parchment mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <CrossMotif className="w-8 h-8" radiate={false} variant="gold" />
            <span className="font-display text-lg">Selam Mission</span>
          </div>
          <p className="text-parchment/70 text-sm max-w-xs">
            Placeholder copy — replace with your ministry's real name, story, and location in Ethiopia.
          </p>
        </div>

        <div className="text-sm">
          <h3 className="font-display text-base mb-3 text-goldSoft">Quick links</h3>
          <ul className="space-y-2 text-parchment/80">
            <li><Link to="/about" className="hover:text-white">About us</Link></li>
            <li><Link to="/ministries" className="hover:text-white">Our ministries</Link></li>
            <li><Link to="/get-involved" className="hover:text-white">Get involved</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <h3 className="font-display text-base mb-3 text-goldSoft">Reach us</h3>
          <ul className="space-y-2 text-parchment/80">
            <li>Addis Ababa, Ethiopia</li>
            <li>hello@selammission.org</li>
            <li>+251 00 000 0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-parchment/10 py-5 text-center text-xs text-parchment/50">
        © {new Date().getFullYear()} Selam Mission. All rights reserved.
      </div>
    </footer>
  )
}
