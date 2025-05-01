import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { StoryFilter } from "@/components/story-filter"

// Sample stories from others
const stories = [
  {
    id: 1,
    title: "J’ai pardonné un homme qui ne s’est jamais excusé",
    excerpt: "J’ai mis longtemps à écrire cette histoire...",
    date: "2023-03-22",
    category: "Relations",
    image: "https://img.freepik.com/vecteurs-libre/illustration-du-concept-liberte_114360-18010.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "Maria",
  },
  {
    id: 2,
    title: "Il m’aimait juste assez pour que je reste… ",
    excerpt: "Il m’aimait juste assez pour que je reste...",
    date: "2023-02-10",
    category: "Guérison",
    image: "https://img.freepik.com/photos-gratuite/jeune-adulte-deprime-maison_23-2149563052.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "Sophie",
  },
  {
    id: 3,
    title: "j’ai crashé un date Tinder… chez le prêtre de ma mère 😭",
    excerpt: "Y’avait ce gars sur Insta. ...",
    date: "2022-11-05",
    category: "Résilience",
    image: "https://img.freepik.com/photos-gratuite/close-up-portrait-of-retro-elegant-etonne-africain-wooman-lunettes-soleil-pointant-deux-doigts-vers-haut-regardant-vers-haut_171337-8673.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "Annonyme",
  },
  {
    id: 4,
    title: "J’ai découvert que mon mec avait deux vies… et j’étais la side",
    excerpt: "Je croyais vivre une love story Netflix avec Rayan. ...",
    date: "2022-09-18",
    category: "Santé",
    image: "https://img.freepik.com/photos-gratuite/charmee-expressive-femme-mignonne-peau-sombre-coiffure-afro-qui-tombe-machoire-haletante-etonnement-interet-se-tenant-main-visage-etant-sous-impression-observer-miracle_176420-23259.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "Annonyme",
  },
  {
    id: 5,
    title: "La fois où j’ai volé sans faire exprès… et que j’ai failli finir en garde à vue",
    excerpt: "C’était au Gabon, à Mbolo....",
    date: "2022-07-30",
    category: "Famille",
    image: "https://img.freepik.com/photos-premium/mains-hommes-desesperes-attraper-concept-prisonnier-prison-fer_44277-9423.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "Anonyme",
  },
  {
    id: 6,
    title: "Le jour où mon ex a crash mon anniversaire pour me faire une déclaration",
    excerpt: "C’était mon anniv. 23 ans....",
    date: "2022-07-30",
    category: "Famille",
    image: "https://img.freepik.com/vecteurs-libre/ensemble-autocollants-lol-drole_23-2148578032.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "sarah",
  },
]

export default function HistoiresDesAutres() {
  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">Histoires des Autres</h1>
          <p className="mt-4 text-xl text-gray-600">
            Découvrez les récits touchants que d'autres personnes ont partagés. Chaque histoire est unique et porte en
            elle une sagesse précieuse.
          </p>
        </div>

        {/* Filter Section */}
        <StoryFilter />

        {/* Stories Grid */}
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.id}
              href={`/histoires-des-autres/${story.id}`}
              className="story-card block bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-48">
                <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {story.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{formatDate(story.date)}</span>
                  <span className="text-sm font-medium text-amber-600">Par {story.author}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{story.title}</h3>
                <p className="text-gray-600">{story.excerpt}</p>
                <div className="mt-4 text-amber-600 font-medium">Lire la suite →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
