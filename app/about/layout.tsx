import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description: "Learn about Studio Seven Pilates in Amherstburg, Ontario. Discover our story, mission, and commitment to wellness through reformer Pilates and mindful movement.",
  keywords: ["about studio seven", "pilates studio amherstburg", "our story", "wellness mission", "reformer pilates", "ontario fitness"],
  openGraph: {
    title: "About Studio Seven Pilates - Our Story & Mission", 
    description: "Learn about Studio Seven Pilates in Amherstburg, Ontario. Discover our story, mission, and commitment to wellness through reformer Pilates.",
    images: ["/images/mother_daughter.jpg"],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
