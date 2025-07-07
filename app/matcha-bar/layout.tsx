import { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Matcha Bar - Ceremonial Grade Matcha & Wellness",
  description: "Enjoy ceremonial-grade matcha imported from Japan at our cozy Matcha Bar inside Studio Seven. The perfect post-Pilates treat for mindful nourishment in Amherstburg, ON.",
  keywords: ["matcha bar", "ceremonial grade matcha", "japanese matcha", "wellness drinks", "post pilates", "mindful nourishment", "amherstburg cafe"],
  openGraph: {
    title: "The Matcha Bar at Studio Seven - Ceremonial Grade Japanese Matcha",
    description: "Enjoy ceremonial-grade matcha imported from Japan at our cozy Matcha Bar. The perfect post-Pilates treat for mindful nourishment.",
    images: ["/images/matcha.jpg"],
  },
}

export default function MatchaBarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
