"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
      <div className="container-custom py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-light mb-4 text-charcoal">404</h1>
          <h2 className="text-2xl font-light mb-6 text-charcoal">Page Not Found</h2>
          <p className="text-charcoal/80 mb-8 text-lg leading-relaxed">
            The page you're looking for doesn't exist. Let's get you back to your wellness journey.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full btn-3d">
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal/10 rounded-full">
              <Link href="/classes">View Classes</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
