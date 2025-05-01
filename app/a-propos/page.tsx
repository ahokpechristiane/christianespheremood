import Image from "next/image"

export default function APropos() {
  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">À Propos</h1>
            <p className="mt-4 text-xl text-gray-600">Découvrez l'histoire derrière ce blog et sa mission.</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/images/moi.jpg" alt="Photo de l'auteur" fill className="object-cover" />

            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Qui suis-je ?</h2>
              <p className="text-lg text-gray-600">
              Hello, moi c’est christiane ou Christy pour les habitué 😏. Une fille passionnée par les mots, les émotions et les bouts de vie qu’on garde trop souvent pour soi.
              </p>
              <p className="text-lg text-gray-600">
              Depuis toujours, j’aime écouter, observer, écrire. J’ai cette conviction que chaque personne porte une histoire qui mérite d’être racontée — que ce soit une douleur cachée, une leçon inattendue, ou un petit moment de lumière.
              </p>
              <p className="text-lg text-gray-600">
              Ce blog, c’est un endroit doux où je dépose mes propres récits. Mais surtout, c’est un espace où toi aussi, tu peux me confier le tien. Ensemble, on crée un petit refuge de vérité, de partage et d’humanité.


              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ma Vision</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
              Je crois fort que les histoires ont un pouvoir. Elles guérissent. Elles rapprochent. Elles donnent du sens.
              </p>
              <p>
              À une époque où tout va vite, où les réseaux nous poussent à montrer que le beau, j’ai voulu créer ici un coin simple, sincère, où on peut être vrai. Où on peut pleurer, rire, se reconnaître dans les mots d’un inconnu.
              </p>
              <p>
              Ce blog existe pour ça : rendre visibles les vies qu’on ne raconte pas assez.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Pourquoi partager nos histoires ?</h2>
            <div className="grid gap-8 md:grid-cols-3 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-100 text-amber-600 rounded-full text-3xl">
                  ❤️
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pour guérir ❤️</h3>
                <p className="text-gray-600">
                Écrire ou lire un vécu qui nous ressemble, c’est comme déposer un poids. Ça libère.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-100 text-amber-600 rounded-full text-3xl">
                  💡
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pour inspirer 💡</h3>
                <p className="text-gray-600">
                Peut-être que ton histoire donnera du courage à quelqu’un qui vit la même chose sans oser en parler.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-100 text-amber-600 rounded-full text-3xl">
                  🔄
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">🔗 Pour connecter</h3>
                <p className="text-gray-600">
                Nos récits tissent des liens invisibles. Peu importe d’où l’on vient, il y a toujours un endroit où nos émotions se rencontrent.


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
