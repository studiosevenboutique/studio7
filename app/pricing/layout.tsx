import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing & Packages - Class Packs & Private Sessions",
  description: "View our Pilates pricing options at Studio Seven: Intro offers for new clients, class packages, single drop-ins, and private reformer sessions. Book your Pilates journey today.",
  keywords: ["pilates pricing", "class packages", "private pilates sessions", "intro offer", "reformer pilates pricing", "amherstburg pilates rates"],
  openGraph: {
    title: "Studio Seven Pilates Pricing - Class Packs & Private Sessions",
    description: "View our Pilates pricing options: Intro offers for new clients, class packages, single drop-ins, and private reformer sessions. Book your Pilates journey today.",
    images: ["/images/studio-seven-logo.png"],
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
