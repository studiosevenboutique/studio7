"use client"

import { useEffect, useState, useRef } from "react"
import { X } from "lucide-react"
import Script from "next/script"

export default function HolidayModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Show modal after 3 seconds when page loads
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])



  useEffect(() => {
    // Create audio element when modal opens
    if (isOpen && typeof window !== 'undefined') {
      console.log('Creating audio element...')
      const audio = document.createElement('audio')
      audio.src = '/images/studiosevenjingle.mp3'
      audio.loop = true
      audio.preload = 'auto'
      audio.volume = 0.3

      // Add to DOM (required for some browsers)
      audio.style.display = 'none'
      document.body.appendChild(audio)

      // Store audio reference
      audioRef.current = audio

      // Add event listeners
      const onPlaying = () => {
        console.log('🎵 Audio is now playing')
      }

      const onPause = () => {
        console.log('⏸️ Audio paused')
      }

      const onError = (e: any) => {
        console.error('Audio error:', e)
      }

      audio.addEventListener('playing', onPlaying)
      audio.addEventListener('pause', onPause)
      audio.addEventListener('error', onError)

      // Load the audio
      audio.load()

      // Attempt autoplay immediately when modal opens
      console.log('Attempting to autoplay...')
      const playPromise = audio.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('✅ Autoplay successful!')
          })
          .catch(() => {
            console.log('⚠️ Autoplay blocked - setting up interaction listeners...')

            // Set up one-time event listeners to play on first interaction
            const playOnInteraction = (e: Event) => {
              console.log('🎯 User interaction detected:', e.type)
              console.log('Event isTrusted:', e.isTrusted)
              console.log('Audio element exists:', !!audio)
              console.log('Audio paused:', audio?.paused)

              if (audio && audio.paused) {
                console.log('Calling play()...')
                const promise = audio.play()
                console.log('Play promise:', promise)

                if (promise !== undefined) {
                  promise
                    .then(() => console.log('✅ Audio started after interaction!'))
                    .catch((err) => console.error('Failed:', err.message, err))
                }
              }
            }

            // Add listeners that will trigger on first interaction - use capture phase
            window.addEventListener('click', playOnInteraction, { once: true, capture: true })
            window.addEventListener('keydown', playOnInteraction, { once: true, capture: true })
            window.addEventListener('touchstart', playOnInteraction, { once: true, capture: true })
            window.addEventListener('mousedown', playOnInteraction, { once: true, capture: true })
          })
      }

      return () => {
        // Cleanup
        console.log('Cleaning up audio...')
        audio.removeEventListener('playing', onPlaying)
        audio.removeEventListener('pause', onPause)
        audio.removeEventListener('error', onError)
        audio.pause()
        audio.currentTime = 0
        if (audio.parentNode) {
          audio.parentNode.removeChild(audio)
        }
        audioRef.current = null
      }
    }
  }, [isOpen])





  useEffect(() => {
    // Reinitialize Mindbody widget when script loads
    if (scriptLoaded && isOpen && typeof window !== 'undefined') {
      // @ts-ignore
      if (window.HealCode) {
        // @ts-ignore
        window.HealCode.init()
      }
    }
  }, [scriptLoaded, isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Snowflakes Animation */}
      <div className="snowflakes-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={`snowflake-${i}`}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              opacity: Math.random() * 0.6 + 0.4,
              fontSize: `${10 + Math.random() * 20}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="relative max-w-md w-full mx-4">
        {/* Christmas Lights Border - Outside the modal */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none">
          {/* Top lights */}
          <div className="absolute -top-2 left-0 right-0 flex justify-around px-4">
            {[...Array(15)].map((_, i) => (
              <div
                key={`top-${i}`}
                className="christmas-light"
                style={{
                  animationDelay: `${i * 0.1}s`,
                 backgroundColor: ['#ff0000ff', '#00ff00', '#ff0000ff', '#00ff0dff', '#f10000ff', '#00ff1aff'][i % 6],
                }}
              />
            ))}
          </div>
          {/* Bottom lights */}
          <div className="absolute -bottom-2 left-0 right-0 flex justify-around px-4">
            {[...Array(15)].map((_, i) => (
              <div
                key={`bottom-${i}`}
                className="christmas-light"
                style={{
                  animationDelay: `${i * 0.1}s`,
                 backgroundColor: ['#ff0000ff', '#00ff00', '#ff0000ff', '#00ff0dff', '#f10000ff', '#00ff1aff'][i % 6],
                }}
              />
            ))}
          </div>
          {/* Left lights */}
          <div className="absolute -left-2 top-0 bottom-0 flex flex-col justify-around py-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={`left-${i}`}
                className="christmas-light"
                style={{
                  animationDelay: `${i * 0.15}s`,
                 backgroundColor: ['#ff0000ff', '#00ff00', '#ff0000ff', '#00ff0dff', '#f10000ff', '#00ff1aff'][i % 6],
                }}
              />
            ))}
          </div>
          {/* Right lights */}
          <div className="absolute -right-2 top-0 bottom-0 flex flex-col justify-around py-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={`right-${i}`}
                className="christmas-light"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  backgroundColor: ['#ff0000ff', '#00ff00', '#ff0000ff', '#00ff0dff', '#f10000ff', '#00ff1aff'][i % 6],
                }}
              />
            ))}
          </div>
        </div>

        {/* Modal Content */}
        <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-charcoal/60 hover:text-charcoal transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="text-center">
            <p className="text-sm text-charcoal/60 mb-2 font-medium tracking-wide uppercase">
              We're introducing
            </p>
            <h2 className="text-4xl font-bold text-charcoal mb-6 font-raleway">
               THE HOLIDAY PASS 
            </h2>
            <p className="text-base text-charcoal/80 mb-4 leading-relaxed">
              This Holiday Pass gives you <span className="font-semibold">unlimited classes</span> (one per day!) for a full month, with the freedom to activate it whenever you want...
            </p>
           
            <div className="bg-cream rounded-lg p-4 mb-8 inline-block">
              <p className="text-2xl font-bold text-charcoal">
                $185 <span className="text-sm font-normal text-charcoal/60">+ HST</span>
              </p>
            </div>
            <div className="flex justify-center items-center">
              {/* Mindbody Buy Now Button */}
              <div
                id="mindbody-buy-now-container"
                dangerouslySetInnerHTML={{
                  __html: `<healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="126366" data-mb-site-id="5744900" data-service-id="100065" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="Buy Now" />`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .christmas-light {
          width: 8px;
          height: 10px;
          border-radius: 50% 50% 45% 45%;
          position: relative;
          box-shadow:
            0 0 6px currentColor,
            0 0 12px currentColor,
            0 0 18px currentColor;
          animation: twinkle 1.5s ease-in-out infinite;
        }

        .christmas-light::before {
          content: '';
          position: absolute;
          top: -3px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 3px;
          background: #333;
          border-radius: 2px;
        }

        .christmas-light::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 20%;
          width: 30%;
          height: 30%;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: shine 1.5s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            filter: brightness(1);
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            filter: brightness(0.6);
            transform: scale(0.95);
          }
        }

        @keyframes shine {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.3;
          }
        }

        /* Snowflakes Animation */
        .snowflakes-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .snowflake {
          position: absolute;
          top: -20px;
          color: white;
          user-select: none;
          animation: fall linear infinite;
        }

        @keyframes fall {
          0% {
            top: -10%;
            transform: translateX(0) rotate(0deg);
          }
          100% {
            top: 110%;
            transform: translateX(20px) rotate(360deg);
          }
        }
      `}</style>

      {/* Mindbody Healcode Script */}
      <Script
        src="https://widgets.mindbodyonline.com/javascripts/healcode.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
    </div>
  )
}

