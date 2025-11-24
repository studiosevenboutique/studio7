import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Studio Seven Pilates Boutique. Learn how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.studiosevenboutique.com/privacy-policy",
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

