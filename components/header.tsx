"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image src="/images/logo.png" alt="Histoires de Vie Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold font-playfair text-gray-800">Histoires de Vie</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-amber-600 transition-colors">
              Accueil
            </Link>
            <Link href="/mes-histoires" className="text-gray-600 hover:text-amber-600 transition-colors">
              Mes histoires
            </Link>
            <Link href="/histoires-des-autres" className="text-gray-600 hover:text-amber-600 transition-colors">
              Histoires des autres
            </Link>
            <Link href="/partager" className="text-gray-600 hover:text-amber-600 transition-colors">
              Partager mon histoire ✉️
            </Link>
            <Link href="/a-propos" className="text-gray-600 hover:text-amber-600 transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-amber-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container px-4 mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="py-2 text-gray-600 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/mes-histoires"
                className="py-2 text-gray-600 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Mes histoires
              </Link>
              <Link
                href="/histoires-des-autres"
                className="py-2 text-gray-600 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Histoires des autres
              </Link>
              <Link
                href="/partager"
                className="py-2 text-gray-600 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Partager mon histoire ✉️
              </Link>
              <Link
                href="/a-propos"
                className="py-2 text-gray-600 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="py-2 text-gray-600 hover:text-amber-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
