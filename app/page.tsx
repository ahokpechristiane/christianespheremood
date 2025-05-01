import Link from "next/link"
import Image from "next/image"
import { LatestStories } from "@/components/latest-stories"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Histoires de Vie - Chaque histoire compte",
  description:
    "Bienvenue sur Histoires de Vie, le blog où chaque récit compte. Lis, partage, et connecte-toi à travers des histoires vraies, touchantes et inspirantes.",
  keywords: [
    "blog", 
    "histoires vraies", 
    "témoignages", 
    "partager son histoire", 
    "expériences de vie", 
    "inspiration", 
    "émotions", 
    "récits", 
    "Guérir par les mots"
  ],
  openGraph: {
    title: "Histoires de Vie - Chaque histoire compte",
    description:
      "Un blog émotionnel et sincère dédié aux récits de vie. Viens lire ou déposer ton histoire.",
    url: "https://christianespheremood.vercel.app/", // mets l’URL de ton site
    siteName: "Histoires de Vie",
    images: [
      {
        url: "https://tonsite.com/images/og-image.jpg", // remplace par ton image OG
        width: 1200,
        height: 630,
        alt: "Image d’une personne qui partage son histoire",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Fond d'écran avec des livres et une ambiance chaleureuse"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">Chaque Histoire Compte</h1>
          <p className="max-w-2xl mx-auto mt-6 text-xl text-gray-100">
            Bienvenue sur ce blog où chaque histoire compte. Ici, je partage mes vécus et ceux que vous me confiez, pour
            guérir, inspirer, et connecter les cœurs.
          </p>
          <Link href="/partager">
            <Button className="px-8 py-6 mt-8 text-lg font-medium transition-all duration-300 rounded-full bg-amber-500 hover:bg-amber-600 text-white">
              👉 Partage ton histoire avec moi
            </Button>
          </Link>
        </div>
      </section>

      {/* Latest Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 md:text-4xl">Derniers récits publiés</h2>
          <LatestStories />
        </div>
      </section>

      {/* Why Share Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Pourquoi partager nos histoires?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Nos histoires sont des ponts entre les âmes. Elles nous rappellent que nous ne sommes jamais seuls dans
                nos expériences, nos joies comme nos peines.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                En partageant, nous transformons nos expériences personnelles en sagesse collective, et nous offrons aux
                autres le cadeau de la perspective.
              </p>
              <Link href="/a-propos">
                <Button className="mt-6 bg-gray-800 hover:bg-gray-900 text-white">En savoir plus</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/sharing-stories.jpg"
                alt="Personnes partageant des histoires"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-500">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ton histoire mérite d'être racontée</h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-amber-50">
            Que ce soit un moment de joie, une leçon apprise, ou un défi surmonté, ton expérience pourrait être
            exactement ce que quelqu'un d'autre a besoin d'entendre.
          </p>
          <Link href="/partager">
            <Button className="px-8 py-6 mt-8 text-lg font-medium bg-white text-amber-600 hover:bg-gray-100 rounded-full">
              Partager mon histoire
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
