"use client"

// Type definitions for MindBody
declare global {
  interface Window {
    healcode?: any
  }
}

import { useEffect, useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function PricingPage() {
  const scriptLoaded = useRef(false)

  // Function to handle button styling after MindBody script loads
  const styleMindBodyLinks = () => {
    // Find all healcode links and style them as buttons
    const links = document.querySelectorAll(".healcode-pricing-option-text-link")
    links.forEach((link) => {
      link.classList.add(
        "w-full",
        "bg-charcoal",
        "text-white",
        "py-3",
        "px-6",
        "rounded-[200px]",
        "hover:bg-charcoal/90",
        "transition-colors",
        "inline-block",
        "text-center",
        "btn-3d",
        "text-sm",
        "font-medium"
      )
    })
  }

  useEffect(() => {
    // Load the MindBody script
    if (!scriptLoaded.current) {
      const script = document.createElement("script")
      script.src = "https://widgets.mindbodyonline.com/javascripts/healcode.js"
      script.async = true
      script.onload = () => {
        scriptLoaded.current = true
        // Style links after script loads
        setTimeout(styleMindBodyLinks, 500)
      }
      document.body.appendChild(script)
    }

    // Check if the script has already been loaded
    if (window.healcode && !scriptLoaded.current) {
      scriptLoaded.current = true
      // Style links after a short delay to ensure they're rendered
      setTimeout(styleMindBodyLinks, 500)
    }

    // Set up a MutationObserver to detect when healcode widgets are added to the DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          // Check if any healcode links were added
          const links = document.querySelectorAll(".healcode-pricing-option-text-link")
          if (links.length > 0) {
            styleMindBodyLinks()
          }
        }
      })
    })

    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      // Clean up the observer when component unmounts
      observer.disconnect()
    }
  }, [])

  // Function to render a MindBody widget
  const renderMindBodyWidget = (serviceId: string, innerHtml: string) => {
    return (
      <div
        className="w-full"
        dangerouslySetInnerHTML={{
          __html: `<healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="126366" data-mb-site-id="5744900" data-service-id="${serviceId}" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="${innerHtml}" />`,
        }}
      />
    )
  }

  return (
    <>
      <style jsx global>{`
        .healcode-pricing-option-text-link {
          display: inline-block;
          width: 100%;
          background-color: #232323;
          color: white !important;
          padding: 0.75rem 1.5rem;
          border-radius: 200px;
          text-align: center;
          font-weight: 500;
          text-decoration: none !important;
          transition: background-color 0.2s;
        }
        .healcode-pricing-option-text-link:hover {
          background-color: #444;
        }
        .healcode-contract-text-link {
          display: inline-block;
          width: 100%;
          background-color: #232323;
          color: white !important;
          padding: 0.75rem 1.5rem;
          border-radius: 200px;
          text-align: center;
          font-weight: 500;
          text-decoration: none !important;
          transition: background-color 0.2s;
        }
        .healcode-contract-text-link:hover {
          background-color: #444;
        }
      `}</style>
      <div className="pt-20 min-h-screen bg-cream">
        <div className="container-custom py-8 md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Memberships Section */}
            <h2 className="text-xl md:text-2xl font-light mb-8 text-center section-title">
              Memberships
            </h2>

            {/* Club 7 Component */}
            <div className="mb-16">
              <Card className="bg-white shadow-lg border-0 rounded-lg overflow-hidden">
                <CardContent className="p-6 md:p-8 text-center">
                  <h3 className="text-2xl md:text-3xl font-light mb-6 text-charcoal">
                    Club 7
                  </h3>
                  <div className="space-y-4 text-charcoal/80 leading-relaxed">
                    <p className="text-base md:text-lg">
                      Introducing Club 7 — our members-only Pilates experience designed for women who want more than just a workout.
                    </p>
                    <p className="text-base md:text-lg">
                      Very limited spots available at our exclusive founders rate:
                    </p>
                    <p className="text-lg md:text-xl font-medium text-charcoal">
                      $250 + HST/month — one time only.
                    </p>
                    <p className="text-base md:text-lg">
                      ✨ The first 10 sign-ups will receive an exclusive CLUB 7 gift!
                    </p>
                    <p className="text-base md:text-lg">
                      Join us and become part of something special — where movement meets connection, and fitness feels effortless.
                    </p>
                    <p className="text-base md:text-lg">
                      Sign up now at the link in our bio. 🤍
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="p-6 md:p-8 pt-0">
                  <div className="w-full">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<script src="https://widgets.mindbodyonline.com/javascripts/healcode.js" type="text/javascript"></script><healcode-widget data-version="0.2" data-link-class="healcode-contract-text-link" data-site-id="126366" data-mb-site-id="5744900" data-service-id="100" data-bw-identity-site="true" data-type="contract-link" data-inner-html="Buy Now" />`,
                      }}
                    />
                  </div>
                </CardFooter>
              </Card>
            </div>

            {/* New to Our Studio? Section */}
            <h2 className="text-xl md:text-2xl font-light mb-4 text-center section-title mt-8">
              New to Our Studio?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up text-base sm:text-sm p-2 sm:p-1 flex flex-col h-full">
                <CardContent className="pt-6 pb-6 px-6 sm:pt-4 sm:pb-4 sm:px-2 flex-grow flex flex-col">
                  <h2 className="text-2xl sm:text-xl font-medium mb-6 sm:mb-4">Intro Offer</h2>
                  <div className="flex-grow min-h-[80px] flex flex-col justify-center">
                    <p className="text-gray-600 mb-1 sm:mb-0 text-base sm:text-sm">3 x classes. New Clients only.</p>
                    <p className="text-gray-600 mb-6 sm:mb-2 text-base sm:text-sm">Perfect for trying our studio</p>
                  </div>
                  <p className="text-3xl sm:text-2xl font-semibold mb-6 sm:mb-4">$60</p>
                </CardContent>
                <CardFooter className="pb-6 sm:pb-4">
                  <div className="w-full flex justify-center">{renderMindBodyWidget("100026", "Buy Now")}</div>
                </CardFooter>
              </Card>
              <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up text-base sm:text-sm p-2 sm:p-1 flex flex-col h-full">
                <CardContent className="pt-6 pb-6 px-6 sm:pt-4 sm:pb-4 sm:px-2 flex-grow flex flex-col">
                  <h2 className="text-2xl sm:text-xl font-medium mb-6 sm:mb-4">Single Reformer Drop In</h2>
                  <div className="flex-grow min-h-[80px] flex flex-col justify-center">
                    <p className="text-gray-600 mb-1 sm:mb-0 text-base sm:text-sm">1 x single reformer class.</p>
                    <p className="text-gray-600 mb-6 sm:mb-2 text-base sm:text-sm">Expires 12 months from purchase</p>
                  </div>
                  <p className="text-3xl sm:text-2xl font-semibold mb-6 sm:mb-4">$32</p>
                </CardContent>
                <CardFooter className="pb-6 sm:pb-4">
                  <div className="w-full flex justify-center">{renderMindBodyWidget("100003", "Book Class")}</div>
                </CardFooter>
              </Card>
            </div>
            <h2 className="text-xl md:text-2xl font-light mb-4 text-center section-title mt-8">
              Class Packs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 justify-center px-4 sm:px-0">
              <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up text-base sm:text-sm p-2 sm:p-1 flex flex-col h-full">
                <CardContent className="pt-6 pb-6 px-6 sm:pt-4 sm:pb-4 sm:px-4 flex-grow flex flex-col justify-center min-h-[140px]">
                  <h2 className="text-xl sm:text-lg font-medium mb-4 sm:mb-2">5 Class Pack</h2>
                  <p className="text-2xl sm:text-xl font-semibold mb-4 sm:mb-2">$140</p>
                </CardContent>
                <CardFooter className="pb-6 sm:pb-4">
                  <div className="w-full flex justify-center">{renderMindBodyWidget("100007", "Buy Now")}</div>
                </CardFooter>
              </Card>
              <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up text-base sm:text-sm p-2 sm:p-1 flex flex-col h-full">
                <CardContent className="pt-6 pb-6 px-6 sm:pt-4 sm:pb-4 sm:px-4 flex-grow flex flex-col justify-center min-h-[140px]">
                  <h2 className="text-xl sm:text-lg font-medium mb-4 sm:mb-2">10 Class Pack</h2>
                  <p className="text-2xl sm:text-xl font-semibold mb-4 sm:mb-2">$270</p>
                </CardContent>
                <CardFooter className="pb-4 sm:pb-2">
                  <div className="w-full flex justify-center">{renderMindBodyWidget("100008", "Buy Now")}</div>
                </CardFooter>
              </Card>
              <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up text-base sm:text-sm p-2 sm:p-1 flex flex-col h-full">
                <CardContent className="pt-6 pb-6 px-6 sm:pt-4 sm:pb-4 sm:px-4 flex-grow flex flex-col justify-center min-h-[140px]">
                  <h2 className="text-xl sm:text-lg font-medium mb-4 sm:mb-2">20 Class Pack</h2>
                  <p className="text-2xl sm:text-xl font-semibold mb-4 sm:mb-2">$500</p>
                </CardContent>
                <CardFooter className="pb-4 sm:pb-2">
                  <div className="w-full flex justify-center">{renderMindBodyWidget("100009", "Buy Now")}</div>
                </CardFooter>
              </Card>
            </div>
            <p className="text-center text-xs text-stone/70 mt-4 mb-16">
              All packs valid for 12 months from date of purchase.
            </p>
            <h2 className="text-xl md:text-2xl font-light mb-4 text-center section-title mt-8">
              Private Sessions
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-16">
              <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up text-base sm:text-sm p-2 sm:p-1">
                <CardContent className="pt-4 pb-4 px-6 sm:pt-2 sm:pb-2 sm:px-2">
                  <h2 className="text-xl sm:text-lg font-medium mb-4 sm:mb-2">1:1 Private Reformer Session</h2>
                  <p className="text-2xl sm:text-xl font-semibold mb-4 sm:mb-2">$100</p>
                </CardContent>
                <CardFooter className="pb-4 sm:pb-2">
                  <div className="w-full flex justify-center">{renderMindBodyWidget("100005", "Book Private")}</div>
                </CardFooter>
              </Card>
              <Card className="border shadow-sm bg-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 animate-fade-in-up text-base sm:text-sm p-2 sm:p-1">
                <CardContent className="pt-4 pb-4 px-6 sm:pt-2 sm:pb-2 sm:px-2">
                  <h2 className="text-xl sm:text-lg font-medium mb-4 sm:mb-2">Duo Private Reformer Session</h2>
                  <p className="text-2xl sm:text-xl font-semibold mb-4 sm:mb-2">$125</p>
                </CardContent>
                <CardFooter className="pb-4 sm:pb-2">
                  <div className="w-full flex justify-center">{renderMindBodyWidget("100006", "Book Duo")}</div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
