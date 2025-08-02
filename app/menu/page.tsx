"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Download, MessageCircle, ChevronRight, ChevronLeft, ChevronRight as ChevronRightIcon, ExternalLink } from "lucide-react"

interface ServiceType {
  id: string
  name: string
  image: string
  endingImage?: string
  downloadUrl: string
  whatsappMessage: string
}

interface MenuCategory {
  id: string
  name: string
  description: string
  image: string
  services: ServiceType[]
}

const menuCategories: MenuCategory[] = [
  {
    id: "wedding",
    name: "Wedding",
    description: "Complete wedding catering services for your special day",
    image: "https://img.freepik.com/premium-photo/kachila-bhat-served-traditional-indian-wedding-with-elaborate-daccor_636537-472821.jpg",
    services: [
      {
        id: "wedding-gold",
        name: "Gold Package",
        image: "/menu/Wedding-menu/gold-wedding/gold-wedding1.jpeg",
        endingImage: "/menu/Wedding-menu/gold-wedding/gold-wedding2.jpeg",
        downloadUrl: "/menu/Wedding-menu/gold-wedding/gold-wedding1.jpeg",
        whatsappMessage: "Hi, I want more info about the Wedding Gold Package.",
      },
      {
        id: "wedding-platinum",
        name: "Platinum Package",
        image: "/menu/Wedding-menu/platinum-wedding/platinum-wedding1.jpeg",
        endingImage: "/menu/Wedding-menu/platinum-wedding/platinum-wedding2.jpeg",
        downloadUrl: "/menu/Wedding-menu/platinum-wedding/platinum-wedding1.jpeg",
        whatsappMessage: "Hi, I want more info about the Wedding Platinum Package.",
      },
      {
        id: "wedding-silver",
        name: "Silver Package",
        image: "/menu/Wedding-menu/silver-wedding/silver-menu-1.jpeg",
        endingImage: "/menu/Wedding-menu/silver-wedding/silver-menu2.jpeg",
        downloadUrl: "/menu/Wedding-menu/silver-wedding/silver-menu-1.jpeg",
        whatsappMessage: "Hi, I want more info about the Wedding Silver Package.",
      },
      {
        id: "ring-ceremony",
        name: "Ring Ceremony",
        image: "/menu/Wedding-menu/ring-ceremony/ring-ceremony1.jpeg",
        endingImage: "/menu/Wedding-menu/ring-ceremony/ringceremony2.jpeg",
        downloadUrl: "/menu/Wedding-menu/ring-ceremony/ring-ceremony1.jpeg",
        whatsappMessage: "Hi, I want more info about the Ring Ceremony menu.",
      },
      {
        id: "wedding-aura-anna",
        name: "Aura Anna",
        image: "/menu/Wedding-menu/aura-anna/aura-anna1.jpeg",
        endingImage: "/menu/Wedding-menu/aura-anna/aura-anna2.jpeg",
        downloadUrl: "/menu/Wedding-menu/aura-anna/aura-anna1.jpeg",
        whatsappMessage: "Hi, I want more info about the Wedding Aura Anna menu.",
      },
      {
        id: "wedding-without-onion-garlic",
        name: "Without Onion and Garlic",
        image: "/placeholder.svg?height=400&width=600",
        downloadUrl: "#",
        whatsappMessage: "Hi, I want more info about the Wedding Without Onion and Garlic menu.",
      },
      {
        id: "wedding-zaika-special",
        name: "Zaika Catering Special Menu",
        image: "/placeholder.svg?height=400&width=600",
        downloadUrl: "#",
        whatsappMessage: "Hi, I want more info about the Wedding Zaika Catering Special Menu.",
      },
      {
        id: "wedding-typical-odia",
        name: "Typical Odia Menu",
        image: "/placeholder.svg?height=400&width=600",
        downloadUrl: "#",
        whatsappMessage: "Hi, I want more info about the Wedding Typical Odia Menu.",
      },
    ]
  },
  {
    id: "birthday-events",
    name: "Birthday Events",
    description: "Celebrate your special day with our birthday catering",
    image: "/menu/birthday/platinum-menu/platinum-menu1.jpeg",
    services: [
      {
        id: "birthday-gold",
        name: "Gold Package",
        image: "/menu/birthday/gold-menu/gold-menu.jpeg",
        endingImage: "/menu/birthday/gold-menu/gold-menu1.jpeg",
        downloadUrl: "/menu/birthday/gold-menu/gold-menu.jpeg",
        whatsappMessage: "Hi, I want more info about the Birthday Gold Package.",
      },
      {
        id: "birthday-platinum",
        name: "Platinum Package",
        image: "/menu/birthday/platinum-menu/platinum-menu1.jpeg",
        endingImage: "/menu/birthday/platinum-menu/platinum-menu2.jpeg",
        downloadUrl: "/menu/birthday/platinum-menu/platinum-menu1.jpeg",
        whatsappMessage: "Hi, I want more info about the Birthday Platinum Package.",
      },
      {
        id: "birthday-silver",
        name: "Silver Package",
        image: "/menu/birthday/silver-menu/silver-menu.jpeg",
        downloadUrl: "/menu/birthday/silver-menu/silver-menu.jpeg",
        whatsappMessage: "Hi, I want more info about the Birthday Silver Package.",
      },
      {
        id: "birthday-aura-anna",
        name: "Aura Anna",
        image: "/menu/birthday/aura-anna/aura-anna1.jpeg",
        endingImage: "/menu/birthday/aura-anna/aura-anna2.jpeg",
        downloadUrl: "/menu/birthday/aura-anna/aura-anna1.jpeg",
        whatsappMessage: "Hi, I want more info about the Birthday Aura Anna menu.",
      },
      {
        id: "birthday-without-onion-garlic",
        name: "Without Onion and Garlic",
        image: "/placeholder.svg?height=400&width=600",
        downloadUrl: "#",
        whatsappMessage: "Hi, I want more info about the Birthday Without Onion and Garlic menu.",
      },
      {
        id: "birthday-zaika-special",
        name: "Zaika Catering Special Menu",
        image: "/placeholder.svg?height=400&width=600",
        downloadUrl: "#",
        whatsappMessage: "Hi, I want more info about the Birthday Zaika Catering Special Menu.",
      },
      {
        id: "birthday-typical-odia",
        name: "Typical Odia Menu",
        image: "/placeholder.svg?height=400&width=600",
        downloadUrl: "#",
        whatsappMessage: "Hi, I want more info about the Birthday Typical Odia Menu.",
      },
    ]
  },
  {
    id: "corporate-party",
    name: "Corporate Party",
    description: "Professional catering for corporate events and meetings",
    image: "/placeholder.svg?height=400&width=600",
    services: [
      {
        id: "corporate-small-party",
        name: "Small Party Menu",
        image: "/placeholder.svg?height=400&width=600",
        downloadUrl: "#",
        whatsappMessage: "Hi, I want more info about the Corporate Small Party Menu.",
      },
    ]
  },
  {
    id: "family-events",
    name: "Family Events",
    description: "Perfect catering for family gatherings and celebrations",
    image: "/placeholder.svg?height=400&width=600",
    services: [
      {
        id: "family-small-party",
        name: "Small Party Menu",
        image: "/placeholder.svg?height=400&width=600",
        downloadUrl: "#",
        whatsappMessage: "Hi, I want more info about the Family Events Small Party Menu.",
      },
      {
        id: "aura-aunna",
        name: "Aura Aunna",
        image: "/placeholder.svg?height=400&width=600",
        downloadUrl: "#",
        whatsappMessage: "Hi, I want more info about the Aura Aunna menu.",
      },
    ]
  },
  {
    id: "special-holiday-event",
    name: "Special Holiday Event",
    description: "Festive catering for special occasions and holidays",
    image: "/placeholder.svg?height=400&width=600",
    services: [
      {
        id: "holiday-small-party",
        name: "Small Party Menu",
        image: "/placeholder.svg?height=400&width=600",
        downloadUrl: "#",
        whatsappMessage: "Hi, I want more info about the Special Holiday Small Party Menu.",
      },
      {
        id: "without-onion-garlic",
        name: "Without Onion and Garlic",
        image: "/placeholder.svg?height=400&width=600",
        downloadUrl: "#",
        whatsappMessage: "Hi, I want more info about the Without Onion and Garlic menu.",
      },
      {
        id: "typical-odia",
        name: "Typical Odia Menu",
        image: "/placeholder.svg?height=400&width=600",
        downloadUrl: "#",
        whatsappMessage: "Hi, I want more info about the Typical Odia Menu.",
      },
    ]
  },
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null)
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null)
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false)
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleCategoryClick = (category: MenuCategory) => {
    setSelectedCategory(category)
    setIsCategoryDialogOpen(true)
  }

  const handleServiceClick = (service: ServiceType) => {
    setSelectedService(service)
    setCurrentImageIndex(0)
    setIsServiceDialogOpen(true)
  }

  const handleImageNavigation = (direction: 'next' | 'prev') => {
    if (!selectedService) return
    
    const images = [selectedService.image]
    if (selectedService.endingImage) {
      images.push(selectedService.endingImage)
    }
    
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  const handleImageClick = () => {
    if (!selectedService) return
    
    const currentImage = currentImageIndex === 0 ? selectedService.image : (selectedService.endingImage || selectedService.image)
    window.open(currentImage, '_blank')
  }

  const handleDownload = () => {
    if (!selectedService) return
    
    // Download first image
    const link1 = document.createElement('a')
    link1.href = selectedService.image
    link1.download = `${selectedService.name}-page1.jpg`
    document.body.appendChild(link1)
    link1.click()
    document.body.removeChild(link1)
    
    // Download second image if it exists
    if (selectedService.endingImage) {
      setTimeout(() => {
        const link2 = document.createElement('a')
        link2.href = selectedService.endingImage!
        link2.download = `${selectedService.name}-page2.jpg`
        document.body.appendChild(link2)
        link2.click()
        document.body.removeChild(link2)
      }, 100)
    }
  }

  const whatsappPhoneNumber = "1234567890" // Replace with the actual phone number

  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900 dark:text-gray-100">Our Event Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {menuCategories.map((category) => (
          <Card
            key={category.id}
            className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() => handleCategoryClick(category)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg sm:text-xl text-center">{category.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-3">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={`${category.name} preview`}
                width={250}
                height={150}
                className="rounded-md object-cover aspect-[5/3] w-full"
              />
              <p className="text-xs sm:text-sm text-center text-gray-600 dark:text-gray-400 px-2">
                {category.description}
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400">
                <span className="text-xs sm:text-sm">View Services</span>
                <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Category Dialog */}
      {selectedCategory && (
        <Dialog open={isCategoryDialogOpen} onOpenChange={setIsCategoryDialogOpen}>
          <DialogContent className="sm:max-w-[425px] md:max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedCategory.name} Services</DialogTitle>
              <DialogDescription>
                Choose from our {selectedCategory.name} catering services
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedCategory.services.map((service) => (
                  <Card
                    key={service.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
                    onClick={() => handleServiceClick(service)}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm sm:text-lg text-center">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center pt-0">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={`${service.name} preview`}
                        width={150}
                        height={100}
                        className="rounded-md object-cover aspect-[3/2] w-full max-w-[200px]"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Service Dialog */}
      {selectedService && (
        <Dialog open={isServiceDialogOpen} onOpenChange={setIsServiceDialogOpen}>
          <DialogContent className="sm:max-w-[425px] md:max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-lg sm:text-xl">{selectedService.name}</DialogTitle>
              <DialogDescription>
                Here's a preview of the {selectedService.name}. You can download it or contact us for more details.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="relative flex justify-center">
                <div 
                  className="cursor-pointer relative group"
                  onClick={handleImageClick}
                >
                  <Image
                    src={currentImageIndex === 0 ? selectedService.image : (selectedService.endingImage || selectedService.image)}
                    alt={`${selectedService.name} menu`}
                    width={400}
                    height={300}
                    className="rounded-md object-contain max-h-[50vh] w-full transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-md flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </div>
                
                {/* Navigation buttons for multiple images */}
                {selectedService.endingImage && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/80 hover:bg-white/70"
                      onClick={() => handleImageNavigation('prev')}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/80 hover:bg-white/70"
                      onClick={() => handleImageNavigation('next')}
                    >
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                    
                    {/* Image indicators */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      <div className={`w-2 h-2 rounded-full ${currentImageIndex === 0 ? 'bg-blue-600' : 'bg-gray-500'}`} />
                      <div className={`w-2 h-2 rounded-full ${currentImageIndex === 1 ? 'bg-blue-600' : 'bg-gray-500'}`} />
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-2 justify-center mt-4">
                <Button 
                  size="sm" 
                  className="text-xs sm:text-sm"
                  onClick={handleDownload}
                >
                  <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> 
                  Download {selectedService.endingImage ? 'Both Images' : 'Menu'}
                </Button>
                <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm">
                  <a
                    href={`https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(selectedService.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
