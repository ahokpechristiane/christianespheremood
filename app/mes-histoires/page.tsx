import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { StoryFilter } from "@/components/story-filter"

export const metadata = {
  title: "Mes Histoires - Témoignages et récits personnels,  christianespheremood",
  description: "Avec https://christianespheremood.vercel.app/ Découvrez une collection d'histoires personnelles inspirantes et émouvantes. Des récits authentiques sur l'amour, les déceptions et les leçons de vie qui nous touchent tous."
}

// Sample personal stories data
const stories = [
  {
    id: 1,
    title: "Le jour où j'ai compris que l'amour ne suffit pas",
    excerpt: "On était au lycée. Lui et moi, on se croisait souvent dans les couloirs...",
    date: "2024-04-15",
    category: "Leçons de vie",
    image: "https://img.freepik.com/photos-gratuite/couple-noir-se-bagarre-homme-essaie-dire-desole-mais-femme-ne-parle-pas_53876-30560.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    title: "Quand j'ai découvert que j'étais la « pause » entre deux vraies relations",
    excerpt: "Il sortait d'une longue relation. Moi, j'étais là, prête à l'aimer pour de vrai...",
    date: "2023-11-15",
    category: "Cœurs en miettes",
    image: "https://img.freepik.com/photos-gratuite/anneaux-mariage-coeur-papier-brise_23-2148536025.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
  },
  {
    id: 3,
    title: "Il m'aimait fort, mais dans le noir seulement",
    excerpt: "On se voyait souvent. Chez lui. Chez moi. Mais jamais dehors...",
    date: "2022-08-22",
    category: "Défis",
    image: "https://img.freepik.com/photos-gratuite/femme-aux-cheveux-afro-noirs-tatouage-sa-main_246466-31.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
  },
  {
    id: 4,
    title: "J'étais sa copine officielle… sauf sur les réseaux",
    excerpt: "Il m'appelait mon amour tous les jours, me ramenait à manger..",
    date: "2022-06-05",
    category: "Réflexions",
    image: "https://img.freepik.com/photos-gratuite/femme-triste-pleure_53876-14727.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
  },
  {
    id: 5,
    title: "Il m'a dit 'je t'aime', mais c'était juste après avoir couché avec moi",
    excerpt: "J'avais attendu. Parce que pour moi, c'était pas juste un jeu...",
    date: "2022-03-17",
    category: "Voyages",
    image: "https://dantotsupm.com/wp-content/uploads/2022/06/trahison-planter-couteaux-dans-le-dos.png",
  },
  {
    id: 6,
    title: "Je sortais avec un mec… qui sortait aussi avec ma cousine",
    excerpt: "Tu sais ce qui fait le plus mal ? C'est pas qu'il m'ait trompée...",
    date: "2022-03-17",
    category: "Voyages",
    image: "https://img.over-blog-kiwi.com/0/79/10/23/20170512/ob_82ef09_image.png",
  },
]

export default function MesHistoires() {
  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">Mes Histoires</h1>
          <p className="mt-4 text-xl text-gray-600">
            Voici les récits personnels que j'ai partagés au fil du temps. Chacun d'eux représente un moment, une leçon
            ou une réflexion qui a marqué mon parcours.
          </p>
        </div>

        {/* Filter Section */}
        <StoryFilter />

        {/* Stories Grid */}
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.id}
              href={`/mes-histoires/${story.id}`}
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