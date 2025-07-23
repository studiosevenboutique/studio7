import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private Pilates Sessions | Studio Seven",
  description: "Experience personalized Pilates instruction with our private sessions. One-on-one training tailored to your unique needs and goals in Amherstburg, ON.",
  keywords: ["private pilates", "one-on-one pilates", "personal training", "pilates instructor", "Amherstburg", "reformer pilates", "injury recovery"],
  openGraph: {
    title: "Private Pilates Sessions | Studio Seven",
    description: "Experience personalized Pilates instruction with our private sessions. One-on-one training tailored to your unique needs and goals.",
    url: "https://www.studiosevenboutique.com/privates",
    siteName: "Studio Seven",
    images: [
      {
        url: "https://www.studiosevenboutique.com/images/studio-seven-logo.png",
        width: 1200,
        height: 630,
        alt: "Studio Seven - Private Pilates Sessions",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Pilates Sessions | Studio Seven",
    description: "Experience personalized Pilates instruction with our private sessions in Amherstburg, ON.",
    images: ["https://www.studiosevenboutique.com/images/studio-seven-logo.png"],
  },
  alternates: {
    canonical: "https://www.studiosevenboutique.com/privates",
  },
}

export default function PrivatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
