"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, MapPin, ChevronDown } from "lucide-react"
import { useFormSubmission } from "@/hooks/use-form-submission"
import { FormPopover } from "@/components/form-popover"

// Sample events data - replace with real data
const upcomingEvents: any[] = []

// Custom Dropdown Component
interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder: string;
}

function CustomDropdown({ value, onChange, options, placeholder }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm bg-white text-charcoal text-left flex items-center justify-between"
      >
        <span className={value ? "text-charcoal" : "text-charcoal/60"}>
          {value ? options.find(opt => opt.value === value)?.label : placeholder}
        </span>
        <ChevronDown className={`h-4 w-4 text-charcoal/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-sand rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className="w-full px-4 py-2 text-left text-sm text-charcoal hover:bg-cream/50 first:rounded-t-lg last:rounded-b-lg"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function EventsPage() {
  const [classType, setClassType] = useState("")
  const { isSubmitting, isSuccess, isError, message, submitForm, resetState } = useFormSubmission()
  
  const classOptions = [
    { value: "foundation", label: "Foundation" },
    { value: "sculpt", label: "Sculpt" },
    { value: "burn", label: "Burn" }
  ]

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    await submitForm(formData, "https://formspree.io/f/xzzvevav")
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          {/* Upcoming Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-6 text-center">Upcoming Events</h2>
            
            {upcomingEvents.length > 0 ? (
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden border-none shadow-lg rounded-xl">
                    <div className="grid md:grid-cols-3 gap-0">
                      {/* Event Image */}
                      <div className="relative h-40 md:h-auto md:min-h-[200px]">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Event Details */}
                      <div className="md:col-span-2 p-4 md:p-5">
                        <CardHeader className="px-0 pt-0 pb-2">
                          <CardTitle className="text-xl font-light mb-1">{event.title}</CardTitle>
                          <div className="flex flex-wrap gap-3 text-xs text-charcoal/80">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="px-0 py-0">
                          <p className="text-charcoal/80 mb-3 text-xs leading-relaxed">
                            {event.description}
                          </p>
                          
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex flex-col">
                              <span className="text-lg font-light text-charcoal">{event.price}</span>
                              <span className="text-xs text-charcoal/60">{event.spots}</span>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button
                                asChild
                                variant="outline"
                                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-full px-4 py-1 text-xs"
                              >
                                <Link href={event.bookingUrl || "/schedule"} target={event.bookingUrl ? "_blank" : "_self"}>{event.buttonText || "RSVP"}</Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-charcoal/40 mx-auto mb-4" />
                <h3 className="text-xl font-light mb-2">No Upcoming Events</h3>
                <p className="text-charcoal/60 text-sm">
                  Check back soon for new workshops and special events.
                </p>
              </div>
            )}
          </div>

          {/* Event Types */}
          <div className="bg-cream rounded-3xl p-3 md:p-4">
            <h2 className="text-2xl font-light mb-3 text-center text-charcoal">
              Types of Events We Host
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-1">
                  <Calendar className="h-5 w-5 text-charcoal" />
                </div>
                <h3 className="text-base font-medium mb-1">Workshops</h3>
                <p className="text-xs text-charcoal/80">
                  Deep-dive sessions focusing on specific techniques, alignment, or specialty topics.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-1">
                  <Clock className="h-5 w-5 text-charcoal" />
                </div>
                <h3 className="text-base font-medium mb-1">Intensives</h3>
                <p className="text-xs text-charcoal/80">
                  Extended sessions for those looking to challenge themselves and advance their practice.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-1">
                  <MapPin className="h-5 w-5 text-charcoal" />
                </div>
                <h3 className="text-base font-medium mb-1">Community Events</h3>
                <p className="text-xs text-charcoal/80">
                  Social gatherings, wellness talks, and special celebrations with our studio family.
                </p>
              </div>
            </div>
          </div>

          {/* Private Events Section */}
          <div className="my-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light mb-4">PRIVATE EVENTS</h2>
              <p className="text-charcoal/80 max-w-2xl mx-auto text-sm">
                Want to host your next special event at Studio Seven? Fill out the intake form below to inquire!
              </p>
            </div>

            <div className="bg-cream rounded-3xl p-8 md:p-12">
              <form onSubmit={handleFormSubmit} className="space-y-4 max-w-4xl mx-auto">
                {/* Hidden inputs to make email more readable */}
                <input type="hidden" name="_subject" value="New Private Event Inquiry" />
                <input type="hidden" name="Form Type" value="Private Event Inquiry" />
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-1">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="First Name"
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="Last Name"
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="Email Address"
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
                      Phone #
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="Phone Number"
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Event Details */}
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-charcoal mb-1">
                    What event do you want to host at our studio?
                  </label>
                  <input
                    type="text"
                    id="eventType"
                    name="Event Type to Host"
                    className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-charcoal mb-1">
                    What is the date of your event?
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="Event Date"
                    className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="attendeeCount" className="block text-sm font-medium text-charcoal mb-1">
                    How many people will be attending the event?
                  </label>
                  <input
                    type="number"
                    id="attendeeCount"
                    name="Number of Attendees"
                    className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="classType" className="block text-sm font-medium text-charcoal mb-1">
                    What type of class are you looking for? (foundation, sculpt, burn)
                  </label>
                  <CustomDropdown
                    value={classType}
                    onChange={setClassType}
                    options={classOptions}
                    placeholder="Select class type"
                  />
                  {/* Hidden input to capture dropdown value for form submission */}
                  <input type="hidden" name="Class Type" value={classType} />
                </div>

                <div>
                  <label htmlFor="instructorPreference" className="block text-sm font-medium text-charcoal mb-1">
                    Do you have a preference for an instructor?
                  </label>
                  <input
                    type="text"
                    id="instructorPreference"
                    name="Instructor Preference"
                    className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                  />
                </div>

                {/* Yes/No Questions */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">
                      Are there any first timers on the reformer that will be attending?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="First Timers Attending"
                          value="yes"
                          className="mr-2 w-4 h-4 text-amber-800 border-amber-800 focus:ring-amber-800 focus:ring-2"
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="First Timers Attending"
                          value="no"
                          className="mr-2 w-4 h-4 text-amber-800 border-amber-800 focus:ring-amber-800 focus:ring-2"
                        />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">
                      Would you like our matcha bar open after your class?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Matcha Bar Open"
                          value="yes"
                          className="mr-2 w-4 h-4 text-amber-800 border-amber-800 focus:ring-amber-800 focus:ring-2"
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Matcha Bar Open"
                          value="no"
                          className="mr-2 w-4 h-4 text-amber-800 border-amber-800 focus:ring-amber-800 focus:ring-2"
                        />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">
                      Did you want a signature matcha for your event?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Signature Matcha"
                          value="yes"
                          className="mr-2 w-4 h-4 text-amber-800 border-amber-800 focus:ring-amber-800 focus:ring-2"
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Signature Matcha"
                          value="no"
                          className="mr-2 w-4 h-4 text-amber-800 border-amber-800 focus:ring-amber-800 focus:ring-2"
                        />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">
                      Will you be bringing in your own food or treats?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Bringing Food or Treats"
                          value="yes"
                          className="mr-2 w-4 h-4 text-amber-800 border-amber-800 focus:ring-amber-800 focus:ring-2"
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Bringing Food or Treats"
                          value="no"
                          className="mr-2 w-4 h-4 text-amber-800 border-amber-800 focus:ring-amber-800 focus:ring-2"
                        />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">
                      Will you need any tables + table cloths for your event?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Tables and Tablecloths Needed"
                          value="yes"
                          className="mr-2 w-4 h-4 text-amber-800 border-amber-800 focus:ring-amber-800 focus:ring-2"
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Tables and Tablecloths Needed"
                          value="no"
                          className="mr-2 w-4 h-4 text-amber-800 border-amber-800 focus:ring-amber-800 focus:ring-2"
                        />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">
                      Are you interested in a floral bar?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Interested in Floral Bar"
                          value="yes"
                          className="mr-2 w-4 h-4 text-amber-800 border-amber-800 focus:ring-amber-800 focus:ring-2"
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Interested in Floral Bar"
                          value="no"
                          className="mr-2 w-4 h-4 text-amber-800 border-amber-800 focus:ring-amber-800 focus:ring-2"
                        />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">
                      Are you interested in a sound bath?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Interested in Sound Bath"
                          value="yes"
                          className="mr-2 w-4 h-4 text-amber-800 border-amber-800 focus:ring-amber-800 focus:ring-2"
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Interested in Sound Bath"
                          value="no"
                          className="mr-2 w-4 h-4 text-amber-800 border-amber-800 focus:ring-amber-800 focus:ring-2"
                        />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Additional Requests */}
                <div>
                  <label htmlFor="additionalRequests" className="block text-sm font-medium text-charcoal mb-1">
                    If there's anything else you want to request, please let us know here!
                  </label>
                  <textarea
                    id="additionalRequests"
                    name="Additional Requests"
                    rows={4}
                    className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full px-8 py-3 text-sm font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit Private Event Inquiry"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Form Popover */}
          <FormPopover
            isOpen={isSuccess || isError}
            isSuccess={isSuccess}
            isError={isError}
            message={message}
            onClose={resetState}
          />

          {/* Stay Updated */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-light mb-4">Stay Updated</h2>
            <p className="text-charcoal/80 mb-6 text-sm">
              Follow us on social media or contact us to be notified about upcoming events and workshops.
            </p>
            <Button
              asChild
              className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full px-8"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
