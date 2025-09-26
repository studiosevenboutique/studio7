import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DataSplitting from "@/components/animations/data-splitting"
import IntersectionObserver from "@/components/animations/intersection-observer"

const classes = [
  {
    title: "FOUNDATION",
    description: "A thoughtfully designed reformer Pilates class that brings together gentle strength and mindful movement. This full-body experience encourages you to move with intention, lengthening, strengthening, with a focus on proper alignment. The perfect introduction to Pilates.",
    duration: "45 min",
    level: "Level 1",
    link: "/classes/power-flow",
  },
  {
    title: "SCULPT AND TONE",
    description:
      "A strength-focused Pilates class designed to tone, tighten, and strengthen the body through mindful, controlled movement. This full-body session blends dynamic sequences with targeted resistance work to help build muscle endurance, improve core stability, and enhance overall definition.",
    duration: "45 min",
    level: "Level 2",
    link: "/classes/sculpt-and-tone",
  },
  {
    title: "THE BURN",
    description: "This class lives up to its name, a high-intensity reformer Pilates class designed to ignite your muscles and elevate your heart rate. With the jump board adding a cardio boost, this class blends low-impact bursts with powerful, muscle-toning sequences for the ultimate full-body challenge. Prepare to sweat, sculpt, and feel the burn from start to finish.",
    duration: "45 min",
    level: "Level 3",
    link: "/classes/the-burn",
  },
  {
    title: "REST & RECOVER",
    description: "Unwind and reset in this restorative reformer class designed to gently stretch the body, quiet the mind, and support deep recovery. Guided through slow, intentional movements and lengthening stretches, you'll melt into stillness while releasing tension from head to toe. The class ends with a meditative sound bath to calm the nervous system and leave you feeling grounded, recharged, and at ease.",
    duration: "1 hour",
    level: "All levels",
    link: "/classes/rest-and-recover",
  },
  {
    title: "SLOW FLOW",
    description: "Ease into your week with a gentle reformer class focused on mindful movement, deep stretching, and restorative flow. This class slows down the pace to help you connect with your breath, release tension, and move with intention — the perfect reset for body and mind.",
    duration: "45 minutes",
    level: "All levels",
    link: "/classes/slow-flow",
  },
]

export default function ClassesSection() {
  return (
    <section className="pt-12 md:pt-20 pb-20 md:pb-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-charcoal/5"></div>
      <div className="container-custom max-w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <IntersectionObserver className="stagger-card" threshold={0.2} triggerOnce={true}>
            <h2 className="text-2xl md:text-4xl mb-3 md:mb-4 font-light section-title opacity-0 translate-y-8 animate-in">
              <DataSplitting type="words" delay={0.2} stagger={0.1}>
                Our Classes
              </DataSplitting>
            </h2>
          </IntersectionObserver>
          <IntersectionObserver className="stagger-card" threshold={0.2} triggerOnce={true}>
            <div className="text-charcoal/80 max-w-2xl mx-auto overflow-hidden font-montserrat text-sm md:text-base opacity-0 translate-y-8 animate-in px-4">
              <DataSplitting type="words" delay={0.4} stagger={0.05}>
                Discover our range of classes designed to help you achieve your fitness goals
              </DataSplitting>
            </div>
          </IntersectionObserver>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {classes.map((classItem, index) => (
            <IntersectionObserver
              key={classItem.title}
              className="stagger-card"
              threshold={0.2}
              rootMargin="0px 0px -100px 0px"
              triggerOnce={true}
            >
              <Card className="overflow-hidden border-stone/30 bg-white rounded-2xl p-8
                transition-all duration-500 h-full flex flex-col transform translate-y-8 opacity-0">
                <CardHeader className="text-center px-4">
                  <CardTitle className="font-PT_Sans uppercase text-xl font-light mb-6" style={{ fontFamily: 'PT Sans, system-ui, sans-serif', fontWeight: 300 }}>{classItem.title}</CardTitle>
                  <CardDescription className="text-xs">{classItem.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <div className="flex justify-between text-xs text-charcoal/60 font-montserrat uppercase">
                    <span>Duration: {classItem.duration}</span>
                    <span>Level: {classItem.level}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center w-full px-4">
                  <Button asChild className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full btn-3d w-full max-w-[90%]">
                    <Link href={classItem.link}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </IntersectionObserver>
          ))}
        </div>
      </div>
    </section>
  )
}
