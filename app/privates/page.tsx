"use client"

import Image from "next/image"
import { useFormSubmission } from "@/hooks/use-form-submission"
import { FormPopover } from "@/components/form-popover"

export default function PrivatesPage() {
  const { isSubmitting, isSuccess, isError, message, submitForm, resetState } = useFormSubmission()

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    await submitForm(formData, "https://formspree.io/f/xwpqlqnj")
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="mb-16">
            {/* Text Content and Image - Side by Side */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl font-light mb-6">One-on-One Training</h2>
                <div className="space-y-6">
                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    Our private sessions offer the ultimate personalized Pilates experience. Working one-on-one with our certified instructors, you'll receive individualized attention and customized programming designed specifically for your body and goals.
                  </p>
                  
                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    Whether you're new to Pilates, recovering from an injury, or looking to deepen your practice, private sessions provide the focused guidance and support you need to achieve optimal results.
                  </p>
                  
                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    Each session is tailored to your unique needs, ensuring proper form, addressing imbalances, and helping you progress safely and effectively on your wellness journey.
                  </p>
                </div>
              </div>
              <div>
                <div className="relative rounded-2xl shadow-lg overflow-hidden aspect-[3/4] w-3/5 mx-auto bg-cream">
                  <Image
                    src="/images/private.JPG"
                    alt="Private Pilates Session"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-light mb-6 text-charcoal text-center">
                Private Session Intake Form
              </h2>
              <form onSubmit={handleFormSubmit} className="space-y-4 max-w-4xl mx-auto">
                {/* Hidden inputs to make email more readable */}
                <input type="hidden" name="_subject" value="New Private Session Intake Form Submission" />
                <input type="hidden" name="Form Type" value="Private Session Intake" />
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="First Name"
                      required
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="Last Name"
                      required
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="Phone Number"
                      required
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="Email Address"
                      required
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-charcoal mb-1">
                      What days and times work best for you?
                    </label>
                    <input
                      type="text"
                      id="availability"
                      name="Best Days and Times"
                      placeholder="e.g., Mondays 9am, Wednesdays 6pm"
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-charcoal mb-1">
                      What are your goals with personal training? *
                    </label>
                    <textarea
                      id="goals"
                      name="Goals with Personal Training"
                      rows={2}
                      required
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="sessionsPerWeek" className="block text-sm font-medium text-charcoal mb-1">
                      How many sessions would you like per week?
                    </label>
                    <select
                      id="sessionsPerWeek"
                      name="Sessions Per Week"
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    >
                      <option value="">Select...</option>
                      <option value="1">1 session</option>
                      <option value="2">2 sessions</option>
                      <option value="3">3 sessions</option>
                      <option value="4+">4+ sessions</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="injuries" className="block text-sm font-medium text-charcoal mb-1">
                      Do you have any current/previous injuries that could affect your sessions?
                    </label>
                    <textarea
                      id="injuries"
                      name="Current or Previous Injuries"
                      rows={2}
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="surgeries" className="block text-sm font-medium text-charcoal mb-1">
                      Have you had any recent surgeries? If so, fill us in!
                    </label>
                    <textarea
                      id="surgeries"
                      name="Recent Surgeries"
                      rows={2}
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">
                      If you answered 'yes' to surgeries, have you been cleared to workout by your doctor?
                    </label>
                    <div className="flex gap-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Doctor Cleared for Workout"
                          value="yes"
                          className="mr-1 text-stone focus:ring-stone"
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Doctor Cleared for Workout"
                          value="no"
                          className="mr-1 text-stone focus:ring-stone"
                        />
                        <span className="text-sm">No</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Doctor Cleared for Workout"
                          value="na"
                          className="mr-1 text-stone focus:ring-stone"
                        />
                        <span className="text-sm">N/A</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">
                      Are you pregnant, postpartum, or planning to be pregnant?
                    </label>
                    <div className="grid grid-cols-2 gap-1">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Pregnancy Status"
                          value="pregnant"
                          className="mr-1 text-stone focus:ring-stone"
                        />
                        <span className="text-xs">Pregnant</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Pregnancy Status"
                          value="postpartum"
                          className="mr-1 text-stone focus:ring-stone"
                        />
                        <span className="text-xs">Postpartum</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Pregnancy Status"
                          value="planning"
                          className="mr-1 text-stone focus:ring-stone"
                        />
                        <span className="text-xs">Planning</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Pregnancy Status"
                          value="none"
                          className="mr-1 text-stone focus:ring-stone"
                        />
                        <span className="text-xs">None</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">
                      Have you done reformer Pilates before?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Reformer Pilates Experience"
                          value="yes"
                          className="mr-1 text-stone focus:ring-stone"
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="Reformer Pilates Experience"
                          value="no"
                          className="mr-1 text-stone focus:ring-stone"
                        />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="currentRoutine" className="block text-sm font-medium text-charcoal mb-1">
                      What is your current workout routine, if you have one?
                    </label>
                    <textarea
                      id="currentRoutine"
                      name="Current Workout Routine"
                      rows={2}
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="additional" className="block text-sm font-medium text-charcoal mb-1">
                      Anything else we should know?
                    </label>
                    <textarea
                      id="additional"
                      name="Additional Information"
                      rows={2}
                      className="w-full px-4 py-2 border border-sand rounded-lg focus:ring-2 focus:ring-stone focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full px-8 py-3 text-sm font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit Intake Form"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-cream rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-charcoal">
              Why Choose Private Sessions?
            </h2>
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <h3 className="text-lg font-medium mb-2">Personalized Attention</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Receive undivided attention from your instructor with modifications and progressions tailored specifically to you.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-medium mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Book sessions at times that work best for your schedule, with options for recurring appointments.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-medium mb-2">Injury Recovery</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Work safely with modifications and targeted exercises to support your recovery journey.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-medium mb-2">Faster Progress</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Achieve your goals more efficiently with focused instruction and immediate feedback.
                </p>
              </div>
            </div>
          </div>
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
    </div>
  )
}
