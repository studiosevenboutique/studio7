import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Class Schedule - Book Your Pilates Sessions",
  description: "View and book our reformer Pilates class schedule at Studio Seven in Amherstburg, Ontario. Foundation, Sculpt & Tone, and The Burn classes available daily.",
  keywords: ["pilates schedule", "book pilates classes", "class times", "reformer pilates booking", "amherstburg fitness schedule"],
  openGraph: {
    title: "Studio Seven Pilates Class Schedule - Book Your Sessions",
    description: "View and book our reformer Pilates class schedule. Foundation, Sculpt & Tone, and The Burn classes available daily in Amherstburg, Ontario.",
    images: ["/images/studio-seven-logo.png"],
  },
}

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
