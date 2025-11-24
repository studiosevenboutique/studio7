"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"
import { throttle } from "@/lib/utils"
import Image from "next/image"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@studiosevenboutique.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: email,
          _subject: "Newsletter Subscription",
          _template: "table"
        })
      })

      if (response.ok) {
        setIsSuccess(true)
        setEmail("")
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }
  useEffect(() => {
    // Initialize animations for elements already in view
    const handleScroll = throttle(() => {
      document.querySelectorAll(".stagger-card:not(.animate)").forEach((element) => {
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
          element.classList.add("animate")
        }
      })
    }, 100)

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Trigger initial animation
    setTimeout(() => {
      handleScroll()
    }, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <footer className="bg-cream pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Studio Info */}
          <IntersectionObserver className="stagger-card">
            <div className="mb-6">
              <Image
                src="/images/studio-seven-logo.png"
                alt="Studio Seven"
                width={500}
                height={94}
                className="h-8 w-auto"
                quality={100}
              />
            </div>
            <div className="overflow-hidden">
              <DataSplitting type="words" delay={0.3} stagger={0.02} as="p" className="text-sm text-charcoal/80 mb-6">
                A modern Pilates studio dedicated to mindful movement, strength building, and holistic wellness in a
                serene environment.
              </DataSplitting>
            </div>
            <div className="flex items-center gap-4 text-charcoal/80">
              <Link
                href="https://www.instagram.com/studiosevenboutique/"
                className="hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:scale-110"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.facebook.com/people/Studio-Seven-Boutique/61576876208997/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:scale-110"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="mailto:info@studiosevenboutique.com"
                className="hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </IntersectionObserver>

          {/* Quick Links */}
          <IntersectionObserver className="stagger-card">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-charcoal/80 hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:translate-x-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-charcoal/80 hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:translate-x-1"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-charcoal/80 hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:translate-x-1"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-charcoal/80 hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:translate-x-1"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-charcoal/80 hover:text-charcoal transition-colors transform-gpu transition-all duration-300 hover:translate-x-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </IntersectionObserver>

          {/* Contact Info */}
          <IntersectionObserver className="stagger-card">
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start transform-gpu transition-all duration-300 hover:translate-x-1">
                <MapPin size={18} className="mr-2 text-charcoal/80 shrink-0 mt-0.5" />
                <span className="text-charcoal/80">
                  300 Victoria St S
                  <br />
                  Amherstburg ON N9V 1M9
                </span>
              </li>
              <li className="flex items-center transform-gpu transition-all duration-300 hover:translate-x-1">
                <Phone size={18} className="mr-2 text-charcoal/80" />
                <Link href="tel:+15195514767" className="text-charcoal/80 hover:text-charcoal transition-colors">
                  (519) 551-4767
                </Link>
              </li>
              <li className="flex items-center transform-gpu transition-all duration-300 hover:translate-x-1">
                <Mail size={18} className="mr-2 text-charcoal/80" />
                <Link
                  href="mailto:info@studiosevenboutique.com"
                  className="text-charcoal/80 hover:text-charcoal transition-colors"
                >
                  info@studiosevenboutique.com
                </Link>
              </li>
            </ul>
          </IntersectionObserver>

          {/* Newsletter */}
          <IntersectionObserver className="stagger-card">
            <h3 className="text-lg font-bold mb-4">
              <DataSplitting type="words" delay={0.2} stagger={0.1}>
                Stay Connected
              </DataSplitting>
            </h3>
            <p className="text-sm text-charcoal/80 mb-4">
              Subscribe to our newsletter for class updates, wellness tips, and special offers.
            </p>
            
            {isSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-3 mb-4 rounded text-sm">
                Thank you for subscribing! Welcome to our community.
              </div>
            )}
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border-sand focus-visible:ring-charcoal transform-gpu transition-all duration-300 focus:scale-[1.01]"
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                className="w-full bg-charcoal text-white hover:bg-charcoal/90 rounded-full btn-3d"
                disabled={isSubmitting || !email.trim()}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </IntersectionObserver>
        </div>

        <div className="mt-8 pt-4 border-t border-sand/50 text-center text-xs text-charcoal/70">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-2">
            <Link
              href="/privacy-policy"
              className="text-charcoal/70 hover:text-charcoal transition-colors underline"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-xs opacity-60">© 2025 Studio Seven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
