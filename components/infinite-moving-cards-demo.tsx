"use client"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

export default function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden"
      id="testimonials"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-neutral-800 dark:text-neutral-200">
        What Our Clients Say
      </h2>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  )
}

const testimonials = [
  {
    quote:
      "Zaika Catering made our wedding absolutely perfect! The authentic Odia cuisine was exceptional, and every guest complimented the food. Their attention to detail and professional service exceeded our expectations.",
    name: "Priya & Rajesh Patel",
    title: "Wedding Celebration, Bhubaneswar",
  },
  {
    quote:
      "We've been using Zaika Catering for our corporate events for over two years. Their consistency in quality and timely service has made them our go-to catering partner. Highly recommended!",
    name: "Amit Kumar",
    title: "CEO, Tech Solutions Odisha",
  },
  {
    quote:
      "The birthday party catering was fantastic! The kids loved the food, and the presentation was beautiful. Zaika Catering truly understands how to make celebrations special.",
    name: "Sunita Mohapatra",
    title: "Birthday Celebration, Cuttack",
  },
  {
    quote:
      "For our Durga Puja celebration, Zaika Catering provided authentic traditional food that reminded us of home. The quality and taste were outstanding. They preserved the cultural essence perfectly.",
    name: "Debashish Nayak",
    title: "Cultural Committee, Puri",
  },
  {
    quote:
      "Professional, reliable, and delicious! Zaika Catering handled our office inauguration with such grace. The variety of dishes and the presentation were impressive. Will definitely book again.",
    name: "Meera Dash",
    title: "Event Manager, Rourkela",
  },
]
