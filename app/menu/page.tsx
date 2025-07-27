"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Download, MessageCircle } from "lucide-react"

interface MenuItem {
  id: string
  name: string
  image: string
  downloadUrl: string
  whatsappMessage: string
}

const menuItems: MenuItem[] = [
  {
    id: "anniversary",
    name: "Anniversary",
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "#",
    whatsappMessage: "Hi, I want more info about the Anniversary menu.",
  },
  {
    id: "authentic-odia",
    name: "Authentic Odia",
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "#",
    whatsappMessage: "Hi, I want more info about the Authentic Odia menu.",
  },
  {
    id: "birthday-deluxe",
    name: "Birth Day Deluxe",
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "#",
    whatsappMessage: "Hi, I want more info about the Birth Day Deluxe menu.",
  },
  {
    id: "birthday-premium",
    name: "Birth Day Premium",
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "#",
    whatsappMessage: "Hi, I want more info about the Birth Day Premium menu.",
  },
  {
    id: "birthday-regular",
    name: "Birth Day Regular",
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "#",
    whatsappMessage: "Hi, I want more info about the Birth Day Regular menu.",
  },
  {
    id: "ring-ceremony",
    name: "Ring Ceremony",
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "#",
    whatsappMessage: "Hi, I want more info about the Ring Ceremony menu.",
  },
  {
    id: "thread-ceremony-fish",
    name: "Thread Ceremony (Fish)",
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "#",
    whatsappMessage: "Hi, I want more info about the Thread Ceremony (Fish) menu.",
  },
  {
    id: "thread-ceremony-prawn",
    name: "Thread Ceremony (Prawn)",
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "#",
    whatsappMessage: "Hi, I want more info about the Thread Ceremony (Prawn) menu.",
  },
  {
    id: "thread-ceremony-veg",
    name: "Thread Ceremony (Veg)",
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "#",
    whatsappMessage: "Hi, I want more info about the Thread Ceremony (Veg) menu.",
  },
  {
    id: "wedding-reception-deluxe",
    name: "Wedding Reception Deluxe",
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "#",
    whatsappMessage: "Hi, I want more info about the Wedding Reception Deluxe menu.",
  },
  {
    id: "wedding-reception-premium",
    name: "Wedding Reception Premium",
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "#",
    whatsappMessage: "Hi, I want more info about the Wedding Reception Premium menu.",
  },
  {
    id: "wedding-reception-regular",
    name: "Wedding Reception Regular",
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "#",
    whatsappMessage: "Hi, I want more info about the Wedding Reception Regular menu.",
  },
  {
    id: "without-onion-garlic",
    name: "Without Onion and Garlic",
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "#",
    whatsappMessage: "Hi, I want more info about the Without Onion and Garlic menu.",
  },
]

export default function MenuPage() {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleMenuClick = (menu: MenuItem) => {
    setSelectedMenu(menu)
    setIsDialogOpen(true)
  }

  const whatsappPhoneNumber = "1234567890" // Replace with the actual phone number

  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">Our Event Menus</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((menu) => (
          <Card
            key={menu.id}
            className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() => handleMenuClick(menu)}
          >
            <CardHeader>
              <CardTitle className="text-lg text-center">{menu.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <Image
                src={menu.image || "/placeholder.svg"}
                alt={`${menu.name} menu preview`}
                width={300}
                height={200}
                className="rounded-md object-cover aspect-[3/2]"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedMenu && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px] md:max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedMenu.name} Menu</DialogTitle>
              <DialogDescription>
                Here's a preview of the {selectedMenu.name} menu. You can download it or contact us for more details.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex justify-center">
                <Image
                  src={selectedMenu.image || "/placeholder.svg"}
                  alt={`${selectedMenu.name} menu`}
                  width={600}
                  height={400}
                  className="rounded-md object-contain max-h-[70vh] w-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2 justify-center mt-4">
                <Button asChild>
                  <a
                    href={selectedMenu.downloadUrl}
                    download={`${selectedMenu.name}-menu.jpg`}
                    className="flex items-center justify-center"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Menu
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={`https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(selectedMenu.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
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
