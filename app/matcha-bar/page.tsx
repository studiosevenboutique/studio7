"use client"

import Image from "next/image"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"

export default function MatchaBarPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-8 section-title">
              <DataSplitting type="words" delay={0.2} stagger={0.1}>
                THE MATCHA BAR
              </DataSplitting>
            </h1>
          </div>

          {/* Main Content Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Text Content */}
            <IntersectionObserver className="space-y-6">
              <div className="overflow-hidden">
                <DataSplitting
                  type="words"
                  delay={0.5}
                  stagger={0.03}
                  as="p"
                  className="text-charcoal/80 text-base leading-relaxed"
                >
                  Tucked inside Studio Seven is a cozy extension of our home—the Matcha Bar. Each latte is made to order with precision and heart, creating a moment of presence, and nourishment.
                </DataSplitting>
              </div>
              
              <div className="overflow-hidden">
                <DataSplitting
                  type="words"
                  delay={0.8}
                  stagger={0.03}
                  as="p"
                  className="text-charcoal/80 text-base leading-relaxed"
                >
                  We use ceremonial-grade matcha imported directly from Japan, ground fresh in-house to preserve its vibrant color, delicate flavor, and powerful health benefits. Rich in antioxidants and known for its calming energy and focus-enhancing properties, the matcha leaf offers a mindful boost without the crash.
                </DataSplitting>
              </div>
              
              <div className="overflow-hidden">
                <DataSplitting
                  type="words"
                  delay={1.1}
                  stagger={0.03}
                  as="p"
                  className="text-charcoal/80 text-base leading-relaxed"
                >
                  The perfect post pilates treat, our Matcha Bar offers a new kind of ritual—rooted in wellness, right here in the heart of Amherstburg, ON.
                </DataSplitting>
              </div>
            </IntersectionObserver>

            {/* Image */}
            <IntersectionObserver className="relative w-2/3 ml-auto lg:ml-8">
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-lg bg-cream">
                <div className="w-full h-full transform-gpu transition-transform duration-700 hover:scale-[1.02]">
                  <Image
                    src="/images/matcha.jpg"
                    alt="Ceremonial matcha being prepared at Studio Seven"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </IntersectionObserver>
          </div>

          {/* Additional Info Section */}
          <IntersectionObserver className="bg-cream rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-charcoal">
              <DataSplitting type="words" delay={0.2} stagger={0.1}>
                A Mindful Ritual
              </DataSplitting>
            </h2>
            <div className="max-w-3xl mx-auto">
              <DataSplitting
                type="words"
                delay={0.5}
                stagger={0.03}
                as="p"
                className="text-charcoal/80 text-base leading-relaxed"
              >
                Whether you're preparing for your practice or unwinding afterward, our Matcha Bar provides the perfect space to pause, breathe, and savor a moment of tranquility in your wellness journey.
              </DataSplitting>
            </div>
          </IntersectionObserver>
        </div>
      </div>
    </div>
  )
} 