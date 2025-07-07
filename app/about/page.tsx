"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import IntersectionObserver from "@/components/animations/intersection-observer"

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          <IntersectionObserver className="text-center mb-12 stagger-card">
            <h1 className="text-4xl font-light mb-4 animate-fade-in-up">About Us</h1>
          </IntersectionObserver>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <IntersectionObserver className="stagger-card">
              <h2 className="text-3xl font-light mb-6 animate-fade-in-up">Our Story</h2>
              <p className="text-sm text-charcoal/80 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Studio Seven was thoughtfully created by mother-daughter duo Laura and Danijela, whose shared love for Pilates blossomed into something much more. What began as a personal journey, earning their mat and reformer certifications side by side, quickly evolved into a vision for a space where they could share their passion with others.
              </p>
              <p className="text-sm text-charcoal/80 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                With a deep appreciation for health, wellness, and the power of mindful movement, they combined their knowledge and heart to bring Studio Seven to life. Their approach blends modern Pilates techniques with a strong focus on mind-body connection, all within a welcoming and supportive environment.
              </p>
              <p className="text-sm text-charcoal/80 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Located in Amherstburg, ON, Studio Seven is more than a studio, it's a community where you're encouraged to move with purpose, grow with confidence, and feel truly at home.
              </p>
            </IntersectionObserver>
            <IntersectionObserver className="stagger-card">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="relative rounded-2xl shadow-lg overflow-hidden aspect-[3/4] w-4/5 mx-auto bg-cream">
                  <Image
                    src="/images/mother_daughter.jpg"
                    alt="Laura and Danijela - Mother-Daughter Duo"
                    fill
                    className="object-cover object-[center_65%]"
                  />
                </div>
              </div>
            </IntersectionObserver>
          </div>

          <div className="mb-16">
            <IntersectionObserver className="text-center mb-12 stagger-card">
              <h2 className="text-3xl font-light mb-8 animate-fade-in-up">The Secret behind the 7</h2>
            </IntersectionObserver>

            <IntersectionObserver className="stagger-card">
              <div className="bg-cream rounded-3xl p-12 mx-auto max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="prose prose-lg mx-auto text-center">
                  <p className="text-charcoal/90 text-base leading-relaxed mb-6">
                    At Studio Seven, the number 7 holds deep significance—it represents inner wisdom, spiritual awakening, and the pursuit of deeper meaning. In numerology, 7 is a number of introspection, balance, and connection between mind, body, and spirit—all of which reflect the heart of our wellness philosophy.
                  </p>
                  <p className="text-charcoal/90 text-base leading-relaxed mb-6">
                    Just as Pilates encourages intentional movement and mindful alignment, the number 7 symbolizes a journey inward—toward clarity, resilience, and lasting vitality.
                  </p>
                  <p className="text-charcoal/90 text-base leading-relaxed font-medium">
                    Studio Seven is more than a place to move; it's a space to reconnect, realign, and elevate your entire being from the inside out.
                  </p>
                </div>
              </div>
            </IntersectionObserver>
          </div>

          <IntersectionObserver className="bg-cream p-8 text-center stagger-card">
            <h2 className="text-2xl font-light mb-4 animate-fade-in-up">Ready to Reform?</h2>
            <p className="text-charcoal/80 max-w-2xl mx-auto mb-6 text-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Join us for a class and discover the transformative power of mindful movement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full" asChild>
                <Link href="/schedule">View Schedule</Link>
              </Button>
              <Button
                variant="outline"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-full"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </IntersectionObserver>
        </div>
      </div>
    </div>
  )
}
