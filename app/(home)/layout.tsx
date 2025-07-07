import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Studio Seven Pilates | Reformer Pilates Studio in Amherstburg, ON",
  description: "Transform your body and mind at Studio Seven Pilates in Amherstburg, Ontario. Expert reformer Pilates instruction, small class sizes, and ceremonial-grade matcha bar. Book your wellness journey today.",
  keywords: ["pilates studio amherstburg", "reformer pilates ontario", "fitness classes", "wellness center", "matcha bar", "mind body connection", "strength training", "flexibility"],
  openGraph: {
    title: "Studio Seven Pilates | Reformer Pilates Studio in Amherstburg, ON",
    description: "Transform your body and mind at Studio Seven Pilates. Expert reformer Pilates instruction, small class sizes, and ceremonial-grade matcha bar in Amherstburg, Ontario.",
    images: ["/images/studiophoto1.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
