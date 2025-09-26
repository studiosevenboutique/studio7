import { Button } from "@/components/ui/button"
import Link from "next/link"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"

export default function CTASection() {
  return (
    <section className="py-12 md:py-20 bg-charcoal text-white">
      <div className="container-custom text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl mb-4 md:mb-6 font-light section-title">
          <DataSplitting type="words" delay={0.2} stagger={0.1}>
            Begin Your Pilates Journey
          </DataSplitting>
        </h2>
        <div className="overflow-hidden">
          <DataSplitting
            type="words"
            delay={0.5}
            stagger={0.03}
            as="p"
            className="text-white/80 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base leading-relaxed"
          >
            Join our community of mindful movers and experience the transformative power of Pilates. New clients receive
            a complimentary consultation with one of our expert instructors.
          </DataSplitting>
        </div>
        <IntersectionObserver className="flex justify-center stagger-card">
          <Button className="bg-white text-charcoal hover:bg-cream rounded-full btn-3d px-8 sm:px-12 text-sm sm:text-base" size="lg" asChild>
            <Link href="/schedule">Book Your First Class</Link>
          </Button>
        </IntersectionObserver>
      </div>
    </section>
  )
}
