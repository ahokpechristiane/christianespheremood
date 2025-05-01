import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { ArrowLeft, Heart, MessageCircle, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample story data
const stories = [
  {
    id: "1",
    title: "J’ai pardonné un homme qui ne s’est jamais excusé",
    date: "2023-03-22",
    category: "Relations",
    image: "https://img.freepik.com/vecteurs-libre/illustration-du-concept-liberte_114360-18010.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "Maria",
    content: `
      <p>🥀 
J’ai mis longtemps à écrire cette histoire. Genre, vraiment longtemps. Parce que chaque fois que je replonge dedans, c’est comme si je retombais dans ce bordel émotionnel que j’avais mis des mois à fuir. Mais bon, aujourd’hui j’ai décidé d’affronter les fantômes. De te raconter ce que ça fait de pardonner quelqu’un qui, en vrai, s’est jamais excusé. Jamais.

Tout a commencé avec lui. On va l’appeler Lui, parce que franchement il mérite même pas un surnom mignon. C’était le genre de gars qui débarque dans ta vie comme une bonne nouvelle. Tu vois rien venir. Il est drôle, il est gentil, il t’écoute (en apparence). Et toi, bah t’y crois. Tu baisses ta garde, tu ouvres ton cœur, tu te dis que peut-être, cette fois-ci, c’est différent. Sauf que spoiler alert : c’était tout sauf différent.

Il était manipulateur, toxique, égoïste. Mais malin avec ça. Il savait exactement comment te faire sentir spéciale juste assez pour que tu restes, et juste pas assez pour que tu sois heureuse. Et moi, dans ma naïveté d’amoureuse en quête de réciprocité, je suis restée. Longtemps. Trop longtemps.

Je me suis perdue. Genre, vraiment. J’ai commencé à douter de moi, à remettre en question ma valeur, à justifier l’injustifiable. Je me disais "il est juste stressé", "c’est moi qui en demande trop", "il m’aime à sa manière". Jusqu’à ce que je réalise que l’amour, le vrai, ne fait pas mal comme ça. Qu’aimer ne veut pas dire souffrir en silence.

Mais tu sais quoi ? Le plus fou, c’est pas la douleur. C’est ce qui est venu après. Le silence. Il est parti comme il est venu. Sans un mot. Sans un regard en arrière. Même pas un "je suis désolé" en option. Rien. Le vide. Et c’est là que j’ai compris que j’allais devoir faire un truc que je pensais impossible : lui pardonner. Sans excuses. Sans clôture. Sans justice.

J’ai pardonné pour moi. Pour arrêter de me balader avec une valise de colère et de tristesse. Pour me libérer de ce poids qui m’empêchait d’avancer. Parce qu’en fait, le pardon, c’est pas un cadeau que tu fais à l’autre. C’est un acte de survie. C’est dire à ta douleur : "je te vois, je t’ai entendue, mais tu ne me contrôles plus".

Aujourd’hui, je vais bien. Je te jure, vraiment. J’ai encore des cicatrices, ouais, mais elles me rappellent juste que j’ai survécu à quelque chose que j’aurais jamais dû vivre. Et c’est ça ma force. Avoir traversé l’enfer émotionnel sans perdre mon humanité. Avoir aimé, même quand on me méprisait. Avoir pardonné, même quand on ne m’a jamais demandé pardon.

Alors si toi aussi t’es là, à essayer de comprendre pourquoi il/elle t’a blessé, pourquoi tu n’as jamais eu de "désolé", sache que t’as le droit d’aller mieux. Sans eux. T’as le droit de te choisir. T’as le droit de guérir sans validation.

Pardonne pour toi. Pas pour eux. Jamais pour eux. <p>


    `,
  },
  {
    id: "2",
    title: "Il m’aimait juste assez pour que je reste…",
    date: "2023-02-10",
    category: "Guérison",
    image: "https://img.freepik.com/photos-gratuite/jeune-adulte-deprime-maison_23-2149563052.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "Sophie",
    content: `
      <p>🌪️ Il m’aimait juste assez pour que je reste… mais jamais assez pour que je sois heureuse
Tu connais ce genre de gars ? Celui qui te dit "je tiens à toi" mais qui te fait pleurer plus que rire ? Celui qui te garde dans sa vie juste assez pour pas que tu partes, mais jamais assez pour te traiter comme une priorité. Bah ouais, j’ai connu ce type-là. Et laisse-moi te dire, c’est un level de mindfuck qu’on n’apprend pas dans les livres.

Au début, il était… parfait. Tu vois, les bons matins avec les messages trop mignons genre "j’espère que t’as bien dormi ma belle 😘", les "je veux construire avec toi", les plans à deux, les promesses qui brillent plus qu’un filtre sur Insta. Et moi ? J’étais à fond. Complètement. Je l’aimais comme une ado amoureuse pour la première fois. L’âme nue, sans condition.

Mais très vite, les "je t’appelle après" sont devenus des silences radio. Les "t’es la seule" sont devenus des likes sous les stories de toutes les meufs au teint clair. Les dates se sont transformés en "j’suis occupé, on se voit une autre fois". Et moi, je devenais quoi dans tout ça ? Bah je devenais une option. Un plan B déguisé en "futur possible".

Mais à chaque fois que j’étais prête à le quitter, il revenait. Toujours avec les bons mots, au bon moment. Comme s’il sentait que j’étais à deux doigts de me réveiller. Et moi ? Bah je replongeais. Encore. Et encore. Comme une conne amoureuse qui espère que cette fois-ci, ce sera différent. (Spoiler : ça l’a jamais été.)

Il me donnait des miettes. Des petites attentions ici et là, assez pour que je m’accroche, jamais assez pour combler ce vide qu’il creusait en moi. Il me disait qu’il m’aimait, mais il le prouvait jamais. Il voulait que je sois là, mais pas trop. Il voulait mon amour, mais pas mes émotions. Il voulait que je sois douce, belle, fidèle… mais lui, il faisait le strict minimum. Et ça lui allait très bien.

Le pire dans tout ça ? C’est que je me suis oubliée pour lui. J’ai commencé à parler moins fort, à exister moins fort. Je ne voulais pas le déranger. Je ne voulais pas "en demander trop". J’étais devenue une version édulcorée de moi-même, juste pour mériter une place dans sa vie. Alors qu’en vrai ? J’aurais dû me barrer depuis longtemps.

Mais guess what ? Un jour je l’ai fait. Je suis partie. Pas parce que j’en avais plus envie, mais parce que je ne pouvais plus me trahir pour lui. Et même si j’ai pleuré, même si j’ai douté, même si j’ai eu envie de revenir... j’ai tenu bon. Parce que j’ai compris un truc : l’amour, le vrai, il te fait pas te sentir de trop. Il te donne pas l’impression d’être chiante quand tu ressens trop. Il te fait pas douter de ta valeur.

Aujourd’hui, je suis plus forte. Plus entière. Et surtout, plus jamais dispo pour les "presque", les "un jour", les "je suis pas prêt mais reste quand même". J’veux du vrai. Du brut. De l’amour qui n’a pas peur de me regarder en face.

Et toi aussi, tu mérites ça. Pas les miettes. Le gâteau entier.

</p>
    `,
  },

  {
    id: "3",
    title: " J’ai crashé un date Tinder… chez le prêtre de ma mère 😭",
    date: "2023-02-10",
    category: "Relation",
    image: "https://img.freepik.com/photos-gratuite/close-up-portrait-of-retro-elegant-etonne-africain-wooman-lunettes-soleil-pointant-deux-doigts-vers-haut-regardant-vers-haut_171337-8673.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "Annonyme",
    content: `
      <p>Y’avait ce gars sur Insta. 
      Canon, genre style un peu bad boy mais avec une bio du genre 
      
      « Dieu d’abord 🙏 ». Je swipe direct. On parle, 
      on vibe, on s’envoie des audios qui font battre le cœur.
       Il me propose un rencard le dimanche. J’dis oui. Là il m’envoie l’adresse. Je regarde, c’est pas loin d’une église… chelou. Mais je me dis qu’on va peut-être bruncher dans un coin cosy, genre ambiance gospel et mimosa. J’arrive en robe, make-up on fleek, talons, tout. Sauf que non. C’était LITTÉRALEMENT l’église. Mais pas genre pour visiter. Il m’emmène direct… dans le bureau du prêtre. Et là ? Le prêtre me regarde genre « Ah ! C’est elle ? » Et mon date sort : « Père, je vous présente ma copine. Je voulais qu’on fasse une prière pour commencer notre relation dans les bénédictions. » 😭😭😭 Moi j’étais pas prête. Surtout que le prêtre en question ? C’est le curé de ma mère. Il me reconnaît, il dit : « Toi t’étais là quand t’as jeté ton chewing-gum dans le bénitier en 2018 non ? » J’ai eu envie de disparaître. Spoiler : j’ai ghosté le gars. Mais ma mère, elle, continue de dire que c’est un bon parti. La honte.
</p>
    `,
  },

  {
    id: "4",
    title: " J’ai découvert que mon mec avait deux vies… et j’étais la side",
    date: "2023-02-10",
    category: "Choc",
    image: "https://img.freepik.com/photos-gratuite/charmee-expressive-femme-mignonne-peau-sombre-coiffure-afro-qui-tombe-machoire-haletante-etonnement-interet-se-tenant-main-visage-etant-sous-impression-observer-miracle_176420-23259.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "Annonyme",
    content: `
      <p>Je croyais vivre une love story Netflix avec Rayan. 
      Il m’appelait « mon oxygène », on faisait des pique-niques au bord du fleuve,
       il écrivait mon prénom avec des galets. J’étais love de ouf. Un jour, il part à « un séminaire pro ». 3 jours sans nouvelles. Je sens un truc chelou. Je vais stalke sa sœur sur Insta. Et là, BAAAM 💥 : je vois une story… d’un mariage. Je clique. Qui je vois ? MON mec. En boubou blanc. À côté d’une fille trop fraîche en robe ivoire. Le caption ? « Que Dieu bénisse votre union. » J’ai cru que j’allais vomir mon cœur. J’le confronte. Il dit : « Je t’aime, mais je devais l’épouser pour ma famille. » 💀💀💀 Depuis j’ai supprimé tous les Rayan de mes contacts. Et j’ai une règle : si t’as un téléphone qui sonne toujours en silencieux, j’me barre.

</p>
    `,
  },

  {
    id: "5",
    title: "La fois où j’ai volé sans faire exprès… et que j’ai failli finir en garde à vue",
    date: "2023-02-10",
    category: "Guérison",
    image: "https://img.freepik.com/photos-premium/mains-hommes-desesperes-attraper-concept-prisonnier-prison-fer_44277-9423.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "Annonyme",
    content: `
     C’était au Gabon, à Mbolo. J’essaie une robe dans une boutique. Elle me va trop bien. Je prends des selfies, j’oublie que j’ai encore la robe sur moi. Je remets mes habits, je papote avec ma pote au téléphone… et j’sors. Genre vraiment, je marche, je vais jusqu’à l’arrêt de taxi. Là, un vigile me rattrape. Il crie : « Demoiselle, c’est comment ? Tu vas où avec la robe ? » 😳😳 J’ai cru qu’il blaguait. Je rigole. Il rigole pas. Il m’attrape, il m’emmène dans le bureau de la responsable. J’essaie d’expliquer. Elle dit : « On a vu les images. T’as pris, t’as pas payé. » Je panique. Je pleure. J’appelle ma tante. Elle vient, elle paie, elle me gifle (gentiment). Et maintenant, chaque fois que je passe devant cette boutique… je baisse les yeux comme une voleuse. Tout ça pour une robe que j’ai même pas gardée 😭.
</p>
    `,
  },

  {
    id: "6",
    title: "Le jour où mon ex a crash mon anniversaire pour me faire une déclaration… pendant que j’étais avec mon nouveau mec",
    date: "2023-02-10",
    category: "Guérison",
    image: "https://img.freepik.com/vecteurs-libre/ensemble-autocollants-lol-drole_23-2148578032.jpg?uid=R174067593&ga=GA1.1.1323509944.1744639042&semt=ais_hybrid&w=740",
    author: "Sarrah",
    content: `
      <p>C’était mon anniv. 23 ans. Je sors avec mon mec du moment, Ludo. Petit dîner en terrasse, ambiance lanternes, violon, douce vibe. On rigole, on trinque. Soudain, j’entends quelqu’un qui chante. Fort. Genre très fort. Je me retourne. QUI je vois arriver en slow motion, rose à la main, micro dans l’autre ? Mon EX. Jean-Mi. Il commence à chanter « Perfect » d’Ed Sheeran. Tout le monde le regarde. Ludo me dit : « C’est qui ça ? » Je dis : « Une erreur du passé. » 😅 Jean-Mi me supplie, me dit que je suis la femme de sa vie, qu’il veut me récupérer. Ludo se lève. Je me lève. Jean-Mi s’agenouille. Le serveur s’étrangle avec sa fourchette. J’étais au milieu de la comédie romantique LA PLUS MALAISE de ma vie. Résultat ? Ludo est parti, Jean-Mi a pleuré, et moi j’ai fini mon gâteau seule. Depuis, j’évite les terrasses. Et les mecs qui chantent trop fort.

</p>
    `,
  },
]

export default function StoryDetail({ params }: { params: { id: string } }) {
  // Find the story that matches the ID
  const story = stories.find((s) => s.id === params.id) || stories[0]

  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link
            href="/histoires-des-autres"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux histoires
          </Link>

          {/* Story Header */}
          <div className="mb-8">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-amber-500 rounded-full">
              {story.category}
            </div>
            <h1 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">{story.title}</h1>
            <div className="flex items-center justify-between mt-4">
              <div className="text-gray-500">{formatDate(story.date)}</div>
              <div className="text-amber-600 font-medium">Par {story.author}</div>
            </div>
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
