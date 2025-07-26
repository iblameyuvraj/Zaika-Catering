"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Dancing_Script } from "next/font/google"

const dancingScript = Dancing_Script({ subsets: ["latin"] })

interface Service {
  id: number
  title: string
  description: string
  image: string
  alt: string
  gallery: string[]
  detailedDescription: string
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const services: Service[] = [
    {
      id: 1,
      title: "Wedding Catering",
      description:
        "Traditional Indian wedding feasts with authentic Odia cuisine and grand buffet setups for your special day.",
      image: "/placeholder.svg?height=300&width=400&text=Traditional+Indian+Wedding+Buffet",
      alt: "Traditional Indian wedding buffet setup",
      gallery: [
        "/placeholder.svg?height=400&width=600&text=Wedding+Buffet+Setup",
        "/placeholder.svg?height=400&width=600&text=Traditional+Wedding+Thali",
        "/placeholder.svg?height=400&width=600&text=Wedding+Decoration+Setup",
      ],
      detailedDescription:
        "Experience the grandeur of traditional Odia wedding cuisine with our comprehensive catering services. We specialize in authentic dishes like Dalma, Pakhala, Rasgulla, and elaborate thali presentations that honor your cultural heritage while creating unforgettable memories for you and your guests.",
    },
    {
      id: 2,
      title: "Birthday Parties",
      description:
        "Fun and colorful party catering with delicious snacks, cakes, and treats that make celebrations memorable.",
      image: "/placeholder.svg?height=300&width=400&text=Birthday+Party+Setup",
      alt: "Birthday party catering setup with balloons and cake",
      gallery: [
        "/placeholder.svg?height=400&width=600&text=Birthday+Cake+Display",
        "/placeholder.svg?height=400&width=600&text=Party+Snacks+Table",
        "/placeholder.svg?height=400&width=600&text=Colorful+Party+Decorations",
      ],
      detailedDescription:
        "Make every birthday celebration special with our vibrant and delicious party catering. From custom cakes to fun finger foods, colorful decorations, and kid-friendly treats, we ensure every moment is filled with joy and delicious flavors that guests of all ages will love.",
    },
    {
      id: 3,
      title: "Corporate Events",
      description:
        "Professional catering services for office meetings, conferences, and corporate gatherings with modern presentation.",
      image: "/placeholder.svg?height=300&width=400&text=Corporate+Event+Catering",
      alt: "Professional corporate event catering setup",
      gallery: [
        "/placeholder.svg?height=400&width=600&text=Corporate+Lunch+Setup",
        "/placeholder.svg?height=400&width=600&text=Business+Meeting+Catering",
        "/placeholder.svg?height=400&width=600&text=Conference+Coffee+Break",
      ],
      detailedDescription:
        "Elevate your corporate events with our professional catering services. We provide sophisticated menu options, punctual service, and elegant presentation perfect for business meetings, conferences, product launches, and corporate celebrations that leave a lasting impression on clients and colleagues.",
    },
    {
      id: 4,
      title: "Festival Catering",
      description:
        "Celebrate Indian festivals with traditional sweets, thalis, and festive decorations that honor cultural traditions.",
      image: "/placeholder.svg?height=300&width=400&text=Festival+Catering+Setup",
      alt: "Indian festival catering with traditional sweets and thalis",
      gallery: [
        "/placeholder.svg?height=400&width=600&text=Festival+Sweets+Display",
        "/placeholder.svg?height=400&width=600&text=Traditional+Thali+Presentation",
        "/placeholder.svg?height=400&width=600&text=Festival+Decoration+Setup",
      ],
      detailedDescription:
        "Celebrate the rich traditions of Indian festivals with our authentic catering services. From Durga Puja to Diwali, Kali Puja to Jagannath Rath Yatra, we bring traditional flavors, sacred sweets, and festive presentations that honor the spiritual and cultural significance of each celebration.",
    },
    {
      id: 5,
      title: "Private Dining",
      description:
        "Intimate dining experiences with gourmet plated meals and personalized service for special occasions.",
      image: "/placeholder.svg?height=300&width=400&text=Private+Dining+Setup",
      alt: "Cozy private dining setup with gourmet meals",
      gallery: [
        "/placeholder.svg?height=400&width=600&text=Intimate+Dining+Table",
        "/placeholder.svg?height=400&width=600&text=Gourmet+Plated+Meals",
        "/placeholder.svg?height=400&width=600&text=Elegant+Table+Setting",
      ],
      detailedDescription:
        "Create intimate and memorable dining experiences with our private catering services. Perfect for anniversaries, family gatherings, or special celebrations, we offer personalized menus, elegant table settings, and attentive service that transforms any occasion into an extraordinary culinary journey.",
    },
  ]

  const openModal = (service: Service) => {
    setSelectedService(service)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedService(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => (prev === selectedService.gallery.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedService.gallery.length - 1 : prev - 1))
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-slate-950 dark:text-white transition-colors duration-300">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-950 dark:text-white mb-4 sm:mb-6 ${dancingScript.className}`}
          >
            Our <span className="text-orange-500 dark:text-orange-400">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            From intimate gatherings to grand celebrations, Zaika Catering brings the authentic flavors of Odisha to
            your special moments with exceptional service and unforgettable taste.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 cursor-pointer ${
                index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
              onClick={() => openModal(service)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.alt}
                    width={400}
                    height={300}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 sm:p-8">
                  <h3
                    className={`text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mb-3 sm:mb-4 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300 ${dancingScript.className}`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 sm:p-12 max-w-4xl mx-auto border border-slate-200 dark:border-zinc-700">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 dark:text-white mb-4 sm:mb-6 ${dancingScript.className}`}
            >
              Ready to Make Your Event Special?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your catering needs and let us create an unforgettable culinary experience for
              you and your guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                <a href="/contact">Get Quote</a>
              </button>
              <button className="border-2 border-orange-500 dark:border-orange-400 text-orange-500 dark:text-orange-400 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 dark:hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 w-full sm:w-auto">
                <a href="/public/menu.pdf">View Menu</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-zinc-700">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-zinc-700">
              <h2 className={`text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white ${dancingScript.className}`}>
                {selectedService.title}
              </h2>
              <button onClick={closeModal} className="text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors duration-200">
                <X size={24} />
              </button>
            </div>

            {/* Image Carousel */}
            <div className="relative">
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                <Image
                  src={selectedService.gallery[currentImageIndex] || "/placeholder.svg"}
                  alt={`${selectedService.title} image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Image Indicators */}
              <div className="flex justify-center space-x-2 py-4 bg-slate-100 dark:bg-zinc-700">
                {selectedService.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex ? "bg-orange-500 dark:bg-orange-400" : "bg-slate-300 dark:bg-zinc-500"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                {selectedService.detailedDescription}
              </p>

              <div className="flex justify-center">
                <button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300">
                  <a href="/contact">Book This Service</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 