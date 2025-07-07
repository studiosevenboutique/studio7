import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Studio Seven Pilates",
  description: "Contact Studio Seven Pilates in Amherstburg, Ontario. Get directions, hours, and book your reformer Pilates classes. We're here to support your wellness journey.",
  keywords: ["contact studio seven", "pilates studio amherstburg contact", "book pilates classes", "studio hours", "directions"],
  openGraph: {
    title: "Contact Studio Seven Pilates - Get in Touch",
    description: "Contact Studio Seven Pilates in Amherstburg, Ontario. Get directions, hours, and book your reformer Pilates classes.",
    images: ["/images/studio-seven-logo.png"],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
