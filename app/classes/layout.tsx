import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pilates Classes - Foundation, Sculpt & Tone, The Burn",
  description: "Explore our reformer Pilates classes at Studio Seven: Foundation (Level 1), Sculpt & Tone (Level 2), and The Burn (Level 3). Learn about the benefits of Pilates for strength, endurance, flexibility, and body alignment.",
  keywords: ["pilates classes", "reformer pilates", "foundation pilates", "sculpt and tone", "the burn class", "pilates benefits", "strength training", "flexibility", "amherstburg classes"],
  openGraph: {
    title: "Pilates Classes at Studio Seven - Foundation, Sculpt & Tone, The Burn",
    description: "Explore our reformer Pilates classes: Foundation (Level 1), Sculpt & Tone (Level 2), and The Burn (Level 3). Experience the benefits of strength, endurance, flexibility, and body alignment.",
    images: ["/images/foundation.jpg"],
  },
}

export default function ClassesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
