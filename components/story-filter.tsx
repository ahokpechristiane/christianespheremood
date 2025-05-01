"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

// Sample categories
const categories = [
  "Tous",
  "Leçons de vie",
  "Relations",
  "Carrière",
  "Voyages",
  "Défis",
  "Guérison",
  "Famille",
  "Réflexions",
  "Résilience",
]

export function StoryFilter() {
  const [activeCategory, setActiveCategory] = useState("Tous")

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="mb-4 text-lg font-semibold text-gray-800">Filtrer par thème</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className={activeCategory === category ? "bg-amber-500 hover:bg-amber-600" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
