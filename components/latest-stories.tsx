import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"

// Sample stories data
const stories = [
  {
    id: 1,
    title: "Le jour où j’ai compris que l’amour ne suffit pas...",
    excerpt: "On était au lycée. Lui et moi, on se croisait souvent dans les couloirs......",
    date: "2024-04-15",
    category: "Leçons de vie",
    image: "https://img.freepik.com/photos-gratuite/couple-noir-se-bagarre-homme-essaie-dire-desole-mais-femme-ne-parle-pas_53876-30560.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "Moi",
    type: "personal",
  },
  {
    id: 2,
    title: "Il m’aimait juste assez pour que je reste…",
    excerpt: "Il m’aimait juste assez pour que je reste…...",
    date: "2023-02-10",
    category: "Relations",
    image: "https://img.freepik.com/photos-gratuite/jeune-adulte-deprime-maison_23-2149563052.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "Sophie",
    type: "others",
  },
  {
    id: 3,
    title: "j’ai crashé un date Tinder… chez le prêtre de ma mère 😭",
    excerpt: "Y’avait ce gars sur Insta. ...",
    date: "2022-11-05",
    category: "Guérison",
    image: "https://img.freepik.com/photos-gratuite/close-up-portrait-of-retro-elegant-etonne-africain-wooman-lunettes-soleil-pointant-deux-doigts-vers-haut-regardant-vers-haut_171337-8673.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "Annonyme",
    type: "others",
  },
]

export function LatestStories() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {stories.map((story) => (
        <Link
          key={story.id}
          href={story.type === "personal" ? `/mes-histoires/${story.id}` : `/histoires-des-autres/${story.id}`}
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
  )
}
