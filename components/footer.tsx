import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 mx-auto py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Histoires de Vie</h3>
            <p className="text-gray-300">
              Un espace dédié au partage d'histoires personnelles, pour inspirer, guérir et connecter les cœurs à
              travers nos expériences communes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Liens Utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/partager" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Partager une histoire
                </Link>
              </li>
              <li>
                <Link href="/mes-histoires" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Mes histoires
                </Link>
              </li>
              <li>
                <Link href="/histoires-des-autres" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Histoires des autres
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Suivez-moi</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
            <p className="mt-4 text-gray-300">
              Abonnez-vous pour recevoir les dernières histoires directement dans votre boîte mail.
            </p>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Histoires de Vie. Tous droits réservés.</p>
          <p className="mt-2 text-gray-300 italic">"Chaque vie mérite d'être racontée."</p>
        </div>
      </div>
    </footer>
  )
}
