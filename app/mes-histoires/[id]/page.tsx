import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { ArrowLeft, Heart, MessageCircle, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// Story data
const stories = [
  {
    id: 1,
    title: "Le jour où j’ai compris que l’amour ne suffit pas",
    date: "2023-10-02",
    category: "Déceptions et révélations",
    image: "https://img.freepik.com/photos-gratuite/couple-noir-se-bagarre-homme-essaie-dire-desole-mais-femme-ne-parle-pas_53876-30560.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    content: `
      <p>On était au lycée. Lui et moi, on se croisait souvent dans les couloirs. Il me lançait des regards, moi je faisais comme si je voyais rien. Il a mis du temps, vraiment. Des mois à me tourner autour, à essayer de m'avoir. Je le trouvais charmant, drôle... mais j'étais méfiante. Et j'avais raison.</p>

    <p>Le jour avant que je dise "oui", il m’a trompée. J’étais loin de me douter de quoi que ce soit. Le lendemain, il est venu vers moi avec ses grands yeux sincères, ses belles paroles… et j’ai craqué. J’ai accepté de sortir avec lui, sans savoir ce qu’il avait fait la veille.</p>

    <h2>La soirée pyjama</h2>

    <p>Quelques jours après, on a organisé une soirée pyjama entre potes. On a rigolé, regardé des films, dormi ensemble. C’était mignon, innocent, presque parfait. Mais la vérité n’était pas loin.</p>

    <p>Le lendemain, j’ai pris l’ordinateur de son pote pour regarder un film. En l’allumant, WhatsApp s’est ouvert tout seul. Je ne cherchais rien… mais je suis tombée sur leurs messages. Mon ex et son pote parlaient d’une fille. Une fille dont je ne connaissais même pas le prénom. Une fille avec qui il avait couché juste avant qu’on se mette ensemble.</p>

    <h2>La claque</h2>

    <p>Ma curiosité a pris le dessus. J’ai continué à lire. J’ai tout recollé. J’étais là, devant l’écran, le cœur en miettes. On s’est embrouillés, bien sûr. J’ai crié, pleuré, mais au fond… je l’aimais déjà trop. Alors je lui ai pardonné. Ou plutôt, j’ai essayé.</p>

    <h2>Le message de trop</h2>

    <p>Quelques semaines plus tard, il m’envoie un message : "Je peux te voir ?" Je pensais qu’il voulait s’excuser encore, ou peut-être essayer de recoller les morceaux. Mais non. Il m’a regardée droit dans les yeux et il m’a dit : "Je dois te dire un truc… Elle est enceinte."</p>

    <p>Je crois que mon cœur s’est arrêté. Plus de mots, plus de pensées. Juste le vide. J’ai pas cherché à comprendre. J’ai tourné les talons et je suis partie. C’était fini. Définitivement.</p>

    <h2>Ce que j’ai appris</h2>

    <p>Cette histoire m’a laissé un goût amer, mais elle m’a aussi appris une chose essentielle : parfois, **l’amour ne suffit pas**. On peut aimer quelqu’un très fort, lui donner des chances, se battre pour lui… mais s’il n’est pas prêt, s’il ne te respecte pas, alors tu dois apprendre à partir.</p>

    <p>Depuis, je fais confiance à mon intuition. Je me choisis d’abord. Et surtout, je sais que je mérite un amour honnête, entier, pas un amour bancal à réparer tous les soirs.</p>

    <p>Alors à toi qui lis ceci : ne laisse jamais quelqu’un te convaincre que tu demandes trop, que tu es trop sensible ou que tu devrais "supporter un peu plus". Tu mérites mieux. Toujours.</p>
    `,
  },
  {
    id: 2,
    title: "Quand j’ai découvert que j’étais la « pause » entre deux vraies relations",
    date: "2023-11-15",
    category: "Cœurs en miettes",
    image: "https://img.freepik.com/photos-gratuite/anneaux-mariage-coeur-papier-brise_23-2148536025.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    content: `
       <p>Il sortait d’une longue relation. Moi, j’étais là, prête à l’aimer pour de vrai. Il me disait qu’il avait besoin de temps, qu’il n’était pas encore guéri… mais qu’avec moi, il se sentait vivant.</p>

    <p>On passait des heures au téléphone. Il me parlait de ses rêves, de ses peurs, de son ex aussi… trop souvent. Mais je me disais que ça allait passer, qu’il finirait par tourner la page. Spoiler : il l’a fait. Mais pas avec moi.</p>

    <h2>Le retour de flamme</h2>

    <p>Un jour, silence radio. Plus de messages, plus d’appels. Je m’inquiète. Je m’invente des excuses pour lui : peut-être un drame familial, peut-être qu’il a juste besoin d’espace. Puis il poste une story. Une main. Un resto. Une légende : "Ma personne".</p>

    <p>Ce n’était pas la mienne.</p>

    <h2>J’ai compris</h2>

    <p>Il était retourné avec son ex. Comme si je n’avais été qu’un entre-deux. Une pause. Une distraction. Ça m’a brisée. Je ne méritais pas ça. Personne ne mérite d’être l’option temporaire dans la vie de quelqu’un.</p>

    <p>Depuis, je fais attention. Je me demande toujours : suis-je un choix, ou juste un pansement sur une blessure qu’il ne veut pas soigner ?</p>
    `,
  },
  {
    id: 3,
    title: "Il m’aimait fort, mais dans le noir seulement",
    date: "2024-01-08",
    category: "Amours cachés",
    image: "https://img.freepik.com/photos-gratuite/femme-aux-cheveux-afro-noirs-tatouage-sa-main_246466-31.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    content: `
      <p>On se voyait souvent. Chez lui. Chez moi. Mais jamais dehors. Jamais avec ses potes. Jamais là où les gens pouvaient nous voir. Il disait que c’était pas le moment, qu’il voulait « nous protéger » du regard des autres.</p>

    <p>Au début, j’ai cru à cette excuse. Je me disais que c’était peut-être trop tôt. Mais les mois passaient… et j’étais toujours son secret.</p>

    <h2>Le choc</h2>

    <p>Un samedi, je sors avec mes copines. On décide d’aller boire un verre. Et là, je le vois. Avec une autre fille. Main dans la main. Devant tout le monde. Fier. Souriant.</p>

    <p>Mon cœur s’est serré. J’ai compris que j’avais jamais été « la bonne ». Juste celle qu’on cache, qu’on appelle quand il fait froid et qu’on est seul. Celle qui pense qu’elle compte, alors qu’elle est juste... pratique.</p>

    <h2>Le déclic</h2>

    <p>Ce soir-là, j’ai décidé de ne plus jamais être l’ombre de quelqu’un. S’il ne peut pas m’aimer en plein jour, il ne mérite pas mes nuits. Point.</p>

    <p>Maintenant, je veux un amour qui brille, pas un amour qui se cache.</p>
    `,
  },

  {
    id: 4,
    title: "J’étais sa copine officielle… sauf sur les réseaux",
    date: "2024-02-14",
    category: "Relations floues",
    image: "https://img.freepik.com/photos-gratuite/femme-triste-pleure_53876-14727.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    content: `
      <p>Il m’appelait "mon amour" tous les jours, me ramenait à manger, venait me chercher après les cours. On dormait ensemble presque tous les week-ends. Mais sur ses réseaux ? Aucune trace de moi.</p>
  
      <p>Au début je me disais qu’il était discret. Je respectais. Puis un jour j’ai vu une story où une fille disait "merci pour la Saint-Valentin bébé 💕". Et ce n’était pas moi. J’ai cliqué. Son profil était public. Des photos d’eux, des commentaires, des cœurs, des dates.</p>
  
      <p>Mon cœur a fait BOUM. Et pas le bon genre de BOUM. J’étais la meuf de l’ombre. La version silencieuse d’un mec qui menait une double vie.</p>
  
      <p>J’ai tout screenshot. Je lui ai envoyé. Il a juste répondu "C’est pas ce que tu crois". Classique. Aujourd’hui, je veux un amour qui m’affiche, pas un qui me cache.</p>
    `,
  },
  
  {
    id: 5,
    title: "Il m’a dit 'je t’aime', mais c’était juste après avoir couché avec moi",
    date: "2024-03-03",
    category: "Illusions d’amour",
    image: "https://dantotsupm.com/wp-content/uploads/2022/06/trahison-planter-couteaux-dans-le-dos.png",
    content: `
      <p>J’avais attendu. Parce que pour moi, c’était pas juste un jeu. Lui, il m’avait dit qu’il voulait "prendre son temps". On sortait ensemble depuis deux mois, c’était doux, tendre… ou du moins, je croyais.</p>
  
      <p>Et puis un soir, c’est arrivé. C’était magique, je ne vais pas mentir. Il m’a regardée dans les yeux, essoufflé, et m’a dit "je t’aime". Mon cœur s’est emballé. J’y ai cru de toutes mes forces.</p>
  
      <p>Deux semaines plus tard, il ne répondait plus à mes messages. Ghost complet. Vu et ignorée. J’ai appris par un pote qu’il avait dit à ses amis "C’est bon, j’ai eu ce que je voulais".</p>
  
      <p>J’ai pleuré. Beaucoup. Mais je me suis aussi jurée : plus jamais quelqu’un qui me dit "je t’aime" juste pour me posséder. Mon corps mérite du respect, mon cœur encore plus.</p>
    `,
  },
  
  {
    id: 6,
    title: "Je sortais avec un mec… qui sortait aussi avec ma cousine",
    date: "2024-04-12",
    category: "Drame familial",
    image: "https://img.over-blog-kiwi.com/0/79/10/23/20170512/ob_82ef09_image.png",
    content: `
      <p>Tu sais ce qui fait le plus mal ? C’est pas qu’il m’ait trompée. C’est avec QUI il l’a fait.</p>
  
      <p>J’étais en couple avec lui depuis trois mois. Il connaissait ma famille, il venait aux fêtes, il aidait même ma grand-mère à porter ses sacs. Tout le monde l’adorait.</p>
  
      <p>Un jour, ma cousine vient chez moi en mode "faut que je te raconte un truc chelou". Elle me montre un message. C’était LUI. Même ton, mêmes émojis, mêmes promesses. Et son message datait d’hier soir.</p>
  
      <p>On a décidé de le piéger. On lui a donné rendez-vous au même endroit, à la même heure… nous deux. Quand il nous a vues, il a juste soufflé "oh merde". Il a essayé de nous diviser, mais on l’a bloqué toutes les deux. Ensemble.</p>
  
      <p>Depuis, on est plus proches que jamais. Lui ? Je pense qu’il cherche encore une cousine à embobiner. Bon courage à lui.</p>
    `,
  }
  

  
]

export default function StoryDetail({ params }: { params: { id: string } }) {
  const storyId = parseInt(params.id)
  const story = stories.find((s) => s.id === storyId)

  if (!story) {
    return (
      <main className="min-h-screen py-12 bg-gray-50">
        <div className="container px-4 mx-auto text-center text-red-500 font-semibold">
          Histoire introuvable 🫥
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link href="/mes-histoires" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux histoires
          </Link>

          {/* Story Header */}
          <div className="mb-8">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-amber-500 rounded-full">
              {story.category}
            </div>
            <h1 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">{story.title}</h1>
            <div className="mt-4 text-gray-500">{formatDate(story.date)}</div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-8">
            <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" priority />
          </div>

          {/* Story Content */}
          <div
            className="story-content bg-white p-8 rounded-lg shadow-md mb-8"
            dangerouslySetInnerHTML={{ __html: story.content }}
          />

          {/* Engagement Buttons */}
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
            <div className="flex space-x-4">
              <Button variant="ghost" className="flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                J'aime
              </Button>
              <Button variant="ghost" className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Commenter
              </Button>
            </div>
            <Button variant="ghost" className="flex items-center">
              <Share2 className="w-5 h-5 mr-2" />
              Partager
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
