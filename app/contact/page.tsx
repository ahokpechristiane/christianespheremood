import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">Contact</h1>
            <p className="mt-4 text-xl text-gray-600">
              Une question, une suggestion ou simplement envie d'échanger ? N'hésitez pas à me contacter.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input id="name" placeholder="Votre nom" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="juchrist02@gmail.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" placeholder="Sujet de votre message" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Votre message..." className="min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600">
                Envoyer le message
              </Button>
            </form>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-amber-100 text-amber-600 rounded-full text-xl">
                📧
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">juchrist02@gmail.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-amber-100 text-amber-600 rounded-full text-xl">
                📱
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Téléphone</h3>
              <p className="text-gray-600">+241 77802774</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-amber-100 text-amber-600 rounded-full text-xl">
                🌐
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Réseaux sociaux</h3>
              <p className="text-gray-600">@christiane Ahk</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
