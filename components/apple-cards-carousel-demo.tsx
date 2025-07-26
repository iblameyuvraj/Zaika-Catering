"use client"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />)

  return (
    <div className="w-full h-full py-20" id="services">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our Premium Catering Services
      </h2>
      <Carousel items={cards} />
    </div>
  )
}

const DummyContent = ({ title, description }: { title: string; description: string }) => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div key={"dummy-content" + index} className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">{title}</span> {description}
            </p>
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="Catering service presentation"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        )
      })}
    </>
  )
}

const data = [
  {
    category: "Wedding Catering",
    title: "Make your special day unforgettable",
    src: "/placeholder.svg?height=600&width=800",
    content: (
      <DummyContent
        title="Wedding Catering Excellence"
        description="From intimate ceremonies to grand celebrations, we provide exquisite Odia cuisine and contemporary dishes that will make your wedding day truly memorable. Our experienced team ensures every detail is perfect."
      />
    ),
  },
  {
    category: "Corporate Events",
    title: "Professional catering for business",
    src: "/placeholder.svg?height=600&width=800",
    content: (
      <DummyContent
        title="Corporate Catering Solutions"
        description="Impress your clients and colleagues with our professional catering services. We offer customized menus for conferences, meetings, and corporate celebrations with timely service and presentation."
      />
    ),
  },
  {
    category: "Birthday Parties",
    title: "Celebrate with delicious flavors",
    src: "/placeholder.svg?height=600&width=800",
    content: (
      <DummyContent
        title="Birthday Party Catering"
        description="Make birthdays extra special with our vibrant and delicious catering options. From kids' parties to milestone celebrations, we create memorable dining experiences for all ages."
      />
    ),
  },
  {
    category: "Festival Catering",
    title: "Traditional Odia festival foods",
    src: "/placeholder.svg?height=600&width=800",
    content: (
      <DummyContent
        title="Festival Catering Traditions"
        description="Celebrate Odia festivals with authentic traditional cuisine. We specialize in preparing sacred offerings and festive meals that honor cultural traditions and bring communities together."
      />
    ),
  },
  {
    category: "Private Dining",
    title: "Intimate dining experiences",
    src: "/placeholder.svg?height=600&width=800",
    content: (
      <DummyContent
        title="Private Dining Excellence"
        description="Create intimate dining experiences with our personalized catering services. Perfect for family gatherings, anniversaries, and special occasions that require a personal touch."
      />
    ),
  },

]
