"use client"

import Image from "next/image"

export default function MatchaBarPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light mb-4">
              The Matcha Bar
            </h1>
          </div>

          {/* Main Content Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-sm text-charcoal/80 leading-relaxed">
                Tucked inside Studio Seven is a cozy extension of our home—the Matcha Bar. Each latte is made to order with precision and heart, creating a moment of presence, and nourishment.
              </p>
              
              <p className="text-sm text-charcoal/80 leading-relaxed">
                We use ceremonial-grade matcha imported directly from Japan, ground fresh in-house to preserve its vibrant color, delicate flavor, and powerful health benefits. Rich in antioxidants and known for its calming energy and focus-enhancing properties, the matcha leaf offers a mindful boost without the crash.
              </p>
              
              <p className="text-sm text-charcoal/80 leading-relaxed">
                The perfect post pilates treat, our Matcha Bar offers a new kind of ritual—rooted in wellness, right here in the heart of Amherstburg, ON.
              </p>
            </div>

            {/* Image */}
            <div className="relative w-2/3 mx-auto lg:w-2/3 lg:ml-8">
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-cream" style={{ boxShadow: '0 0 20px rgba(161, 128, 96, 0.4), 0 0 40px rgba(161, 128, 96, 0.2), 0 0 60px rgba(161, 128, 96, 0.1)' }}>
                <div className="w-full h-full transform-gpu transition-transform duration-700 hover:scale-[1.02]">
                  <Image
                    src="/images/IMG_7950.JPG"
                    alt="Ceremonial matcha being prepared at Studio Seven"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="bg-cream rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-charcoal">
              A Mindful Ritual
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-sm text-charcoal/80 leading-relaxed">
                Whether you're preparing for your practice or unwinding afterward, our Matcha Bar provides the perfect space to pause, breathe, and savor a moment of tranquility in your wellness journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 