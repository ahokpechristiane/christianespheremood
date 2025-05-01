import Image from "next/image"
import { Mail } from "lucide-react"

export const metadata = {
  title: "Partager mon histoire - Témoignages personnels Avec christianespheremood  ",
  description: " Avec https://christianespheremood.vercel.app/ Partagez votre histoire personnelle avec notre communauté. Vos expériences de vie, vos leçons et vos témoignages peuvent inspirer et aider d'autres personnes."
  
}

export default function Partager() {
  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/share-story.jpg" alt="Partager une histoire" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">Partager mon histoire</h1>
              <div className="mt-6 space-y-4 text-lg text-gray-600">
                <p>Tu veux raconter un moment fort de ta vie ? Une leçon ? Une blessure ? Une victoire silencieuse ?</p>
                <p>
                  Chaque histoire est précieuse et mérite d'être partagée. Ton expérience pourrait résonner profondément
                  avec quelqu'un d'autre et lui apporter exactement ce dont il a besoin.
                </p>
                <p>Envoie ton histoire à :</p>
                <p className="text-xl font-medium text-amber-600">📧 juchrist02@gmail.com</p>
                <p>Tu peux rester anonyme si tu le souhaites. N'hésite pas à préciser si tu veux être cité ou non.</p>
              </div>
              <a
                href="mailto:juchrist02@gmail.com"
                className="inline-flex items-center px-6 py-3 mt-6 text-white bg-amber-500 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Envoyer un email
              </a>
            </div>
          </div>

          <div className="mt-16 p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quelques conseils pour partager ton histoire</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-amber-600">Sois authentique</h3>
                <p className="text-gray-600">
                  Les histoires les plus touchantes sont celles qui viennent du cœur. Partage ton expérience avec
                  sincérité, sans filtre.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-amber-600">Prends ton temps</h3>
                <p className="text-gray-600">
                  Certaines histoires sont difficiles à raconter. Prends le temps dont tu as besoin pour mettre tes
                  pensées et tes émotions en mots.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-amber-600">Inclus des détails</h3>
                <p className="text-gray-600">
                  Les petits détails rendent une histoire vivante. Les sons, les odeurs, les sensations - tout ce qui a
                  rendu ce moment mémorable pour toi.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-amber-600">Réfléchis à la leçon</h3>
                <p className="text-gray-600">
                  Qu'as-tu appris de cette expérience ? Comment t'a-t-elle changé ? Ces réflexions peuvent être
                  précieuses pour les autres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}